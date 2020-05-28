const { apiEndpoint } = require("./prismic-config")
var repo = /([^\/]+)\.prismic\.io\/graphql/.exec(apiEndpoint)

module.exports = {
  siteMetadata: {
    title: `Moody Bones Gatsby GraphQL Prismic Starter`,
    description: `Mel Jones is learning about Gatsby, GraphQL & Prismic`,
    author: `jones.mel@gmail.com | @_moodybones | Mel Jones`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: repo[1], // Loads the repo name from prismic configuration
        path: "/preview",
        previews: true,
        pages: [
          {
            type: "Post",
            match: "/blog/:uid",
            path: "/blog-preview",
            component: require.resolve("./src/templates/post.js"),
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts-v2`,
    //   options: {
    //     fonts: [
    //       {
    //         family: "Vollkorn",
    //         variable: true,
    //         weights: ["400..900"],
    //       },
    //     ],
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
