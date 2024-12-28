import "./style.css";
import { homeContent } from "./home";
import { menuContent } from "./menu";
import {contactContent } from "./contact";

const contentDiv = document.querySelector('#content');
const navBtns = Array.from(document.querySelectorAll("nav > button"));
let currentPage = 'home';

switchPage(currentPage);

navBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        currentPage = e.target.id;
        removeActive();
        switchPage(currentPage);
        e.target.classList.add('active');
    })
})

function switchPage(page) {
    if (page === 'home') {
        contentDiv.textContent = '';
        contentDiv.append(homeContent);   
    } else if (page === 'menu') {
        contentDiv.textContent = '';
        contentDiv.append(menuContent);   
    } else if (page === 'about') {
        contentDiv.textContent = '';
        contentDiv.append(contactContent);   
    }
}
function removeActive() {
   navBtns.forEach((btn) => {
    btn.classList.remove('active');
   })   
}