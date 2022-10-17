const TITLE_MY_GAMES_PAGE = "MEUS JOGOS";               // Meus jogos
const TITLE_BLOG_PAGE = "BLOG (DEVLOGS)";               // BLOG (devlogs)
const TITLE_CONTACT_PAGE = "CONTATO / REDES SOCIAIS";   // Contato / Redes Sociais
const TITLE_ABOUT_ME_PAGE = "SOBRE MIM";                // Sobre mim

const PAGE_INDEX = "index"                              // index.html
const PAGE_GAMES = "jogos"                              // jogos.html
const PAGE_CONTACT = "contato"                          // contato.html
const PAGE_ABOUT = "sobre_mim"                          // sobre_mim.html

class MenuNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <a href={PAGE_INDEX}><div id="home" class="menu"></div></a>
                <a href={PAGE_GAMES}><div id="jogos" class="menu">{TITLE_MY_GAMES_PAGE}</div></a>
                <a href="https://marcosraoi.blogspot.com/" target="_blank">
                    <div id="blog" class="menu">{TITLE_BLOG_PAGE}</div>
                </a>
                <a href={PAGE_CONTACT}><div id="contato" class="menu">{TITLE_CONTACT_PAGE}</div></a>
                <a href={PAGE_ABOUT}><div id="sobre_mim" class="menu">{TITLE_ABOUT_ME_PAGE}</div></a>
            </div>
        )
    }
}

export default MenuNavigation;