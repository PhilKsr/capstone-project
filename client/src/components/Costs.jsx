import { useEffect, useState } from "react";
import styled from "styled-components";
import CostsAddForm from "./CostsAddForm";
import CostsBalance from "./CostsBalance";
import CostsList from "./CostsList";
import { getTotalCostsPerHead } from "../lib/costsHelpers";

export default function Costs({
  costHandler,
  roadtrips,
  roadtripIndex,
  fetchRoadtrips,
}) {
  const [allCosts, setAllCosts] = useState([]);

  useEffect(() => {
    setAllCosts(roadtrips[roadtripIndex]?.costs);
  }, []);

  const [displaySummaryList, setDisplaySummaryList] = useState(false);
  const [displayAddForm, setDisplayAddForm] = useState(false);

  const handleDisplay = () => setDisplaySummaryList(!displaySummaryList);
  const showForm = () => setDisplayAddForm(!displayAddForm);

  const addCost = (event, newCost) => {
    event.preventDefault();
    const updatedAllCosts = [...allCosts];
    updatedAllCosts.push(newCost);
    setAllCosts(updatedAllCosts);
    saveCosts(updatedAllCosts);
    showForm();
  };

  const removeCost = (costIndex) => {
    const newCosts = [...allCosts];
    const updatedCosts = newCosts.filter(
      (_object, index) => index !== costIndex
    );
    setAllCosts(updatedCosts);
    saveCosts(updatedCosts);
  };

  const saveCosts = async (newCosts) => {
    const id = roadtrips[roadtripIndex]._id;
    const stagedRoadtrip = roadtrips[roadtripIndex];
    const updatedRoadtrip = { ...stagedRoadtrip, costs: newCosts };
    const result = await fetch(`/api/roadtrips?roadtripId=${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRoadtrip),
    });
    return await result.json();
  };

  return (
    <>
      <Background
        data-testid='background'
        onClick={() => {
          costHandler(), fetchRoadtrips();
        }}></Background>
      <CostContainer data-testid='costsContainer'>
        <h2>{roadtrips[roadtripIndex].name}</h2>

        {allCosts && (
          <h3>{Object.keys(getTotalCostsPerHead(allCosts)).join(" | ")}</h3>
        )}

        <section>
          <h3>Summary</h3>
          <SwitchContainer onChange={handleDisplay} data-testid='switch'>
            <input type='checkbox' />
            <span className='slider round'></span>
          </SwitchContainer>
          <h3>List</h3>
        </section>

        <h3 data-testid='total'>
          {allCosts.reduce((a, b) => Number(a) + Number(b.cost), 0)} €
        </h3>
        {!displaySummaryList && <CostsBalance allCosts={allCosts} />}
        {displaySummaryList && (
          <CostsList allCosts={allCosts} onRemoveCost={removeCost} />
        )}

        {displayAddForm && (
          <CostsAddForm
            allCosts={allCosts}
            onAddCost={addCost}
            showForm={showForm}
          />
        )}
        {!displayAddForm && (
          <button onClick={showForm} data-testid='addCostButton'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 0 24 24'
              width='24px'
              fill='#ffffff'>
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' />
            </svg>
          </button>
        )}
      </CostContainer>
    </>
  );
}

const Background = styled.div`
  position: fixed;
  z-index: 125;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: var(--primary);
  opacity: 75%;
`;

const CostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 90%;
  z-index: 150;
  top: 0;
  margin-top: 5rem;
  margin-bottom: 5rem;
  background: var(--secondary);
  color: var(--tertiary);
  border-radius: 15px;

  h2 {
    margin: 1rem;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    label {
      margin: 0.5rem;
    }
  }

  h3 {
    margin-bottom: 1rem;
  }

  section {
    display: flex;
  }

  button {
    padding: 0.75rem 0.75rem 0.6rem 0.75rem;
    border: none;
    border-radius: 50%;
    background-color: var(--primary);
    cursor: pointer;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`;

//only for switch!
const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    :checked {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--primary);
    -webkit-transition: 0.4s;
    transition: 0.4s;

    ::before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: var(--tertiary);
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
  }

  input:checked + .slider {
    background-color: lightgrey;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
