import React from "react"
import "src/components/index.css"
import Layout from "src/components/layout"
import SEO from "src/components/seo"
import Name from "src/components/name"
import Title from "src/components/title"
import Bio from "src/components/bio"
import Contact from "src/components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Name />
    <Title />
    <Bio />
    <Contact />
  </Layout>
)

export default IndexPage
