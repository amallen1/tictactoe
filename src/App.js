import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameMenu from "./components/GameMenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameMenu />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
