import React from 'react'
import './HeroCard.scss';
import Typography from '../../ui/Typography/Typography';
import Blob from "../Blob/Blob";

interface IHeroCardProps {
    heroTitleOne: string;
    heroTitleTwo: string;
    heroTitleThree: string;
    imgSrc: string;
    buttonLabel: string;
    specialHeading: string;
}

let HeroCard:React.FC<IHeroCardProps> = ({heroTitleOne,heroTitleTwo, heroTitleThree, imgSrc, specialHeading, buttonLabel}) => {
  return (
    <article className='hero-card'>
        <div className="details">
            <Typography type="subheading" _color='var(--tertiary-900)' _fontweight='300'>{heroTitleOne}</Typography>
            <Typography type="heading" _color='var(--tertiary-700)' _fontweight='700'>{heroTitleTwo}{"\u00A0"}<Typography type="heading" _color='var(--tertiary-900)' _fontweight='700' renderInline={true}>{specialHeading}</Typography></Typography>
            <Typography type="subheading" _color='var(--tertiary-900)' _fontweight='300'>{heroTitleThree}</Typography>
            <br /><br />
            <a className="mail-to" href="mailto:gouravsaini9797@gmail.com"><Typography type="body">{buttonLabel}</Typography></a>
        </div>
        <div className="image-section">
            <Blob imgSrc={imgSrc}/>
        </div>
    </article>
  )
}

export default HeroCard