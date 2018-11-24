import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h2> massges </h2>
    There are { props.items.length } items.
    { props.items.map(item => <ListItem item={item}/>)}
  </div>
)

export default List;