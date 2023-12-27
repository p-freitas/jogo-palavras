import React, { useEffect, useCallback } from "react";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

const ModalPlayerName = ({
  open,
  setOpen,
  handlePlayerNameSubmit,
  handlePlayerNameChange,
  playerName,
  openModalGameGoingOn,
  setOpenTour,
}) => {
  const { t } = useTranslation();
  const handleSubmitPlayer = useCallback(() => {
    const newUuid = uuid();
    handlePlayerNameSubmit({ playerName: playerName, id: newUuid });
  }, [handlePlayerNameSubmit, playerName]);
  useEffect(() => {
    const listener = (event) => {
      if (
        (event.code === "Enter" || event.code === "NumpadEnter") &&
        !openModalGameGoingOn
      ) {
        handleSubmitPlayer();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handleSubmitPlayer, openModalGameGoingOn]);
  if (open) {
    return (
      <S.Container data-testid="modal-testid">
        <S.ModalContent data-tut="reactour__iso">
          <S.ModalHeaderContent>
            <S.TitleContainer>{t("Digite o seu nome: ")}</S.TitleContainer>
            <S.TextWarning>{t("Máximo 12 caracteres")}</S.TextWarning>
          </S.ModalHeaderContent>

          <S.NameInput
            value={playerName}
            onChange={(e) => handlePlayerNameChange(e)}
            data-testid="playerName-modal-input"
          />

          <S.ModalBodyContent>
            <S.ButtonCancel
              onClick={() => {
                setOpen(false);
                setOpenTour(true);
              }}
            >
              {t("Fechar")}
            </S.ButtonCancel>
            <S.Button
              disabled={!playerName}
              onClick={() => handleSubmitPlayer()}
              data-testid="playerName-modal-confirm-button"
            >
              {t("Confirmar")}
            </S.Button>
          </S.ModalBodyContent>
        </S.ModalContent>
      </S.Container>
    );
  } else {
    return <></>;
  }
};

export default ModalPlayerName;
