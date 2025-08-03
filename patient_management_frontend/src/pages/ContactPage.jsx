import React, { useState } from 'react';
import { Box, Typography, Container, Link, TextField, Button, Alert } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const ContactPage = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (!feedback.trim()) {
      setError('Feedback cannot be empty.');
      return;
    }
    setError(null);
    setSubmitted(true);
    setFeedback('');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Box textAlign="center">
        <EmailIcon sx={{ fontSize: 60, color: '#1976d2' }} />
        <Typography variant="h3" color="primary" gutterBottom>Contact Us</Typography>
        <Typography variant="h6" color="text.secondary" mb={2}>
          For inquiries, support, or feedback, please reach out:
        </Typography>
        <Typography>
          Email: <Link href="mailto:support@healthcare.com">support@healthcare.com</Link>
        </Typography>
        <Typography mt={2}>
          GitHub: <Link href="https://github.com/KeshanKaushalya/Patient_Management_System" target="_blank">Project Repository</Link>
        </Typography>
      </Box>
      <Box id="feedback" mt={6} p={3} borderRadius={2} boxShadow={2} bgcolor="#fafafa">
        <Typography variant="h5" color="primary" mb={2} textAlign="center">
          Feedback
        </Typography>
        <form onSubmit={handleFeedbackSubmit}>
          <TextField
            label="Your feedback"
            multiline
            rows={4}
            fullWidth
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            error={!!error}
            helperText={error}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} fullWidth>
            Submit Feedback
          </Button>
        </form>
        {submitted && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Thank you for your feedback!
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default ContactPage;
