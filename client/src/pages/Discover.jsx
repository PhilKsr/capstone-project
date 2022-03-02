import styled from "styled-components";

export default function Discover() {
  const linkList = [
    {
      website: "https://www.komoot.de/",
      name: "Komoot",
      picture_url:
        "https://images.unsplash.com/photo-1569525484995-460eb7b83935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    },
    {
      website: "https://www.pinterest.de/ideas/deutschland/946240506229/",
      name: "Pinterest",
      picture_url:
        "https://images.unsplash.com/photo-1529440547539-b8500cf6c0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      website: "https://www.travelbook.de/deutschland",
      name: "Travelbook",
      picture_url:
        "https://images.unsplash.com/photo-1449452198679-05c7fd30f416?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      website: "https://www.off-the-path.com/reisefuehrer/deutschland/",
      name: "Off The Path",
      picture_url:
        "https://images.unsplash.com/photo-1514539079130-25950c84af65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    },
    {
      website: "https://www.22places.de/reiseziele-deutschland/",
      name: "22places",
      picture_url:
        "https://images.unsplash.com/photo-1571860120928-bfc8e6a0a263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    },
    {
      website:
        "https://www.adac.de/reise-freizeit/reiseplanung/inspirationen/deutschland/",
      name: "adac",
      picture_url:
        "https://images.unsplash.com/photo-1559219431-7e1520acf860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      website: "https://phototravellers.de/deutschland-roadtrip/",
      name: "phototravellers",
      picture_url:
        "https://images.unsplash.com/photo-1556952428-b52ca0615754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80",
    },
    {
      website: "https://www.geo.de/16130-thma-reiseziel-deutschland",
      name: "GEO",
      picture_url:
        "https://images.unsplash.com/photo-1505578183806-1fb94ddf0e00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      website: "https://lichterderwelt.de/?s=deutschland",
      name: "lichterderwelt",
      picture_url:
        "https://images.unsplash.com/photo-1637050293674-9b449d578248?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <ContentContainer>
      {linkList.map((link, index) => (
        <section key={index}>
          <div style={{ backgroundImage: `url(${link.picture_url})` }}></div>
          <h3>
            <a href={link.website} target='_blank'>
              {link.name.toUpperCase()}
            </a>
          </h3>
        </section>
      ))}
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    :last-child {
      margin-bottom: 4rem;
    }

    div {
      width: 90%;
      height: 10rem;
      padding: 1rem;
      background-repeat: no-repeat;
      background-size: cover;
      margin: 1rem;
      border-radius: 15px;
      opacity: 85%;

      :hover {
        opacity: 100%;
      }
    }
    h3 {
      position: absolute;
      margin-top: 5rem;
      background: var(--primary);
      border-radius: 15px;
      padding: 0.3rem;
      opacity: 75%;
      font-size: 1.1rem;

      a {
        text-decoration: none;
        color: var(--tertiary);
      }
    }
  }
`;
