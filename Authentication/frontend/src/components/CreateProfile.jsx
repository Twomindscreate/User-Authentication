import React, { useEffect, useState } from "react";
import AxiosInstance from "../utils/AxiosInstance"; // Import the configured Axios instance
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Container,
  Col,
  Row,
  Alert,
} from "reactstrap";

const CreateProfile = () => {
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    bio: "",
    username: "",
    phone_number: "",
    address: "",
    gender: "",
    occupation: "",
    department: "",
    role: "",
    birth_date: "",
    profile_picture: null,
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    // Fetch profile data when component mounts
    AxiosInstance.get("profile/")
      .then((response) => {
        setProfile(response.data);
        setFormData(response.data);
      })
      .catch((err) => setError("Error fetching profile data"));
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profile_picture") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    AxiosInstance.put("profile/", formDataToSend, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        setProfile(response.data);
        setSuccess("Profile updated successfully");
        setError(null);
      })
      .catch((err) => setError("Error updating profile"));
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    AxiosInstance.post("profile/", formDataToSend, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        setProfile(response.data);
        setSuccess("Profile created successfully");
        setError(null);
      })
      .catch((err) => setError("Error creating profile"));
  };

  return (
    <Container>
      <Row>
        <Col md={8} className="offset-md-2">
          <div className="wrapper" style={{ width: "100%" }}>
            <h1>User Profile</h1>
            {error && <Alert color="danger">{error}</Alert>}
            {success && <Alert color="success">{success}</Alert>}
            {profile ? (
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="bio">Bio</Label>
                  <Input
                    type="textarea"
                    name="bio"
                    id="bio"
                    value={formData.bio}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="phone_number">Phone Number</Label>
                  <Input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="address">Address</Label>
                  <Input
                    type="textarea"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="gender">Gender</Label>
                  <Input
                    type="select"
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="occupation">Occupation</Label>
                  <Input
                    type="text"
                    name="occupation"
                    id="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="department">Department</Label>
                  <Input
                    type="text"
                    name="department"
                    id="department"
                    value={formData.department}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="role">Role</Label>
                  <Input
                    type="text"
                    name="role"
                    id="role"
                    value={formData.role}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="birth_date">Birth Date</Label>
                  <Input
                    type="date"
                    name="birth_date"
                    id="birth_date"
                    value={formData.birth_date}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="profile_picture">Profile Picture</Label>
                  <Input
                    type="file"
                    name="profile_picture"
                    id="profile_picture"
                    onChange={handleChange}
                  />
                </FormGroup>
                <Button color="primary" type="submit">
                  Update Profile
                </Button>
              </Form>
            ) : (
              <Form onSubmit={handleCreate}>
                <FormGroup>
                  <Label for="bio">Bio</Label>
                  <Input
                    type="textarea"
                    name="bio"
                    id="bio"
                    value={formData.bio}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="phone_number">Phone Number</Label>
                  <Input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="address">Address</Label>
                  <Input
                    type="textarea"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="gender">Gender</Label>
                  <Input
                    type="select"
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="occupation">Occupation</Label>
                  <Input
                    type="text"
                    name="occupation"
                    id="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="department">Department</Label>
                  <Input
                    type="text"
                    name="department"
                    id="department"
                    value={formData.department}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="role">Role</Label>
                  <Input
                    type="text"
                    name="role"
                    id="role"
                    value={formData.role}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="birth_date">Birth Date</Label>
                  <Input
                    type="date"
                    name="birth_date"
                    id="birth_date"
                    value={formData.birth_date}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="profile_picture">Profile Picture</Label>
                  <Input
                    type="file"
                    name="profile_picture"
                    id="profile_picture"
                    onChange={handleChange}
                  />
                </FormGroup>
                <Button color="primary" type="submit">
                  Create Profile
                </Button>
              </Form>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateProfile;
