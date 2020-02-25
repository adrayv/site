import React from "react"
import Layout from "src/components/layout"
import SEO from "src/components/seo"
import Name from "src/components/name"
import Title from "src/components/title"
import Bio from "src/components/bio"
import Contact from "src/components/contact"
import ThemeToggle from "src/components/theme-toggle"

export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Name />
      <Title />
      <Bio />
      <Contact />
      <ThemeToggle />
    </Layout>
  )
}
