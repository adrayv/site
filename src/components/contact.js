import React from "react"
import styled from "styled-components"
import Text from "src/components/text"

const Layout = styled.div`
  & > *:first-child {
    margin-bottom: 1em;
  }
`

export default () => (
  <Layout>
    <Text>
      Reach out to me over{" "}
      <Text link="mailto:destin.raymundo@gmail.com">email</Text> if you'd like
      to hear more about what I do.
    </Text>
    <Text>You can also find me on:</Text>
    <Text>
      <Text link="https://www.linkedin.com/in/destinraymundo/">LinkedIn, </Text>
      <Text link="https://github.com/adrayv">GitHub, </Text>
      <Text link="https://www.instagram.com/destinvraymundo/">Instagram</Text>
    </Text>
  </Layout>
)
