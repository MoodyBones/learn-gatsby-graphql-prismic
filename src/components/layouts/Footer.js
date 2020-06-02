import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Footer = styled.footer`
  padding: 20px;
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 70px;
  width: 100%;
  background: #1e1e1e;
  color: white;

  display: flex;
  justify-content: space-between;

  a {
    text-align: center;
  }

  .footer-link {
    color: white;
  }
`

export default () => (
  <Footer>
    <a
      className="footer-link"
      href="https://twitter.com/_moodybones"
      target="_blank"
      rel="noopener noreferrer"
    >
      S O C I A L | L I N K S
    </a>
    <Link className="footer-link" to="/">
      <span class="material-icons icon">home</span>
    </Link>
    <a
      className="footer-link"
      href="https://twitter.com/_moodybones"
      target="_blank"
      rel="noopener noreferrer"
    >
      Made by Moody
    </a>
  </Footer>
)
