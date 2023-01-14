import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Home, SpecialOffer, FreeBooks } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/special-offer" element={<SpecialOffer />} />
        <Route path="/free-books" element={<FreeBooks />} />
        <Route path="*" element={<Navigate to="/special-offer" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
