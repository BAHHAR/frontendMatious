import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";

import Index from "../components/Index";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Index />}>
        {/* ... etc. */}
      </Route>
    )
  );

export default router