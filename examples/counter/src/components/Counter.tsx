import React from 'react';

import { useSelector } from 'hodux';

import counter from '../counter';

const Counter: React.FC = () => {
  // useSelector(counter, selector, { equals, debugger });
  const { count, foo, loading, m } = useSelector(() => ({
    count: counter.state.count,
    foo: counter.state.nested.foo,
    loading: counter.loading,
    m: counter.m.has(1),
    // sys: Symbol('#sys')
  }));
  console.log('[Counter render]');

  return (
    <>
      <div>
        count: {count}, foo: {foo}, m: {m ? 'hasSet' : '--'}
      </div>
      <button onClick={() => counter.add()}>add 1</button>
      <button
        onClick={() => {
          counter.addx(10);
        }}
      >
        addx 10{loading ? '...' : ''}
      </button>
      <button onClick={counter.setAdd}>set add</button>
      <button onClick={counter.nested}>foo change</button>
    </>
  );
};

export default Counter;
