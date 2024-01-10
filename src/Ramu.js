import React from 'react'
function Hello(){
    return <h1>This is from function component</h1>
}

const Ramu = () => {
  return (
    <div>
      <h1>Hello World From</h1>
      <Hello />
    </div>
  )
}

export default Ramu
