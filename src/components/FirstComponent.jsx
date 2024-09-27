import { Button } from '@mui/material'
import React from 'react'
const name="tardek"
function FirstComponent(props) {
  return <div> 

    
    
    {props.studentinfo.map((fav)=>(
      <p>{fav.product_id}{fav.name}{fav.color}</p>
      
    
    ))}
    
     </div>
    
      
 



    
  
}

export default FirstComponent
