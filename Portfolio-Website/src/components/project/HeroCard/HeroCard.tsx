import React from 'react'
import './HeroCard.scss';
import Typography from '../../ui/Typography/Typography';
import Blob from "../../Blob/Blob";

interface IHeroCardProps {
    heroTitleOne: string;
    heroTitleTwo: string;
    heroTitleThree: string;
    imgSrc: string;
}

let HeroCard:React.FC<IHeroCardProps> = ({heroTitleOne,heroTitleTwo, heroTitleThree, imgSrc}) => {
  return (
    <article>
        <div className="details">
            <Typography type="heading" _color='var(--tertiary-900)' _fontweight='700'>{heroTitleOne}</Typography>
            <Typography type="heading" _color='var(--tertiary-900)' _fontweight='700'>{heroTitleTwo}</Typography>
            <Typography type="heading" _color='var(--tertiary-900)' _fontweight='700'>{heroTitleThree}</Typography>
        </div>
        <div className="image-section">
            <Blob imgSrc={imgSrc}/>
        </div>
    </article>
  )
}

export default HeroCard