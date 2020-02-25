import React from "react"
import styled from "styled-components"

const H1 = styled.h1`
  line-height: 0.9em;
  font-size: 3em;
  & .adrayv-text {
    display: inline;
  }
`

const H2 = styled.h3`
  font-size: 24px;
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
