import React, { useState } from 'react';
import { Box, Typography, Container, Link, TextField, Button, Alert, Divider } from '@mui/material';
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
    <Container maxWidth="sm" sx={{ mt: 6, background: '#fff', borderRadius: 4, boxShadow: 4, p: 4, border: '2px solid #bfa046' }}>
      <Box textAlign="center">
        <EmailIcon sx={{ fontSize: 60, color: '#bfa046' }} />
        <Typography variant="h3" color="#0a2e5c" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif" gutterBottom>Contact Us</Typography>
        <Typography variant="h6" color="#0a2e5c" mb={2}>
          For inquiries, support, or feedback, please reach out:
        </Typography>
        <Typography color="#0a2e5c">
          Email: <Link href="mailto:support@healthcare.com" sx={{ color: '#bfa046', fontWeight: 700 }}>support@healthcare.com</Link>
        </Typography>
        <Typography mt={2} color="#0a2e5c">
          GitHub: <Link href="https://github.com/pubudusanka/patient-management-system" target="_blank" sx={{ color: '#bfa046', fontWeight: 700 }}>Project Repository</Link>
        </Typography>
      </Box>
      <Divider sx={{ my: 4, bgcolor: '#bfa046' }} />
      <Box id="feedback" mt={2} p={3} borderRadius={2} boxShadow={2} bgcolor="#fafafa">
        <Typography variant="h5" color="#0a2e5c" mb={2} textAlign="center" fontWeight={700}>
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
            sx={{ background: '#fff', borderRadius: 2 }}
          />
          <Button type="submit" variant="contained" sx={{ mt: 2, background: '#0a2e5c', color: '#fff', fontWeight: 700, '&:hover': { background: '#bfa046' } }} fullWidth>
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
