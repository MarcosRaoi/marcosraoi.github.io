const TITLE_MY_GAMES_PAGE = "MEUS JOGOS"; // Meus jogos
const TITLE_BLOG_PAGE = "BLOG (DEVLOGS)"; // BLOG (devlogs)
const TITLE_CONTACT_PAGE = "CONTATO / REDES SOCIAIS"; // Contato / Redes Sociais
const TITLE_ABOUT_ME_PAGE = "SOBRE MIM"; // Sobre mim

class MenuNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <a href="index.html"><div id="home" class="menu"></div></a>
                <a href="jogos.html"><div id="jogos" class="menu">{TITLE_MY_GAMES_PAGE}</div></a>
                <a href="https://marcosraoi.blogspot.com/" target="_blank">
                    <div id="blog" class="menu">{TITLE_BLOG_PAGE}</div>
                </a>
                <a href="contato.html"><div id="contato" class="menu">{TITLE_CONTACT_PAGE}</div></a>
                <a href="sobre_mim.html"><div id="sobre_mim" class="menu">{TITLE_ABOUT_ME_PAGE}</div></a>
            </div>
        )
    }
}

export default MenuNavigation;