import React, { useState, useRef, useEffect } from 'react';
import { usePushIntoArray } from './usePushIntoArray';

//import useFetch from './useFetch';
//import usePromise from './usePromise';

let startingTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

const Chat = () => {

  const {array:quesANDansw, pushIntoArray} = usePushIntoArray([])
  let gbtResponse="";


  // Focus auf Textbox
  const inputRef = useRef(null);

  const setFocus = () => {
        useEffect(() => {
            inputRef.current.focus();
        },[]);
   }

  // GET INPUT FROM USER
  const [inputValue, setInputValue] = useState('')
  const [showLoading,setShowLoading] = useState(false)

  //const currentTime = new Date().toLocaleTimeString()
  const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

  //const [fetchData, setFetchData] = useState({});
  //const [quesANDansw, setquesANDansw] = useState([])

  const HandleInputChange = (event) => {
      setInputValue(event.target.value)
      //console.log(event.target.value)
    };

    const handleKeyDown = (event) => {
      if (event.keyCode === 13) {
        console.log('Form submitted')
        sendInput(inputValue)
      }
    };

    // const addToArray = (zusatz) => {
    //   setquesANDansw((werte)=> {
    //      return [...werte,zusatz]
    //   })
    //  }

     const tellError = () => {
      pushIntoArray('Tut mir leid, es ist ein Fehler aufgetreten.',currentTime)
      //addToArray('Tut mir leid, es ist ein Fehler aufgetreten.')
     }


    const sendInput =  (input) => { 
          setTimeout(()=>{setShowLoading(true)},750)
          setInputValue("")
          console.log("input:",input)
          pushIntoArray(input,currentTime)
          //addToArray(input)
          //console.log(quesANDansw,input)
          console.log(input)

          const API_KEY = /* Please enter your API-Key here*/
          const API_URL = `https://api.openai.com/v1/completions
          ` 
          console.log("run fetch")

          return fetch(API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify(
              {
                prompt: input,
                "model": "text-davinci-003",
                max_tokens: 1024,
                temperature: 0.5
              })
          })
          .then(response => {
            //console.log("response:",response)
            if (!response.ok) {
              setShowLoading(false)
              throw new Error(`Error: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            setShowLoading(false)
            console.log("gbt-data",data.choices[0].text)
            //addToArray(data.choices[0].text);
            gbtResponse=data.choices[0].text
            pushIntoArray(gbtResponse,currentTime)
            //console.log([quesANDansw,data.choices[0].text])
            //setChatGBTValue(data.choices[0].text)
          })
          .catch(error => {
            console.error(error);
            tellError()
            });
      } 

    /* HAUPTPROGRAMM */
      setFocus()

   return (     

      <div className="chat-area">      
        

      <div className="container-gbt container">
           <h4>Chat-GBT-Clone</h4>
           <p>Wie kann ich dir weiterhelfen?</p>
           <span className="time-right">{startingTime}</span>
         </div>      
          
        {quesANDansw?.map((object, index) => {
          console.log("array:",quesANDansw)
          let containerClass, h, timeClass;
          
          if (index % 2 === 0) {
            containerClass = "container-self container darker";
            h = "Meine Nachricht";
            timeClass = "time-left";
          }
          
          else {
            containerClass = "container-gbt container";
            h = "Chat-GBT";
            timeClass = "time-right";
          }

          return (
            <div className={containerClass} key={index}>
              <h4>{h}</h4>
              <p>{object.text}</p>
              <span className={timeClass}>{object.time}</span>
            </div>
          );

        })}
      
         
              { showLoading && (
                <div className="container-gbt container">
                  <div className="loading-container">
                    <div className="loading"></div>
                  </div>
                  </div>)
                }          
         

         <div className="chat-input">
          <div className="chat-field">
             <form> { /*onSubmit={handleSubmit} */}

                <input
                  type="text"
                  ref={inputRef}
                  required
                   value={inputValue}
                   onChange={HandleInputChange}
                   onKeyDown={() => {
                    if (event.keyCode === 13) {
                      console.log('Form submitted')
                      sendInput(inputValue)
                    }}
                  }
                  />
             </form>
          </div>
          <div className="chat-button">
            <button onClick={()=>sendInput(inputValue)}>Senden</button>
            </div>
      </div>         
      </div>      
    );
}
 
export default Chat;