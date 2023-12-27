import React from "react";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

const ModalScoreBoard = ({ open, roomLeader, scoreBoardData, startGame }) => {
  const { t } = useTranslation();
  console.log("scoreBoardData::::", scoreBoardData);
  const columns = [
    { name: "Nome", value: "name" },
    { name: "Pontos", value: "score" },
  ];

  if (open) {
    return (
      <S.Container data-testid="modal-testid">
        <S.ModalContent>
          <S.Table>
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <S.TableHeader key={index}>{column.name}</S.TableHeader>
                ))}
              </tr>
            </thead>
            <tbody>
              {scoreBoardData.map((row, rowIndex) => (
                <S.TableRow key={rowIndex}>
                  {columns.map((column, columnIndex) => (
                    <S.TableCell key={columnIndex}>
                      {row[column.value]}
                    </S.TableCell>
                  ))}
                </S.TableRow>
              ))}
            </tbody>
          </S.Table>
          {roomLeader && (
            <S.ButtonContainer>
              <S.NewGameButton onClick={startGame}>Nova rodada</S.NewGameButton>
            </S.ButtonContainer>
          )}
        </S.ModalContent>
      </S.Container>
    );
  } else {
    return <></>;
  }
};

export default ModalScoreBoard;
