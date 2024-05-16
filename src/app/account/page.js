import { redirect } from 'next/navigation'
import React from 'react'

const Account = () => {
    const userprofile = null
    if (userprofile == null) {
        return (
            redirect('/profile')
        )
    }
  return (

    <div>Account page</div>
  )
}

export default Account