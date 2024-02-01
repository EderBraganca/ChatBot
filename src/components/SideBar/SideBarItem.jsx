import React from 'react'
import { Container } from './SideBarItem.js'

const SideBarItem = ({ Icon, Text }) => {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  )
}

export default SideBarItem