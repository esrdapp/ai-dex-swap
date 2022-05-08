import React from 'react'  
import styled from 'styled-components'

import Github from '../../assets/svg/github.svg'
import Medium from '../../assets/svg/medium.svg'
import Telegram from '../../assets/svg/telegram.svg'
import Twitter from '../../assets/svg/twitter.svg' 
import { RowBetween } from '../Row' 

const FooterFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;

  z-index: 2;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding: 12px 0 0 0;
    width: calc(100%);
    position: relative;
  `};
`

// const FooterElement = styled.div`
//   display: flex;
//   align-items: center;
// `

// const FooterElementWrap = styled.div`
//   display: flex;
//   align-items: center;

//   ${({ theme }) => theme.mediaWidth.upToSmall`
//     margin-top: 0.5rem;
// `};
// `

// const UniIcon = styled.div`
//   transition: transform 0.3s ease;
//   :hover {
//     transform: rotate(-5deg);
//   }
//   ${({ theme }) => theme.mediaWidth.upToSmall`
//     img { 
//       width: 4.5rem;
//     }
//   `};
// `

const Title = styled.a`
    display: flex;
    justify-content: center;
    pointer-events: auto;
    background-color: #fff;
    height: 40px;
    width: 40px;
    line-height: 42px;
    border-radius: 50%; 
    margin: 0 5px;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease; 
    :hover {
        cursor: pointer; 
        background-color:#1DA1F2 !important;
        color: #fff;
    }
`
 

export default function Footer() {
   
  return (
    <FooterFrame>
      <RowBetween style={{ alignItems: 'flex-start',justifyContent:'flex-end' }} padding="1rem 1rem 0 1rem">
        {/* <FooterElement> */}
        <Title href="https://twitter.com/Hpdexglobal" target="_blank"> 
              <img src={Twitter} alt="logo" width="24" /> 
          </Title>
          <Title href="https://t.me/hpdexglobal" target="_blank"> 
              <img src={Telegram} alt="logo" width="24"/> 
          </Title>
          <Title href="https://github.com/hpdex-project" target="_blank"> 
              <img src={Github} alt="logo" width="24"/> 
          </Title>
          <Title href="https://www.hpclub.org/ " target="_blank"> 
              <img src={Medium} alt="logo" width="24"/> 
          </Title>
        {/* </FooterElement> */}
      
      </RowBetween>
    </FooterFrame>
  )
}
