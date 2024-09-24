import StreamVideoProvider from '@/providers/StreamClientProvider'
import React from 'react'

const RootLayout = ({children}:any) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout
