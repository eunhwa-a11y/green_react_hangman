import React from "react";

const Button = ({value, onclick})=>{
  const [isClicked,setIsClicked] = useState(false);
  // 버튼을 클릭하면 그 해당 버튼은 안 보이게 클래스명 부여
  let className = '';

  if(isClicked){
    className = 'hidden';
  }

  let clickHandler = ()=>{
    setIsClicked(true)
    onclick(value)
  }

  return(
    <button className={className} onClick={clickHandler}>{value}</button>
  )
}

export default Button;