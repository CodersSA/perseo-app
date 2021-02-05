import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import CourseComponent from '../courses/CourseComponent';
import './homeComponent.sass';
const HomeComponent = () => {

    const useStyles = makeStyles({
        containerPers: {
            marginTop: "2rem",
        },
        containerText: {
            marginTop: "5rem",
            textAlign: "center",
            color: "white",
        },
        titleCourses: {
            marginTop: "6rem",
            color: "#b2b2b2",
        }
    });

    const classes = useStyles();

    return (
        <Container>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center">
                <div className="divPersonalizado">
                    <Container className={classes.containerText}> <h1>Begin your journey here</h1> </Container>
                </div>
            </Grid>
            <Grid
             container
             direction="row"
             justify="center"
             alignItems="center"
             className={classes.titleCourses}>
                <h3>Our top courses</h3>
            </Grid>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center">
                <CourseComponent />
                <CourseComponent />
                <CourseComponent />


            </Grid>

        </Container>
    )
}

export default HomeComponent;