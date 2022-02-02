
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    
    <Layout
      title="Home | next.js"
      description="Descripcion de mi sitio web"
    >
     
      <header className={styles.header}>
        <h2>Welcome to Devs</h2>
      </header>
      <main className={styles.main}>
        <Link className={styles.enlace} href="/contacto">
          <a>
            To Contact
          </a>
          </Link>
      </main>
     
    </Layout>

    

  </>
  )
}
