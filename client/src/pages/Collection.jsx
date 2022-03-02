import { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import Costs from "../components/Costs/Costs";
import RoadtripCard from "../components/RoadtripCard";

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

  return (
    <CardContainer>
      {roadtrips.map((oneRoadtrip, index) => (
        <RoadtripCard
          oneRoadtrip={oneRoadtrip}
          index={index}
          costHandler={costHandler}
          backupHandler={backupHandler}
          id={oneRoadtrip._id}
        />
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
