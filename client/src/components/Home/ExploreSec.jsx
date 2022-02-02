import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function ExploreSec() {
  const germanPicturesOne = [
    "https://images.unsplash.com/photo-1569663818462-4e2c95e320e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1584481120104-b11d5e602e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
    "https://images.unsplash.com/photo-1635754822592-7bec2be9ab7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    "https://images.unsplash.com/photo-1633262266109-1ca412cd3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1633262266109-1ca412cd3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  ];

  const germanPicturesTwo = [
    "https://images.unsplash.com/photo-1621747609281-38853764c986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    "https://images.unsplash.com/photo-1599394375951-8674ecff3f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    "https://images.unsplash.com/photo-1591450572782-b5bfc982bcb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80",
    "https://images.unsplash.com/photo-1604849055820-2b719928c19d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1604849055820-2b719928c19d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  ];

  const germanPicturesThree = [
    "https://images.unsplash.com/photo-1485038101637-2d4833df1b35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1828&q=80",
    "https://images.unsplash.com/photo-1624871084818-b9f5d63aa8ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    "https://images.unsplash.com/photo-1587821397822-536a429ca1b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    "https://images.unsplash.com/photo-1633854398595-d95e682fc401?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    "https://images.unsplash.com/photo-1633854398595-d95e682fc401?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  ];

  const germanPicturesFour = [
    "https://images.unsplash.com/photo-1616615971452-429ba52c434f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1640265225639-6cc10eddae74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1449452198679-05c7fd30f416?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1514539079130-25950c84af65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    "https://images.unsplash.com/photo-1514539079130-25950c84af65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  ];

  return (
    <ExploreSection>
      <h2>Get inspired</h2>

      <NavLink to='/discover'>
        <div className='grid'>
          <img
            id='first'
            src={
              germanPicturesOne[
                Math.floor(Math.random() * germanPicturesOne.length)
              ]
            }
            alt='Bild 1'
          />
          <img
            id='second'
            className='second'
            src={
              germanPicturesTwo[
                Math.floor(Math.random() * germanPicturesOne.length)
              ]
            }
            alt='Bild 2'
          />
          <img
            id='third'
            className='third'
            src={
              germanPicturesThree[
                Math.floor(Math.random() * germanPicturesOne.length)
              ]
            }
            alt='Bild 3'
          />
          <img
            id='fourth'
            src={
              germanPicturesFour[
                Math.floor(Math.random() * germanPicturesOne.length)
              ]
            }
            alt='Bild 4'
          />
        </div>
      </NavLink>
    </ExploreSection>
  );
}

const ExploreSection = styled.section`
  text-align: center;
  margin-bottom: 6rem;

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;

    img {
      width: 11rem;
      height: 11rem;
      object-fit: cover;
      justify-self: center;
      margin-top: 1rem;
      box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.3);
      animation: morph 47s ease-in-out infinite;
      border-radius: 50% 40% 30% 30% / 20% 50% 70% 40%;
      transition: all 50s ease-in-out;
      @keyframes morph {
        0% {
          border-radius: 30% 60% 20% 70% / 70% 40% 20% 70%;
        }
        10% {
          border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%;
        }

        20% {
          border-radius: 67% 43% 47% 53% / 37% 50% 60% 63%;
        }

        30% {
          border-radius: 49% 61% 47% 43% / 47% 40% 60% 63%;
        }

        40% {
          border-radius: 39% 61% 72% 28% / 64% 40% 60% 46%;
        }

        60% {
          border-radius: 50% 50% 53% 47% / 72% 59% 41% 38%;
        }

        70% {
          border-radius: 50% 50% 53% 47% / 46% 32% 68% 64%;
        }

        80% {
          border-radius: 40% 60% 53% 47% / 26% 59% 41% 74%;
        }

        90% {
          border-radius: 26% 40% 33% 65% / 40% 30% 50% 60%;
        }
        100% {
          border-radius: 30% 60% 20% 70% / 70% 40% 20% 70%;
        }
      }
    }
    .two {
      animation: morph 55s ease-in-out infinite;
      border-radius: 30% 60% 20% 70% / 70% 40% 20% 70%;
      transition: 50s ease-in-out;
      @keyframes morph {
        0% {
          border-radius: 30% 60% 20% 70% / 70% 40% 20% 70%;
        }
        10% {
          border-radius: 50% 50% 70% 30% / 75% 20% 70% 35%;
        }

        20% {
          border-radius: 64% 73% 67% 43% / 77% 60% 50% 43%;
        }

        30% {
          border-radius: 79% 41% 67% 63% / 77% 60% 40% 43%;
        }

        40% {
          border-radius: 79% 41% 42% 88% / 34% 60% 40% 76%;
        }

        60% {
          border-radius: 60% 60% 43% 67% / 32% 49% 71% 88%;
        }

        70% {
          border-radius: 60% 60% 43% 67% / 66% 72% 48% 54%;
        }

        80% {
          border-radius: 40% 60% 43% 67% / 66% 39% 71% 34%;
        }

        90% {
          border-radius: 26% 40% 33% 65% / 40% 30% 50% 60%;
        }
        100% {
          border-radius: 30% 60% 20% 70% / 70% 40% 20% 70%;
        }
      }
    }

    .three {
      animation: morph 65s ease-in-out infinite;
      border-radius: 30% 60% 20% 70% / 70% 40% 20% 70%;
      transition: 50s ease-in-out;
      @keyframes morph {
        0% {
          border-radius: 30% 60% 20% 70% / 70% 40% 20% 70%;
        }
        10% {
          border-radius: 64% 73% 67% 43% / 77% 60% 50% 43%;
        }

        20% {
          border-radius: 50% 50% 70% 30% / 75% 20% 70% 35%;
        }

        30% {
          border-radius: 60% 60% 43% 67% / 32% 49% 71% 88%;
        }

        40% {
          border-radius: 26% 40% 33% 65% / 40% 30% 50% 60%;
        }

        60% {
          border-radius: 79% 41% 67% 63% / 77% 60% 40% 43%;
        }

        70% {
          border-radius: 40% 60% 43% 67% / 66% 39% 71% 34%;
        }

        80% {
          border-radius: 60% 60% 43% 67% / 66% 72% 48% 54%;
        }

        90% {
          border-radius: 79% 41% 42% 88% / 34% 60% 40% 76%;
        }
        100% {
          border-radius: 30% 60% 20% 70% / 70% 40% 20% 70%;
        }
      }
    }
  }
`;
