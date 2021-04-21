import { makeStyles } from "@material-ui/core/styles";
import Grid         from "@material-ui/core/Grid";
import Typography   from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({

    mainContainer: {
        height: 400,
        backgroundImage:
        "url(https://cdn.pixabay.com/photo/2017/05/13/00/18/keyboard-2308477_1280.jpg)",
        color: theme.palette.common.white
    },
    mainItem: {
        padding: theme.spacing(6),
        textAlign: 'left',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
}));

export default function MainGridItem() {

    const classes = useStyles();

    return (
        <Grid container className={classes.mainContainer}>
            <Grid item className={classes.mainItem} md={6}>
                <Typography 
                    component='h2'
                    variant='h5'
                >
                    Hello Coding
                </Typography>

                <Typography variant='body1' paragraph>
                    Do you want to learn to code? Smash your career goals. Build websites, games, apps and artificial intelligence proyect in 99 days.
                </Typography>
            </Grid>
        </Grid>
    );
}