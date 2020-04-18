import React, {useEffect, useState} from 'react';

import Sentences from './components/Sentences';

function App() {
  const [userText, setUserText] = useState('');
  const [sentences, setSentences] = useState([]);
  
  useEffect(() => {
    // parse complete sentences
    // BREAK IT APART - userText

    // Hello => []
    // Hello. => ['Hello.']
    // Hello. My name is => ['Hello.']
    // Hello. My name is Helen! => ['Hello.', 'My name is Helen!']
    
    const completeSentences = [];
    setSentences(completeSentences);
  }, [userText]);
  
  return (
    <>
      <textarea value={userText} onChange={(event) => {setUserText(event.target.value)}}></textarea>
      <Sentences sentences={sentences}></Sentences>
    </>
  );
}

export default App;
