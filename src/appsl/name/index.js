// function getting(){
//     let yo =document.getElementById("gi").value
    
   
//     fetch(`https://api.nationalize.io/?name=${yo}`)
//         .then(res => res.json())
//         .then(data =>{console.log(data)
            
//             document.getElementById("info").innerText=data.name
//         })
//     }


//on load and a fetch to a site of countries


let info=document.getElementById("info");
let lol=document.getElementById("lol")

let chek= document.getElementById("trajectory")
chek.addEventListener('click',()=>{
   if(!chek.checked){
      document.documentElement.style.setProperty('--back',"#9fbdea")
      document.documentElement.style.setProperty('--lol',"#6e7f9a")
      document.documentElement.style.setProperty('--whit',"black")

   }  
   else{
      document.documentElement.style.setProperty('--back',"#222831")
      document.documentElement.style.setProperty('--lol',"#393E46")
      document.documentElement.style.setProperty('--whit',"white")


   }
   
   console.log(chek.checked)

})




let yo=document.getElementById("gi").value
async function getting(){

  info.innerHTML="<div class=load></div><div class=load></div><div class=load></div>"
   
    try {
         yo =document.getElementById("gi").value

    let res =  await   fetch(`https://api.nationalize.io/?name=${yo}`)
    let data =await res.json();        
      
       //console.log(data)         
 document.getElementById("info").innerText=(data.country[0].country_id+" "+data.country[0].probability.toFixed(2)+"%"+"\n"+data.country[1].country_id+" "+data.country[1].probability.toFixed(2) +"%"+"\n" +data.country[2].country_id+" "+data.country[2].probability.toFixed(2)+"%" )
        
    } catch (error) {
 document.getElementById("info").innerText="not a valid name"
        console.log(error)
    }

        
     }
     //event listener to the value xd
// info.addEventListener('',()=>{
//    console.log("xd")
// })     
