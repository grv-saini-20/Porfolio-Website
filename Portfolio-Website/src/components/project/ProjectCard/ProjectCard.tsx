import Typography from "../../ui/Typography/Typography";
import "./ProjectCard.scss";
import React from 'react'

interface IProjectCardProps {
    title: string;
    description:string;
    link: string;
}

let ProjectCard:React.FC<IProjectCardProps> = ({title, description, link}) => {

  return (
    <div>
        <Typography type="cardheading">{title}</Typography>
        <br />
        <Typography type="body">{description}</Typography>
        <br />
        <Typography type="subtext"><a href={link}>{link}</a></Typography>
    </div>
  )
}


export default ProjectCard