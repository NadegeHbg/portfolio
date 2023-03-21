import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./ts/layouts/RootLayout";

import HomePage from "./ts/pages/HomePage";
import Portfolio from "./ts/pages/Portfolio";
import Resume from "./ts/pages/Resume";
import Contact from "./ts/pages/Contact";
import { ThemeProvider } from "./ts/ThemeContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={< HomePage />} />
      <Route path="/portfolio" element={< Portfolio />} />
      <Route path="/resume" element={< Resume />} />
      <Route path="/contact" element={< Contact />} />
    </Route>
  )
)

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
