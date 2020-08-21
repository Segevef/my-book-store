import React from 'react';
import BookCard from '../../shared/components/BookCard/BookCard'
import tmp from "../../assets/images/tmp.jpg";


function StorePage() {
    //TODO: Maybe a grid of images - material ui - Grid list with titlebars
    return (
        <>
            <h1>Store Page</h1>
            <BookCard 
                imageAlt="first try"
                name="Book"
                price="15$"
                img={tmp}
            />
        </>
    )
}

export default StorePage;