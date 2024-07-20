import "./index.css";
import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Button,
  Container,
  Paper,
} from "@mui/material";
import * as React from "react";

export default function App() {
  const [name, setName] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [website, setWebsite] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Build the data string
    const data = new URLSearchParams({
      "Name": name,
      "Designation": position,
      "Company": company,
      "Mobile": mobile,
      "Email": email,
      "Address": address,
      "Website": website,
    });

    // Send the data to the Sheets API url
    const response = await fetch("https://script.google.com/macros/s/AKfycbxD5JNJt-EVbUpCslhGlwh9yhMLlzpxALH_eBD7NQOi86vei3Gtl7uosXU3ZJJVMyfT/exec", {
      method: "POST",
      body: data.toString(),
    });

    if (!response.ok) {
      console.error("Error submitting data:", response.statusText);
      return;
    }

    // Clear form fields after successful submission (optional)
    setName("");
    setPosition("");
    setCompany("");
    setMobile("");
    setEmail("");
    setAddress(0);
    setWebsite("");

    alert("Data submitted successfully!");
  };

  return (
    <div
      className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Submit Details to Sheet
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Paper elevation={3} className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              type="text"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              type="text"
              label="Designation"
              variant="outlined"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              type="text"
              label="Company"
              variant="outlined"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              type=""
              label="Mobile"
              variant="outlined"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              type="text"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              type="text"
              label="Address"
              variant="outlined"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              type="text"
              label="Website"
              variant="outlined"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="submit-button"
            >
              Save
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};
