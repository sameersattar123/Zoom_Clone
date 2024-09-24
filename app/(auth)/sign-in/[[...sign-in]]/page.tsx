import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <main className='flex justify-center h-screen items-center'>
      <SignIn/>
    </main>
  )
}

export default SignInPage
