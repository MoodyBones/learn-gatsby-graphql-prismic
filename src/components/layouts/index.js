import React, { Fragment, useState, useRef } from "react"
import { StaticQuery, graphql } from "gatsby"
import { useOnClickOutside } from "../../utils/hooks"
import { Helmet } from "react-helmet"
import { Burger } from "./Burger"
import { Menu } from "./Menu"
import Footer from "./Footer"
import "../../stylesheets/main.scss"

export default props => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)

const Layout = props => {
  // Define the meta title and description
  const title = props.data.site.siteMetadata.title
  const description = props.data.site.siteMetadata.description
  const [open, setOpen] = useState(false)
  const node = useRef()
  const menuId = "main-menu"

  useOnClickOutside(node, () => setOpen(false))

  // Load the Prismic edit button
  if (typeof window !== "undefined" && window.prismic) {
    window.prismic.setupEditButton()
  }

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;900&family=Work+Sans:ital@0;1&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Helmet>
      <nav ref={node}>
        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
        <Menu open={open} setOpen={setOpen} id={menuId} />
      </nav>
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  )
}
