import React, { useEffect, useState } from 'react';
import Letter from './Letter';


const LetterGrid = ({secretWord, guessedLetters, answerLength, complete})=>{

  const [answer, setAnswer] = useState(0);

  //answer 값이 변경되면 answerLength와 비교해서 정답 여부 파악
  useEffect(()=>{
    if(answer ===answerLength ){
      alert('정답입니다!');
      complete();
    }
  },[answer]);

  /*
  guessedLetters 값이 변경되면 answer를 업데이트
  
  부모에게 전달받은 그 단어를 글자글자 쪼개기
  let letters = secretWord.split().map(letter => <span>letter</span>);
  */
  useEffect(()=>{
    
    let newCount = [...secretWord].reduce((count,letter)=>{
      return count + (guessedLetters.includes(letter.toLowerCase())? 1:0);
    },0);
    setAnswer(newCount);

    console.log('실행', newCount);

  },[guessedLetters])

  let letters = [...secretWord].map((letter, idx)=>{
    // isShown -> 사용자가 입력한 게 정답과 일치한지 확인하도록 설정한 변수
    // let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
    let isShown = guessedLetters.includes(letter.toLowerCase());
    return(
      <Letter key={idx} value={letter} isShown={isShown}></Letter>
    )
});
  /*
  secretWord의 문자열을 배열로 변환하고, 그 배열에 각각의 값으로 <span><span>
  */

  return (
    <div className="letters">
    
        {letters}

    </div>
  );
}



export default LetterGrid;