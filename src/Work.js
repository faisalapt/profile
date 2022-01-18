import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import { CardActions, CardMedia } from '@material-ui/core';

import { AppBar, IconButton, styled, makeStyles, Toolbar, Typography, Button, Container, Grid, CardActionArea } from '@material-ui/core';
import covid from './covid.jpg';
import warteg from './warteg.jpg';
import room from './room.jpg';

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
    cards: {
        marginTop: '5%'
    },
    media: {
        width: '100%'
    }
}));

export default function Work(){
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
                        <Link to="/" className="link"><Button color='inherit' style={{fontFamily:'"Caveat",cursive'}}>home</Button></Link>
                        <Link to="/Work" className="link"><Button color='inherit' style={{fontFamily:'"Caveat",cursive',color:'#797a7a'}}>work</Button></Link>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={3} className={classes.cards}>
                    <Grid item xs={8} md={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia className={classes.media} component="img" image={covid} alt='Project Visualization COVID-19'/>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div'>
                                        Visualization COVID-19
                                    </Typography>
                                    <Typography component='p'>
                                        This project was carried out as a team using the ReactJS framework and Bootstrap. Big thanks to those who have made API, namely Mathdroid and Reynadi for making the work easier.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button color='inherit' onClick={(e) => {
                                    e.preventDefault();
                                    window.open("https://uas-seblak-covid19.faisalapt.vercel.app/")
                                }}>Open Project</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={8} md={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia className={classes.media} component="img" image={warteg} alt='Project Order Food French Restaurant'/>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div'>
                                        Wartég
                                    </Typography>
                                    <Typography component='p'>
                                    This project was carried out as a team using the CodeIgniter3 framework and a SQL database. In this project I acted as the backend and was assisted by a friend from my team. This project is to order food in a restaurant.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button color='inherit' onClick={(e) => {
                                    e.preventDefault();
                                    window.open("http://warteg.xyz/");
                                }}>Open Project</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={8} md={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia className={classes.media} component="img" image={room} alt='Project Book Hotel Room'/>
                            </CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant='h5' component='div'>
                                    NG.ROOM
                                </Typography>
                                <Typography component='p'>
                                    This project was carried out as a team using the CodeIgniter3 framework and a SQL database. In this project I acted as the backend and was assisted by a friend from my team. This project is for booking rooms or rooms at hotels located in cities in Indonesia and can be filtered by rating.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button color='inherit' onClick={(e) => {
                                    e.preventDefault();
                                    window.open("http://ngroom.warteg.xyz/");
                                }}>Open Project</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}