// import React from "react";
// import { Container, Form, Button, Divider } from "semantic-ui-react";
// import { Icon } from "semantic-ui-react";
// import "./Register.css"; // Import the CSS file for custom styles

// const Registration = () => {
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
//           Already have an account? <a href="#">Login</a>
//         </p>

//         <Form.Group widths="equal">
//           <Button color="google plus" className="google">
//             <Icon name="google" id="signInDiv" color="white" /> Sign up with
//             Google
//           </Button>
//           <Button color="black" className="github">
//             <Icon name="github" color="white" /> Sign up with GitHub
//           </Button>
//         </Form.Group>
//       </Form>
//     </Container>
//   );
// };

// export default Registration;
