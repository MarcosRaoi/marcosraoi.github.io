const TITLE_MY_GAMES_PAGE = "MEUS JOGOS";               // Meus jogos
const TITLE_BLOG_PAGE = "BLOG (DEVLOGS)";               // BLOG (devlogs)
const TITLE_CONTACT_PAGE = "CONTATO / REDES SOCIAIS";   // Contato / Redes Sociais
const TITLE_ABOUT_ME_PAGE = "SOBRE MIM";                // Sobre mim

const PAGE_INDEX = "/"                                  // index.html
const PAGE_GAMES = "jogos"                              // jogos.html
const PAGE_CONTACT = "contato"                          // contato.html
const PAGE_ABOUT = "sobre_mim"                          // sobre_mim.html
const PAGE_BLOG = "https://marcosraoi.blogspot.com/"    // https://marcosraoi.blogspot.com/

const CLASS_MENU = "menu"

const PAGE_ID_INDEX = "home"                            // index.html
const PAGE_ID_GAMES = "jogos"                           // jogos.html
const PAGE_ID_CONTACT = "contato"                       // contato.html
const PAGE_ID_ABOUT = "sobre_mim"                       // sobre_mim.html
const PAGE_ID_BLOG = "blog"                             // https://marcosraoi.blogspot.com/

class MenuNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    /** This method helps local development.
     * 
     * @param slug - the given URL that will be redirected
     * @param justReturn - stands for just return the same url without append '.html' on it
     */
    local(slug, justReturn)
    {
        let localHosting = window.location.href.startsWith("http://localhost:8000/");
        if (localHosting && !justReturn){
            return slug + ".html";
        }
        else {return slug;}
    }

    render() {
        return (
            <div>
                <a href={this.local(PAGE_INDEX, true)}><div id={PAGE_ID_INDEX} class={CLASS_MENU}></div></a>
                <a href={this.local(PAGE_GAMES, false)}><div id={PAGE_ID_GAMES} class={CLASS_MENU}>{TITLE_MY_GAMES_PAGE}</div></a>
                <a href={this.local(PAGE_BLOG, true)} target="_blank"><div id={PAGE_ID_BLOG} class={CLASS_MENU}>{TITLE_BLOG_PAGE}</div></a>
                <a href={this.local(PAGE_CONTACT, false)}><div id={PAGE_ID_CONTACT} class={CLASS_MENU}>{TITLE_CONTACT_PAGE}</div></a>
                <a href={this.local(PAGE_ABOUT, false)}><div id={PAGE_ID_ABOUT} class={CLASS_MENU}>{TITLE_ABOUT_ME_PAGE}</div></a>
            </div>
        )
    }
}

export default MenuNavigation;