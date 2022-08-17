import { ReactNode } from 'react'
import Head from 'next/head'
import styles from './MainLayout.module.css'
import Navbar from '../Navbar'
export const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Contact -  Isaac</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar/>
          <main className={styles.main}>
            {children}

          </main>
        </div>
      );
}