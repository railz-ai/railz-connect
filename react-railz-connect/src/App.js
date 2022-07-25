import logo from './logo.svg';
import './App.css';
import RailzConnect from '@railzai/railz-connect';
import {useEffect, useRef} from "react";

function App() {
  const ref = useRef();

  useEffect(() => {
    const widget = new RailzConnect();
    widget.mount({
      parentElement: ref.current,
      widgetId: '<Your Widget Id>'
    });
    // eslint-disable-next-line
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome</p>
      </header>
      <div>
        <div id='railz-connect' ref={ref}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://docs.railz.ai/docs/railz-connect-overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Railz Connect
        </a>
      </div>
    </div>
  );
}

export default App;
