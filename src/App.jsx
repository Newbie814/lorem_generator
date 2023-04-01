import { useState } from 'react';

import data from './data';
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };

  return (
    <section className='section-center'>
      <h4>tired of boring lorem?</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          min={1}
          step={1}
          max={8}
          value={count}
          onChange={handleChange}
        />
        <button className='btn' type='submit'>
          generate
        </button>
      </form>
      {/* render users below */}
      <article className='lorem-text'>
        {text.map((item) => {
          const id = nanoid();
          return <p key={id}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
