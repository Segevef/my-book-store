import React, { useState, useEffect } from 'react';
import BookCard from '../../shared/components/BookCard/BookCard'
import tmp from "../../assets/images/tmp.jpg";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./StorePageStyle";
import Grid, { GridSpacing } from '@material-ui/core/Grid';


// @ts-ignore
const useStyles = makeStyles(styles);

function StorePage() {
    const classes = useStyles();

    const [booksList, setBooksList] = useState([]);

    useEffect(() => {
        const fetchClasses = async () => {

        };
        fetchClasses();

      }, []);
    

    return (
        <div>
            <h1>Store Page</h1>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" >
                      {[0, 1, 2,3,4,5].map((value) => (
                        <Grid key={value} item>
                            <BookCard 
                                imageAlt="first try"
                                name="Book"
                                price="15$"
                                img={tmp}
                            />
                        </Grid>
                    ))}
                    </Grid>
                </Grid>
            </Grid>
    
        </div>
    )
}

export default StorePage;