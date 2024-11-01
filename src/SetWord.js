import React from 'react';

let SetWord = () => {

  return(
    <form onSubmit={(e)=>{
      e.preventDefault();
      // 사용자가 입력한 단어(wordSetted)를 name="word" value로 넘김
      window.localStorage.setItem('secretWord', e.target.word.value);
    }}>
      <input type="text"  name="word" />
      <button type="submit">입력</button>
    </form>
  )

}

export default SetWord;