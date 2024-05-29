import React from 'react'
import "./Typography.scss";


const Typography:React.FC<{
    children: React.ReactNode;
    _color?: string;
    _fontweight?: string;
    renderInline?: boolean;
    type?: "heading" | "subheading" | "cardheading" | "body" | "subtext";
  }> = ({children, _color="var(--secondary-900)", _fontweight="400", renderInline, type = "body"} ) =>  {
  return (
    <span className={`typography ${type} ${!renderInline && 'block'}`} style={{color: _color, fontWeight: _fontweight}}>
        {children}
    </span>
  )
}

export default Typography