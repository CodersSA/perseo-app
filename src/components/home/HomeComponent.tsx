import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import CourseComponent from '../courses/CourseComponent';
import Image from 'react-bootstrap/Image'
import { Col, Row } from 'react-bootstrap';
const HomeComponent = () => {

    const useStyles = makeStyles({
        containerPers: {
            marginTop: "2rem",
        },
        divStart: {
            backgroundColor: "#f1f1a1",
        }
    });
    const classes = useStyles();

    return (



        <Container>
            <div className={classes.divStart}>
            <Image src="https://image.freepik.com/vector-gratis/aula-vacia-interior-escuela-o-clase-universitaria_107791-631.jpg" fluid />
            </div>
            <h2 className={classes.containerPers}>Top Cursos</h2>
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