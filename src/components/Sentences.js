import EmotiveSentence from './EmotiveSentence';
import React from 'react';

/**
 * Render a bunch of sentences.
 * 
 * @param [object = {}] props
 * @param [string[]=[]] props.sentences list of sentences to parse
 */
function Sentences({sentences = []} = {}) {
  return sentences.map(s => <EmotiveSentence sentence={s}></EmotiveSentence>)
}

export default Sentences;
