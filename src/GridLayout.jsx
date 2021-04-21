import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/Styles';
import MainGridItem from './MainGridItem';
import GridItem from './GridItem';

const useStyles = makeStyles(theme => ({
    mainGridItem: {
        backgroundColor: 'blue'
    },
    secondRowFirstItem: {
        backgroundColor: 'green'
    },
    secondRowSecondItem: {
        backgroundColor: 'orange'
    },
    thirdRow: {
        backgroundColor: 'pink'
    }
}));

export default function GridLayout() {
    
    const classes = useStyles();
    
    return (
        <Grid container spacing={3}>
            
            <Grid item lg={12} sm={12} xs={12}>
                <MainGridItem />
            </Grid>

            <Grid item lg={6} md={12} sm={6} xs={12}>
                <GridItem 
                    title="Excel Masterclass"
                    image="https://cdn.pixabay.com/photo/2015/05/15/01/48/computer-767776_1280.jpg" 
                    description=
                    "in thid 6-level eDegree, you'll learn how to use Excel from the very basics all 
                    the way to VBA programming and machine learning. You'll also learn web automation, 
                    python and Selenium."
                />
            </Grid>

            <Grid item lg={6} md={12} sm={6} xs={12}>
                <GridItem 
                    title="Learn to Code and Get Hired"
                    image="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg"
                    description=
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
                    in rutrum metus. Ut sit amet imperdiet purus. Sed vehicula vel sem sit amet pharetra. 
                    In habitasse dictumst."
                />
            </Grid>

            <Grid item lg={4} md={12} sm={12} xs={12}>
                <GridItem 
                    title="3D Modeling Masterclass"
                    image="https://cdn.pixabay.com/photo/2019/02/09/10/14/tin-can-3984776_960_720.jpg"
                    description=
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
                    in rutrum metus. Ut sit amet imperdiet purus. Sed vehicula vel sem sit amet pharetra. 
                    In habitasse dictumst."
                />
            </Grid>

            <Grid item lg={4} md={12} sm={12} xs={12}>
                <GridItem 
                    title="Business & Side Hustles"
                    image="https://cdn.pixabay.com/photo/2017/08/12/19/00/man-2635036_960_720.jpg"
                    description=
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
                    in rutrum metus. Ut sit amet imperdiet purus. Sed vehicula vel sem sit amet pharetra. 
                    In habitasse dictumst."
                />
            </Grid>

            <Grid item lg={4} md={12} sm={12} xs={12}>
                <GridItem 
                    title="Game Development Masterclass"
                    image="https://cdn.pixabay.com/photo/2020/10/09/14/12/illuminated-keyboard-5640652_960_720.jpg"
                    description=
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
                    in rutrum metus. Ut sit amet imperdiet purus. Sed vehicula vel sem sit amet pharetra. 
                    In habitasse dictumst."
                />
            </Grid>
        </Grid>
    );
}