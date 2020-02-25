import styled from "styled-components"

export default styled.div`
  box-sizing: border-box;
  padding-top: 30vh;
  padding-left: 10vw;
  padding-right: 7vw;
  padding-bottom: 3em;
  min-height: 100vh;
  background: #fefefe;
  max-width: 700px;
  & > * {
    margin-bottom: 1em;
  }
  & > *:first-child {
    margin-bottom: 10px;
  }
`
