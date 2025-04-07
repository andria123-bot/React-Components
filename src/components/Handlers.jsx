import { useState } from 'react';

const Handlers = () => {
  const [text, setText] = useState('this is the most normal text that you can imagine');

  const handleClick = () => {
    setText('updated with handleClick')
  }

  const handleCorrect = () => {
    setText((prevText) => `${text} updated with callback`)
  }

  return(
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleCorrect}>Correct Click me</button>
    </div>
  )
}

export default Handlers;