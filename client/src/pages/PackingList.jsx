import { useEffect, useState } from "react";
import AddPackingListItem from "../components/AddPackingListItem";
import ProfileSec from "../components/Home/ProfileSec";
import PackList from "../components/PackList";
import styled from "styled-components";

export default function PackingList() {
  const [packingItems, setPackingItems] = useState([]);

  useEffect(() => {
    const newPackingItems =
      JSON.parse(localStorage.getItem("_PACKINGITEMS")) ?? [];
    setPackingItems(newPackingItems);
  }, []);

  useEffect(() =>
    localStorage.setItem("_PACKINGITEMS", JSON.stringify(packingItems))
  );

  const getNewItem = (newItem) => {
    setPackingItems([...packingItems, newItem]);
  };

  const deleteItem = (itemTitle) => {
    const newPackingItems = packingItems.filter(
      (item) => item.title !== itemTitle
    );
    setPackingItems(newPackingItems);
  };

  const editItem = (event, allPackingItems) => {
    const editedIndex = allPackingItems.findIndex(
      (item) => item.title === event.target.name
    );
    const updatedPackingItems = allPackingItems.map((item, index) =>
      index === editedIndex ? { ...item, title: event.target.value } : item
    );
    setPackingItems(updatedPackingItems);
  };

  const checkItem = (event, allPackingItems) => {
    const editedIndex = allPackingItems.findIndex(
      (item) => item.title === event.target.name
    );
    const updatedPackingItems = allPackingItems.map((item, index) =>
      index === editedIndex ? { ...item, checked: event.target.checked } : item
    );
    setPackingItems(updatedPackingItems);
  };

  return (
    <ContentWrapper>
      <ProfileSec />
      <section>
        <h3>Have you packed already?</h3>
        <AddPackingListItem onGetNewItem={getNewItem} />
        <PackList
          packingItems={packingItems}
          onDeleteItem={deleteItem}
          onEditItem={editItem}
          onCheckItem={checkItem}
        />
      </section>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1.3rem;
    font-weight: bold;
    padding-top: 1rem;
  }

  h3 {
    margin-bottom: 1rem;
    color: white;
  }

  section + section {
    text-align: center;
    width: 90%;
    background: var(--second);
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 5rem;
    border-radius: 15px;
  }
`;
