import Head from 'next/head'
import Image from 'next/image'

import styles from '@/pages/index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <input data-testid="inputIdea" type='text' />

      <button data-testid="addIdeaButton">
        Agregar idea
      </button>

      <ul data-testid="ideaList">
        <li>Hola</li>
      </ul>  
    </div>
  )
}
