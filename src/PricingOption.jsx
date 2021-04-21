import {
    Card, 
    Typography
} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    pricingCard: {
        padding: 50,
        margin: 40,
        borderColor: "darkorange"
    }
}));

export default function PricingOption(props) {

    const { pricingCard } = useStyles();

    return (
        <Card className={pricingCard} variant="outlined">
            <Typography variant="h5">
                {props.title}
            </Typography >

            <Typography variant="h3">
                ${props.price}
            </Typography>

            <Typography variant="h7">
                / {props.length}
            </Typography>

            <Typography variant="h6">
                {props.description}
            </Typography>
        </Card>
    );
}