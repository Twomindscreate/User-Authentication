import React, { useState } from "react";
import AxiosInstance from "../utils/AxiosInstance";
import { toast } from "react-toastify";
const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AxiosInstance.post("password-reset/", { email });
      toast.success("Check your email password reset link has been sent.");
    } catch (error) {
      toast.error("Failed to send password reset email.");
    }
    setEmail("");
  };
  return (
    <div className="form-container">
      <div style={{ width: "100%" }} className="wrapper">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Send Password Reset Link</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
