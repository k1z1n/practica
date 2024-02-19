import Button from "../Button/Button.jsx";
import './PopularCard.css'

export default function PopularCard({img, text}){
    return(
        <div className='popular-card'>
            <img src={img} alt={img}/>
            <Button buttonText={text} className={'button position animation'}/>
        </div>
    )
}