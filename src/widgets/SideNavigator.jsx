import React from 'react'
import styled from 'styled-components'
import { Checkbox, Input, Switch } from 'antd'
import {
  selectFullResume,
  selectResumeSocials,
  setSocialURL,
  toggleNarrowHeader,
  toggleSideNav,
  toggleSocial,
  setSocials,
} from '../store/resumeSlice.js'
import CustomRow from '../components/shared/CustomRow.jsx'
import { useDispatch, useSelector } from 'react-redux'

const SideNavWidgetWidget = () => {
  const dispatch = useDispatch()
  const { display } = useSelector(selectFullResume)
  const socials = useSelector(selectResumeSocials)

  const handleToggleSideNav = () => {
    if (!display.narrowHeader) {
      dispatch(toggleNarrowHeader())
    }
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
    const { id } = params
    e.target.classList.add('dragging')
    e.dataTransfer.setData('data', id)
  }
  function handleOnDragEnter(e) {
    e.target.classList.add('drop')
  }
  function handleOnDragEnd(e) {
    e.target.classList.remove('dragging')
  }
  function handleDragLeave(e) {
    e.target.classList.remove('drop')
  }

  function handleDragOver(e) {
    e.preventDefault()
  }
  function handleOnDrop(e, params) {
    const { idx } = params
    e.target.classList.remove('drop')
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
    <DNDRow
      draggable
      droppable
      onDragStart={(e) => handleOnDragStart(e, { id: social.id })}
      onDragEnter={(e) => handleOnDragEnter(e)}
      onDragEnd={(e) => handleOnDragEnd(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      onDrop={(e) => handleOnDrop(e, { idx })}
    >
      <CustomRow>
        {upperCaseFirstLetter(social.name)}
        <Checkbox
          disabled={!display.sideNav}
          checked={social.display}
          onClick={() => dispatch(toggleSocial(social))}
        />
        <Input
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
      </CustomRow>
    </DNDRow>
  )
}
const upperCaseFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.substring(1)
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const DNDRow = styled(CustomRow)`
  cursor: grab;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  :active {
    cursor: grabbing;
  }

  &.dragging {
    opacity: 0.5;
    transform: scale(0.8);
    outline: 2px solid;
    outline-color: black;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
  }
  &.drop {
    border: 2px dashed #000;
  }
  & input {
    cursor: text;
  }
`

export default SideNavWidgetWidget
