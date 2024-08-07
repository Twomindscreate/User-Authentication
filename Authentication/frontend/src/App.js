// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Login from "./components/Login";
import VerifyEmail from "./components/VerifyEmail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import CreateProfile from "./components/CreateProfile";
// import "semantic-ui-css/semantic.min.css";
// import { FaGoogle, FaGithub } from "react-icons/fa";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Profile />} />
          <Route path="/otp/verify" element={<VerifyEmail />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/register" element={<RegistrationForm />} />

          <Route
            path="/password-reset-confirm/:uid/:token"
            element={<ResetPassword />}
          />
          <Route path="/profile" element={<CreateProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
