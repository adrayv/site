import React from "react"
import styled from "styled-components"

const Background = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: relative;
  background: ${({
    theme: {
      color: { primary },
    },
  }) => primary};
  cursor: pointer;
`

const Door = styled.div`
  width: 25.2px;
  height: 25.2px;
  border-radius: 50%;
  position: absolute;
  top: ${({ isOpen }) => (isOpen ? "-4px" : "-8px")};
  right: ${({ isOpen }) => (isOpen ? "8px" : "18px")};
  transform: ${({ isOpen }) => (isOpen ? "scale(1)" : "scale(0.5)")};
  background: ${({
    theme: {
      color: { bg },
    },
  }) => bg};
`

const Layout = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
`

export default ({ onChange, isOn }) => (
  <Layout>
    <Background onClick={onChange}>
      <Door isOpen={isOn} />
    </Background>
  </Layout>
)
