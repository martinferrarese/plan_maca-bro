import Head from 'next/head'
import Image from 'next/image'

import styles from '@/pages/index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <input data-testid="inputPrice" type='text' />
    </div>
  )
}
