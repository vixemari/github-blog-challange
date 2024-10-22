import { Route, Routes } from "react-router-dom";
import { PostDetails } from "./pages/PostDetails";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-details" element={<PostDetails />} />
    </Routes>

  )
}
