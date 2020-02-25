import React from "react"
import styled from "styled-components"

const H1 = styled.h1`
  & .adrayv-text {
    display: inline;
  }
`

const H2 = styled.h2`
  & .adrayv-text {
    display: inline;
  }
`

const Body = styled.div`
  & .adrayv-text {
    display: inline;
  }
`

const Link = styled.a`
  color: blue;
  cursor: pointer;
  text-decoration: none;
`

export default ({ children, headline, subheadline, link }) => {
  if (headline) {
    return <H1 className="adrayv-text">{children}</H1>
  } else if (subheadline) {
    return <H2 className="adrayv-text">{children}</H2>
  } else if (link) {
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="adrayv-text"
      >
        {children}
      </Link>
    )
  } else {
    return <Body className="adrayv-text">{children}</Body>
  }
}
