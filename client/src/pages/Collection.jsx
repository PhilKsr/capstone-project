import { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Modal from "../components/Modal";

export default function Collection() {
  const [roadtrips, setRoadtrips] = useState([]);
  const [backupQuestion, setBackupQuestion] = useState(false);
  const [index, setIndex] = useState();

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

  return (
    <>
      <CardContainer>
        {roadtrips.map((oneRoadtrip, index) => (
          <RoadtripCard onClick={showButtons}>
            <div>
              <li key={oneRoadtrip._id}>
                <h2>{oneRoadtrip.name}</h2>
                <button>Costs</button>
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
                <button onClick={() => backupHandler(index)}>
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
                <ul>
                  {oneRoadtrip.locations.map((oneLocation) => (
                    <li key={oneLocation._id}>{oneLocation.properties.name}</li>
                  ))}
                </ul>
              </li>
            </div>
          </RoadtripCard>
        ))}
        {backupQuestion && (
          <Modal
            onBackupHandler={backupHandler}
            handleRoadtrip={deleteFromDatabase}
            backupQuestion={backupQuestion}>
            delete
          </Modal>
        )}
      </CardContainer>
    </>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  margin-bottom: 5rem;
`;

const RoadtripCard = styled.div`
  width: 90%;
  margin: 1rem 0 1rem 0;
  padding: 1rem;
  background-color: grey;
  color: white;
  box-shadow: 10px 20px 15px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  padding: 1rem;
  position: relative;

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
    background-color: var(--black);
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
