import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Simon from "./pages/Simon/Simon";

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gregory" element={<Simon/>}/>
      </Routes>
    </HashRouter>
  );
}
