// NAVBAR
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY
    let offset = sec.offsetTop - 150
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active')
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active')
      })
    }
  })
}

// HOME MULTIPLE TEXT
var typed = new Typed('#multiple-text', {
    strings: ['Desenvolvedor FullStack', 'Desenvolvedor de Jogos', 'Engenheiro de Software'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
});

// ABOUT TABLINKS
var tabLinks = document.getElementsByClassName("tab-links")
var tabContents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for(tablink of tabLinks) {
        tablink.classList.remove("active-link")
    }

    for(tabcontent of tabContents) {
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

/* CONTACT FORM */
const scriptURL = 'https://script.google.com/macros/s/AKfycbzYQni6mSU08ntoa03Zep2uVs0t07xVdje0zh33MHtcfZuQOZg92eXrSdphP8X_fVz4lg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Mensagem enviada com sucesso!"
      msg.style.opacity = '1'
      setTimeout(function(){
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})