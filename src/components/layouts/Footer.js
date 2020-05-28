import React from "react"
import styled from "@emotion/styled"

const Footer = styled.footer`
  padding: 20px;
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 70px;
  width: 100%;

  display: flex;
  justify-content: space-between;

  a {
    text-align: center;
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
    <a className="footer-link" href="/">
      <span class="material-icons">home</span>
    </a>
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
