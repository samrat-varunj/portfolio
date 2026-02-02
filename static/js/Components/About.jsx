import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Typography, Grid, Paper, Chip } from "@mui/material";
import { Code, TrendingUp, Layers, School } from "@mui/icons-material";
import AnimatedEditorSVG from "./AnimatedEditorSVG";

const About = () => {

  const skills = [
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "LLMs",
    "RAG Pipelines",
    "Computer Vision",
    "NLP",
    "Python",
    "SQL",
    "AWS",
    "Azure",
    "Data Engineering",
    "MLOps",
    "Data Visualization"
  ];

  const stats = [
    { number: "3+", label: "Years Experience", icon: <TrendingUp /> },
    { number: "5+", label: "Major Projects", icon: <Code /> },
    { number: "2", label: "Master's Degrees", icon: <School /> },
    { number: "20+", label: "Tech Stack Mastery", icon: <Layers /> },
  ];

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        background: "var(--bg-primary)",
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
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 }, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "var(--font-display)",
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 700,
                mb: 2,
                color: "var(--text-primary)",
                textAlign: "center",
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                color: "var(--text-secondary)",
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.7,
                textAlign: "center",
              }}
            >
              Building intelligent systems that transform data into strategic advantage.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={6} alignItems="center">
          {/* Left Column - Image */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* Background Pattern */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -20,
                    left: -20,
                    right: -20,
                    bottom: -20,
                    background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                    borderRadius: "var(--border-radius)",
                    opacity: 0.1,
                    zIndex: 0,
                  }}
                />

                {/* Animated Editor SVG */}
                <Box
                  sx={{
                    width: { xs: 280, sm: 340, md: 400 },
                    height: { xs: 280, sm: 340, md: 400 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 1,
                    mx: "auto",
                  }}
                >
                  <AnimatedEditorSVG size={360} />
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Column - Content */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "var(--font-display)",
                  fontSize: { xs: "1.75rem", md: "2.25rem" },
                  fontWeight: 600,
                  mb: 3,
                  color: "var(--text-primary)",
                }}
              >
                Where mathematics meets machine intelligence
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.125rem",
                  color: "var(--text-secondary)",
                  mb: 4,
                  lineHeight: 1.7,
                  textAlign: "left",
                }}
              >
                I specialize in building end-to-end machine learning systems—from predictive models for financial risk assessment to agentic AI solutions that automate complex workflows. My work combines deep technical expertise in ML/AI with a clear focus on delivering business value.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.125rem",
                  color: "var(--text-secondary)",
                  mb: 4,
                  lineHeight: 1.7,
                  textAlign: "left",
                }}
              >
                Currently pursuing dual Master's degrees, I bring experience spanning enterprise data science, generative AI, and privacy-preserving NLP research. I design systems that are not just technically sound, but scalable, maintainable, and aligned with real-world constraints.
              </Typography>

              {/* Skills */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: "var(--text-primary)",
                    textAlign: "left",
                  }}
                >
                  Core Competencies:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Chip
                        label={skill}
                        sx={{
                          backgroundColor: "var(--bg-secondary)",
                          color: "var(--text-primary)",
                          border: "1px solid var(--border)",
                          fontWeight: 500,
                          "&:hover": {
                            backgroundColor: "var(--primary)",
                            color: "white",
                          },
                          transition: "var(--transition)",
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={3} sx={{ mt: { xs: 6, md: 10 } }}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      textAlign: "center",
                      borderRadius: "var(--border-radius)",
                      border: "1px solid var(--border)",
                      transition: "var(--transition)",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "var(--shadow-lg)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: "var(--primary)",
                        mb: 2,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        mb: 1,
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "var(--text-secondary)",
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
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

export default About;
