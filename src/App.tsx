import Kanbas from "./Kanbas";
import Labs from './Labs';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import "./index.css"

function App() {
  return (
    <HashRouter>
    <div className="h-100">

      <Routes>
      <Route path="/" element={<Navigate to="Labs" />} />
      <Route path="/Labs/*"
             element={<Labs />} />
      <Route path="/Kanbas/*" element={<Kanbas />} />
      </Routes>
      {/* Kanbas */}


    </div>
    </HashRouter>
  );
}

export default App;
