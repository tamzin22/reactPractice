import React from 'react';

//functional components

const Practice  = props => {
    console.log(props)
   return (
       <div>
             <h1>Hello {props.name}</h1>
             {props.children}
       </div>
       
   )
}

export default Practice;