import React from "react";

const USAState = (props) => {
  return (
    <path d={props.dimensions} fill={props.fill} opacity={props.opacity} data-name={props.state} className={`${props.state} state`} onClick={props.onClickState} />
  );
}
export default USAState;
