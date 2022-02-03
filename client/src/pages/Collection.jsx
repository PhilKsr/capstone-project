import { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Modal from "../components/Modal";
import Costs from "../components/Costs";

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

  const costHandler = (index) => {
    setCostsList(!costsList);
    setIndex(index);
  };

  return (
    <CardContainer>
      {roadtrips.map((oneRoadtrip, index) => (
        <RoadtripCard
          onClick={showButtons}
          key={oneRoadtrip._id}
          data-testid='roadtrip'>
          <li>
            <h2>{oneRoadtrip.name}</h2>
            <button
              onClick={() => costHandler(index)}
              data-testid='costsButton'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 0 24 24'
                width='24px'
                fill='#ffffff'>
                <path d='M0 0h24v24H0z' fill='none' />
                <path d='M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z' />
              </svg>
            </button>
            <button>
              <NavLink to={`/roadtrip/${oneRoadtrip._id}`}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24px'
                  viewBox='0 0 24 24'
                  width='24px'
                  fill='#ffffff'>
                  <path d='M0 0h24v24H0z' fill='none' />
                  <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' />
                </svg>
              </NavLink>
            </button>
            <button
              onClick={() => backupHandler(index)}
              data-testid='removeRoadtrip'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 0 24 24'
                width='24px'
                fill='#ffffff'>
                <path d='M0 0h24v24H0z' fill='none' />
                <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z' />
              </svg>
            </button>
            <ul className='locations__list'>
              {oneRoadtrip.locations.map((oneLocation) => (
                <li key={oneLocation._id}>
                  {oneLocation.properties.name}{" "}
                  <small>({oneLocation.type})</small>
                </li>
              ))}
            </ul>
          </li>
        </RoadtripCard>
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
  list-style: none;
  width: 100%;
  font-size: 1rem;
`;

const RoadtripCard = styled.div`
  width: 90%;
  margin: 1rem 0 1rem 0;
  padding: 1rem;
  background-color: var(--secondary);
  color: var(--tertiary);
  box-shadow: 10px 20px 15px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  padding: 1rem;
  position: relative;

  :last-of-type {
    margin-bottom: 5rem;
  }

  button {
    box-sizing: content-box;
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 0.5rem;
    margin-top: 3.5rem;
    padding: 0.45rem 0.45rem 0.3rem 0.45rem;
    border: none;
    border-radius: 50%;
    background-color: var(--primary);
    color: white;
    cursor: pointer;
    opacity: 0%;
    transition: opacity 0.6s;

    :first-of-type {
      margin-right: 0.5rem;
      margin-top: 6.5rem;
    }

    :last-of-type {
      margin: 0.5rem;
    }
  }

  .visible {
    opacity: 100%;
  }
`;
