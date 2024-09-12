import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import App from "./App.jsx";
import Container from "./components/container/Container.jsx";
import store from "./components/redux/store.js";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Container>
        <App />
      </Container>
    </Provider>
    <Toaster />
  </StrictMode>
);
