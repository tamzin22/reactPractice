import './App.css';
import React from 'react';
import Practice from './components/FunctionalComponent';
import Prac from './components/ClassComponent';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
       {/* <Message /> */}
       <Counter />
        {/* <Practice  name = 'Kingsley'>
          <p>This is A Props Practice</p>
        </Practice>
        <Prac name = 'Amaitsa' /> */}
    </div>
  );
}

export default App;
