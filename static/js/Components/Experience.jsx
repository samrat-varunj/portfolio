import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, Chip, Avatar } from '@mui/material';
import { Work, CalendarToday, LocationOn, Business } from '@mui/icons-material';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Federal Home Loan Bank Of Dallas",
      position: "AI Analyst Intern",
      duration: "Sep 2025 - Dec 2025",
      location: "Dallas, Texas, United States",
      description: "Developed an AI-powered Loan Agent using OpenAI GPT APIs and LangChain, automating middle-office loan documentation. Built RAG pipelines to extract data from 15+ financial document types with 95% accuracy. Integrated SQL-based validation and deployed monitoring dashboards in Power BI.",
      technologies: ["OpenAI GPT", "LangChain", "RAG", "SQL", "Power BI", "Python"],
      logo: null,
      featured: true
    },
    {
      id: 2,
      company: "Premier Health Group",
      position: "Data Science Intern",
      duration: "Jun 2025 - Aug 2025",
      location: "Washington, DC, United States",
      description:
        "Designed AI-driven telehealth automation pipelines using AWS Textract, Lambda, and DynamoDB. Developed predictive risk-scoring models using Scikit-learn and built a centralized HomeCare operations dashboard in Power BI.",
      technologies: [
        "AWS",
        "Python",
        "Scikit-learn",
        "Power BI",
        "DynamoDB",
        "Lambda"
      ],
      logo: null,
      featured: false
    },
    {
      id: 3,
      company: "Microsoft",
      position: "Student Researcher",
      duration: "Feb 2025 - Apr 2025",
      location: "Arlington, Virginia, United States",
      description:
        "Conducted research on interpretable authorship obfuscation and privacy-preserving NLP models. Engineered constrained decoding strategies and fine-tuning methods (LoRA) for LLMs, improving generation latency and constraint satisfaction.",
      technologies: [
        "NLP",
        "LLMs",
        "Python",
        "LoRA",
        "Hugging Face",
        "Research"
      ],
      logo: null,
      featured: false
    },
    {
      id: 4,
      company: "Sprinklr",
      position: "Senior Data Scientist",
      duration: "Dec 2022 - Jul 2024",
      location: "Bengaluru, Karnataka, India",
      description:
        "Developed customer segmentation models and led A/B testing initiatives. Built domain-specific LLMs for telecom clients and designed interactive sales dashboards in Tableau and Power BI.",
      technologies: ["Python", "SQL", "Scikit-learn", "Tableau", "Power BI", "A/B Testing"],
      logo: null,
      featured: false
    },
    {
      id: 5,
      company: "ICICI Bank",
      position: "Data Scientist",
      duration: "Jan 2022 - Dec 2022",
      location: "Hyderabad, Telangana, India",
      description:
        "Developed ML models for customer targeting and built forecasting tools using ARIMA and Prophet. Automated ETL workflows on AWS Glue and Redshift, reducing data preparation time.",
      technologies: ["Python", "AWS", "ARIMA", "Prophet", "Flask", "SQL", "ETL"],
      logo: null,
      featured: false
    },
  ];

  return (
    <Box
      component="section"
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'var(--bg-secondary)',
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
              Professional Experience
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
              A track record of delivering AI/ML solutions across finance, healthcare, and enterprise technology—with measurable impact on efficiency, accuracy, and business outcomes.
            </Typography>
          </Box>
        </motion.div>

        {/* Experience Cards */}
        <Grid container spacing={4} alignItems="stretch">
          {experiences.map((experience, index) => (
            <Grid item xs={12} md={6} lg={4} key={experience.id} style={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ flex: 1, display: 'flex' }}
              >
                <Paper
                  elevation={experience.featured ? 8 : 2}
                  sx={{
                    p: 4,
                    minHeight: 380, // Increased height to accommodate content
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid var(--border)',
                    background: experience.featured
                      ? 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)'
                      : 'var(--bg-primary)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'var(--transition)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 'var(--shadow-xl)',
                    },
                    ...(experience.featured && {
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
                  {/* Company Logo, Title, etc. */}
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
                      <Business />
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          mb: 0.5,
                          maxWidth: 200,
                          display: 'block',
                          lineHeight: 1.2,
                        }}
                      >
                        {experience.company}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'var(--primary)',
                          fontWeight: 600,
                        }}
                      >
                        {experience.position}
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
                        {experience.duration}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <LocationOn sx={{ fontSize: 16, color: 'var(--text-muted)' }} />
                      <Typography
                        variant="body2"
                        sx={{ color: 'var(--text-muted)', fontWeight: 500 }}
                      >
                        {experience.location}
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
                      fontSize: '0.95rem',
                      textAlign: 'left',
                    }}
                  >
                    {experience.description}
                  </Typography>

                  {/* Technologies */}
                  <Box sx={{ mt: 'auto' }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {experience.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'var(--bg-secondary)',
                            color: 'var(--text-primary)',
                            border: '1px solid var(--border)',
                            fontWeight: 500,
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Featured Badge */}
                  {experience.featured && (
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
      </Container>
    </Box>
  );
};

export default Experience; 