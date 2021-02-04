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
        gridBackground: {
        }
    });
    const classes = useStyles();

    return (
        <Container>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">
                <div className="divPersonalizado">
                    <Container className={classes.containerText}><h2>PerseoApp</h2><h5>We help you with your career</h5></Container>
                </div>
            </Grid>

            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center">
                <CourseComponent />
                <CourseComponent />
                <CourseComponent />
                <CourseComponent />
                <CourseComponent />
                <CourseComponent />


            </Grid>

        </Container>
    )
}

export default HomeComponent;