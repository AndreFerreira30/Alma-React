import React, { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import '../../index.css';
import './header.css';
import '../Button/button.css';
import logo from '../../assets/image/logo-escura-pqn2.png';
import { FaUserCircle } from "react-icons/fa";

function Header() {
    const [abrirMenu, setAbrirMenu] = useState(false);
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const userData = localStorage.getItem("usuario");
        if (userData) {
            setUsuario(JSON.parse(userData));
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        setUsuario(null);
        window.location.href = "/";
    };

    const toggleMenu = () => setAbrirMenu(!abrirMenu);
    const closeMenu = () => setAbrirMenu(false);

    return (
        <header>
            <Link to="/">
                <img src={logo} alt="Logo instituto Alma" />
            </Link>

            <button className='hamburguer' onClick={toggleMenu}>
                <FaBars size={24} />
            </button>

            <nav className={`menu ${abrirMenu ? "nav-active" : ""}`}>

                <NavLink to="/sobrenos" className={({ isActive }) => isActive ? "navegador-ativo" : "navegador"} onClick={closeMenu}>SOBRE NÓS</NavLink>

                <NavLink to="/atividades" className={({ isActive }) => isActive ? "navegador-ativo" : "navegador"} onClick={closeMenu}>ATIVIDADES</NavLink>

                <NavLink to="/transparencia" className={({ isActive }) => isActive ? "navegador-ativo" : "navegador"} onClick={closeMenu}>TRANSPARÊNCIA</NavLink>

                <NavLink to="/eventos" className={({ isActive }) => isActive ? "navegador-ativo" : "navegador"} onClick={closeMenu}>EVENTOS</NavLink>

                <NavLink to="/ouvidoria" className={({ isActive }) => isActive ? "navegador-ativo" : "navegador"} onClick={closeMenu}>OUVIDORIA</NavLink>

                {/* SOMENTE MOSTRA "ENTRAR" SE NÃO ESTIVER LOGADO */}
                {!usuario && (
                    <NavLink to="/login"
                        className={({ isActive }) => isActive ? "navegador-login-select" : "navegador-login"}
                        onClick={closeMenu}>
                        ENTRAR
                    </NavLink>
                )}

                {/* USUÁRIO LOGADO → MOSTRAR NOME + ICONE + LOGOUT */}
                {usuario && (
                    <div className="usuario-logado">
                        <FaUserCircle className="icone-usuario" />
                        <span>{usuario.nome}</span>
                        <button className="btn-sair" onClick={logout}>Sair</button>
                    </div>
                )}

                <NavLink to="/doador"
                    className={({ isActive }) => isActive ? "navegador-doar-select" : "navegador-doar"}
                    onClick={closeMenu}>
                    DOAR AGORA
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
