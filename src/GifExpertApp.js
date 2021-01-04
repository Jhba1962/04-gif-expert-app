import React, { useState } from 'react'

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Ricky and Morty']);
    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            {/* <button onClick={addCategory}>Add Category</button> */}
            <hr />
            {
                categories.map((category) =>
                (<GifGrid
                    key={category}
                    category={category}
                />)
                )
            }
        </>
    );
};

export default GifExpertApp;