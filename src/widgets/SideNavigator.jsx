import React from 'react'
import styled from 'styled-components'
import { Button, Checkbox, Input, Switch, Tooltip } from 'antd'
import {
  selectFullResume,
  selectResumeSocials,
  setSocialURL,
  toggleSideNav,
  toggleSocial,
  setSocials,
} from '../store/resumeSlice.js'
import CustomRow from '../components/shared/CustomRow.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { MenuOutlined } from '@ant-design/icons'

const SideNavWidgetWidget = () => {
  const dispatch = useDispatch()
  const { display } = useSelector(selectFullResume)
  const socials = useSelector(selectResumeSocials)

  const handleToggleSideNav = () => {
    dispatch(toggleSideNav())
  }
  return (
    <Container>
      <CustomRow>
        Enable navigator section
        <Switch checked={display.sideNav} onClick={handleToggleSideNav} />
      </CustomRow>
      {socials.map((social, idx) => {
        return <SocialItem key={social.id} social={social} idx={idx} />
      })}
    </Container>
  )
}

const SocialItem = ({ social, idx }) => {
  const dispatch = useDispatch()
  const { display } = useSelector(selectFullResume)
  const socials = useSelector(selectResumeSocials)

  function handleOnDragStart(e, params) {
    const { id, idx } = params
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('data', id)
    const newArray = socials.map((item, index) => {
      return { ...item, dragging: index === idx }
    })
    dispatch(setSocials(newArray))
  }
  function handleOnDragEnter(e, params) {
    const { idx } = params
    const newArray = socials.map((item, index) => {
      return { ...item, dropping: index === idx }
    })
    dispatch(setSocials(newArray))
  }
  function handleOnDragEnd() {
    const newArray = socials.map((item) => {
      return { ...item, dropping: false, dragging: false }
    })
    dispatch(setSocials(newArray))
  }
  function handleDragLeave() {}

  function handleDragOver(e) {
    e.preventDefault()
  }
  function handleOnDrop(e, params) {
    const { idx } = params
    const prevId = e.dataTransfer.getData('data')
    const prevIndex = socials.findIndex((i) => i.id === prevId)
    if (prevIndex !== undefined && prevIndex !== idx) {
      swapItems({ prevId, prevIndex })
    }
  }
  function swapItems(params) {
    const { prevId, prevIndex } = params
    const prevItem = socials.find((i) => i.id === prevId)
    const newArray = socials.filter(
      (item, index) => index !== prevIndex && index !== idx
    )
    newArray.splice(prevIndex, 0, social)
    newArray.splice(idx, 0, prevItem)
    dispatch(setSocials(newArray))
  }
  return (
    <>
      <DNDRow
        draggable
        droppable
        onDragStart={(e) => handleOnDragStart(e, { id: social.id, idx })}
        onDragEnter={(e) => handleOnDragEnter(e, { idx })}
        onDragEnd={(e) => handleOnDragEnd(e, { idx })}
        onDragOver={(e) => handleDragOver(e, { idx })}
        onDragLeave={(e) => handleDragLeave(e, { idx })}
        onDrop={(e) => handleOnDrop(e, { idx })}
        className={[
          social.dropping ? 'drop' : '',
          social.dragging ? 'dragging' : '',
        ]}
      >
        <img src={social.icon} alt={social.name} />
        <Input
          className="dnd-input"
          draggable={true}
          onDragStart={(e) => e.preventDefault()}
          onDragEnter={(e) => e.preventDefault()}
          onDragEnd={(e) => e.preventDefault()}
          onDragLeave={(e) => e.preventDefault()}
          addonBefore="https://"
          onChange={({ target }) => {
            dispatch(
              setSocialURL({
                id: social.id,
                value: target.value,
              })
            )
          }}
          value={social.url}
          placeholder={social.placeholder}
          disabled={!display.sideNav || !social.display}
          status={social.url.includes('http') ? 'error' : ''}
        />
        <Checkbox
          disabled={!display.sideNav}
          checked={social.display}
          onClick={() => dispatch(toggleSocial(social))}
        />
      </DNDRow>
      {social.dropping && <Placeholder />}
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const Placeholder = styled.div`
  border: 2px dashed #ccc;
  background-color: #f2f2f2;
  height: 2px;
  margin-top: 10px;
  margin-bottom: 10px;
  transition: transform 0.2s ease-in-out;
  box-sizing: border-box;
  padding: 0 16px;
`

const DNDRow = styled(CustomRow)`
  flex-wrap: nowrap;
  cursor: grab;

  :active {
    cursor: grabbing;
  }

  &.dragging {
    opacity: 0.5;
    transform: scale(0.8);
    transform: rotate(3deg);
    -moz-transform: rotate(3deg);
    -webkit-transform: rotate(3deg);
    outline: 2px solid;
    outline-color: black;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
  }
  &.drop {
    border: 2px dashed #000;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  & img {
    width: 32px;
    height: 32px;
  }
  & input {
    cursor: text;
  }
  & .dnd-input {
    margin: 0 1em;
  }
`

export default SideNavWidgetWidget
