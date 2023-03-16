import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/User.context";
import { CategoriesProvider } from "./contexts/Categories.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <CategoriesProvider>
        <App />
      </CategoriesProvider>
    </UserProvider>
  </BrowserRouter>
);
