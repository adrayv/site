import React from "react"
import styled from "styled-components"

const MainLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${({
    theme: {
      color: { bg },
    },
  }) => bg};
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 700px;
  box-sizing: border-box;
  padding-top: 30vh;
  padding-left: 10vw;
  padding-right: 7vw;
  padding-bottom: 3em;
  & > * {
    margin-bottom: 1em;
  }
  & > *:first-child {
    margin-bottom: 10px;
  }
`

export default ({ children }) => (
  <MainLayout>
    <Wrapper>{children}</Wrapper>
  </MainLayout>
)
