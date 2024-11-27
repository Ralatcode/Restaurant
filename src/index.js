import "./style.css";
import { homeH1, homeImg, homePara } from "./home";
import { menuH1, menuImg, menuPara } from "./menu";

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
        contentDiv.append(homeImg, homeH1, homePara);   
    } else if (page === 'menu') {
        contentDiv.textContent = '';
        contentDiv.append(menuImg, menuH1, menuPara);   
    } else if (page === 'about') {
        contentDiv.textContent = '';
        console.log('display about page');
    }
}