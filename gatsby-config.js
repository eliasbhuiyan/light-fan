/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.lightfan.com`,
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
        name: `product`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        fonts: [
          {
            family: `Oswald`,
            subsets: [`latin`],
          },
          {
            family: `Poppins`,
            variants: [`400`,`500`,`600`, `700`, `800`]
          },
        ],

      }
    }
  ],
}
