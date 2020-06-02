import React from "react"
import { bool } from "prop-types"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #1e1e1e;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? `translateX(0)` : `translateX(100%)`)};

  @media (max-width: 800px) {
    width: 100%;
  }

  a {
    font-family: var(--font-heading);
    font-size: 4rem;
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
    padding: 2rem 0;
    letter-spacing: 0.1rem;
    color: white;
    line-height: 0.2;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 800px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #ffc048;
    }
  }
`

export function Menu({ open, ...props }) {
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        {/* <span aria-hidden="true">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span> */}
        Work
      </a>
      <a href="/" tabIndex={tabIndex}>
        {/* <span aria-hidden="true">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span> */}
        Writing
      </a>
      <a href="/" tabIndex={tabIndex}>
        {/* <span aria-hidden="true">&#x1f4b8;</span> */}
        About
      </a>
      <a href="/" tabIndex={tabIndex}>
        {/* <span aria-hidden="true">&#x1f4e9;</span> */}
        Contact
      </a>
      <Link to="/StyleGuide" tabIndex={tabIndex}>
        {/* <span aria-hidden="true">&#x1f4e9;</span> */}
        Style Guide
      </Link>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}
