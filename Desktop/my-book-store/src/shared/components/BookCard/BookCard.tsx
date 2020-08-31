import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import styles from "./BookCardStyle";


// @ts-ignore
const useStyles = makeStyles(styles);

function BookCard(props: any) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <img alt={props.imageAlt} src={props.img} style={{"width": 200, "height": 250}} />
                {props.name !== undefined 
                    ? (
                        <div className={classes.cardContent}>
                            <Typography variant="h6" component="h2">
                                {props.name}
                            </Typography>
                            <Typography variant="h6" component="h2">
                                {props.price}
                            </Typography>                       
                        </div>
                    ) : (
                        <Typography variant="h6" component="h2">

                        </Typography>                        
                    )
                }
            </Card>
        </div>
    )
}

export default BookCard;