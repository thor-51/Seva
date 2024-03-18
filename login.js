const signInbtnLink = document.querySelector('.signInBtn-link');
const signUpbtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpbtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInbtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});