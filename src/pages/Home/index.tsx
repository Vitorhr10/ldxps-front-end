import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.png';

import './styles.css';

function Home() {

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
        </div>

        <div className="buttons-container">
          <Link to="/seller-form" className="seller-form">
            Cadastro
          </Link>

          <Link to="/seller-list" className="seller-list">
            Listagem
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;