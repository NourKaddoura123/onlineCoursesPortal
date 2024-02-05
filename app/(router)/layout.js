import React from 'react'

function layout({children}) { //pages going to render go to this layout
  return (
    <div>{children}</div>
  )
}

export default layout