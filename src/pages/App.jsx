import Home from "./Home";
import AppLayout from "./AppLayout";
import About from "./About";
import Products from "./Products";
import Impressum from "./Impressum";
import { IconContext } from "phosphor-react";
import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "dashboard",
    element: <AppLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "JC-Website/products", element: <Products /> },
      { path: "JC-Website/about-us", element: <About /> },
      { path: "JC-Website/impressum", element: <Impressum /> },
    ],
  },
]);
function App() {
  return (
    <>
      <MantineProvider>
        <IconContext.Provider
          value={{
            color: "grey",
            size: 32,
            weight: "bold",
            mirrored: false,
          }}
        >
          <React.StrictMode>
            <RouterProvider router={router} />
          </React.StrictMode>
        </IconContext.Provider>
      </MantineProvider>
    </>
  );
}

export default App;
