import React, { useState } from 'react';
import LetterGrid from './LetterGrid';
import ButtonGrid from './ButtonGrid';
/*
function GameBoard(props){
  return (
    <div className="App">
      <h1>{props.secretWord}</h1>
    </div>
  )
}

function GameBoard({secretWord}){
  return (
    <div className="App">
      <h1>{secretWord}</h1>
    </div>
  )
}
*/

const GameBoard = ({secretWord, maxError, answerLength})=>{ // maxError App.js(부모)한테 받아옴
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [errorCount, setErrorCount] = useState(0);

  let clickHandler = (value) => { // 사용자가 입력한 알파벳
    let val = value.toLowerCase(); // 대문자 소문자로 변경
    /*
    복사본 생성 / 복사본 값 추가 / 기존 배열 -> 복사본 변경
    let gl = [...guessedLetters]; 복사본 생성
    gl.push(val); 복사본 값 추가
    setGuessedLetters(gl); 복사본 변경 
    */

    setGuessedLetters(prev=>[...prev,val]);
    /* 틀리면 errorCount를 1씩 증가 시킨다. */
    if(secretWord.indexOf(val) === -1){
      setErrorCount(errorCount + 1);
    }


  }

  let reset = ()=>{
    setErrorCount(0);
    setGuessedLetters([]);
    let buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(item => item.classList.remove('hidden'));
  }

  return (
    // return 삼항 연산자나 비교 연산자 사용 / 그냥 js는 사용 불가
    <>
    { errorCount<maxError ?
      <div className={secretWord ? '':'hidden'}>
      틀린횟수 : {errorCount} / {maxError}
      <LetterGrid secretWord={secretWord} complete={reset} guessedLetters={guessedLetters} answerLength={answerLength} />
      <ButtonGrid onclick={clickHandler}/>     
        {/* {조건 ? 할 일 : 거짓}
            {errorCount < maxError ? <ButtonGrid onclick={clickHandler}/> : null}
            if(거짓) && b  앞에 있는 게 거짓이면  && 뒤를 실행하지 않는다
            {errorCount < maxError && <ButtonGrid onclick={clickHandler}/>} */}   
      </div>
      :
      <button className={secretWord ? '':'hidden'} onClick={reset}>Retry</button>
    }
    </>
  );
}



export default GameBoard;