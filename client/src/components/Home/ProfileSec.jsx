import styled from "styled-components";

export default function ProfileSec() {
  return (
    <ProfileSection>
      <div>
        <h2>Welcome back Karl!</h2>
        <h4>Ready for the next adventure?</h4>
      </div>
      <img
        src='https://images.unsplash.com/photo-1516939884455-1445c8652f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        alt='Bild'
      />
    </ProfileSection>
  );
}

const ProfileSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--primary);

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    object-fit: cover;
  }

  h4 {
    padding-top: 1rem;
    font-size: 1rem;
  }
`;
