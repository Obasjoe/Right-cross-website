import React, { useState } from 'react'
import styled from 'styled-components'
import RightNav from './RightNav'

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
  }
`

const Hamburger = () => {
    const [open, setOpen] = useState(false)


  return (
    <React.Fragment>
      <div>
        <div />
        <div />
        <div />
      </div>
    </React.Fragment>
  )
}

export default Hamburger
