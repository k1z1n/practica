import React from "react";
import './Popular.css'
import PopularCard from "../PopularCard/PopularCard.jsx";
import photo1 from '/src/assets/popular/popular1.svg'
import photo2 from '/src/assets/popular/popular2.svg'
import photo3 from '/src/assets/popular/popular3.svg'

export default function Popular(){
    return(
        <div className='popular'>
            <PopularCard img={photo1} text={'МУЖЧИНЫ'}/>
            <PopularCard img={photo2} text={'ЖЕНЩИНЫ'}/>
            <PopularCard img={photo3} text={'АКСУССУАРЫ'}/>
        </div>
    )
}