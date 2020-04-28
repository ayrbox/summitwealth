const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Summit Wealth`,
    description: `Your mortagage solution provider`,
    author: '@ayrbox',
    social: {
      fb: 'https://www.facebook.com/Summitwealthltd',
      ig: 'https://www.instagram.com/summitwealthltd',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logos`,
        path: path.join(__dirname, 'src', 'assets', 'images', 'logos'),
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: path.join(__dirname, 'src', 'data'),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: path.join(
          __dirname,
          'src',
          'assets',
          'images',
          'logos',
          'logo.png'
        ),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'contents',
        path: `${__dirname}/src/contents`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-yaml`,
  ],
  pathPrefix: `/summitwealth`,
};
