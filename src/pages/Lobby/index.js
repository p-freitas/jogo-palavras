import React, { useEffect, useState, useRef } from 'react'
import io from 'socket.io-client'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ModalTutorial from '../../components/ModalTutorial'
import ModalRoomConfigs from '../../components/ModalRoomConfigs'
import ModalBugsReport from '../../components/ModalBugsReport'
import HelpButton from '../../components/HelpButton'
import InstagramIcon from '../../assets/icons/InstagramIcon'
import TwitterIcon from '../../assets/icons/TwitterIcon'
import TiktokIcon from '../../assets/icons/TiktokIcon'
// import DiscordIcon from '../../assets/icons/DiscordIcon'
import { ReactComponent as BrazilIcon } from '../../assets/icons/br.svg'
import { ReactComponent as USAIcon } from '../../assets/icons/us.svg'
import { ReactComponent as SpainIcon } from '../../assets/icons/es.svg'
import * as S from './styles'

const Lobby = ({ setLang }) => {
  const navigate = useNavigate()
  const socketRef = useRef(null)
  const { t } = useTranslation()

  const [room, setRoom] = useState('')
  const [openModalTutorial, setOpenModalTutorial] = useState(false)
  const [openModalRoomConfigs, setOpenModalRoomConfigs] = useState(false)
  const [openModalBugsReport, setOpenModalBugsReport] = useState(false)
  const [loading, setLoading] = useState(false)
  const [timerSelectValue, setTimerSelectValue] = useState()
  const [roundsSelectValue, setRoundsSelectValue] = useState()
  const [defaultThemesButtonClick, setDefaultThemesButtonClick] = useState(true)
  const [customThemesButtonClick, setCustomThemesButtonClick] = useState(false)
  const [themesList, setThemesList] = useState([
    `${t('Países')}`,
    `${t('Frutas')}`,
    `${t('Animais')}`,
    `${t('Objetos')}`,
    `${t('Cores')}`,
    `${t('Adjetivos')}`,
    `${t('Partes do corpo humano')}`,
    `${t('Seres mitológicos')}`,
  ])

  const handleJoinRoomButton = () => {
    navigate(`/room/${room}`)
    setLoading(true)
  }

  const handleJoinRoom = roomId => {
    navigate(`/room/${roomId}`)
  }

  useEffect(() => {
    socketRef.current = io(process.env.REACT_APP_SOCKET_URL, {
      transports: ['websocket'],
    })
    return () => {
      socketRef.current.disconnect()
    }
  }, [])

  useEffect(() => {
    socketRef.current.on('roomCreated', roomId => {
      handleJoinRoom(roomId)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCreateRoomButton = letters => {
    socketRef.current.emit(
      'createRoom',
      timerSelectValue?.value !== undefined ? timerSelectValue?.value : 60,
      roundsSelectValue?.value !== undefined ? roundsSelectValue?.value : 3,
      letters,
      defaultThemesButtonClick,
      customThemesButtonClick,
      customThemesButtonClick ? themesList : null
    )
    setLoading(true)
  }

  const handleRoomNameChange = event => {
    if (event.target.value.length <= 6) {
      setRoom(event.target.value.toUpperCase())
    }
  }

  const handleFlagsClick = flag => {
    setLang(flag)
    localStorage.setItem('i18nextLng', flag)
  }

  return (
    <S.PageContainer>
      <S.LoadingOverlay loading={loading}>
        <S.LobbyContainer>
          <S.HeaderContainer>
            <S.Title>Joguinho sem nome ainda</S.Title>
            <S.FlagsContainer>
              <BrazilIcon
                onClick={() => handleFlagsClick('pt-BR')}
                data-testid='brazil-button'
              />
              <USAIcon
                onClick={() => handleFlagsClick('en')}
                data-testid='us-button'
              />
              <SpainIcon
                onClick={() => handleFlagsClick('es')}
                data-testid='spain-button'
              />
            </S.FlagsContainer>
          </S.HeaderContainer>
          <S.BodyContainer>
            <S.CreateRoomButton
              onClick={() => setOpenModalRoomConfigs(true)}
              data-testid='create-room-button'
            >
              {t('CRIAR SALA')}
            </S.CreateRoomButton>
            <S.OrText data-testid='or-text'>{t('ou')}</S.OrText>
            <S.JoinButtonContainer>
              <S.JoinButtonInput
                type='text'
                value={room}
                onChange={e => handleRoomNameChange(e)}
                placeholder={t('Digite o código da sala')}
                data-testid='enter-room-input'
              />
              <S.JoinButton
                onClick={() => handleJoinRoomButton()}
                disabled={!room}
                data-testid='enter-room-button'
              >
                {t('ENTRAR NA SALA')}
              </S.JoinButton>
            </S.JoinButtonContainer>
            <S.RulesContainer>
              <S.TitleRules>{t('Como jogar')}</S.TitleRules>
              <S.RulesList>
                <S.RulesListItem>{t('1- Gere um tema')}</S.RulesListItem>
                <S.RulesListItem>
                  {t(
                    '2- Clique em uma letra e fale uma palavra relacionada ao tema que comece com a letra que você clicou'
                  )}
                </S.RulesListItem>
                <S.RulesListItem>
                  {t(
                    '3- Clique no botão vermelho para passar a vez para o próximo jogador'
                  )}
                </S.RulesListItem>
              </S.RulesList>
            </S.RulesContainer>
          </S.BodyContainer>
          <ModalTutorial
            setOpen={setOpenModalTutorial}
            open={openModalTutorial}
          />
          <ModalRoomConfigs
            setOpen={setOpenModalRoomConfigs}
            open={openModalRoomConfigs}
            handleCreateRoomButton={handleCreateRoomButton}
            setRoundsSelectValue={setRoundsSelectValue}
            setTimerSelectValue={setTimerSelectValue}
            roundsSelectValue={roundsSelectValue}
            timerSelectValue={timerSelectValue}
            defaultThemesButtonClick={defaultThemesButtonClick}
            setDefaultThemesButtonClick={setDefaultThemesButtonClick}
            customThemesButtonClick={customThemesButtonClick}
            setCustomThemesButtonClick={setCustomThemesButtonClick}
            themesList={themesList}
            setThemesList={setThemesList}
          />
          <ModalBugsReport
            setOpen={setOpenModalBugsReport}
            open={openModalBugsReport}
          />
          <S.IconsContainer>
            <InstagramIcon
              width='35px'
              link={'https://www.instagram.com/wordopia.online/'}
            />
            <TiktokIcon
              width='30px'
              link={'https://www.tiktok.com/@wordopia'}
            />
            <TwitterIcon
              width='35px'
              link={'https://twitter.com/Wordopia_game'}
            />
            {/* <DiscordIcon width='40px' link={'https://discord.gg/Wq4DnYAD2F'} /> */}
          </S.IconsContainer>
          <HelpButton
            setOpen={setOpenModalTutorial}
            open={openModalTutorial}
            setOpenBugsModal={setOpenModalBugsReport}
          />
          <S.Spinner loading={loading} />
        </S.LobbyContainer>
      </S.LoadingOverlay>
    </S.PageContainer>
  )
}

export default Lobby
