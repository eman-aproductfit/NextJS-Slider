import Head from 'next/head'
import Nav from './Nav'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
      <>
       <Head>
    <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
  </Head>
      <Nav/>
    <div className={styles.container}>
    <main className={styles.main}>
{children}
    </main>
        </div>
        </>
  )
}

export default Layout