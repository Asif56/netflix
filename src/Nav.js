import React,{useState,useEffect} from 'react'
import './Nav.css'

function Nav() {

    const [show,handleShow]=useState(false)

    useEffect(()=>{
       window.addEventListener("scroll",()=>{
           if(window.scrollY>100){
             handleShow(true)
           }else handleShow(false)
       });
       return ()=>{
           window.removeEventListener("scroll")
       };
    },[])

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className='nav_logo' 
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png'
      />
      <img 
      className='nav_avatar'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/800px-Netflix_2015_N_logo.svg.png'
      />
    </div>
  )
}

export default Nav
