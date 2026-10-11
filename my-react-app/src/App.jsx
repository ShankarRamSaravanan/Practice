// const App = () => {
//   const name = "Shank";
//   const numbers =[1,2,3,4];
//   const doubled = numbers.map(x=>x*2);



//   const users = [
//     {id:1, name:"shankar"},
//     {id:2, name:"ram"}
//   ]

//   return(
//     <div>
//       <h1>Hey {doubled}</h1>
//       <h1>{users.map(user => user.name)} </h1>
//     </div>
//   );
// }

// export default App;



//  const App = () => {

//   const cars = ["mustang","lambo"]
//   return(
//     <div>
//        <h1>Shankarram</h1>
  
//     </div>
   
//   );
// }


// const Sap = () => {
//   return(
//     <h1>This is from SAP</h1>  );
// }



// export {App, Sap}



// function App(props){
//   const goal =(a,b)=>{
//     alert(b.type);
//   }

//   const x =5;

//   return (
//     <div>
//       <button onClick={(event)=>goal("Gosal",event)} >Click me </button>
//       <h1> {x < 10 ? "Less than ten" : "Greater than"}</h1>
//       <h1>{props.color}</h1>
//       <h1>{props.Propss[1]}</h1>
      
//     </div>

//   );
// }


// export default App;
import { useEffect, useState } from "react";

function App(){
  const [number, setNumber] = useState(0);
  const [test, setString] = useState("Ram");

  function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
  function changeName(){
    setString("ShankarRam"+getRandomInt(26));
  }
  function numbers(){
    setNumber(number+1);
  }
  useEffect(()=>{
    setTimeout(()=>{
      setNumber(number*1);
    });
  },[test]);


  return(
    <div>
      <h2>{test}</h2>
      <button onClick={changeName}>Click here</button>
      <h1>{number}</h1>
    </div>
    
  );
}

export default App;


// import { useState } from 'react';


// function MyCar(prop) {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });

//   const colors = ["Red","Green","Yellow","White"];
//   const getRandomValue = arr => arr[Math.floor(Math.random() * arr.length)];
//   const updateColor = () => {
//     setCar(currentCar => {
//       return { ...currentCar, color:getRandomValue(colors)}
//     });
//   }

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//       <button
//         type="button"
//         onClick={updateColor}
//       >Blue</button>
//     </>
//   )
// }




// export default MyCar;