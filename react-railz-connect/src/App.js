import logo from './logo.svg';
import './App.css';
import {RailzConnect} from '@railzai/railz-connect';
import {useEffect, useRef} from "react";

function App() {
  const ref = useRef();

  useEffect(() => {
    const widget = new RailzConnect();
    widget.mount({
      parentElement: ref.current,
      widgetId: 'wid_dev_457bbff4-1e4c-4fe1-899d-9ad74b87ec41'
    });
    // eslint-disable-next-line
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div id='railz-connect' ref={ref}></div>
    </div>
  );
}

export default App;
