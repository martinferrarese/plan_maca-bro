import styles from '@/pages/index.module.css'
import { useState } from 'react'

export default function Home() {
  const [ideaList, setIdeaList] = useState<string[]>([]);
  const [idea, setIdea] = useState("");

  const handleNewIdea = () => {
    setIdeaList((prevIdeas) => [...prevIdeas, idea]);
  }

  return (
    <div className={styles.container}>
      <input data-testid="inputIdea" type='text' value={idea} onChange={(e) => {setIdea(e.target.value)}}/>

      <button data-testid="addIdeaButton" onClick={handleNewIdea}>
        Agregar idea
      </button>
 
      <ul data-testid="ideaList">
        {ideaList.map((element, index) => {
          return <li key={index}>{element}</li>
        })}
      </ul>  
    </div>
  )
}
