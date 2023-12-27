import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

const ModalBugsReport = ({ open, setOpen }) => {
  const { t } = useTranslation()

  useEffect(() => {
    const handleOutsideClick = event => {
      if (open && event.target.getAttribute('data-testid') === 'modal-testid') {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
    }
  }, [open, setOpen])

  if (open) {
    return (
      <S.Container data-testid='modal-testid'>
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TextWarning>{t('Encontrou algum bug?')}</S.TextWarning>
            <S.TitleContainer>
              {t(
                'Clique no botão abaixo e preencha o formulário para nos ajudar a continuar melhorando o jogo'
              )}
            </S.TitleContainer>
          </S.ModalHeaderContent>

          <S.Button
            onClick={() => {
              window.open('https://forms.gle/vFxhZWuV1Lv3rPs86', '_blank')
            }}
          >
            {t('Reportar bugs')}
          </S.Button>

          <S.ModalBodyContent>
            <S.ButtonClose
              onClick={() => {
                setOpen(false)
              }}
            >
              {t('Fechar')}
            </S.ButtonClose>
          </S.ModalBodyContent>
        </S.ModalContent>
      </S.Container>
    )
  } else {
    return <></>
  }
}

export default ModalBugsReport
