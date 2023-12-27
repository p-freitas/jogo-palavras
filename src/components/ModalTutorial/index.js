import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

const ModalTutorial = ({ open, setOpen }) => {
  const { t } = useTranslation()
  const CloseIcon = <S.Icon className='far fa-times-circle'></S.Icon>
  const handleClick = () => {
    setOpen(false)
  }

  useEffect(() => {
    const handleOutsideClick = event => {
      if (open && event.target.id === 'tutorial-modal-container') {
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
      <S.Container
        id='tutorial-modal-container'
        data-testid='modal-testid'
        isOpen={open}
      >
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TitleContainer>{t('Tutorial')}</S.TitleContainer>
            <S.Button
              onClick={handleClick}
              aria-label='Close'
              aria-pressed='false'
              type='button'
              data-testid='tutorial-modal-close-button'
            >
              {CloseIcon}
            </S.Button>
          </S.ModalHeaderContent>

          <S.VideoContainer>
            <iframe
              width='560'
              height='400'
              src='https://www.youtube.com/embed/eyDdGNexFuk?vq=hd1080'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
              allowfullscreen
            ></iframe>
          </S.VideoContainer>

          <S.ModalBodyContent>
            <S.ParagraphContainer>
              <S.ParagraphTitle>{t('Sobre o jogo')}</S.ParagraphTitle>
              <S.ParagraphText>
                {t(
                  'Wordopia é um jogo que testa sua rapidez mental, sua criatividade e suas habilidades com palavras. É perfeito para reunir amigos e familiares em torno de uma mesa e desfrutar de momentos de diversão e competição saudável.'
                )}
              </S.ParagraphText>
              <br />
              <S.ParagraphText>
                {t(
                  'Wordopia é um jogo versátil que pode ser adaptado para diferentes níveis de dificuldade e idades. É perfeito para crianças, pois estimula o pensamento rápido e o conhecimento das letras do alfabeto. Além disso, também é um desafio para adultos, que terão que pensar rapidamente e ser criativos para encontrar palavras adequadas dentro do tema escolhido.'
                )}
              </S.ParagraphText>
            </S.ParagraphContainer>
            <S.ParagraphContainer>
              <S.ParagraphTitle>{t('Objetivo')}</S.ParagraphTitle>
              <S.ParagraphText>
                {t(
                  'O objetivo do jogo é formar palavras usando as letras disponíveis antes que o tempo acabe. O jogo é composto por uma série de botões, cada um contendo uma letra do alfabeto. No início do jogo, um tema é escolhido, como animais ou comidas. Em cada rodada, um jogador deve pensar em uma palavra relacionada ao tema e, em seguida, selecionar a letra correspondente no tabuleiro. O desafio é encontrar palavras únicas e evitar repetições, pois palavras já utilizadas pelos jogadores anteriores estão bloqueadas.'
                )}
              </S.ParagraphText>
              <br />
              <S.ParagraphText>
                {t(
                  'No entanto, aqui está o truque: o tempo é limitado! Um timer começa a contar assim que o tema é escolhido, e os jogadores têm apenas 10 segundos para pensar em uma palavra, encontrá-la no tabuleiro e pressionar a letra correspondente. A pressão de tempo adiciona uma dose extra de adrenalina e emoção ao jogo, tornando-o ainda mais cativante.'
                )}
              </S.ParagraphText>
            </S.ParagraphContainer>
            <S.ParagraphContainer>
              <S.ParagraphTitle>{t('Como jogar')}</S.ParagraphTitle>
              <h3>{t('Escolha de um tema:')}</h3>
              <S.ParagraphText>
                {t(
                  "Antes de começar o jogo, sorteie um tema para a rodada clicando no botão 'Gerar novo tema'"
                )}
              </S.ParagraphText>
              <br />
              <S.ParagraphText>
                {t(
                  'Certifique-se de que todos os jogadores estejam cientes do tema escolhido.'
                )}
              </S.ParagraphText>
              <br />
              <h3>{t('Começando o jogo:')}</h3>
              <S.ParagraphText>
                {t(
                  'Um jogador começa a rodada clicando em uma letra e falando uma palavra relacionada com o tema e que comece com a letra que clicou. A letra clicada ficará travada, e os outros jogadores não poderão usá-la novamente na mesma rodada.'
                )}
              </S.ParagraphText>
              <br />
              <S.ParagraphText>
                {t(
                  'Após falar a palavra, o jogador deve clicar no botão vermelho, iniciando um timer de 10 segundos e passando a vez para o próximo jogador.'
                )}
              </S.ParagraphText>
              <br />
              <S.ParagraphText>
                {t(
                  'O próximo jogador deve realizar as mesmas ações, clicar em uma letra, falar a palavra e clicar no botão para passar a vez.'
                )}
              </S.ParagraphText>
            </S.ParagraphContainer>
            <S.ParagraphContainer>
              <S.ParagraphTitle>{t('Eliminação')}</S.ParagraphTitle>
              <S.ParagraphText>
                {t(
                  'Se o timer chegar a 0, o jogador que não conseguiu clicar em uma letra e falar a palavra será eliminado da rodada. Quando um jogador é eliminado, o sistema começa a contar um timer de 5 segundos e passa a vez para o próximo jogador automaticamente.'
                )}
              </S.ParagraphText>
              <br />
              <S.ParagraphText>
                {t(
                  'O jogador também pode ser eliminado se ele falar uma resposta que não seja relacionado ao tema e/ou não comece com a letra que ele selecionou.'
                )}
              </S.ParagraphText>
            </S.ParagraphContainer>
            <S.ParagraphContainer>
              <S.ParagraphTitle>{t('Ganhando a rodada')}</S.ParagraphTitle>
              <S.ParagraphText>
                {t(
                  'Eventualmente, os jogadores vão sendo eliminados da rodada até sobrar apenas um jogador, este será o vencedor da rodada, ganhando 1 ponto. Quando um jogador vencer a rodada, o sistema irá sortear automaticamente um novo tema. Porém, se todos os jogadores concordarem, vocês poderão sortear um novo tema até que venha um que agrade a todos.'
                )}
              </S.ParagraphText>
            </S.ParagraphContainer>
            <S.ParagraphContainer>
              <S.ParagraphTitle>{t('Rodadas extras')}</S.ParagraphTitle>
              <S.ParagraphText>
                {t(
                  'Se todas as letras forem selecionadas pelos jogadores e o vencedor da rodada não estiver definido, o sistema irá resetar as letras selecionadas e começará as rodadas extras, onde os jogadores agora terão que falar duas palavras para a mesma letra.'
                )}
              </S.ParagraphText>
            </S.ParagraphContainer>
            <S.ParagraphContainer>
              <S.ParagraphTitle>
                {t("Botão 'Eliminar jogador'")}
              </S.ParagraphTitle>
              <S.ParagraphText>
                {t(
                  "Se um dos jogadores clicar no botão sem ter obedecido as regras, como não conseguir pensar e falar uma palavra relacionada ao tema, ele poderá ser eliminado pelos outros jogadores. Para isso, basta clicar no botão vermelho embaixo da lista de jogadores, selecionar o jogador que será eliminado, e depois clicar em 'Confirmar'."
                )}
              </S.ParagraphText>
              <br />
              <S.ParagraphText>
                {t(
                  'Lembre-se de consultar os outros jogadores se alguém realmente deve ser eliminado, já que qualquer pessoa pode eliminar um outro jogador usando esse botão.'
                )}
              </S.ParagraphText>
            </S.ParagraphContainer>
            <S.ParagraphContainer>
              <S.ParagraphTitle>{t('Ganhando o jogo')}</S.ParagraphTitle>
              <S.ParagraphText>
                {t(
                  'O jogador que completar 3 pontos (vencer 3 rodadas) será o vencedor da partida.'
                )}
              </S.ParagraphText>
            </S.ParagraphContainer>
            <S.ParagraphContainer>
              <S.ParagraphTitle>{t('Observação')}</S.ParagraphTitle>
              <S.ParagraphText>
                {t(
                  'As regras do Wordopia podem ser alteradas e incrementadas dependendo dos jogadores, sinta-se livre para inventar novas ideias, mas lembre-se de que é importante estabelecer regras claras e justas antes de começar o jogo. Além disso, encoraje a interação e a discussão amigável entre os jogadores durante o jogo para tornar a experiência mais divertida e estimulante.'
                )}
              </S.ParagraphText>
            </S.ParagraphContainer>
            <S.TitleContainer>{t('Divirta-se!')}</S.TitleContainer>
          </S.ModalBodyContent>
        </S.ModalContent>
      </S.Container>
    )
  } else {
    return <></>
  }
}

export default ModalTutorial
