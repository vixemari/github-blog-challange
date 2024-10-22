import styled from "styled-components";


export const CardContainer = styled.div`
  display: flex;
  background-color: #0b1b2b;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  max-width: 54rem;
  margin: 0 auto;
  margin-top: -5rem;
  padding: 20px;
`;

export const CardImage = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  object-fit: cover;
  border-radius: 1rem;
`;

export const Content = styled.div`
  margin-left: 15px;
  flex-grow: 1;

  :first-child {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #3294f8;
      text-decoration: none;
    }
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #fff;
    text-decoration: none;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;