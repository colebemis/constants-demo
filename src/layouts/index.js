import Link from 'gatsby-link';
import React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import system from 'system-components';
import Box from '../components/Box';
import Flex from '../components/Flex';
import Heading from '../components/Heading';
import theme, { lineHeights } from '../theme';
import { themeGet } from 'styled-system';

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

const NavLink = system(
   {
      is: Link,
      activeClassName: 'active',
      color: 'grayAlpha.6',
      lineHeight: 'copy',
   },
   props => ({
      textDecoration: 'none',

      '&.active': {
         fontWeight: 500,
         color: themeGet('colors.blue.4')(props),
      },
   }),
);

const Nav = ({ data }) => (
   <Box
      is="nav"
      width={['100%', null, null, 240]}
      pb={3}
      px={5}
      bg="grayAlpha.1"
   >
      <Heading fontSize={2}>Style Constants</Heading>
      <Box py={0}>
         <NavLink exact to="/">
            Introduction
         </NavLink>
      </Box>
      {data.allFile.files.map(({ file }) => (
         <Box key={file.name} py={0}>
            <NavLink to={`/constants/${file.name}`}>
               {kebabToTitle(file.name)}
            </NavLink>
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
            py={5}
            px={3}
            style={{ overflow: 'auto' }}
         >
            <Box m="0 auto" maxWidth={680}>
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
