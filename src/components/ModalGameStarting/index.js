import React, { useState, useEffect, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

const ModalGameStarting = ({
  open,
  setOpen,
  handleStartTimer,
  setStartCounter,
  startCounter,
}) => {
  const { t } = useTranslation();
  const [count, setCount] = useState(5);
  const timerRef = useRef(null);

  useEffect(() => {
    if (startCounter) {
      timerRef.current = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [startCounter]);

  const handleTimerEnd = useCallback(() => {
    setOpen(false);
    setCount(5);
    clearInterval(timerRef.current);
    setStartCounter(false);
    handleStartTimer();
  }, [handleStartTimer, setOpen, setStartCounter]);

  console.log("count:::");

  useEffect(() => {
    if (count === 0) {
      handleTimerEnd();
    }
  }, [count, handleTimerEnd]);

  if (open) {
    return (
      <S.Container data-testid="modal-testid">
        <S.ModalContent>
          <S.ModalBodyContent>
            <S.TitleContainer>{t("O jogo irá começar em...")}</S.TitleContainer>
            <S.CounterContainer>{count}</S.CounterContainer>
          </S.ModalBodyContent>
        </S.ModalContent>
      </S.Container>
    );
  } else {
    return <></>;
  }
};

export default ModalGameStarting;
