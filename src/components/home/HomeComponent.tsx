import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import CourseComponent from '../courses/CourseComponent';
import './homeComponent.sass';
const HomeComponent = () => {

    const useStyles = makeStyles({
        containerPers: {
            marginTop: "2rem",
        },
    });
    const classes = useStyles();

    return (



        <Container>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <div className="divPersonalizado" />
                </Grid>
                <Grid item xs={6}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                    <Container><h2>Perseo, because everybody deserves a good chance</h2></Container>
                    </Grid>
                </Grid>
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
                <CourseComponent />

            </Grid>

        </Container>
    )
}

export default HomeComponent;