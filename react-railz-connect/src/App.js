import logo from './logo.svg';
import './App.css';
import RailzConnect from '@railzai/railz-connect';
import {useEffect, useRef, useState} from "react";

function App() {
  const ref = useRef();
  const [showComponents, setShowComponents] = useState(false);

  useEffect(() => {
    const widget = new RailzConnect();
    widget.mount({
      parentElement: ref.current,
      widgetId: 'wid'
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
        {/*<p>*/}
        {/*  <button*/}
        {/*    className="App-button"*/}
        {/*    onClick={() => setShowComponents(!showComponents)}*/}
        {/*  >*/}
        {/*    {showComponents ? <span>Hide</span> : <span>Show</span> } Web Component*/}
        {/*  </button>*/}
        {/*</p>*/}
        {showComponents && <div>
          <p>Web Component Version</p>
          <railz-connect widgetId='wid'/>
        </div>}
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
