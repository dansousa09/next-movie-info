import styled from "styled-components";
import { GrClose } from "react-icons/gr";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;

  visibility: ${(props) => (props.dialogIsOpen ? "visible" : "hidden")};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  opacity: 0.8;
  cursor: pointer;
`;

export const DialogArea = styled.main`
  background-color: ${(props) => props.theme.colors.secundary};
  width: 60%;
  height: 80%;
  z-index: 100;

  position: fixed;

  border-radius: 12px;

  -webkit-box-shadow: 0px 5px 11px 1px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 5px 11px 1px rgba(0, 0, 0, 0.4);
`;

export const DialogHeader = styled.header`
  width: 100%;
  height: 3rem;
  padding: 0 1rem;

  cursor: pointer;
  background-color: ${(props) => props.theme.colors.primary};

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;

  > h4 {
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;

export const GrCloseIcon = styled(GrClose)`
  width: 1rem;
  height: 1rem;
`;

export const MovieInfoArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  padding: 0 1rem;

  > hr {
    width: 1px;
    height: 70%;
    opacity: 0.2;
  }
`;

export const PosterSide = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    width: 100%;
  }
`;

export const InfoSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 0 1rem;

  > h4 {
    color: ${(props) => props.theme.colors.textPrimary};
    margin-bottom: 1rem;
    font-weight: 300;

    > span {
      font-weight: 600;
    }
  }
  > h5 {
    color: ${(props) => props.theme.colors.textPrimary};
    margin-bottom: 1rem;
    font-weight: 300;

    > span {
      font-weight: 600;
    }
  }
`;
