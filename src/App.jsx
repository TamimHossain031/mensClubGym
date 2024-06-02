import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import {Login} from "./components/Provider";
import Page from "./components/Page";
function App() {
  return (
    <div className="App">
      <Login>
        <Page />
      </Login>
    </div>
  );
}

export default App;
