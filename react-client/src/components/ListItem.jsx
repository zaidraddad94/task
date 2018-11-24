import React from 'react';

const ListItem = (props) => (
  <div>
    { props.item.name} : 
    { props.item.ms}
  </div>
)

export default ListItem;