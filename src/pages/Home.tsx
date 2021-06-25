import IllustrationSvg from '../assets/images/illustration.svg'
import LogoSvg from '../assets/images/logo.svg'
import GoogleSvg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'

export function Home() {
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
          <button className="create-room">
          <img src={GoogleSvg} alt="Logo do Google" />
            Crie a sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input 
              type="text"
              placeholder="Digite o código da sala" 
            />
            <Button disabled>
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}
