import { useState } from "react";
import Counter from "./components/Counter";
import "./styles/style.css";

function App() {
  
  let [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  }

  const handleCountMinus = () => {
    if(count === 0) {
      count = 0;
    }else{
      setCount(count - 1);
    }
  }
  
  return (
    <div className="App">
      <Counter handleCount={handleCount} handleCountMinus={handleCountMinus} count={count}/>
    </div>
  );
}

export default App;
