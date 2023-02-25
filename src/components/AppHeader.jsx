import React from 'react'
import styled from 'styled-components'

const AppHeader = () => {
  return (
    <HeaderContainer>
      <LogoFont>
        <a href="/">
          dr<span style={{ color: '#00a6ff' }}>.code();</span>
        </a>
      </LogoFont>
      <MenuItems>
        <a href="https://www.doctorcode.org/">בוטקאמפ</a>
        <a href="https://www.doctorcode.org/free-online-courses.html">
          קורסים בחינם
        </a>
        <a href="https://www.doctorcode.org/blog.html">מדריכים / מאמרים</a>
      </MenuItems>
    </HeaderContainer>
  )
}
const MenuItems = styled.div`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  font-size: 18px;
  display: flex;
  a {
    all: unset;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    font-size: 1em;
    font-weight: bolder;
    :hover {
      color: #00a6ff;
    }
  }
`
const HeaderContainer = styled.header`
  display: flex;
  direction: rtl;
  align-items: center;
  justify-content: space-between;
  height: 85px;
  top: 0;
  z-index: 50;
  background: radial-gradient(#222025, #2b292f);
  color: #fff;
  box-shadow: -11px 3px 9px 0#1c1b1e;
  @media print {
    display: none;
  }
`
const LogoFont = styled.div`
  padding-right: 10px;
  font-size: 35px;
  direction: ltr;
  font-family: 'Square', sans-serif;
`
export default AppHeader
