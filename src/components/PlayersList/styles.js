import styled from 'styled-components'

export const ScoreboardContainer = styled.div`
  padding: 10px 10px 0;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 6px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid #00000085;
  color: white;
  font-family: 'MyFont', sans-serif;
  max-height: 500px;
  background: rgb(87 115 255 / 80%);
  margin-right: 10px;

  @media only screen and (max-device-width: 767px) {
    margin: 30px 0;
  }
`

export const ScoreboardTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 40px;
  border-bottom: 3px solid;
  padding-bottom: 10px;
`

export const ScoreboardList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  width: 100%;
  overflow-x: auto;
`

export const ScoreboardListItem = styled.p`
  width: fit-content;
  max-width: 240px;
  font-size: 22px;
  margin-bottom: 25px;
  color: ${({ color }) => (color ? '#00f7ec' : 'white')};
  color: ${({ colorLost }) => colorLost && 'red!important'};
  border-bottom: ${({ color }) => (color ? '1px solid #00f7ec' : 'unset')};
  text-decoration: ${({ colorLost }) => colorLost && 'line-through'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ScoreboardListItemScore = styled.div`
  width: fit-content;
  max-width: 300px;
  font-size: 28px;
  margin-bottom: 25px;
  color: ${({ color }) => (color ? '#00f7ec' : 'white')};
  color: ${({ colorLost }) => colorLost && 'red!important'};
  border-bottom: ${({ color }) => (color ? '1px solid #00f7ec' : 'unset')};
  overflow-wrap: break-word;
`

export const PlayerNameContainer = styled.div`
  display: flex;
  align-items: baseline;
`

export const PlayerNameDiv = styled.div`
  display: flex;
  -webkit-box-align: baseline;
  align-items: baseline;
  -webkit-box-pack: justify;
  justify-content: flex-start;
  width: 90%;
`

export const CurrentLetterContainer = styled.p`
  border: 1px solid white;
  font-size: 25px;
  padding: 2px 10px;
  margin-left: 10px;
`

export const ScoreText = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
  margin-right: 15px;
  font-size: 20px;
`
