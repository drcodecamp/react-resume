import { useState } from 'react'
import styled from 'styled-components'

export default function Toggle({ label, toggled = false, onClick }) {
  const [isToggled, toggle] = useState(toggled)

  const callback = () => {
    toggle(!isToggled)
    onClick(!isToggled)
  }

  return (
    <LabelContainer>
      <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
      <span></span>
      <strong>{label}</strong>
    </LabelContainer>
  )
}

const LabelContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2c3e50;
    transition: 0.3s;
    border-radius: 30px;
  }
  strong {
    position: absolute;
    left: 100%;
    width: max-content;
    height: 100%;
    line-height: 30px;
    margin-left: 10px;
    cursor: pointer;
  }

  span:before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 2.5px;
    top: 2.5px;
    background-color: #fff;
    border-radius: 50%;
    transition: 0.3s;
  }

  input:checked + span {
    background-color: #1000ff;
  }

  input:checked + span:before {
    transform: translateX(25px);
  }
`
