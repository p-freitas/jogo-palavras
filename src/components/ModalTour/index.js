import React, { useEffect, useCallback } from "react";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

const ModalTour = ({
  open,
  setOpen,
  handlePlayerNameSubmit,
  playerName,
  setOpenTour,
  setOpenModalPlayerName,
}) => {
  const { t } = useTranslation();
  const handleSubmitPlayer = useCallback(() => {
    const newUuid = uuid();
    handlePlayerNameSubmit({ playerName: playerName, id: newUuid });
  }, [handlePlayerNameSubmit, playerName]);

  if (open) {
    return (
      <S.Container data-testid="modal-testid">
        <S.ModalContent data-tut="reactour__iso">
          <S.TitleContainer>
            Notamos que é a sua primeira vez jogando o Wordopia, gostaria de
            fazer um rápido tutorial?
          </S.TitleContainer>
          <S.ModalBodyContent>
            <S.Button
              onClick={() => {
                setOpen(false);
                setOpenModalPlayerName(false);
                setOpenTour(true);
              }}
              data-testid="playerName-modal-confirm-button"
            >
              {t("Iniciar tutorial")}
            </S.Button>
          </S.ModalBodyContent>
        </S.ModalContent>
      </S.Container>
    );
  } else {
    return <></>;
  }
};

export default ModalTour;
