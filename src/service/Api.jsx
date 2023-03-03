import React from 'react'

function Api() {
  return (
    fetch('logements.json')
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch(console.error)
  )
}

export default Api