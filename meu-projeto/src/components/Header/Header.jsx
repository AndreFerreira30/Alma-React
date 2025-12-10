import React, { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import '../../index.css';
import './Header.css';
import '../Button/button.css';
import logo from '../../assets/image/logo-escura-pqn2.png';
import { FaUserCircle } from "react-icons/fa";

function Header() {
    const [abrirMenu, setAbrirMenu] = useState(false); // controla os estados do menu (aberto:true, fechado:false)
    const [usuario, setUsuario] = useState(null); //  Controla o estado do usuario guardando seus dados (ou null quando não estiver logado) 

    //Utilizado para manter o login mesmo após atualizar a pagina
    useEffect(() => {
        const userData = localStorage.getItem("usuario"); // busca no localStorage se existe algum usuario salvo
        if (userData) { // caso exista 
            setUsuario(JSON.parse(userData)); //executa um setUsuarios para guardar os dados do mesmo no nosso estado (usuario)
        }
    }, []); // esta arquitetura de useEffect faz com que ele seja executado no inicio da montagem do componente, e assim sendo executado apenas 1 vez


    //função para deslogar
    const logout = () => {
        localStorage.removeItem("token"); //remove o token JTW do usuario do localStorage
        localStorage.removeItem("usuario"); //remove os dados do usuario, do localStorage
        setUsuario(null); // define nosso estado (usuario) como null, estando deslogado
        window.location.href = "/"; // redireciona a pagina para a home, no caso ("/")
    };

    //Função para abrir o menu Hamburguer (em telas menores)
    const toggleMenu = () => setAbrirMenu(!abrirMenu);
    //Função para fechar o menu Hamburguer (em telas menores)
    const closeMenu = () => setAbrirMenu(false);

    return (
        <header>
            {/*Anexa a imagem da logo a função de ir a pagina principal*/}
            <Link to="/">
                <img src={logo} alt="Logo instituto Alma" />
            </Link>

            {/*Menu hamburguer que aparece apenas em telas menores */}
            <button className='hamburguer' onClick={toggleMenu}>
                <FaBars size={24} /> {/*Icone para o menu*/}
            </button>

            
            <nav className={`menu ${abrirMenu ? "nav-active" : ""}`}>

                {/*Utilizando NavLink para melhor experiencia do usuario no controle de qual pagina esta no momento */}
                <NavLink to="/sobrenos" className={({ isActive }) => isActive ? "navegador-ativo" : "navegador"} onClick={closeMenu}>SOBRE NÓS</NavLink>

                <NavLink to="/atividades" className={({ isActive }) => isActive ? "navegador-ativo" : "navegador"} onClick={closeMenu}>ATIVIDADES</NavLink>

                <NavLink to="/transparencia" className={({ isActive }) => isActive ? "navegador-ativo" : "navegador"} onClick={closeMenu}>TRANSPARÊNCIA</NavLink>

                <NavLink to="/eventos" className={({ isActive }) => isActive ? "navegador-ativo" : "navegador"} onClick={closeMenu}>EVENTOS</NavLink>

                <NavLink to="/ouvidoria" className={({ isActive }) => isActive ? "navegador-ativo" : "navegador"} onClick={closeMenu}>OUVIDORIA</NavLink>

                    {/* APENAS ADMINISTRADORES */}
                {usuario && (usuario.isAdmin === true || usuario.isAdmin === "true") && (
                <NavLink
                    to="/admin"
                    className={({ isActive }) => isActive ? "navegador-ativo" : "navegador"}
                    onClick={closeMenu}
                >
                ADMINISTRADOR
                </NavLink> )}


                {/* SOMENTE MOSTRA "ENTRAR" SE NÃO ESTIVER LOGADO */}
                {!usuario && (
                    <NavLink to="/login"
                        className={({ isActive }) => isActive ? "navegador-login-select" : "navegador-login"}
                        onClick={closeMenu}>
                        ENTRAR
                    </NavLink>
                )}

                {/* USUÁRIO LOGADO  MOSTRAR NOME + ICONE + LOGOUT */}
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
