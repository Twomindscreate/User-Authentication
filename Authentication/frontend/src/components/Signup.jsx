// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { Container, Form, Button, Divider, Grid } from "semantic-ui-react";
// import { Icon } from "semantic-ui-react";
// import "./Register.css";
// const Signup = () => {
//   const navigate = useNavigate();
//   const [formdata, setFormdata] = useState({
//     email: "",
//     first_name: "",
//     last_name: "",
//     password: "",
//     password2: "",
//   });
//   const [error, setError] = useState("");

//   const handleOnchange = (e) => {
//     setFormdata({ ...formdata, [e.target.name]: e.target.value });
//   };

//   const handleSigninWithGoogle = async (response) => {
//     const payload = response.credential;
//     try {
//       const server_res = await axios.post("http://localhost:8000/api/google/", {
//         access_token: payload,
//       });
//       console.log(server_res.data);
//       // handle success (e.g., store tokens, redirect, etc.)
//     } catch (err) {
//       console.error("Google sign-in error", err);
//       // handle error
//     }
//   };

//   useEffect(() => {
//     // Load the Google API script dynamically
//     const loadGoogleScript = () => {
//       const script = document.createElement("script");
//       script.src = "https://accounts.google.com/gsi/client";
//       script.async = true;
//       script.onload = () => {
//         /* global google */
//         google.accounts.id.initialize({
//           client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
//           callback: handleSigninWithGoogle,
//         });
//         google.accounts.id.renderButton(document.getElementById("signInDiv"), {
//           theme: "outline",
//           size: "large",
//           text: "continue_with",
//           shape: "circle",
//           width: "280",
//         });
//       };
//       document.body.appendChild(script);
//     };
//     loadGoogleScript();
//   }, []);

//   const { email, first_name, last_name, password, password2 } = formdata;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== password2) {
//       setError("Passwords do not match");
//       return;
//     }
//     try {
//       const response = await axios.post(
//         "http://localhost:8000/api/register/",
//         formdata
//       );
//       console.log(response.data);
//       const result = response.data;
//       if (response.status === 201) {
//         navigate("/otp/verify");
//         toast.success(result.message);
//       }
//     } catch (err) {
//       console.error("Registration error", err);
//       setError("An error occurred during registration.");
//       // handle error
//     }
//   };

//   return (
//     <Container text>
//       <Form className="ui form" onSubmit={handleSubmit}>
//         <h2 className="ui header">
//           <i class="user secret icon"></i>Registration Form
//         </h2>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         <Form.Field required>
//           <label>
//             <Icon name="mail" color="blue" /> Email
//           </label>
//           <input
//             placeholder="Email"
//             type="email"
//             className="glowing-input"
//             name="email"
//             value={email}
//             onChange={handleOnchange}
//             required
//           />
//         </Form.Field>
//         <Form.Group widths="equal">
//           <Form.Field required>
//             <label>
//               <Icon name="user" color="teal" /> First Name
//             </label>
//             <input
//               placeholder="First Name"
//               type="text"
//               className="glowing-input"
//               name="first_name"
//               value={first_name}
//               onChange={handleOnchange}
//               required
//             />
//           </Form.Field>
//           <Form.Field required>
//             <label>
//               <Icon name="user" color="teal" /> Last Name
//             </label>
//             <input
//               placeholder="Last Name"
//               type="text"
//               className="glowing-input"
//               name="last_name"
//               value={last_name}
//               onChange={handleOnchange}
//               required
//             />
//           </Form.Field>
//         </Form.Group>
//         <Form.Group widths="equal">
//           <Form.Field required>
//             <label>
//               <Icon name="lock" color="red" /> Password
//             </label>
//             <input
//               placeholder="Password"
//               type="password"
//               className="glowing-input"
//               name="password"
//               value={password}
//               onChange={handleOnchange}
//               required
//             />
//           </Form.Field>
//           <Form.Field required>
//             <label>
//               <Icon name="lock" color="red" /> Confirm Password
//             </label>
//             <input
//               placeholder="Confirm Password"
//               type="password"
//               className="glowing-input"
//               name="password2"
//               value={password2}
//               onChange={handleOnchange}
//               required
//             />
//           </Form.Field>
//         </Form.Group>

//         <Button type="submit" color="blue">
//           <Icon name="check" color="white" /> Register
//         </Button>
//         <Divider horizontal>Or</Divider>
//         <p className="test">
//           Already have an account? <a href="/login">Login</a>
//         </p>
//       </Form>
//       <Grid centered stackable style={{ padding: "18px" }}>
//         <Grid.Row>
//           <Grid.Column width={8}>
//             <Button fluid color="google plus" className="google">
//               <Icon name="google" color="white" /> Sign up with Google
//             </Button>
//           </Grid.Column>
//           <Grid.Column width={8}>
//             <Button fluid color="black" className="github">
//               <Icon name="github" color="white" /> Sign up with GitHub
//             </Button>
//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//     </Container>
//   );
// };

// export default Signup;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState("");

  const handleOnchange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSigninWithGoogle = async (response) => {
    const payload = response.credential;
    const server_res = await axios.post("http://localhost:8000/api/google/", {
      access_token: payload,
    });
    console.log(server_res.data);
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleSigninWithGoogle,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
      text: "continue_with",
      shape: "circle",
      width: "280",
    });
  }, []);

  const { email, first_name, last_name, password, password2 } = formdata;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:8000/api/register/",
      formdata
    );
    console.log(response.data);
    const result = response.data;
    if (response.status === 201) {
      navigate("/otp/verify");
      toast.success(result.message);
    }
  };

  return (
    <div>
      <div className="form-container">
        <div style={{ width: "100%" }} className="wrapper">
          <h2>create account</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Email Address:</label>
              <input
                type="text"
                className="email-form"
                name="email"
                value={email}
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">First Name:</label>
              <input
                type="text"
                className="email-form"
                name="first_name"
                value={first_name}
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Last Name:</label>
              <input
                type="text"
                className="email-form"
                name="last_name"
                value={last_name}
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Password:</label>
              <input
                type="text"
                className="email-form"
                name="password"
                value={password}
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Confirm Password:</label>
              <input
                type="text"
                className="p"
                name="password2"
                value={password2}
                onChange={handleOnchange}
              />
            </div>
            <input type="submit" value="Submit" className="submitButton" />
          </form>
          <h3 className="text-option">Or</h3>
          <div className="githubContainer">
            <button>Sign up with Github</button>
          </div>
          <div className="googleContainer">
            <div id="signInDiv" className="gsignIn"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
