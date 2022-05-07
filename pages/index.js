import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div className={styles.container}>
       <h1>welcome to next</h1>
    </div>
  )
}
