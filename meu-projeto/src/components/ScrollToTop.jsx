// src/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation(); //Pega a localização do site /home; /login

  useEffect(() => { //cria um colateral quando algo ocorre
    window.scrollTo(0, 0); //Ira rolar a tela para 0,0 (inicio), toda vez que pathname mudar
  }, [pathname]);

  return null;
}

export default ScrollToTop;
