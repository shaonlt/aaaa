import logo from './logo.svg';
import './App.css';

function App() {
  function openAlipay() {
    window.location.href = 'alipays://platformapi/startapp?appId=2021002113634235&page=pages/web-view/index?jumpUrl=https%3A%2F%2Fm-zl.mucfc.com%2F0ZFBMNPJD%2Floan%2F%23%2Fpages%2Findex%2Findex%3FneedLogin%3D1';
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={openAlipay}>Open Alipay Mini Program</button>
      </header>
    </div>
  );
}

export default App;
