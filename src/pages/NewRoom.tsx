import { useAuth } from '../hooks/useContext'
import { Link } from 'react-router-dom'
import IllustrationSvg from '../assets/images/illustration.svg'
import LogoSvg from '../assets/images/logo.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'

export function NewRoom() {
  const { user } = useAuth()
  console.log(user);

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
          <h1>{user?.name}</h1>
          <h2>Criar uma nova sala</h2>
          <form>
            <input 
              type="text"
              placeholder="Nome da sala" 
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
