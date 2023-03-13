import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ReviewsPage from "./pages/ReviewsPage";
import HomePage from "./pages/HomePage";

function App() {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);

  return (
    <div className="App">
      <Header
        isMobileNavOpened={isMobileNavOpened}
        setIsMobileNavOpened={setIsMobileNavOpened}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
      </Routes>
    </div>
  );
}

export default App;
