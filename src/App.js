import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ReviewsPage from "./pages/ReviewsPage";
import HomePage from "./pages/HomePage";
import SingleReviewPage from "./pages/SingleReviewPage";

function App() {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);

  const reviewsPageElement = <ReviewsPage />;

  return (
    <div className="App">
      <Header
        isMobileNavOpened={isMobileNavOpened}
        setIsMobileNavOpened={setIsMobileNavOpened}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews" element={reviewsPageElement} />
        <Route path="/reviews/:category_slug" element={reviewsPageElement} />
        <Route path="/review/:review_id" element={<SingleReviewPage />} />
      </Routes>
    </div>
  );
}

export default App;
