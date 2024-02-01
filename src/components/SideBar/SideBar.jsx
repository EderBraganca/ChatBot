import React from 'react'
import { Container, Content } from './SideBar.js'

const SideBar = ({ active }) => {
  return (
    <Container sidebar={active}>
      <Content>
      </Content>
    </Container>
  )
}

export default SideBar