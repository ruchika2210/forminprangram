import Combined from "../src/Components/Combined";
import SaveAndNext from "./Components/SaveAndNext";
import { Routes, Route } from "react-router-dom";
import Summary from "./Components/Summary";
import MainCombined from "./Components/MainCombined";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainCombined />} />
        <Route exact path="summary" element={<Summary />}></Route>
      </Routes>
    </div>
  );
}

export default App;
