import Link from 'next/link'
import React from 'react'

const notfound = () => {
  return (
    <>

    <h1>This page doest not exist</h1>
    <Link href='/'>Go back to Home</Link>
    </>
  )
}

export default notfound