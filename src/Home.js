import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, makeStyles, Toolbar, Typography, Button, Container, Grid } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import foto from './profile2bnw.png';
import Typing from 'react-typing-animation';
 
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Home(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Container maxWidth="xl" style={{width: '90%'}} style={{backgroundColor:'black'}}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" style={{fontFamily:'"Caveat",cursive'}} className={classes.title}>
                            <Link to="/" className="link">
                                faisalapt
                            </Link>
                        </Typography>
                        <Link to="/" className="link"><Button color='inherit' style={{fontFamily:'"Caveat",cursive',color:'#797a7a'}}>home</Button></Link>
                        <Link to="/Work" className="link"><Button color='inherit' style={{fontFamily:'"Caveat",cursive'}}>work</Button></Link>
                    </Toolbar>
                </AppBar>
                <Grid container style={{paddingTop: '5%', height: '90vh'}}>
                    <Grid container direction="column" justify="space-evenly" alignItems="center" xs={1} spacing={3}>
                        <Grid item xs={3}>
                            <Button color="inherit" style={{marginBottom: '54.8px'}} onClick={(e) => {
                                e.preventDefault()
                                window.open('https://instagram.com/faisalapt')
                            }}>
                                <InstagramIcon />
                            </Button>
                            <Button color="inherit" style={{marginBottom: '54.8px'}} onClick={(e) => {
                                e.preventDefault()
                                window.open('https://github.com/faisalapt')
                            }}>
                                <GithubIcon />
                            </Button>
                            <Button color="inherit" style={{marginBottom: '54.8px'}} onClick={(e) => {
                                e.preventDefault()
                                window.open('https://www.linkedin.com/in/faisal-aprianto-108402207/')
                            }}>
                                <LinkedInIcon />
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" justify="center" alignItems="center" xs={3}>
                        <Grid item md>
                            <img src={foto} className="foto" width="267" height="264" />
                        </Grid>
                    </Grid>
                    <Grid container direction="column" justify="center" alignItems="flex-start" xs={8}>
                        <Grid item md>
                            <Typography variant="h2" style={{fontFamily:'"Space Mono",monospace'}}>
                                <Typing loop={true}>
                                    <Typing.Speed ms={200}/>
                                    Hello, I'm Faisal
                                    <Typing.Reset count={1} delay={500}/>
                                </Typing>
                                
                            </Typography>
                            <Typography variant="h3" style={{fontFamily: '"Balsamiq Sans",cursive', marginTop: '7px'}}>
                                Computer Science Student
                            </Typography>
                            <Typography variant="h3" style={{fontFamily: '"Balsamiq Sans",cursive', marginTop: '7px'}}>
                                @Multimedia Nusantara University
                            </Typography>
                            <Typography variant="h4" style={{fontFamily: '"Source Code Pro",monospace', marginTop: '15%'}}>
                            A person who is interested in new things preferred field of competence, and like to improve my own skills through a project. 
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}