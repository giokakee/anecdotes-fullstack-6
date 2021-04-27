
import React, { useState } from 'react'
import { useSelector } from 'react-redux'



const Notification = () => {
const [show, setShow] = useState(false)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  let notification = useSelector(state => state.notification)
  
 
return(
  <div style={style}>
  {notification}
</div>
)

}

export default Notification