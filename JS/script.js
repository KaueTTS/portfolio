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

// SIDEBAR
var sidemenu = document.getElementById("sidemenu")

function openmenu() {
  sidemenu.style.right = "0"
}


function closemenu() {
  sidemenu.style.right = "-200px"
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


// Referências dos elementos
const languageToggle = document.getElementById("languageToggle");
let currentLanguage = "pt"; // Idioma padrão

// Função para carregar as traduções
async function loadTranslations(language) {
  try {
    // Carrega o arquivo JSON com as traduções
    const response = await fetch("translations.json");
    const translations = await response.json();

    // Atualiza o conteúdo dos elementos com base no idioma selecionado
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate");
      if (translations[language][key]) {
        element.textContent = translations[language][key];
      }
    });

    // Atualiza o idioma da página
    document.documentElement.lang = language;
  } catch (error) {
    console.error("Erro ao carregar traduções:", error);
  }
}

// Evento para alternar o idioma
languageToggle.addEventListener("change", () => {
  currentLanguage = languageToggle.checked ? "en" : "pt";
  loadTranslations(currentLanguage);
});

// Carregar o idioma inicial
loadTranslations(currentLanguage);