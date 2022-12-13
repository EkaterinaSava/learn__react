import { useEffect } from 'react';
import { useCounter } from './case3';

function updateClicksCount(clicksCount) {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        clicksCount,
      });
    }, 1000);
  });
}

export function EffectCounter() {
  const [count, increment] = useCounter(0, 1);
  
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    (async () => {
      const response = await updateClicksCount(count);
      console.log(response);
    })();
  }, [count]);

  useEffect(() => {
    console.log(`>> running effect ${count}`);

    return () => {
      console.log(`>> cleaning up effect ${count}`)
    };
  }, [count]);

  useEffect(() => {
    console.log('component did mount');

    return () => {
      console.log('component will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('executed AFTER each render');
  }); // deps list is missing

  return (
    <div>
      <p>Currency count: {count}</p>
      <button onClick={increment}>+</button>
      <p>(look console.log)</p>
    </div>
  );
}