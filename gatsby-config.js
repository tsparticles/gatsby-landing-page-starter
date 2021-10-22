/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Gatsby Landing Page Starter`,
    description: `Kick off your project with this landing page boilerplate. This starter ships with the main Gatsby configuration files, and React tsParticles with a simple configuration, you might need to get up and running blazing fast with the blazing fast app generator for React.`,
    author: `@tsParticles`,
    twitterUsername: "@tsParticles",
    image: "/twitter-img.png",
    siteUrl: "https://tsparticles.github.io/gatsby-landing-page-starter",
  },
  plugins: [`gatsby-plugin-react-helmet`],
  pathPrefix: "/gatsby-landing-page-starter",
}
