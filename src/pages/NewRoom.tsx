import IllustrationSvg from '../assets/images/illustration.svg'
import LogoSvg from '../assets/images/logo.svg'
import GoogleSvg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'

export function NewRoom() {
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
            <a href="#">clique aqui</a>
          </p>
        </div>
      </main>
    </div>
  )
}
