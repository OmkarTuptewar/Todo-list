import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuapi"
 import MenuCard from "./MenuCard"
const Resturantt = () => {
    const [menuData,setMenuData]=useState(Menu)
    console.log(menuData)
    const filterItem=(category)=>{
      const updatedList=Menu.filter((curElem)=>{
        return curElem.category==category
   })
   setMenuData(updatedList) 
    }
  return(
  <>
    <nav className='navbar'>
      <div className='btn-group'>
        <button className='btn-group__item'onClick={()=>filterItem("breakfast")}>breakfast</button>
        <button className='btn-group__item'onClick={()=>filterItem("lunch")}>lunch</button>
        <button className='btn-group__item'onClick={()=>filterItem("evening")}>Evening</button>
        <button className='btn-group__item'onClick={()=>filterItem("dinner")}>Dinner</button>
        <button className='btn-group__item'onClick={()=>setMenuData(Menu)}  >all</button>

      </div>
       
    </nav>
     <MenuCard menuData={menuData}/> 
  </>
  )
}

export default Resturantt