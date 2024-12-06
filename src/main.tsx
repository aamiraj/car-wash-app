import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./routes/router.tsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
