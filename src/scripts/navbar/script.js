
const toggleButton = document.getElementsByClassName('toggleB')[0]
const navbarLinks = document.getElementsByClassName('navLinks')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})