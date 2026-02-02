import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, Chip, Avatar } from '@mui/material';
import { School, CalendarToday, LocationOn, Grade, EmojiEvents } from '@mui/icons-material';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Master of Science, Computer Information Systems (Data Science)',
      institution: 'University of Maryland, College Park',
      location: 'College Park, Maryland, United States',
      duration: 'Aug 2024 - Dec 2025',
      gpa: 'N/A',
      description: 'Focus on Data Science, Machine Learning, and Information Systems.',
      courses: [],
      logo: null,
      featured: true,
    },
    {
      id: 2,
      degree: 'Bachelor of Technology',
      institution: 'Indian Institute of Technology (ISM) Dhanbad',
      location: 'Dhanbad, Jharkhand, India',
      duration: 'Aug 2018 - May 2022',
      gpa: 'N/A',
      description: 'Undergraduate studies at one of India\'s premier engineering institutes.',
      courses: [],
      logo: null,
      featured: false,
    },
  ];

  const certifications = [
    {
      name: 'B Impact Program 2025',
      issuer: 'B Lab / UMD',
      year: '2025',
      credential: 'Selected as 1 of only 13 students in USA, advising companies on B Corp Certification',
    },
    {
      name: 'Finalist, 6th Annual Deloitte–UMD–AU Datathon',
      issuer: 'Deloitte',
      year: '2024',
      credential: 'Spotify Event Analytics Case',
    },
  ];

  return (
    <Box
      component="section"
      id="education"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'var(--bg-primary)',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'var(--font-display)',
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                mb: 2,
                color: 'var(--text-primary)',
                textAlign: 'center',
              }}
            >
              Education & Achievements
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.7,
                textAlign: 'center',
              }}
            >
              A strong academic foundation from premier institutions, complemented by recognition in competitive data science challenges.
            </Typography>
          </Box>
        </motion.div>

        {/* Education Cards */}
        <Grid container spacing={4} sx={{ mb: { xs: 6, md: 8 } }} alignItems="stretch">
          {educationData.map((education, index) => (
            <Grid item xs={12} lg={6} key={education.id} style={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ flex: 1, display: 'flex' }}
              >
                <Paper
                  elevation={education.featured ? 8 : 2}
                  sx={{
                    p: 4,
                    height: 'auto',
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid var(--border)',
                    background: education.featured
                      ? 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)'
                      : 'var(--bg-primary)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'var(--transition)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 'var(--shadow-xl)',
                    },
                    ...(education.featured && {
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)',
                      },
                    }),
                  }}
                >
                  {/* Institution Logo */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        mr: 2,
                        border: '2px solid var(--border)',
                        bgcolor: 'var(--primary)',
                      }}
                    >
                      <School />
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          mb: 0.5,
                        }}
                      >
                        {education.institution}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'var(--primary)',
                          fontWeight: 600,
                        }}
                      >
                        {education.degree}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Duration and Location */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2, flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarToday sx={{ fontSize: 16, color: 'var(--text-muted)' }} />
                      <Typography
                        variant="body2"
                        sx={{ color: 'var(--text-muted)', fontWeight: 500 }}
                      >
                        {education.duration}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <LocationOn sx={{ fontSize: 16, color: 'var(--text-muted)' }} />
                      <Typography
                        variant="body2"
                        sx={{ color: 'var(--text-muted)', fontWeight: 500 }}
                      >
                        {education.location}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'var(--text-secondary)',
                      mb: 3,
                      lineHeight: 1.6,
                      textAlign: 'center',
                    }}
                  >
                    {education.description}
                  </Typography>

                  {/* Featured Badge */}
                  {education.featured && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        backgroundColor: 'var(--primary)',
                        color: 'white',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 'var(--border-radius-sm)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Latest
                    </Box>
                  )}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Custom Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                mb: 2,
                color: 'var(--text-primary)',
                textAlign: 'center',
              }}
            >
              Achievements & Awards
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center" alignItems="stretch">
            {certifications.map((cert, index) => (
              <Grid item xs={12} sm={6} md={4} key={cert.name} style={{ display: 'flex' }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ flex: 1, display: 'flex' }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      minHeight: 180,
                      display: 'flex',
                      flex: 1,
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 'var(--border-radius)',
                      border: '1px solid var(--border)',
                      transition: 'var(--transition)',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 'var(--shadow-lg)',
                      },
                    }}
                  >
                    <Box sx={{ color: 'var(--accent)', mb: 2 }}>
                      <EmojiEvents fontSize="large" />
                    </Box>
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        mb: 1,
                      }}
                    >
                      {cert.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="center"
                      sx={{
                        color: 'var(--primary)',
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {cert.issuer}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="center"
                      sx={{
                        color: 'var(--text-secondary)',
                        mb: 2,
                      }}
                    >
                      {cert.year} • {cert.credential}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education; 