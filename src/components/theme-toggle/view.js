import React from "react"
import styled from "styled-components"

const Layout = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

export default ({ onChange, isOn }) => (
  <Layout>
    <button onClick={onChange}>in {isOn ? "light" : "dark"} mode</button>
  </Layout>
)
