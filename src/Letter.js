import React from "react";

const Letter = ({value, isShown}) => {

  // isShown의 값이 true라고 한다면 값을 보여 줘라
  let output = '';
  if(isShown){
    output = value;
  }
  return(
    <span>{output}</span>
  )
}

export default Letter;