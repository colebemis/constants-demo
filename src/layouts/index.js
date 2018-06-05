import Link from 'gatsby-link';
import React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import Box from '../components/Box';
import Flex from '../components/Flex';
import theme, { lineHeights } from '../theme';

injectGlobal({
   '*, *:before, *:after': {
      boxSizing: 'inherit',
   },

   body: {
      boxSizing: 'border-box',
      margin: 0,
      fontFamily: 'system-ui',
   },
});

const kebabToTitle = str =>
   str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

const Nav = ({ data }) => (
   <Box
      is="nav"
      width={240}
      py={4}
      borderRight="1px solid"
      borderColor="grayAlpha.3"
   >
      {data.allFile.files.map(({ file }) => (
         <Box key={file.name} px={5}>
            <Link
               to={`/constants/${file.name}`}
               style={{ textDecoration: 'none', lineHeight: lineHeights.loose }}
            >
               {kebabToTitle(file.name)}
            </Link>
         </Box>
      ))}
   </Box>
);

export default ({ children, data }) => (
   <ThemeProvider theme={theme}>
      <Flex height="100vh">
         <Nav data={data} />
         <Box is="main" flex="1 1 auto" p={4} style={{ overflow: 'auto' }}>
            <Box m="0 auto" maxWidth={672}>
               {children()}
            </Box>
         </Box>
      </Flex>
   </ThemeProvider>
);

export const query = graphql`
   query FilesQuery {
      allFile(sort: { fields: [name], order: ASC }) {
         files: edges {
            file: node {
               name
            }
         }
      }
   }
`;
