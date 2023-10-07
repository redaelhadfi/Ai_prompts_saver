import Nav from '@/components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'
import Provider from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ur saver',
  description: 'a place to save your prompts',
}







  
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="../logo.png" sizes="any" />
     </head>
  
      <body >
      <Provider>
 
        <div>
          <div className='gradient'/>
        </div>

        <main className='flex flex-col justify-center '>
          <div className='flex w-full '>

          <Nav />
    
          </div>
          <div>
        
          {children}
         
          </div>

        </main>

       </Provider>
       </body>
 
    

    </html>


  )
}
