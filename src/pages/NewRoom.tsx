import { FormEvent, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { database } from '../services/firebase'
import { useAuth } from '../hooks/useContext'

import { Button } from '../components/Button'
import IllustrationSvg from '../assets/images/illustration.svg'
import LogoSvg from '../assets/images/logo.svg'
import '../styles/auth.scss'

export function NewRoom() {
  const history = useHistory()
  const { user } = useAuth()
  const [newRoom, setNewRoom] = useState('')

  async function handleCreateRoom(e: FormEvent) {
    e.preventDefault()
    if(newRoom.trim() === ''){
      return
    }
    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    })

    history.push(`/rooms/${firebaseRoom.key}`)
  }
  
  return (
    <div id="page-auth">
      <aside>
        <img src={IllustrationSvg} alt="Imagem Ilustração" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua aúdiencia em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={LogoSvg} alt="letmeask" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input 
              type="text"
              placeholder="Nome da sala" 
              onChange={e => setNewRoom(e.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? 
            <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}
