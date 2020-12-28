import React, { Fragment, useState } from 'react';

const App = () =>  {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)
  const resetCounter = () => setCount(0)
  const timesCounter = () => setCount(count * 2)
  const threeCount = () => setCount(previousCount => previousCount % 3 === 0 ? previousCount / 3 : previousCount)

  return (
    <Fragment>
      <div>
        count: {count}
      </div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>-1</button>
      <button onClick={resetCounter}>reset</button>
      <button onClick={timesCounter}>×2</button>
      <button onClick={threeCount}>3</button>
    </Fragment>
  );
}

export default App;
