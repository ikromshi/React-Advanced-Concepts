import React, { Fragment, ReactElement } from 'react';
import { isPropertySignature } from 'typescript';
import './App.css';

type Prop = {
  greeting: string;
}

const Temp: React.FC<Prop> = (prop): JSX.Element => {
  return (
    <Fragment>
      {
        prop.greeting === "hi" ?
        `The passed message says hi: ${prop.greeting}` :
        <Fragment>The message was {prop.greeting}</Fragment>
      }
    </Fragment>
  )
}

function App() {
  return (
    <div className="App">
      <Temp greeting="hi"/>
    </div>
  );
}

export default App;

/**
 * Fragment use cases:
 *    A wrapper for multiple child elements;
 *    Good replacement for a div that's not going to be rendered
 *    Can replace string interpolation
 * 
 * Fragment replacements:
 *    [ child1, child2... ] => Cannot pass props
 *    <> child1, child2... </> => Cannot pass props
 */