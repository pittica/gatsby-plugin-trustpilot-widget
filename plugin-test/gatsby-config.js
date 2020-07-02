module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "@dadoagency/gatsby-plugin-trustpilot-widget",
        options: {
          username: "thepetlabco.com",
          // template: "539ad60defb9600b94d7df2c",
          business: "5c9df8263ff4c4000185ea05",
      }
    }
  ],
}
