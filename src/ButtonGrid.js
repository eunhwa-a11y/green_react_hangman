import React, { useState } from 'react';
import Button from './Button';


const ButtonGrid = ({onclick}) => {
  let letters = [
    'A','B','C','D','E','F','G','H',
    'I','J','K','L','M','N','O','P',
    'Q','R','S','T','U','V','W','X',
    'Y','Z'
  ];

  let buttons = letters.map((letter,idx) => (
    /*
    오류 방지를 위해 key 속성 넣음
    버튼을 입력하면 입력한 버튼의 알파벳을 매개변수 l로 받고
    */
    <Button value={letter} onclick={onclick} key={idx} />
  ))


  return (
    <div className="buttons">
      {buttons}
    </div>
  );
}



export default ButtonGrid;