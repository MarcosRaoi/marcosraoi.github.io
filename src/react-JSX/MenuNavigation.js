class MenuNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <a href="index.html"><div id="home"></div></a>
                <a href="jogos.html"><div id="jogos">Meus jogos</div></a>
                <a href="https://marcosraoi.blogspot.com/" target="_blank"><div id="blog">BLOG (devlogs)</div></a>
                <a href="contato.html"><div id="contato">Contato / Redes Sociais</div></a>
                <a href="sobre_mim.html"><div id="sobre_mim">Sobre mim</div></a>
            </div>
        )
    }
}

export default MenuNavigation;