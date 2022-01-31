class MenuNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <a href="index.html"><div id="home" class="menu"></div></a>
                <a href="jogos.html"><div id="jogos" class="menu">Meus jogos</div></a>
                <a href="https://marcosraoi.blogspot.com/" target="_blank"><div id="blog" class="menu">BLOG (devlogs)</div></a>
                <a href="contato.html"><div id="contato" class="menu">Contato / Redes Sociais</div></a>
                <a href="sobre_mim.html"><div id="sobre_mim" class="menu">Sobre mim</div></a>
            </div>
        )
    }
}

export default MenuNavigation;