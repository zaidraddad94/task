import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    
    THERE AER { props.items.length } MASSEGES.
    { props.items.map(item => <ListItem item={item}/>)}
  </div>
)

export default List;