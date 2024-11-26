const homeH1 = document.createElement('h1');
const homeImg = document.createElement('img');
const homePara = document.createElement('p');

homeImg.src = 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRbSso8UehSaUS4dfO2yP8PMjG1dhcRjvj4O0ll6PIwfYrkLrnl5CL6mKB7rAQla1ZAI3yF1isUfVZv-rNi-Cc';
homeImg.alt = 'Restaurant';
homeImg.classList.add('home-img');
homePara.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nulla dolorum eveniet atque ab cum!';
homeH1.textContent = "Ralat Restaurant";

export {homeImg, homeH1, homePara};