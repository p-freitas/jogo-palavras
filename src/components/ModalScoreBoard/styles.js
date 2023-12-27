import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  font-family: "MyFont", sans-serif;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;

  @media only screen and (max-device-width: 767px) {
    margin: ;
  }

  width: ${({ fullScreen, width }) => (fullScreen ? "100%" : width)};
  height: ${({ fullScreen, height }) => (fullScreen ? "100vh" : height)};
  background-color: white;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.07),
    0px 0px 10px rgba(0, 0, 0, 0.05);
  border-radius: ${({ fullScreen }) => (fullScreen ? "0px" : "10px")};
  overflow-y: auto;
  align-items: center;
  max-width: 600px;
  padding: 20px;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    text-align: center;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin-top: 20px;
  width: 300px;
  text-align-last: center;
`;

export const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const ButtonContainer = styled.div`
`;

export const NewGameButton = styled.button`
  width: auto;
  height: 50px;
  border-radius: 10px;
  background-color: rgb(0, 142, 255);
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid black;
  font-family: "MyFont", sans-serif;
  padding: 0 10px;

  &:hover {
    opacity: 0.8;
  }
`;
