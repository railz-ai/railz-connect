import './App.css';
import RailzConnect from '@railzai/railz-connect';
import React, {useEffect, useRef} from "react";

const widget = new RailzConnect();

function App() {
  const ref = useRef();

  useEffect(() => {
    widget.mount({
      parentElement: ref.current,
      widgetId: '<Your Widget Id>',
    });
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome</p>
        <p>This is a sample Railz Connect project using React</p>
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://docs.railz.ai/docs/railz-connect-overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Railz Connect
        </a>
      </header>
      <div>
        <div id='railz-connect' ref={ref}/>
      </div>
    </div>
  );
}

export default App;
