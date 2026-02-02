import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, Chip, IconButton, Dialog, DialogContent, DialogTitle } from '@mui/material';
import {
  Security,
  LocationOn,
  Code,
  ShoppingCart,
  Psychology,
  Storage,
  GitHub,
  Launch,
  Close,
  SmartToy,
  LocalHospital,
  EditNote,
  TrendingUp,
  CreditCard
} from '@mui/icons-material';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Detect theme from portfolio7-wrapper
  useEffect(() => {
    const checkTheme = () => {
      const wrapper = document.querySelector('.portfolio7-wrapper');
      if (wrapper) {
        const theme = wrapper.getAttribute('data-theme');
        setIsDark(theme === 'dark');

        // Update CSS variables for Dialog
        const root = document.documentElement;
        if (theme === 'dark') {
          root.style.setProperty('--portfolio7-bg-primary', '#0f172a');
          root.style.setProperty('--portfolio7-bg-secondary', '#1e293b');
          root.style.setProperty('--portfolio7-text-primary', '#f8fafc');
          root.style.setProperty('--portfolio7-text-secondary', '#cbd5e1');
          root.style.setProperty('--portfolio7-text-muted', '#94a3b8');
          root.style.setProperty('--portfolio7-border', '#334155');
        } else {
          root.style.setProperty('--portfolio7-bg-primary', '#fff');
          root.style.setProperty('--portfolio7-bg-secondary', '#f8fafc');
          root.style.setProperty('--portfolio7-text-primary', '#0f172a');
          root.style.setProperty('--portfolio7-text-secondary', '#475569');
          root.style.setProperty('--portfolio7-text-muted', '#64748b');
          root.style.setProperty('--portfolio7-border', '#e2e8f0');
        }
      }
    };

    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    const wrapper = document.querySelector('.portfolio7-wrapper');
    if (wrapper) {
      observer.observe(wrapper, { attributes: true, attributeFilter: ['data-theme'] });
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Agentic AI Loan Assistant",
      subtitle: "Predictive Loan Default Risk Modeling & Automation",
      description: "An agentic chatbot architecture using Next.js, OpenAI (GPT-4o-mini), and Gemini 2.5, incorporating an evaluator agent to review responses. Reduces hallucinations by ~30% and improves accuracy.",
      fullDescription: `Built an advanced agentic chatbot architecture designed to automate and enhance loan operations. Leveraging Next.js for the frontend and a powerful backend powered by OpenAI (GPT-4o-mini) and Gemini 2.5, the system incorporates a specialized evaluator agent that automatically reviews and validates generated responses before they reach the user. 
      
      The solution implements tool-calling and external API integrations to fetch real-time financial data and knowledge sources, significantly improving response accuracy and reducing AI hallucinations by approximately 30%. The modular prompt workflows and asynchronous handling ensure scalable inference and low-latency user interactions, making it a robust tool for financial decision support.`,
      technologies: ["Next.js", "OpenAI GPT-4", "Gemini 2.5", "LangChain", "Agentic AI", "React"],
      icon: <SmartToy />,
      color: "#4CAF50",
      gradient: "linear-gradient(135deg, #4CAF50 0%, #45a049 100%)",
      features: [
        "Agentic Chatbot Architecture",
        "Evaluator Agent for Validation",
        "30% Reduction in Hallucinations",
        "Real-time Data Fetching",
        "Low-latency Inference"
      ],
      period: "Project",
      institution: "Independent / Academic"
    },
    {
      id: 2,
      title: "Telehealth Automation Pipeline",
      subtitle: "AI-Driven Patient Intake & Triage",
      description: "Designed automation pipelines using AWS Textract and Lambda to process patient referrals, reducing activation time by 90% and improving care allocation efficiency.",
      fullDescription: `Designed and deployed comprehensive AI-driven telehealth automation pipelines using AWS services including Textract, Lambda, and DynamoDB. The system enables automated patient intake and referral triage, which successfully reduced referral-to-activation time by 90%. 
      
      Additionally, developed predictive risk-scoring models using Python (Scikit-learn) to identify high-priority cases from operational data. This helped clinical teams improve care allocation efficiency by 35%. A centralized HomeCare operations dashboard in Power BI was also built to provide real-time visibility into patient onboarding and operational KPIs.`,
      technologies: ["AWS Textract", "AWS Lambda", "DynamoDB", "Python", "Scikit-learn", "Power BI"],
      icon: <LocalHospital />,
      color: "#2196F3",
      gradient: "linear-gradient(135deg, #2196F3 0%, #1976D2 100%)",
      features: [
        "90% Faster Referral Activation",
        "Automated Patient Intake",
        "Predictive Risk Scoring",
        "Real-time Operations Dashboard",
        "AWS Cloud Native Architecture"
      ],
      period: "Jun 2025 - Aug 2025",
      institution: "Premier Health Group"
    },
    {
      id: 3,
      title: "Authorship Obfuscation",
      subtitle: "Privacy-Preserving NLP Research",
      description: "Research on interpretable authorship obfuscation techniques, developing NLP models that improve style controllability while maintaining semantic fidelity.",
      fullDescription: `Conducted in-depth research on interpretable authorship obfuscation to enhance privacy in text generation. Developed privacy-preserving NLP models that achieved approximately 30% improvement in style controllability while maintaining high semantic fidelity across multilingual datasets.
      
      Engineered constrained decoding strategies and employed fine-tuning methods such as LoRA and prefix-tuning for large language models. These optimizations reduced generation latency by 15% and improved lexical constraint satisfaction by 25%, contributing to the advancement of responsible AI development.`,
      technologies: ["NLP", "LLMs", "LoRA", "Python", "Research", "Privacy Enhancing Tech"],
      icon: <EditNote />,
      color: "#9C27B0",
      gradient: "linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)",
      features: [
        "Privacy-Preserving NLP",
        "Style Controllability",
        "Multilingual Support",
        "LoRA & Prefix-Tuning",
        "Responsible AI"
      ],
      period: "Feb 2025 - Apr 2025",
      institution: "Microsoft"
    },
    {
      id: 4,
      title: "Customer Segmentation & Sales AI",
      subtitle: "Data-Driven Marketing Strategy",
      description: "Developed segmentation models and domain-specific LLMs for a major telecom client, driving a 15% increase in sales and enhancing customer support automation.",
      fullDescription: `Developed advanced customer segmentation models utilizing Python (Pandas, Scikit-learn) and SQL to analyze over 100,000 global product sales records. These insights drove region-specific marketing strategies that resulted in a 15% year-over-year increase in sales.
      
      Partnered with ML engineers to build a domain-specific Large Language Model for a top European telecom client, achieving 90% of GPT-4 benchmark performance. Also led A/B testing initiatives and designed interactive dashboards in Tableau and Power BI to empower leadership with real-time data for decision-making.`,
      technologies: ["Machine Learning", "LLMs", "A/B Testing", "Tableau", "SQL", "Python"],
      icon: <TrendingUp />,
      color: "#FF9800",
      gradient: "linear-gradient(135deg, #FF9800 0%, #F57C00 100%)",
      features: [
        "Customer Segmentation",
        "Domain-Specific LLM",
        "15% Sales Increase",
        "A/B Testing",
        "Interactive Dashboards"
      ],
      period: "Dec 2022 - Jul 2024",
      institution: "Sprinklr"
    },
    {
      id: 5,
      title: "Credit Risk & Spend Prediction",
      subtitle: "Financial Modeling & Forecasting",
      description: "Built ML models for high-value customer targeting and spending prediction tools using ARIMA and Prophet, optimizing marketing spend and credit offers.",
      fullDescription: `Developed machine learning models specifically for targeting high-value customers, which improved credit card offer acceptance rates by 30% and enhanced overall portfolio profitability. 
      
      Built a comprehensive forecasting and spend prediction tool using ARIMA and Prophet algorithms, integrated via Flask and AWS (ECR, EC2, Docker). This solution optimized marketing spend and reduced resource allocation variance by 28%. also automated ETL workflows across AWS Glue and Redshift to accelerate insight generation.`,
      technologies: ["ARIMA", "Prophet", "AWS", "Flask", "Python", "Credit Risk Modeling"],
      icon: <CreditCard />,
      color: "#E91E63",
      gradient: "linear-gradient(135deg, #E91E63 0%, #C2185B 100%)",
      features: [
        "High-Value Targeting",
        "Spend Forecasting",
        "30% Higher Acceptance",
        "Marketing Optimization",
        "Automated ETL"
      ],
      period: "Jan 2022 - Dec 2022",
      institution: "ICICI Bank"
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  return (
    <Box
      component="section"
      id="projects"
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
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 6, md: 10 }, flexDirection: 'column', alignItems: 'center' }}>
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
              Featured Projects
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Production systems and research projects demonstrating applied expertise in generative AI, predictive modeling, and intelligent automation.
            </Typography>
          </Box>
        </motion.div>

        {/* Projects Grid */}
        <Grid container spacing={4} alignItems="stretch">
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.id} style={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ flex: 1, display: 'flex' }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    height: '100%',
                    minHeight: 340,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'var(--transition)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 'var(--shadow-lg)',
                      '& .project-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                      },
                    },
                  }}
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Project Header */}
                  <Box
                    sx={{
                      background: project.gradient,
                      p: 3,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      className="project-icon"
                      sx={{
                        color: 'white',
                        fontSize: '2.5rem',
                        mb: 2,
                        transition: 'var(--transition)',
                      }}
                    >
                      {project.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        mb: 1,
                        lineHeight: 1.2,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: 500,
                      }}
                    >
                      {project.subtitle}
                    </Typography>
                  </Box>

                  {/* Project Content */}
                  <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'var(--text-secondary)',
                        mb: 3,
                        lineHeight: 1.6,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Technologies */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'var(--text-muted)',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: 0.5,
                          mb: 1,
                          display: 'block',
                        }}
                      >
                        Technologies
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: 'var(--bg-secondary)',
                              color: 'var(--text-primary)',
                              border: '1px solid var(--border)',
                              fontSize: '0.7rem',
                            }}
                          />
                        ))}
                        {project.technologies.length > 3 && (
                          <Chip
                            label={`+${project.technologies.length - 3}`}
                            size="small"
                            sx={{
                              backgroundColor: 'var(--primary)',
                              color: 'white',
                              fontSize: '0.7rem',
                            }}
                          />
                        )}
                      </Box>
                    </Box>

                    {/* Period & Institution */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'var(--text-muted)',
                          fontWeight: 500,
                        }}
                      >
                        {project.period}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'var(--primary)',
                          fontWeight: 600,
                        }}
                      >
                        {project.institution}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Project Detail Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
            background: isDark ? '#0f172a' : '#fff',
            border: isDark ? '1px solid #334155' : '1px solid #e2e8f0',
            boxShadow: isDark
              ? '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)'
              : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
          },
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle
              sx={{
                background: selectedProject.gradient,
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '24px',
                margin: 0,
                maxWidth: '100%',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ fontSize: '2rem' }}>
                  {selectedProject.icon}
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    {selectedProject.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {selectedProject.subtitle}
                  </Typography>
                </Box>
              </Box>
              <IconButton
                onClick={handleCloseDialog}
                sx={{ color: 'white' }}
              >
                <Close />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{
              p: 4,
              backgroundColor: isDark ? '#0f172a' : '#fff',
              color: isDark ? '#cbd5e1' : '#475569',
            }}>
              <Typography
                variant="body1"
                sx={{
                  color: isDark ? '#cbd5e1' : '#475569',
                  mb: 4,
                  lineHeight: 1.7,
                  textAlign: 'left',
                  maxWidth: '100%',
                }}
              >
                {selectedProject.fullDescription}
              </Typography>

              {/* Key Features */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: isDark ? '#f8fafc' : '#0f172a',
                  }}
                >
                  Key Features
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {selectedProject.features.map((feature, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          backgroundColor: selectedProject.color,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: isDark ? '#cbd5e1' : '#475569',
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Technologies */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: isDark ? '#f8fafc' : '#0f172a',
                  }}
                >
                  Technologies Used
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selectedProject.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        backgroundColor: isDark ? '#1e293b' : '#f8fafc',
                        color: isDark ? '#cbd5e1' : '#0f172a',
                        border: isDark ? '1px solid #334155' : '1px solid #e2e8f0',
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Project Info */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  pt: 2,
                  borderTop: isDark ? '1px solid #334155' : '1px solid #e2e8f0',
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#94a3b8' : '#64748b',
                      mb: 0.5,
                    }}
                  >
                    Period
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: isDark ? '#f8fafc' : '#0f172a',
                    }}
                  >
                    {selectedProject.period}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#94a3b8' : '#64748b',
                      mb: 0.5,
                    }}
                  >
                    Institution
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: '#6366f1',
                    }}
                  >
                    {selectedProject.institution}
                  </Typography>
                </Box>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects; 