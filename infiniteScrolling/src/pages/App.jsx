import React, { useState, useEffect, useRef } from 'react';

import './App.scss';
import { Card, Loading } from '../components';
import randomColor from '../modules/randomColor';

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [colorArr, setColorArr] = useState(randomColor(20));
    const cardWrap = useRef(null);

    let target;

    useEffect(() => {
      target = cardWrap.current;

      if (target) {
          const io = new IntersectionObserver((entries, observer) => {
              const lastTarget = entries.pop();

              if (lastTarget.isIntersecting) {
                  setIsLoaded(true);
                  setTimeout(() => {
                      setColorArr([...colorArr, ...randomColor(5)]);
                      setIsLoaded(false);
                  }, 2000);
              }

              io.unobserve(lastTarget.target);
          }, { threshold: 1 });

          target.childNodes.forEach(t => io.observe(t));
      }
    });

    return (
        <div className="App" ref={cardWrap}>
            {colorArr.map((color, idx) => <Card key={idx} color={color} />)}
            {<Loading />}
        </div>
    );
}

export default App;