import React from 'react'
import styled from 'styled-components'
import { Checkbox, Input, Switch } from 'antd'
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

  function handleKeyDown(e, params) {
    const { id, idx } = params
    switch (e.key) {
      case ' ':
        e.preventDefault()
        toggleDragging(params)
        break

      case 'Escape':
        e.preventDefault()
        cancelMove()
        break

      case 'Tab':
        if (socials[idx].dragging) {
          e.preventDefault()
        }
        break

      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault()
        if (idx - 1 >= 0) {
          moveItem({ id: id, idx: idx, targetIdx: idx - 1 })
        }
        break

      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault()
        if (idx + 1 < socials.length) {
          moveItem({ id: id, idx: idx, targetIdx: idx + 1 })
        }

        break

      default:
        break
    }
  }
  function moveItem(params) {
    const prevId = params.id
    const prevIndex = params.idx
    swapItems({ prevId, prevIndex, idx: params.targetIdx })
  }
  function handleOnDragStart(e, params) {
    const { id } = params
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('data', id)
    toggleDragging(params)
    return false
  }
  function toggleDragging(params) {
    const { idx } = params
    const newArray = socials.map((item, index) => {
      return { ...item, dragging: index === idx }
    })
    dispatch(setSocials(newArray))
  }
  function handleOnDragEnter(e, params) {
    toggleDropping(params)
  }
  function toggleDropping(params) {
    const { idx } = params
    const newArray = socials.map((item, index) => {
      return { ...item, dropping: index === idx }
    })
    dispatch(setSocials(newArray))
  }
  function handleOnDragEnd() {
    cancelMove()
  }
  function cancelMove() {
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
      swapItems({ prevId, prevIndex, idx })
    }
  }
  function swapItems(params) {
    const { prevId, prevIndex, idx } = params
    const prevItem = socials.find((i) => i.id === prevId)
    const social = socials[idx]
    const newArray = socials.filter(
      (item, index) =>
        prevId !== item.id && index !== prevIndex && index !== idx
    )
    newArray.splice(prevIndex, 0, social)
    newArray.splice(idx, 0, prevItem)
    dispatch(setSocials(newArray))
  }
  return (
    <>
      <DNDRow
        tabIndex={0}
        draggable
        droppable
        onDragStart={(e) => handleOnDragStart(e, { id: social.id, idx })}
        onDragEnter={(e) => handleOnDragEnter(e, { idx })}
        onDragEnd={(e) => handleOnDragEnd(e, { idx })}
        onDragOver={(e) => handleDragOver(e, { idx })}
        onDragLeave={(e) => handleDragLeave(e, { idx })}
        onDrop={(e) => handleOnDrop(e, { idx })}
        onKeyDown={(e) => handleKeyDown(e, { id: social.id, idx })}
        isDragging={social.dragging}
        isDropping={social.dropping}
      >
        <MenuOutlined className="menu-outlined" />
        <SocialIcon src={social.icon} alt={social.name} />
        <DNDInput
          draggable={true}
          onDragStart={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
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

const DNDRow = styled(CustomRow)`
  flex-wrap: nowrap;
  cursor: grab;

  :active {
    cursor: grabbing;
  }
  .menu-outlined {
    opacity: 0;
  }
  :hover {
    outline: 1px dashed;
    outline-color: #1677ff;
    .menu-outlined {
      opacity: 1;
    }
  }
  ${({ isDragging }) => (isDragging ? dragging : '')};
  ${({ isDropping }) => (isDropping ? dropping : '')};
`

const dragging = `
  opacity: 0.5;
  transform: scale(0.8);
  transform: rotate(3deg);
  -moz-transform: rotate(3deg);
  -webkit-transform: rotate(3deg);
  outline: 2px solid;
  outline-color: black;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
`
const dropping = `
  border: 2px dashed #000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
const SocialIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 1em;
`
const DNDInput = styled(Input)`
  margin: 0 1em;
  & input {
    cursor: text;
  }
`
export default SideNavWidgetWidget
