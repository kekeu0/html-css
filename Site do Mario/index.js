
class Mobilebar {
    constructor(button_menu, nav, navigsocial, navig) {
        this.button_menu = document.querySelector(button_menu);
        this.button = document.querySelector('#button')
        this.nav = document.querySelector(nav);
        this.navigsocial = document.querySelector('.navigation_social');
        this.navig = document.querySelectorAll('.navigation');
        this.naviglink = document.querySelector('.navigation_link')/*Fa;ta o All*/
        this.activeClass= "active";

        this.handleClick = this .handleClick.bind(this)
    }

    animatedLinks() { /*Não funciona separadamente*/ 
        this.naviglink.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.nav.classList.toggle(this.activeClass);
        this.button.classList.toggle(this.activeClass);
        this.animatedLinks();
    }

    addClickEvent() {
        this.button_menu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.button_menu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new Mobilebar(
    "#button_menu",
    "nav",
    ".navigsocial",
    ".navig",
    ".naviglink"
);
mobileNavbar.init();