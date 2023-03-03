import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

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
  return <RouterProvider router={router} />;
}

export default App;
