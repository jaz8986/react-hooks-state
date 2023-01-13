import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    // console.log('before', count)
    //   setCount((currentCount) => currentCount + 1);
    // console.log('middle', count)
    //   setCount((currentCount) => currentCount + 1);  
    //   console.log('after', count)

      console.log('before', count)
        setCount(count + 2);
      console.log('middle', count)
      //   setCount(count + 2);  
      //   console.log('after', count)
    
  
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
