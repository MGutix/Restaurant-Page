import pageLoadHome from "./home";
import pageLoadMenu from "./menu";
import pageLoadContact from "./contact";




//crear nav bar + event listener => HIDE/DELETE EVERYTHING & load clicked page

pageLoadHome();

const home = document.getElementById('home')
const menu = document.getElementById('menu')
const contact = document.getElementById('contact')



home.addEventListener('click', () => {
    const wrapper = document.getElementById('wrapper')
    wrapper.remove();
    pageLoadHome();
})

menu.addEventListener('click', () => {
    const wrapper = document.getElementById('wrapper')
    wrapper.remove();
    pageLoadMenu();
})

contact.addEventListener('click', () => {
    const wrapper = document.getElementById('wrapper')
    wrapper.remove();
    pageLoadContact();
})