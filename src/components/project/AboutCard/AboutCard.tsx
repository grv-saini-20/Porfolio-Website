import React from 'react';
import "./AboutCard.scss";
import Typography from '../../ui/Typography/Typography';

interface IHeroCardProps {
    heading:string;
    aboutMe:string;
    description: string;
    namelabel:string;
    name: string;
    ageLabel: string;
    age: number;
    emailLabel: string;
    email:string;
    fromLabel: string;
    from: string;
    imgSrc:string;
    buttonLabel:string;
    cvPath:string;
}

let AboutCard:React.FC<IHeroCardProps> = ({heading,aboutMe,description,namelabel,name,ageLabel,age,emailLabel,email,fromLabel,from,imgSrc,buttonLabel, cvPath}) => {
  return (
    <article className='about-card'>
        <img className='hero-image' src={imgSrc} alt="hero" />
        <div className="about-details">
            <Typography type="subheading" _color="var(--tertiary-500)">{heading}</Typography>
            <br />
            <Typography type="subheading">{aboutMe}</Typography>
            <br />
            <Typography type="body">{description}</Typography>
            <br />
            <div className='divider' aria-hidden={true}></div>
            <br />
            <div className="personal">
                <div className="info">
                    <Typography type="subtext">{namelabel}</Typography>
                    <Typography type='subtext'  _fontweight='400'>{name}</Typography>
                </div>
                <div className="info">
                    <Typography type="subtext">{fromLabel}</Typography>
                    <Typography type='subtext' _fontweight='400'>{from}</Typography>
                </div>
                <div className="info">
                    <Typography type="subtext">{ageLabel}</Typography>
                    <Typography type='subtext' _fontweight='400'>{age}</Typography>
                </div>
                <div className="info">
                    <Typography type="subtext">{emailLabel}</Typography>
                    <Typography type='subtext' _fontweight='400'>{email}</Typography>
                </div>
            </div>
            <br /><br />
            <a className="download-cv" href={cvPath} download ><Typography type="body">{buttonLabel}</Typography></a>
        </div>
    </article>
  )
}

export default AboutCard