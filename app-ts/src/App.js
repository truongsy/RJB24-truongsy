import logo from "./logo.svg";
import "./App.css";
import Test1 from './Examples/components/Test1'

const data = {
  id: 1,
  text: "Data 001",
  color: "red",
};

function App() {
  return (
    <>
      <Test1 input={data} number= {1}/>
    </>
  );
}

export default App;
