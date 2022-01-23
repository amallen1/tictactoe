import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameMenu from "./components/GameMenu";
import GameStart from "./components/GameStart";
import { GameProvider } from "./contexts/GameContext";

function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GameMenu />}></Route>
          <Route path="gamestart" element={<GameStart />}></Route>
        </Routes>
      </BrowserRouter>
    </GameProvider>
  );
}

export default App;
