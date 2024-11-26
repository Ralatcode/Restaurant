import "./style.css";
import { homeH1, homeImg, homePara } from "./home";

const contentDiv = document.querySelector('#content');
contentDiv.append(homeImg, homeH1, homePara);