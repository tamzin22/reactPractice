import './App.css';
import React from 'react';
// import Practice from './components/FunctionalComponent';
// import Prac from './components/ClassComponent';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBinding from './components/EventBinding';
// import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
       {/* <Message /> */}
       {/* <Counter />
       <FunctionClick />
       <ClassClick />
       <EventBinding /> */}
       <NameList />
       {/* <UserGreeting /> */}
        {/* <Practice  name = 'Kingsley'>
          <p>This is A Props Practice</p>
        </Practice>
        <Prac name = 'Amaitsa' /> */}
    </div>
  );
}

export default App;
