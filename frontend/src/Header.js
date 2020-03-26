import React from 'react';
//sempre que quiser injetar algo em JS dentro do componente é necessario
//utilizar chaves

//children - vem todo o conteudo
function Header({children}){
    return (
        <header><h1>{children}</h1></header>
    );
}

export default Header;