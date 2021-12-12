import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);   // !!! mandatory
  }, [index])

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span> Reviews
        </h2>
      </div>
      <Slider people={people} index={index} indexChanger={setIndex} />
    </section>
  )
}

export default App;
