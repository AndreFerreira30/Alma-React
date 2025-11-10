import React, {useState} from 'react';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './codigo_css/index.css'
import logo from './assets/image/logo-escura-pqn2.png'

function Header(){
    const [abrirMenu, setAbrirMenu] = useState(false);
    return(
    <header>
        <Link to="/">
            <img src={logo} alt="Logo instituto Alma"/>
        </Link>
        <button className='hamburguer' 
        onClick={()=> setAbrirMenu(!abrirMenu)}>
            <FaBars size={24} />
        </button>
        <nav  className={abrirMenu?"nav-active" : ""}>
            <Link to="/sobrenos" className="navegador">SOBRE NÓS</Link>
            <Link to="/atividades" className="navegador">ATIVIDADES</Link>
            <Link to="/transparencia" className="navegador">TRANSPARÊNCIA</Link>
            <Link to="/ouvidoria" className="navegador">OUVIDORIA</Link>
            <Link to="/eventos" className="navegador" >EVENTOS</Link>
            <Link to="/Login" className="btn-login"> ENTRAR</Link>
            <Link to="/doador" className="btn-doar"> DOAR AGORA</Link>
        </nav>
    </header>
    )
}
export default Header;