import React from "react"
import Text from "src/components/text"
import styled from "styled-components"

const Layout = styled.div`
  & > * {
    margin-bottom: 1em;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`

export default () => (
  <Layout>
    <Text>
      Hi! I'm Destin. I'm a Software Engineer. I love creating delightful user
      interfaces and orchestrating complex systems.
    </Text>
    <Text>
      I currently work for <Text link="https://google.com">Google</Text>, but
      I've also done work for <Text link="https://paypal.com">PayPal</Text>,{" "}
      <Text link="https://unum.la">UNUM</Text>,{" "}
      <Text link="https://www.belkin.com/us/">Belkin</Text>, and{" "}
      <Text link="https://ucladevx.com">various</Text>{" "}
      <Text link="https://ccle.ucla.edu">organizations</Text> at UCLA, where I
      got my Computer Science degree. I can lead the development of a product
      from MVP to production and am comfortable anywhere in between.
    </Text>
    <Text>
      At home, you'll probably find me playing games (Smash, Rocket League,
      Overwatch), getting lost in a YouTube hole, or hanging out with my cat,{" "}
      <Text link="https://www.instagram.com/phoebefoodiecat">Phoebe</Text>.
    </Text>
  </Layout>
)
