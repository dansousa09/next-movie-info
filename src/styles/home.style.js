import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const Header = styled.header`
  width: 100%;
  height: 15vh;
  padding: 0 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    color: ${(props) => props.theme.colors.textPrimary};
    font-size: 64px;

    > span {
      color: ${(props) => props.theme.colors.tertiary};
    }
  }
`;

export const SearchArea = styled.div`
  width: 100%;
  height: 15vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  > form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    > input {
      width: 480px;
      height: 32px;
      padding: 8px 4px;

      outline: none;
      font-size: 24px;

      border: none;
      border-radius: 4px 0 0 4px;

      opacity: 0.8;

      transition: all ease 0.3s;

      &:focus {
        opacity: 1;
      }
    }

    > button {
      width: 48px;
      height: 32px;
      border: none;
      border-radius: 0 4px 4px 0;

      cursor: pointer;

      background-color: ${(props) => props.theme.colors.tertiary};
      color: ${(props) => props.theme.colors.textPrimary};
      font-weight: bold ${(props) => props.theme.colors.tertiary};

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  > p {
    color: ${(props) => props.theme.colors.tertiary};
    font-weight: 600;

    > span {
      color: ${(props) => props.theme.colors.textPrimary};
    }
  }
`;

export const MainArea = styled.main`
  flex: 1;
  background-color: ${(props) => props.theme.colors.secundary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 3rem;

  > ul {
    width: 100%;
    height: 100%;
    padding-top: 1rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    overflow-x: scroll;

    ::-webkit-scrollbar {
      width: 200%;
      height: 15px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: 8px 0 0;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.colors.tertiary};
      border-radius: 8px;
    }

    > li {
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      transition: all ease 0.3s;
      transform: scale(0.9);

      color: ${(props) => props.theme.colors.textPrimary};

      cursor: pointer;

      &:hover {
        transform: scale(1);
      }
      > div {
        margin-top: -4rem;
        width: 200px;
        height: 300px;

        > img {
          width: 100%;
          height: 100%;
        }

        > h3 {
          text-align: center;
        }
      }
    }
  }
`;
