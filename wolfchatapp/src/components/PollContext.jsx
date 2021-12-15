import React, { createContext, useState } from "react";

export const PollContext = createContext();

const PollProvider = ({ children }) => {
  const [ question, setQuestion ] = useState('');
  const [ answers, setAnswers ] = useState([
    { options: '', votes: 0},
    { options: '', votes: 0},
    { options: '', votes: 0},
    { options: '', votes: 0},
  ]);

  return (
    <PollContext.Provider value={{ question, setQuestion, answers, setAnswers }}>
      {children}
    </PollContext.Provider>
  );
}


export default PollProvider;
