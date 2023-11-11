import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import SignUp from "./components/forms/SignUp";
import InternshipPage from "./pages/InternshipPage";
import Login from "./components/forms/Login";
import DescriptionPage from "./pages/DescriptionPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="internships" element={<InternshipPage />} />
            <Route path="internships/:id" element={<DescriptionPage />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}
export default App;
