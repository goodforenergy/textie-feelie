import React, {useEffect, useState} from 'react';

import Sentences from './components/Sentences';

function App() {
  const [userText, setUserText] = useState('');
  const [incompleteSentence, setIncompleteSentence] = useState('');
  const [sentences, setSentences] = useState([]);

  function onUserKeyPress(event) {
    const k = event.target.value
    const incomplete = incompleteSentence + k;
    const regexp = /(.+?[.!?])(?=\s+|$)/g; // Removed the ignore leading space
    const newSentences = Array.from(incomplete.matchAll(regexp), m => m[0]);
    if (newSentences.length) {
      setIncompleteSentence('');
      setSentences(sentences.concat(newSentences[0]));
    } else {
      setIncompleteSentence(incomplete);
    }
    setUserText('');
  }
  
  useEffect(() => {
    let regexp = /(.+?[.!?])(?=\s+|$)/g; // Removed the ignore leading space
    let newSentences = Array.from(userText.matchAll(regexp), m => m[0]);
    // parse complete sentences
    // BREAK IT APART - userText

    // Hello => []
    // Hello. => ['Hello.']
    // Hello. My name is => ['Hello.']
    // Hello. My name is Helen! => ['Hello.', ' My name is Helen!']
    
    // const completeSentences = [];
    setSentences(newSentences);
  }, [userText]);
  
  return (
    <>
      <Sentences sentences={sentences}></Sentences>
      <span>{incompleteSentence}</span>
      <input type="text" value={userText} onChange={onUserKeyPress}></input>
    </>
  );
}

export default App;
