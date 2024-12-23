const homeContent = document.createElement('div');
const homeDiv = document.createElement('div');
const homeH1 = document.createElement('h1');
const homeImg = document.createElement('img');
const homePara = document.createElement('p');
const divTwo = document.createElement('div');
const divTwoHeading = document.createElement('h2');
const divTwoPara = document.createElement('p');
const divThree = document.createElement('div');
const divThreeHeading = document.createElement('h2');
const divThreePara = document.createElement('p');

homeImg.src = 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRbSso8UehSaUS4dfO2yP8PMjG1dhcRjvj4O0ll6PIwfYrkLrnl5CL6mKB7rAQla1ZAI3yF1isUfVZv-rNi-Cc';
homeImg.alt = 'Restaurant';
homeImg.classList.add('home-img')
homePara.textContent = 'At Ralat Restaurant, we believe that dining is an experience, not just a meal. Nestled in the heart of Lagos, we bring together the finest ingredients, expertly crafted dishes, and exceptional service to create a dining experience that’s nothing short of extraordinary.';
homeH1.textContent = "Welcome to Ralat Restaurant - where flavour meets elegance";
homeDiv.classList.add('home-div')
homeDiv.append(homeImg, homeH1, homePara);
divTwoHeading.textContent = 'Our Menu: A Symphony of Flavors';
divTwoPara.textContent = `Our seasonal menu features a selection of dishes that celebrate the finest local and international flavors. Whether you’re a fan of classic comfort food, innovative culinary creations, or fresh, locally-sourced ingredients, we’ve got something to excite every palate. From mouthwatering appetizers to indulgent desserts, each dish is carefully crafted by our talented chefs to provide an unforgettable dining experience.`;
divTwo.classList.add('div-two')
divTwo.append(divTwoHeading, divTwoPara);
divThreeHeading.textContent = 'A Warm, Inviting Atmosphere';
divThreePara.textContent = `The moment you step through our doors, you’ll be greeted with a warm, welcoming ambiance designed to make you feel at home. With a blend of modern design and classic comfort, our space is perfect for any occasion, from intimate dinners to lively celebrations.`;
divThree.classList.add('div-three')
divThree.append(divThreeHeading, divThreePara);
homeContent.classList.add('home-content');
homeContent.append(homeDiv, divTwo, divThree);
export {homeContent};