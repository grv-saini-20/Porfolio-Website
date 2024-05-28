import Typography from "../../ui/Typography/Typography"
import "./SkillCard.scss"

import React from 'react'

let SkillCard:React.FC<{iconSrc: string, title: string}> = ({iconSrc, title}) => {
  return (
    <article className="skill-card">
    <img width="100px" height="100px" src={iconSrc} alt="skill" />
    <Typography type="body" _color="var(--tertiary-900)" _fontweight="700">{title}</Typography>
    </article>
  )
}

export default SkillCard

