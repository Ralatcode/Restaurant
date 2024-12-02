import "./style.css";
import { homeContent } from "./home";
import { menuH1, menuImg, menuPara } from "./menu";
import { contactH1, contactImg, contactPara } from "./contact";

const contentDiv = document.querySelector('#content');
const navBtns = Array.from(document.querySelectorAll("nav > button"));
let currentPage = 'home';

switchPage(currentPage);

navBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        currentPage = e.target.id;
        switchPage(currentPage);
    })
})

function switchPage(page) {
    if (page === 'home') {
        contentDiv.textContent = '';
        contentDiv.append(homeContent);   
    } else if (page === 'menu') {
        contentDiv.textContent = '';
        contentDiv.append(menuImg, menuH1, menuPara);   
    } else if (page === 'about') {
        contentDiv.textContent = '';
        contentDiv.append(contactImg, contactH1, contactPara);   
    }
}