import React from "react";
import "./style.css";

const UseEffect =()=>{
    const initialData=0;
    const [myNum,setMyNum]=React.useState(initialData)


  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>

      </div>
    </>
  );
};

export default UseEffect;