import { useEffect, useState } from "react";
import AddPackingListItem from "../components/AddPackingListItem";
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
      <section>
        <h2>Have you packed already?</h2>
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
    text-align: center;
    font-size: 1.6rem;
    font-weight: bold;
    padding: 2rem 0 1rem 0;
  }

  section + section {
    text-align: center;
    background: var(--secondary);
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 5rem;
    border-radius: 15px;
  }

  @media (min-width: 768px) {
    h2 {
      margin: 2rem;
      font-size: 3rem;
    }
  }
`;
