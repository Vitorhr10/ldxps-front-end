import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.png'

import './styles.css';

interface PageHeaderProps{
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <ul>
              <li>Home</li>
            </ul>
          </Link>
          <img src={logoImg} alt="Landix"/>
        </div>

        <div className="header-content">
          <strong>{props.title}</strong>
          
          {props.children}
        </div>
      </header>
  );
}

export default PageHeader;