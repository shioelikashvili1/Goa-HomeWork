import React from 'react'

export default function SplitText({children}) {
 const words =children.split("")
 
    return (
    words.map((word, index =>(
        <span className='' key={index}>{word}</span>
    )))
    
  )
}
