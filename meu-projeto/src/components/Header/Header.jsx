import React, {useState} from 'react';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../../index.css'
import './header.css'
import '../Button/button.css'
import logo from '../../assets/image/logo-escura-pqn2.png'

function Header(){
    const [abrirMenu, setAbrirMenu] = useState(false); // controla se o menu esta aberto
      // alterna entre aberto e fechado
    const toggleMenu = () => {
        setAbrirMenu(!abrirMenu);
    };

    // fecha o menu sempre que o usuário clicar em um link
    const closeMenu = () => {
        setAbrirMenu(false);
    };
    return(
    <header>
        <Link to="/">
            <img src={logo} alt="Logo instituto Alma"/>
        </Link>

        <button className='hamburguer' 
        onClick={()=> setAbrirMenu(!abrirMenu)}>
            <FaBars size={24} />
        </button>
        <nav  className={`menu ${abrirMenu?"nav-active" : ""}`}>
            <NavLink to="/sobrenos"className={({ isActive }) => isActive ? "navegador-ativo" : "navegador"} onClick={closeMenu}>SOBRE NÓS</NavLink>
            <NavLink to="/atividades"  className={({ isActive }) => isActive ? "navegador-ativo" : "navegador"} onClick={closeMenu}>ATIVIDADES</NavLink>
            <NavLink to="/transparencia"  className={({ isActive }) => isActive ? "navegador-ativo" : "navegador"} onClick={closeMenu}>TRANSPARÊNCIA</NavLink>
            <NavLink to="/eventos"  className={({ isActive }) => isActive ? "navegador-ativo" : "navegador"} onClick={closeMenu}>EVENTOS</NavLink>
            <NavLink to="/ouvidoria"  className={({ isActive }) => isActive ? "navegador-ativo" : "navegador"} onClick={closeMenu}>OUVIDORIA</NavLink>
            <NavLink to="/Login"  className={({ isActive }) => isActive ? "navegador-login-select" : "navegador-login"} onClick={closeMenu}> ENTRAR</NavLink>
            <NavLink to="/doador" className={({ isActive }) => isActive ? "navegador-doar-select" : "navegador-doar"} onClick={closeMenu}> DOAR AGORA</NavLink>
        </nav>
    </header>
    )
}
export default Header; 