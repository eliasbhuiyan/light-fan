/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.takade.com`,
    title: 'Taka-De',
    description: 'This is an E-Commerce Website, builed by Gatsby'
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `banner`,
        path: `${__dirname}/banner`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `arrival`,
        path: `${__dirname}/arrival`,
      },
    },
    "gatsby-plugin-mdx",
  ],
}
