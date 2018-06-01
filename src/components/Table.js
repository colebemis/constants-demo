import system from 'system-components';

const Table = system(
   {
      is: 'table',
      width: '100%'
   },
   {
      tableLayout: 'fixed',
      borderCollapse: 'collapse'
   }
);

Table.displayName = 'Table';

const Header = system({
   is: 'thead',
   textAlign: 'left',
   bg: 'grayAlpha.1'
});

Header.displayName = 'Header';

const Cell = system(
   {
      is: 'td',
      px: 2,
      py: 3
   },
   { verticalAlign: 'top' }
);

Cell.displayName = 'Cell';

const Row = system({
   is: 'tr',
   borderBottom: '1px solid',
   borderColor: 'grayAlpha.2'
});

Row.displayName = 'Row';

export { Header, Cell, Row };
export default Table;
