import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  FormHelperText,
} from "@mui/material";
import { styled } from "@mui/system";

const FormContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  backgroundColor: "#fff",
  padding: "40px",
  borderRadius: "8px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
});

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    address: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    username: false,
    email: false,
    address: false,
    message: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // Clear the error for the field being edited
    setErrors({ ...errors, [e.target.id]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const newErrors = {
      username: !formData.username,
      email: !formData.email,
      address: !formData.address,
      message: !formData.message,
    };

    if (Object.values(newErrors).includes(true)) {
      setErrors(newErrors);
      return; // Stop form submission
    }

    // Create mailto link
    const { username, email, address, message } = formData;
    const body = `
      Username: ${username}
      Email: ${email}
      Address: ${address}
      Message: ${message}
    `;
    window.location.href = `mailto:manishprajapat492@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(
      body
    )}`;
  };

  return (
    <Container maxWidth="sm" className="mt-5">
      <Typography variant="h4" component="h1" gutterBottom textAlign="center">
        Contact Us
      </Typography>
      <FormContainer component="form" onSubmit={handleSubmit}>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          fullWidth
          value={formData.username}
          onChange={handleChange}
          required
          error={errors.username}
          helperText={errors.username && "This field is required"}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          required
          type="email"
          error={errors.email}
          helperText={errors.email && "This field is required"}
        />
        <TextField
          id="address"
          label="Address"
          variant="outlined"
          fullWidth
          value={formData.address}
          onChange={handleChange}
          required
          error={errors.address}
          helperText={errors.address && "This field is required"}
        />
        <TextField
          id="message"
          label="Message"
          variant="outlined"
          fullWidth
          value={formData.message}
          onChange={handleChange}
          required
          multiline
          rows={4}
          error={errors.message}
          helperText={errors.message && "This field is required"}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          sx={{ mt: 2 }}
          className="!bg-button-search-btn text-white hover:bg-red-700"
        >
          Send Email
        </Button>
      </FormContainer>
    </Container>
  );
};

export default Contact;
