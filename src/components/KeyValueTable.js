import React, { Component } from 'react';
import Table, { Header, Row, Cell } from './Table';
import Code from './Code';

function isArray(value) {
   return Array.isArray(value);
}

// Source: https://stackoverflow.com/a/31538091/3948967
function isPrimitive(value) {
   return value !== Object(value);
}

class KeyValueTable extends Component {
   renderRows({ name, data }) {
      if (isPrimitive(data)) {
         return (
            <Row>
               <Cell>
                  <Code>{name}</Code>
               </Cell>
               <Cell>
                  <Code>{data}</Code>
               </Cell>
               <Cell>
                  <Code>{typeof data}</Code>
               </Cell>
            </Row>
         );
      }

      if (isArray(data)) {
         {
            return data.map((value, index) =>
               this.renderRows({ name: `${name}[${index}]`, data: value }),
            );
         }
      }

      return Object.entries(data).map(([key, value]) =>
         this.renderRows({ name: `${name}.${key}`, data: value }),
      );
   }

   render() {
      const { name, data } = this.props;

      return (
         <Table>
            <Header>
               <Row>
                  <Cell is="th" width={2 / 6}>
                     Key
                  </Cell>
                  <Cell is="th" width={3 / 6}>
                     Value
                  </Cell>
                  <Cell is="th" width={1 / 6}>
                     Type
                  </Cell>
               </Row>
            </Header>
            <tbody>{this.renderRows({ name, data })}</tbody>
         </Table>
      );
   }
}

export default KeyValueTable;
