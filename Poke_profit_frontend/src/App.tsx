import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LogsPage from "./pages/LogsPage";
import StartBreedingPage from "./pages/StartBreedingPage";
function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 flex gap-4">
        <Link to="/">My Logs</Link>
        <Link to="/start">Start Breeding</Link>
      </nav>

      <Routes>
        <Route path="/" element={<LogsPage />} />
        <Route path="/start" element={<StartBreedingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
