import React, { Component } from "react";

// Complete this Component
const ListItem = (props) => {
  let currItem = props.currItem;
  return (
    <div
      className="ListItem"
      role="img"
      style={{
        height: 30,
        backgroundColor: currItem.bgColor,
      }}>
      <img src={currItem.icon} alt="" />
      <a href={currItem.link}>{currItem.name}</a>
    </div>
  );
};

export default ListItem;
