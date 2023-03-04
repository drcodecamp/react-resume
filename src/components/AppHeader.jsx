import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import { DollarOutlined } from '@ant-design/icons'

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

      <MobileMenu>
        <BurgerMenu>
          <Button
            href="https://www.doctorcode.org/free-online-courses.html"
            type="primary"
            icon={<DollarOutlined />}
            size="medium"
          >
            קורסים בחינם
          </Button>
        </BurgerMenu>
      </MobileMenu>
    </HeaderContainer>
  )
}

const MobileMenu = styled.div`
  display: none;
  @media only screen and (max-width: 1280px) {
    display: block;
  }
`

const BurgerMenu = styled.div`
  max-width: 1050px;
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
`

const MenuItems = styled.div`
  @media only screen and (max-width: 1280px) {
    display: none;
  }
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
  @media print {
    display: none;
  }
  @media all and (display-mode: fullscreen) {
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
