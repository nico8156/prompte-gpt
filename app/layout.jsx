import React from 'react'
import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: 'Promptopia',
    descxription: 'Discover and share AI Prompts'
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient' />
                </div>
                <div className='app'>
                    <Nav />
                    {children}
                </div>
            </Provider>
        </body>
    </html>
  )
}

export default Rootlayout;