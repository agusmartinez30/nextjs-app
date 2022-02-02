import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Layout from '../../components/Layout';
import styles from '../../styles/Contact.module.css'

const index = () => {

    const num1 = 22
    const num2 = 20

    if( num1 <= num2){
        console.log('is true');
    }else{
        console.log('no');
    }


    return (
        <Layout
            title="Contacto | next.js"
            description="Descripcion de mi sitio web"

        >
        <header className={styles.header}>
            <h3>Contacto</h3>
        </header>
        
        <section className={styles.section}>
            <Image
                src="/img/1.jpg"
                width={300}
                height={300}
                alt='Esta es una imagen xd'
                className={styles.image}
            ></Image>
            <Link href="/">Ir al inicio</Link>
        </section>

    
            
        </Layout>

    )

};

export default index;
