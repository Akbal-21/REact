import React, {useState} from 'react'
import {AddCategory} from "./components/AddCategory";
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categoris = ['gravity falls', 'Pokemon', 'samurai']
    const  [categoris, setCategories] = useState(['gravity falls'])

    //const headleADD = () =>{
        //setCategories([...categoris, 'One Piece'])
    //}

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categoris.map(category =>(
                        <GifGrid
                        key = {category}
                        category = {category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}