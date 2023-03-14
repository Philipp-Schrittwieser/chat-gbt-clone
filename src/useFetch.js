import React, { useState, useEffect } from "react";

   const useFetch = () => {
      const apiKey = "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";
      const humanRequest = "Wie gehts";

      async function fetchData() {

      try {
      const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
      prompt: humanRequest,
      model: "text-davinci-002",
      temperature: 0.5,
      max_tokens: 4000
      })
      });
      let data = await response.json();
      data=data.choices[0].text
      console.log(data);
      return data
      } 
      
      catch (error) {
      console.error(error);
      }
      }

      fetchData()
};

export default useFetch;
