import "./header.css";
import React, {useState} from 'react';
import { Link } from 'react-router-dom'; 
import SvgHome from "../../../fonts/svg/svgHome";
function Header(){

  const [activeTab, setActiveTab] = useState('home');
  const handleTabClick = (tabName: any) => {
    setActiveTab(tabName);
  }
    return(
      <header>
          <div className="divHeader">
            <div className="headerBoxInicio center">
              <div className="svgCenter pointer">
                <Link to="/">
                  <SvgHome/>
                </Link>
              </div>
              <div className="homeCenter pointer">
                <Link 
                to="/" 
                className={`boxShadow ${activeTab === 'home' ? 'active': ''}`}
                onClick={() => handleTabClick('/home')}
                >Inicio</Link>
                </div>
            </div>
            <div className="headerBox">
              <Link 
              to="/marcas" 
              className={`boxShadow ${activeTab === 'marcas' ? 'active' : ''}`}
              onClick={() => handleTabClick('/marcas')}
              >Marcas</Link>
            </div>
            <div className="headerBox">
              <Link 
              to="/modelos"
              className={`boxShadow ${activeTab === 'modelos' ? 'active' : ''}`}
              onClick={() => handleTabClick('/modelos')}
              >Modelos</Link>
            </div>
            <div className="headerBox">
              <Link 
              to="/cotizar" 
              className={`boxShadow ${activeTab === 'cotizar' ? 'active' : ''}`}
              onClick={() => handleTabClick('/cotizar')}
              >Cotizar</Link>
            </div>
            <div className="headerBox">
              <Link
              to="/rentar" 
              className={`boxShadow ${activeTab === 'rentar' ? 'active' : ''}`}
              onClick={() => handleTabClick('/rentar')}
              >Rentar</Link>
            </div>
            <div className="headerBox">
                <div className="button pointer">
                  <a 
                  href="/comprar">Comprar</a>
                </div>
            </div>
          </div>
      </header>
    );
}

export default Header;