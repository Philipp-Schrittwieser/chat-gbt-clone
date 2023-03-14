import React, { useState, useEffect } from 'react';
//import useFetch from './useFetch';
//import usePromise from './usePromise';

let wert=0;


const Test = () => {
   
   // const OneTimeRenderingComponent = () => {
   //    useEffect(() => {
   //      addToArray(wert)
   //      console.log('This effect only runs once');
   //    }, []);
   // }

   // OneTimeRenderingComponent()


  const [alleEingabeWerte, setAlleEingabeWerte] = useState([0])
  const [eingabeWert, setEingabeWert] = useState(0);

  const addToArray = (zusatz) => {
   setAlleEingabeWerte((werte)=> {
      return [...werte,zusatz]
   })
  }

  const erhöheEingabe = () => {
   wert=wert+1;
   setEingabeWert(wert)
   addToArray(wert)
   console.log(alleEingabeWerte)
  }
  

   return (
      <div>
         <p>Wert= {eingabeWert}</p>
         <button onClick={erhöheEingabe}>Erhöhe</button>
      </div>
      );
}
 
export default Test;