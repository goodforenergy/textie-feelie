import './EmotiveSentence.css';

import React from 'react';

/**
 * Render a touchy feely sentence.
 * 
 * @param object props
 * @param string props.sentence sentence to render
 */

function EmotiveSentence({sentence}) {
  const emotion = 'anger'; //getEmotion(emotion);

  return <span className={emotion}>{sentence}</span>;
}

export default EmotiveSentence;
