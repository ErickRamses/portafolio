import React, { useRef, useState } from 'react'
import "./main.css"
const Name = () => {


useState()
let chekRef=useRef(null)
let infoRef=useRef(null)
let yoRef=useRef(null)

//chekRef
function theme(){
  if(!chekRef.current.checked){
     document.documentElement.style.setProperty('--back',"#9fbdea")
     document.documentElement.style.setProperty('--lol',"#6e7f9a")
     document.documentElement.style.setProperty('--whit',"black")
  }  
  else{
     document.documentElement.style.setProperty('--back',"#222831")
     document.documentElement.style.setProperty('--lol',"#393E46")
     document.documentElement.style.setProperty('--whit',"white")
  }
}


async function getting(){
  
  infoRef.current.innerHTML="<div class=load></div><div class=load></div><div class=load></div>"
   
    try {
      //   yo =document.getElementById("gi").value

    let res =await fetch(`https://api.nationalize.io/?name=${yoRef.current.value}`)
   let data =await res.json();        
      
       //console.log(data)         
 infoRef.current.innerText=(data.country[0].country_id+" "+data.country[0].probability.toFixed(2)+"%"+"\n"+data.country[1].country_id+" "+data.country[1].probability.toFixed(2) +"%"+"\n" +data.country[2].country_id+" "+data.country[2].probability.toFixed(2)+"%" )
        
    } catch (error) {
      infoRef.current.innerText="not a valid name"
        
    }

        
     }

useState(()=>{
 let info=document.getElementById("info");
 


 







},[])











    
  return (
    <div>
        <>
  <div className="right">
    <label htmlFor="trajectory">🌙</label>
    <label className="switch">
      <input ref={chekRef} id="trajectory" type="checkbox" onClick={theme} defaultChecked={true} />
      <span className="slider round" />
    </label>
  </div>
  <div id="lol" className="">
    <br />
    write a name this API will predict nationality from a name
    <br />
    <br />
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div>
        <input id="gi" type="text" ref={yoRef} />
      </div>
      <div>
        <button className="button" onClick={getting}>
          search
        </button>
      </div>
    </div>
    <h2 ref={infoRef} id="inf" style={{ textAlign: "left" }} />
  </div>
</>


    </div>
  )
}

export default Name