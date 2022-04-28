import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import { spacing } from '@mui/system';
//Typo&Fonts
import Typography from '@mui/material/Typography';
import Bock_Personaluse from './fonts/Bock_Personaluse.woff';
//FinTypo&Fonts
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { Switch } from '@mui/material';
import { useState } from "react";
import { FormControlLabel, FormGroup } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


export function AlternateTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Du hard-Skill :
          <br></br>
          Html / Css
          <br></br>
          React / JavaScript /
          <br></br>
          Flask
          <br></br>
          <br></br>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Du Soft-Skill :
          <br></br>
          Autonomie
          <br></br>
          Collectif
          <br></br>
          Agile
          <br></br>
          <br></br>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          De la passion :
          <br></br>
          Checkez mon instagram
          <br></br>
          <CardActions sx = {{ mt:'-17px', ml:'-17px'}}>
            <Button size="medium" href="https://www.instagram.com/jeromalo/?hl=fr" target="_blank">@Jeromalo</Button>
          </CardActions>
          <br></br>
          <br></br>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
        </TimelineSeparator>
        <TimelineContent>
          Un parcours atypique :
          <br></br>
          De l'ESRA à Matrice-UVSQ
          <br></br>
          <br></br>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
//Fonts

const theme = createTheme(
  {
    palette: {
      mode: 'light',
      primary: {
        main: '#FF9F1C',
      },
      secondary: {
        main: '#FFBF69',
      },
      third: {
        main: '#FFFFFF',
      },
      fourth: {
        main: '#CBF3F0',
      },
      fifth: {
        main: '#2EC4B6',
      },
    },
  },
  {
    typography: {
      fontFamily: 'Bock_Personaluse',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        @font-face {
          font-family: 'Bock_Personaluse';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Bock_Personaluse'), local('Bock_Personaluse'), url(${Bock_Personaluse}) format('woff');
        }
      `,
      },
    },
  }
);


//Accordeon
function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ bgcolor: 'secondary.main' }}
        >
          <Typography sx={{ width: '100%', height: '45px', flexShrink: 0, textAlign: 'center', paddingTop: '10px' }}>
            30 secondes à m'accorder ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AlternateTimeline />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={{ bgcolor: 'fourth.main' }}
        >
          <Typography sx={{ width: '100%', height: '45px', flexShrink: 0, textAlign: 'center', paddingTop: '10px' }}>Découvrez mes projets techs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                      height: '200px'
                    }}
                    image="/static/images/piggybank.png"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Piggy Bank
                    </Typography>
                    <Typography>
                      JavaScript
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://github.com/Jeromalo/Piggy-Bank" target="_blank">Accéder au code sur GIT</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                      height: '200px'
                    }}
                    image="/static/images/snakepygame.png"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Snake
                    </Typography>
                    <Typography>
                      Python
                      <br></br>
                      C++
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://github.com/Jeromalo/Snake" target="_blank">Accéder au code sur GIT</Button>
                  </CardActions>
                </Card>
              </Grid><Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                      height: '200px'
                    }}
                    image="/static/images/weather.png"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Weather Forecast
                    </Typography>
                    <Typography>
                      JavaScript
                      <br></br>
                      HTML
                      <br></br>
                      CSS
                      <br></br>
                      Python
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://github.com/Jeromalo/WeatherForecast" target="_blank">Accéder au code sur GIT</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                      height: '200px'
                    }}
                    image="/static/images/emojigarden.png"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Emoji Garden
                    </Typography>
                    <Typography>
                      JavaScript
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://github.com/Jeromalo/EmojiGarden" target="_blank">Accéder au code sur GIT</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                      height: '200px'
                    }}
                    image="/static/images/flourshower.jpeg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Flour Shower
                    </Typography>
                    <Typography>
                      HTML
                      <br></br>
                      CSS
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://github.com/Jeromalo/EmojiGarden" target="_blank">Accéder au code sur GIT</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                      height: '200px'
                    }}
                    image="/static/images/greasybar.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Greasy Bar
                    </Typography>
                    <Typography>
                      React
                      <br></br>
                      JavaScript
                      <br></br>
                      SqL
                      <br></br>
                      Flask
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://github.com/Jeromalo/GreasyBar" target="_blank">Accéder au code sur GIT</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const cards = [1, 2, 3];

//Copyright
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Portfolio fait avec MUI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

//NightMode
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));



export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative"
        sx={{
          backgroundColor: 'primary.main',
          width: '100%',
        }}>
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%'
        }}>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Jerome BERTRAND" src="/static/images/avatar/jerome1.jpg" />
            <Typography variant="h6"
              color="third.main"
              noWrap>
              Jérôme BERTRAND - Developpeur
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Stack
            sx={{ pt: 4, mt: '-98px' }}
            direction="row"
            spacing={10}
            justifyContent="center"
          >
            <Button variant="outlined" href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-bertrand-1ba55942" target="_blank">linkedIn</Button>
            <Button variant="outlined" href="https://github.com/Jeromalo" target="_blank">GIT</Button>
            <Button variant="outlined" href="mailto:bertrand.jf.jerome@gmail.com" target="_blank">Contact Me</Button>
          </Stack>
          <Container maxWidth="md" >
            <Box sx={{ mb: '-50px' }}>
              <Typography
                fontSize="120px"
                component="h1"
                variant="h1"
                align="center"
                color="#023047"
                gutterBottom
                fontFamily=''
              >
                JEROME BERTRAND
              </Typography>
            </Box>
            <Paper elevation={15}>
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  mt: '-70px',
                }}
                image="/static/images/avatar/JeromeProfil.JPG"
                alt="random"
              />
            </Paper>
            <Box sx={{ mt: '-10px' }}>
              <Typography
                component="h2"
                variant="h2"
                align="center"
                color="#023047"
                gutterBottom
                fontFamily=''
              >
                Développeur
                <Box sx={{ mt: '-30px', ml: '70px' }}>
                  <Typography
                    component="h2"
                    variant="h2"
                    align="center"
                    color="secondary.main"
                    gutterBottom
                    fontFamily=''
                  >
                    Tech-Front
                  </Typography>
                </Box>
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Je suis un développeur web junior basé à Paris et Saint-Malo.
                <br></br>
                Reconverti de l'univers de la télévision
                vers le code et le machine learning.
                <br></br>
                Front-End avec des connaissances Back-End,
                j'ai également été sensibilisé à la méthodologie Agile.
                <br></br>
                <br></br>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                  "Au plaisir de collaborer ensemble."
                </Typography>
              </Typography>
            </Box>
          </Container>
        </Box>
        <Box sx={{ width: '85%' }}
          display="flex"
          margin='auto'
          mb='30px'
          alignItems="center"
          justifyContent="center">
          <ControlledAccordions />
        </Box>
        <Stack
          sx={{ pt: 4, mb: '50px' }}
          direction="row"
          spacing={10}
          justifyContent="center"
        >

          <Button variant="outlined" href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-bertrand-1ba55942" target="_blank">linkedIn</Button>
          <Button variant="contained" href="https://github.com/Jeromalo" target="_blank">GIT</Button>
          <Button variant="outlined" href="mailto:bertrand.jf.jerome@gmail.com" target="_blank">Contactez-moi</Button>
        </Stack>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'primary.main', p: 0 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Jérôme BERTRAND - Developpeur
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}