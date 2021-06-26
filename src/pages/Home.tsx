import { useHistory } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

import { Button } from '../components/Button'

import IllustrationSvg from '../assets/images/illustration.svg'
import { FormEvent, useState } from 'react'
import LogoSvg from '../assets/images/logo.svg'
import GoogleSvg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { database } from '../services/firebase'

export function Home() {
  const history = useHistory()
  const [roomCode, setRoomCode] = useState('')
  const { user, singInWithGoogle} = useAuth();

   async function handleCreateRoom() {
      if(!user) {
        await singInWithGoogle()
      }
    
      history.push('/rooms/new')
    }

    async function handleJoinRoom(e: FormEvent){
      e.preventDefault()

      if(roomCode.trim() === '') {
        return
      }

      const roomRef = await database.ref(`rooms/${roomCode}`).get()
      if(!roomRef.exists()){
        alert('Rooms does not exists')
        return
      }
      history.push(`/rooms/${roomCode}`)
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
          <button className="create-room" onClick={handleCreateRoom}>
          <img src={GoogleSvg} alt="Logo do Google" />
            Crie a sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input 
              type="text"
              placeholder="Digite o código da sala" 
              onChange={e => setRoomCode(e.target.value)}
              value = {roomCode}
            />
            <Button>
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}
