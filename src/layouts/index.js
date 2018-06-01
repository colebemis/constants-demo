import Link from 'gatsby-link';
import React from 'react';
import { colors, space, lineHeights } from '../constants';

const kebabToTitle = str =>
   str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

const Nav = ({ data }) => (
   <nav
      style={{
         width: 240,
         paddingTop: space[4],
         paddingBottom: space[4],
         backgroundColor: colors.grayAlpha[1]
      }}
   >
      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
         {data.allFile.files.map(({ file }) => (
            <li
               key={file.name}
               style={{
                  paddingLeft: space[5],
                  paddingRight: space[5],
                  lineHeight: lineHeights.loose
               }}
            >
               <Link
                  to={`/constants/${file.name}`}
                  style={{ textDecoration: 'none' }}
               >
                  {kebabToTitle(file.name)}
               </Link>
            </li>
         ))}
      </ul>
   </nav>
);

export default ({ children, data }) => (
   <div
      style={{
         display: 'flex',
         margin: -space[2],
         height: '100vh',
         fontFamily: 'system-ui'
      }}
   >
      <Nav data={data} />
      <main style={{ flex: '1 1 auto', overflow: 'auto', padding: space[4] }}>
         <div style={{ margin: '0 auto', maxWidth: 800 }}>{children()}</div>
      </main>
   </div>
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
