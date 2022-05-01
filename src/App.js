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
//Typo&Fonts
import Typography from '@mui/material/Typography';
import Bock_Personaluse from './fonts/Bock_Personaluse.woff';
//FinTypo&Fonts
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
          <Typography style={{ fontWeight: "bold" }}>Du hard-skill :</Typography>
          Html / Css
          <br></br>
          React / JavaScript
          <br></br>
          Flask / PHP
          <br></br>
          Wordpress
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
          <Typography style={{ fontWeight: "bold" }}>Du soft-skill:</Typography>
          Autonomie
          <br></br>
          Collectif
          <br></br>
          Sens de l'équipe
          <br></br>
          Agile
          <br></br>
          Créatif
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
          <Typography style={{ fontWeight: "bold" }}>De la passion :</Typography>
          Checkez mon instagram
          <br></br>
          <CardActions sx={{ mt: '-17px', ml: '-17px' }}>
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
          <Typography style={{ fontWeight: "bold" }}>Un parcours atypique :</Typography>
          Un BTS commercial,
          <br></br>
          12 ans d'expériences dans l'audiovisuel,
          <br></br>
          une reconversion dans le numérique
          en septembre 2021 via Matrice- UVSQ
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
          sx={{ bgcolor: '#c4e4a2' }}
        >
          <Typography sx={{ width: '100%', height: '45px', flexShrink: 0, textAlign: 'center', paddingTop: '10px' }}>Découvrez mes projets techs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ backgroundColor: '#c4e4a2', height: '100%', display: 'flex', flexDirection: 'column' }}
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
                    <Typography style={{ fontWeight: "bold" }} gutterBottom variant="h5" component="h2">
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
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ backgroundColor: 'fourth.main', height: '100%', display: 'flex', flexDirection: 'column' }}
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
                    <Typography style={{ fontWeight: "bold" }} gutterBottom variant="h5" component="h2">
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
                  sx={{ backgroundColor: '#c4e4a2', height: '100%', display: 'flex', flexDirection: 'column' }}
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
                    <Typography style={{ fontWeight: "bold" }} gutterBottom variant="h5" component="h2">
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
                  sx={{ backgroundColor: 'fourth.main', height: '100%', display: 'flex', flexDirection: 'column' }}
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
                    <Typography style={{ fontWeight: "bold" }} gutterBottom variant="h5" component="h2">
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
                  sx={{ backgroundColor: '#c4e4a2', height: '100%', display: 'flex', flexDirection: 'column' }}
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
                    <Typography style={{ fontWeight: "bold" }} gutterBottom variant="h5" component="h2">
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
                  sx={{ backgroundColor: 'fourth.main', height: '100%', display: 'flex', flexDirection: 'column' }}
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
                    <Typography style={{ fontWeight: "bold" }} gutterBottom variant="h5" component="h2">
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
        Portfolio "homemade" avec React MUI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
          justifyContent: 'space-evenly',
          width: '100%'
        }}>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Jerome BERTRAND" src="/static/images/avatar/jerome1.jpg" />
            <Typography variant="h6"
              color="third.main"
              noWrap>
              Bienvenue sur mon portfolio
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL + './static/images/naturebokeh.jpg'})`,
            pt: 8,
            pb: 6,
          }}
        >
          <Stack
            sx={{
              pt: 2,
              mt: '-81px'
            }}
            direction="row"
            spacing={10}
            justifyContent="center"
          >
            <Button variant="outlined" href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-bertrand-1ba55942" target="_blank">linkedIn</Button>
            <Button variant="outlined" href="https://github.com/Jeromalo" target="_blank">GIT</Button>
            <Button variant="outlined" href="mailto:bertrand.jf.jerome@gmail.com" target="_blank">Contact</Button>
          </Stack>
          <Container maxWidth="md" >
            <Box>
              <Typography
                fontSize="auto"
                component="h1"
                variant="h1"
                align="center"
                color="white"
                gutterBottom
                fontFamily=''
              >
                Jerome BERTRAND
              </Typography>
            </Box>
            <Paper elevation={15}>
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  mt: '-55px',
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
                color="WHITE"
                gutterBottom
                fontFamily=''
              >
                Développeur
                <Box sx={{ mt: '-30px', ml: '70px' }}>
                  <Typography
                    component="h2"
                    variant="h2"
                    align="center"
                    color="primary.main"
                    gutterBottom
                    fontFamily=''
                  >
                    Tech-Front
                  </Typography>
                </Box>
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" align="center" color="white" paragraph>
                Je suis un développeur web junior basé à Paris et Saint-Malo,
                <br></br>
                reconverti de l'univers de la télévision vers celui du numérique.
                <br></br>
                <br></br>
                Orienté Front-End avec des connaissances Back-End,
                <br></br>
                j'ai également été sensibilisé à la méthodologie Agile,
                <br></br>
                à travers une formation de 10 mois commencée en Septembre 2021.
                <Typography variant="h5" align="center" color="white" paragraph>
                  <br></br>
                  "Au plaisir de collaborer ensemble."
                </Typography>
              </Typography>
            </Box>
            <ControlledAccordions />
            <Stack
              sx={{ pt: 4, mb: '50px' }}
              direction="row"
              spacing={10}
              justifyContent="center"
            >
              <Button variant="outlined" href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-bertrand-1ba55942" target="_blank">lkdn</Button>
              <Button variant="contained" href="https://github.com/Jeromalo" target="_blank">GIT</Button>
              <Button variant="outlined" href="mailto:bertrand.jf.jerome@gmail.com" target="_blank">Mail</Button>
            </Stack>
          </Container>
        </Box>

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