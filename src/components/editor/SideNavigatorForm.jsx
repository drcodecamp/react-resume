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
} from '../../store/resumeSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import { MenuOutlined } from '@ant-design/icons'
import CustomRow from '../shared/CustomRow.jsx'

const SideNavigatorForm = () => {
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

  function handleOnDragStart(e, id, idx) {
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', e.target)
    e.dataTransfer.setDragImage(e.target, 20, 20)
    toggleDragging(id, idx)
  }

  function handleOnDragEnter(e, id, idx) {
    const prevItem = socials.find((i) => i.dragging !== false)
    const prevIndex = socials.findIndex((i) => i.dragging)
    if (prevItem && prevItem.id !== id) {
      const newArray = swapItems(prevItem.id, prevIndex, idx)
      dispatch(setSocials(newArray))
    }
  }
  function handleOnDragEnd() {
    cancelMove()
  }

  function handleDragOver(e) {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }
  function handleOnMouseDown(e, id, idx) {
    toggleDragging(id, idx)
  }
  function handleOnMouseUp(e, id, idx) {
    const prevItem = socials.find((i) => i.dragging !== false)
    const prevIndex = socials.findIndex((i) => i.dragging)

    if (prevItem && prevItem.id !== id) {
      let newArray = swapItems(prevItem.id, prevIndex, idx)
      newArray = newArray.map((item) => {
        return { ...item, dragging: false }
      })
      dispatch(setSocials(newArray))
    }
  }
  function handleKeyDown(e, id, idx) {
    switch (e.key) {
      case 'Enter':
        e.preventDefault()
        if (socials[idx].dragging) {
          cancelMove()
        } else {
          toggleDragging(idx)
        }
        break

      case 'Escape':
        e.preventDefault()
        cancelMove()
        break

      case ' ':
      case 'Tab':
        if (socials[idx].dragging) {
          e.preventDefault()
        }
        break

      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault()
        if (!socials[idx].dragging) {
          toggleDragging(id, idx)
        } else if (idx - 1 >= 0) {
          const newArray = swapItems(id, idx, idx - 1)
          dispatch(setSocials(newArray))
        }
        break

      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault()
        if (!socials[idx].dragging) {
          toggleDragging(id, idx)
        } else if (idx + 1 < socials.length) {
          const newArray = swapItems(id, idx, idx + 1)
          dispatch(setSocials(newArray))
        }
        break

      default:
        break
    }
  }
  function toggleDragging(id, idx) {
    const newArray = socials.map((item, index) => {
      return { ...item, dragging: index === idx ? id : false }
    })
    dispatch(setSocials(newArray))
  }

  function cancelMove() {
    const newArray = socials.map((item) => {
      return { ...item, dragging: false }
    })
    dispatch(setSocials(newArray))
  }

  function swapItems(prevId, prevIndex, targetIdx) {
    if (targetIdx > socials.length || targetIdx < 0) {
      throw new Error('Swapping items is not allowed')
    }
    const prevItem = socials.find((i) => i.id === prevId)
    const social = socials[targetIdx]
    let newArray = socials.filter(
      (item, index) =>
        prevId !== item.id && index !== prevIndex && index !== targetIdx
    )
    newArray.splice(prevIndex, 0, social)
    newArray.splice(targetIdx, 0, prevItem)
    return newArray
  }
  return (
    <>
      <DNDRow
        tabIndex={0}
        draggable
        droppable
        onDragStart={(e) => handleOnDragStart(e, social.id, idx)}
        onDragEnter={(e) => handleOnDragEnter(e, social.id, idx)}
        onDragEnd={() => handleOnDragEnd()}
        onDragOver={(e) => handleDragOver(e)}
        onKeyDown={(e) => handleKeyDown(e, social.id, idx)}
        onMouseDown={(e) => handleOnMouseDown(e, social.id, idx)}
        onMouseUp={(e) => handleOnMouseUp(e, social.id, idx)}
        isDragging={social.dragging}
      >
        <RowItem draggable droppable>
          <MenuOutlined draggable={false} className="menu-outlined" />
          <SocialIcon draggable={false} src={social.icon} alt={social.name} />
          <DNDInput
            draggable={true}
            onDragStart={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
            onDragEnter={(e) => e.preventDefault()}
            onDragEnd={(e) => e.preventDefault()}
            onDragLeave={(e) => e.preventDefault()}
            onKeyDown={(e) => e.stopPropagation()}
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
        </RowItem>
      </DNDRow>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const DNDRow = styled(CustomRow)`
  cursor: grab;
  :active {
    cursor: grabbing;
  }
  .menu-outlined {
    opacity: 0;
    user-select: none;
    pointer-events: none;
  }
  :hover {
    outline: 1px dashed;
    outline-color: #1677ff;
    .menu-outlined {
      opacity: 1;
    }
  }
  :focus {
    outline: 1px dashed;
    outline-color: #1677ff;
    .menu-outlined {
      opacity: 1;
    }
  }

  ${({ isDragging }) => (isDragging ? dragging : '')};
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
const RowItem = styled(CustomRow)`
  flex-wrap: nowrap;
  user-select: none;
  pointer-events: none;
`
const SocialIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 1em;
  user-select: none;
  pointer-events: none;
`
const DNDInput = styled(Input)`
  margin: 0 1em;
  & input {
    cursor: text;
  }
`
export default SideNavigatorForm
