module.exports = {
   plugins: [
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            name: `constants`,
            path: `${__dirname}/src/pages/constants`
         }
      },
      'gatsby-plugin-styled-components'
   ]
};
