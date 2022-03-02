import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Modal from "../components/Modal";
import Costs from "../components/Costs/Costs";
import Cost from "../assets/costIcon.svg";
import Edit from "../assets/editIcon.svg";
import Remove from "../assets/removeIcon.svg";
import Button from "../components/Button";

export default function Collection() {
  const [roadtrips, setRoadtrips] = useState([]);
  const [backupQuestion, setBackupQuestion] = useState(false);
  const [index, setIndex] = useState();
  const [costsList, setCostsList] = useState(false);

  const backupHandler = (index) => {
    setBackupQuestion(!backupQuestion);
    setIndex(index);
  };

  useEffect(() => fetchRoadtrips(), []);

  const fetchRoadtrips = async () => {
    const res = await fetch(`/api/roadtrips`);
    const data = await res.json();
    setRoadtrips(data);
  };

  const deleteFromDatabase = async () => {
    const result = await fetch(
      `/api/roadtrips?roadtripId=${roadtrips[index]._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(roadtrips[index]),
      }
    );
    fetchRoadtrips();
    return await result.json();
  };

  const costHandler = (index) => {
    setCostsList(!costsList);
    setIndex(index);
  };

  const showButtons = () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      if (button.classList.contains("visible")) {
        button.classList.remove("visible");
      } else {
        button.classList.add("visible");
      }
    });
  };

  return (
    <CardContainer>
      {roadtrips.map((oneRoadtrip, index) => (
        <Roadtripcard
          onClick={showButtons}
          key={oneRoadtrip._id}
          data-testid='roadtrip'>
          <div>
            <h2>{oneRoadtrip.name}</h2>
            <ul className='locations__list'>
              {oneRoadtrip?.locations?.map((oneLocation) => (
                <li key={oneLocation._id}>
                  {oneLocation.properties.name}{" "}
                  <small>({oneLocation.type})</small>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Button
              onClickFunction={() => backupHandler(index)}
              size='0.45rem 0.45rem 0.35rem 0.45rem'>
              <img src={Remove} alt='remove' data-testid='removeRoadtrip' />
            </Button>
            <NavLink to={`/map/${oneRoadtrip._id}`}>
              <Button size='0.45rem 0.45rem 0.35rem 0.45rem'>
                <img src={Edit} alt='edit' />
              </Button>
            </NavLink>
            <Button
              onClickFunction={() => costHandler(index)}
              size='0.45rem 0.45rem 0.35rem 0.45rem'>
              <img src={Cost} alt='costs' data-testid='costsButton' />
            </Button>
          </div>
        </Roadtripcard>
      ))}

      {backupQuestion && (
        <Modal
          onBackupHandler={backupHandler}
          handleRoadtrip={deleteFromDatabase}>
          delete
        </Modal>
      )}

      {costsList && (
        <Costs
          costHandler={costHandler}
          roadtripIndex={index}
          roadtrips={roadtrips}
          fetchRoadtrips={fetchRoadtrips}
        />
      )}
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 1rem;
  margin-bottom: 5rem;
`;

const Roadtripcard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 95%;
  width: 90%;
  margin: 1rem 0 1rem 0;
  padding: 1rem;
  background-color: var(--secondary);
  color: var(--tertiary);
  border-radius: 15px;
  padding: 1rem;
  min-height: min-content;

  li {
    margin: 0.4rem;
  }

  h2 {
    padding: 1rem;
  }

  div + div {
    flex-basis: 5%;
  }

  button {
    transition: opacity 0.6s;
    opacity: 0%;
    margin: 0.3rem 0 0.3rem 0;
  }

  .visible {
    opacity: 100%;
  }
  @media (min-width: 768px) {
    width: 100%;
    gap: 1rem;
    margin-top: 2rem;
    border-radius: 0%;
    h2 {
      padding: 0;
      font-size: 2rem;
    }
    li {
      margin: 0;
    }

    div + div {
      flex-basis: 20%;
      flex-direction: row;

      button {
        margin-right: 1rem;
      }
    }
    :nth-child(odd) {
      width: 60%;
      display: flex;
      align-self: start;
      justify-content: center;
    }
    :nth-child(even) {
      width: 60%;
      display: flex;
      align-self: end;
      justify-content: center;
    }
  }
`;
