import React from 'react'
import './HeroCard.scss';
import Typography from '../../ui/Typography/Typography';
import Blob from "../Blob/Blob";

interface IHeroCardProps {
    heroTitleOne: string;
    heroTitleTwo: string;
    heroTitleThree: string;
    imgSrc: string;
}

let HeroCard:React.FC<IHeroCardProps> = ({heroTitleOne,heroTitleTwo, heroTitleThree, imgSrc}) => {
  return (
    <article className='hero-card'>
        <div className="details">
            <Typography type="subheading" _color='var(--primary-900)' _fontweight='300'>{heroTitleOne}</Typography>
            <Typography type="heading" _color='var(--primary-900)' _fontweight='700'>{heroTitleTwo}</Typography>
            <Typography type="subheading" _color='var(--primary-900)' _fontweight='300'>{heroTitleThree}</Typography>
        </div>
        <div className="image-section">
            <Blob imgSrc={imgSrc}/>
        </div>
    </article>
  )
}

export default HeroCard