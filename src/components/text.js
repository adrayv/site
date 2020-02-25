import React from "react"
import styled from "styled-components"

const Text = styled.span`
  color: ${({ theme }) => theme.color};
  display: block;
`

export default ({ children }) => <Text>{children}</Text>
