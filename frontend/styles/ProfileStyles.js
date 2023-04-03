import styled from "styled-components";

export const Order = styled.div`
  background: white;
  padding: 3rem;
  margin: 2rem 0;
  display: flex;
  border-radius: 15px;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;

  @media only screen and (max-width: 460px) {
    padding: 2rem;
    margin: 2rem 1rem;
    flex-direction: column-reverse;
    text-align: center;
  }

  h1 {
    padding: 0 0 0.5rem;
    font-size: 1rem;
    color: var(--primary);
  }

  h2 {
    font-size: 1rem;
    color: var(--secondary);
  }
`;

export const Site = styled.div`
  background-color: #F5F5F5;
  margin: 0 5%;
`

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;

  img {
    border-radius: 50%;
    margin: 2rem;
  }

  button {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    height: 54px;
    width: 134px;
    left: 182px;
    top: 709px;
    margin-top: 7.5px;
    color: white;
    background: #171616;
    cursor: pointer;
    border-radius: 15px;
    display: block;

  }

  @media only screen and (max-width: 460px) {
    display: flex;
    flex-direction: column;
    button {
      width: 100%;
    }
  }
`


export const StyledButton = styled.div`
  @media only screen and (max-width: 768px) {
    margin: 1rem 1rem;
  }
`