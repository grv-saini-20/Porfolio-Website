import React from "react";
import "./AboutCard.scss";
import Typography from "../../ui/Typography/Typography";

interface IHeroCardProps {
  heading: string;
  aboutMe: string;
  description: string;
  namelabel: string;
  name: string;
  ageLabel: string;
  age: number;
  emailLabel: string;
  email: string;
  fromLabel: string;
  from: string;
  imgSrc: string;
  buttonLabel: string;
  cvPath: string;
}

let AboutCard: React.FC<IHeroCardProps> = ({
  heading,
  aboutMe,
  description,
  namelabel,
  name,
  ageLabel,
  age,
  emailLabel,
  email,
  fromLabel,
  from,
  buttonLabel,
  cvPath,
}) => {
  return (
    <article className="about-card">
      {/* <img className="hero-image" src={imgSrc} alt="hero" /> */}
      <div className="about-details">
        <Typography type="subheading" _color="var(--tertiary-700)">
          {heading}
        </Typography>
        <br />
        <Typography type="subheading" _color="var(--teriary-900)">{aboutMe}</Typography>
        <br />
        <p className="description">
        <Typography type="body" _color="var(--tertiary-700)">{description}</Typography>
        </p>
        <br />
        <div className="divider" aria-hidden={true}></div>
        <br />
        <div className="personal">
          <div className="info">
            <Typography type="body" _color="var(--tertiary-700)">{namelabel}</Typography>
            <Typography type="body" _fontweight="400" _color="var(--tertiary-900)">
              {name}
            </Typography>
          </div>
          <div className="info">
            <Typography type="body" _color="var(--tertiary-700)">{fromLabel}</Typography>
            <Typography type="body" _fontweight="400" _color="var(--tertiary-900)">
              {from}
            </Typography>
          </div>
          <div className="info">
            <Typography type="body" _color="var(--tertiary-700)">{ageLabel}</Typography>
            <Typography type="body" _fontweight="400" _color="var(--tertiary-900)">
              {age}
            </Typography>
          </div>
          <div className="info">
            <Typography type="body" _color="var(--tertiary-700)">{emailLabel}</Typography>
            <Typography type="body" _fontweight="400" _color="var(--tertiary-900)">
              {email}
            </Typography>
          </div>
        </div>
        <br />
        <br />
        <a className="download-cv" href={cvPath} download>
          <Typography type="body">{buttonLabel}</Typography>
        </a>
      </div>
    </article>
  );
};

export default AboutCard;
