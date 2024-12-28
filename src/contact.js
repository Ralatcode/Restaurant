const contactH1 = document.createElement('h1');
const contactImg = document.createElement('img');
const contactPara = document.createElement('p');
const heroDiv = document.createElement('div');
const contactContent = document.createElement('div');
const aboutDiv = document.createElement('div');
const contactDiv = document.createElement('div');


contactImg.src = 'https://www.touchpoint.com/wp-content/uploads/2023/10/Featured-image-4.png';
contactImg.alt = 'contact';
contactImg.classList.add('home-img');
contactPara.textContent = ' Join us and savor the essence of Nigeria.';
contactH1.textContent = "Ralat Restaurant";
heroDiv.append(contactImg, contactH1, contactPara);

function loadAboutContent(parent) {
    const aboutH3 = document.createElement('h3');
    const aboutP1 = document.createElement('p');
    const aboutP2 = document.createElement('p');
    aboutH3.classList.add('contact-heading');
    aboutP1.classList.add('contact-para');
    aboutP2.classList.add('contact-para');
    aboutH3.textContent = "About Us"
    aboutP1.textContent = `Ralat Restaurant is a culinary journey into the heart of authentic Nigerian cuisine. Located in the bustling city of Lagos, we are committed to celebrating the rich and diverse flavors of Nigerian culture through our carefully curated menu. Whether you’re craving the smoky aroma of Jollof rice, the comforting warmth of traditional soups, or the spicy kick of suya, we have something for everyone.`;
    aboutP2.textContent = `Our chefs bring a passion for excellence and a dedication to using fresh, locally sourced ingredients. At Ralat Restaurant, every dish is a story, and every visit is an experience. Join us and savor the essence of Nigeria.`;
    parent.append(aboutH3, aboutP1, aboutP2);
}
function loadContactContent(parent) {
    const contactH3 = document.createElement('h3');
    const contactPara = document.createElement('p');
    const address = document.createElement('p');
    const email = document.createElement('p');
    const phone = document.createElement('p');
    address.classList.add('contact-info');
    email.classList.add('contact-info');
    phone.classList.add('contact-info');
    contactH3.classList.add('contact-h3');
    contactPara.classList.add('contact-para');
    contactH3.textContent = 'Contact Us';
    contactPara.textContent =`We’d love to hear from you! Whether you have a question, want to make a reservation, or just wish to share your feedback, feel free to reach out to us:`;
    address.innerHTML = `<span class="bold">Address:</span> 123 Lagos Street, Abuja, Nigeria`;
    email.innerHTML = `<span class="bold">Email:</span> contact@ralatrestaurant.com`;
    phone.innerHTML = `<span class="bold">Phone:</span> +234 800 123 4567`;
    parent.append(contactH3, contactPara, address, phone, email)
}

loadAboutContent(aboutDiv);
loadContactContent(contactDiv)

contactContent.append(heroDiv, aboutDiv, contactDiv);

export{contactContent};