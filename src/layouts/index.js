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
   <Box is="nav" width={['100%', null, null, 240]} py={3} bg="grayAlpha.1">
      {data.allFile.files.map(({ file }) => (
         <Box key={file.name} px={[3, null, null, 5]} py={0}>
            <Link
               to={`/constants/${file.name}`}
               style={{ textDecoration: 'none', lineHeight: lineHeights.copy }}
            >
               {kebabToTitle(file.name)}
            </Link>
         </Box>
      ))}
   </Box>
);

export default ({ children, data }) => (
   <ThemeProvider theme={theme}>
      <Flex
         height={['auto', null, null, '100vh']}
         flexDirection={['column', null, null, 'row']}
      >
         <Nav data={data} />
         <Box
            is="main"
            flex="1 1 auto"
            py={4}
            px={3}
            style={{ overflow: 'auto' }}
         >
            <Box m="0 auto" maxWidth={720}>
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
