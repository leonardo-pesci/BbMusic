//^========================================================================
//^                            ELEMENTI
//^========================================================================
const navBtns = document.querySelectorAll('.navBtn');
const mainSections = document.querySelectorAll('.mainSection')
const counters = document.querySelectorAll('.counterNumber')
const reviewImg = document.querySelectorAll('.reviewImg')
const reviewName = document.querySelectorAll('.reviewName')
const reviewText = document.querySelectorAll('.reviewText')
const reviewStars = document.querySelectorAll('.reviewStars')
const refreshBtn = document.querySelector('#refreshBtn')
const refreshIcon = document.querySelector('#refreshIcon')



//^========================================================================
//^                            VARIABILI
//^========================================================================
let lastSection = 'home'
const lastSectionStorage = localStorage.getItem('lastSection')
if (lastSectionStorage) lastSection = JSON.parse(lastSectionStorage)
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
}
let reviews = [
    {
        img: 'utent1',
        name: 'Giulia Bianchi',
        text: 'Insegnanti competenti e ambiente accogliente, perfetto per imparare!',
        stars: 4.5,
    },

    {
        img: 'utent2',
        name: 'Marco Rossi',
        text: 'Ottima scuola di musica, attrezzature di primo livello.',
        stars: 4,
    },

    {
        img: 'utent3',
        name: 'Sofia Conti',
        text: 'Una vera eccellenza nella formazione musicale, molto raccomandata!',
        stars: 5,
    },

    {
        img: 'utent4',
        name: 'Luca Neri',
        text: 'Impressionato dalla qualità dell’insegnamento e dall’atmosfera stimolante.',
        stars: 4.5,
    },

    {
        img: 'utent5',
        name: 'Anna Moretti',
        text: 'Programmi dettagliati e ben strutturati per ogni livello di esperienza.',
        stars: 4,
    },

    {
        img: 'utent6',
        name: 'Cristian Ferrari',
        text: 'Ambiente giovanile e dinamico, ottimo per bambini e adulti.',
        stars: 4,
    },

    {
        img: 'utent7',
        name: 'Laura Ricci',
        text: 'Supporto fantastico per gli studenti e grandi opportunità di esibizione.',
        stars: 4.5,
    },

    {
        img: 'utent8',
        name: 'Francesco Greco',
        text: 'Professionisti appassionati che ispirano e motivano gli allievi.',
        stars: 5,
    },

    {
        img: 'utent9',
        name: 'Chiara Rizzo',
        text: 'Varie discipline musicali disponibili, ottimo per esplorare nuovi interessi.',
        stars: 4,
    },

    {
        img: 'utent10',
        name: 'Elena Bruno',
        text: 'Perfetta per chi vuole migliorarsi con insegnanti di grande esperienza.',
        stars: 4.5,
    },

    {
        img: 'utent11',
        name: 'Simone Villa',
        text: 'Insegnamento personalizzato e attenzione ai dettagli in ogni lezione.',
        stars: 5,
    },

    {
        img: 'utent12',
        name: 'Matteo Russo',
        text: 'Consiglio vivamente a chiunque voglia seriamente studiare musica.',
        stars: 5,
    },

    {
        img: 'utent13',
        name: 'Giorgio Barbieri',
        text: 'Ottima accoglienza e metodi didattici innovativi.',
        stars: 3.5,
    },

    {
        img: 'utent14',
        name: 'Martina Lombardi',
        text: 'Lezioni di musica eccezionali e grande attenzione agli studenti.',
        stars: 4.5,
    },

    {
        img: 'utent15',
        name: 'Paolo Mazzi',
        text: 'Fantastica scuola di musica con programmi per tutti i livelli.',
        stars: 4,
    },

    {
        img: 'utent16',
        name: 'Sara Ferrari',
        text: 'Ambiente educativo eccellente, molto consigliato per l’apprendimento musicale.',
        stars: 4.5,
    },

    {
        img: 'utent17',
        name: 'Davide Conti',
        text: 'Una scelta perfetta per chi desidera esprimersi attraverso la musica.',
        stars: 5,
    },

    {
        img: 'utent18',
        name: 'Giulia Galli',
        text: 'Personale qualificato e disponibile, ambiente stimolante.',
        stars: 4.5,
    },

    {
        img: 'utent19',
        name: 'Lorenzo Romano',
        text: 'Grande varietà di corsi e fantastici eventi live.',
        stars: 4,
    },

    {
        img: 'utent20',
        name: 'Alessia Costa',
        text: 'Esperienza educativa unica e personalizzata per ogni studente.',
        stars: 5,
    },

    {
        img: 'utent21',
        name: 'Fabio Gatti',
        text: 'Un luogo dove la passione per la musica viene coltivata con serietà.',
        stars: 5,
    },

    {
        img: 'utent22',
        name: 'Roberta Bianchi',
        text: 'Atmosfera amichevole e grandi maestri di musica.',
        stars: 3.5,
    },

    {
        img: 'utent23',
        name: 'Michele Mariani',
        text: 'Insegnanti eccezionali, attenti e molto preparati.',
        stars: 5,
    },

    {
        img: 'utent24',
        name: 'Valentina Martini',
        text: 'La migliore scuola per chi ama la musica e vuole imparare seriamente.',
        stars: 4.5,
    },

    {
        img: 'utent25',
        name: 'Pietro Neri',
        text: 'Incredibile attenzione al dettaglio e al benessere degli studenti.',
        stars: 4
    },
]
let reviewsCopy = reviews.slice()



//^========================================================================
//^                            FUNZIONI
//^========================================================================

// * Sezioni
let setLastSection = (lastSection) => {
    localStorage.setItem('lastSection', JSON.stringify(lastSection))
}

let showSection = (item) => {
    // cambia il colore dei navBtn
    navBtns.forEach( (btn) => {
        btn.classList.remove('selected')
    })
    item.classList.add('selected')

    // cambia da una sezione all'altra
    let name = item.id.replace('Btn', '')
    let lowerItem = name.toLowerCase()
    
    mainSections.forEach( (section) => {
        section.classList.add('hidden')
    })

    setLastSection(lowerItem)

    const section = document.querySelector(`#${lowerItem}`)
    section.classList.remove('hidden')
}


let lastSectionNode = document.querySelector('#' + lastSection + 'Btn')
showSection(lastSectionNode)

// * Counter
let callback = (entries, observer) => {
	objData = entries[0];
	
	if (objData.isIntersecting) {
        counters.forEach( (element) => {
            startCounters(element);
        })

		observer.unobserve(objData.target);
	}
}

let observer = new IntersectionObserver(callback, options);

counters.forEach( (element) => {
    observer.observe(element);
})

let startCounters = (counter) => {

    let value = 0
    let end = parseInt(counter.dataset.to)
    let duration = parseInt(counter.dataset.duration)

    let step = duration / 100
    let fraction = end / 100
    
    let timer = setInterval( () => {
        value = value + fraction
        
        if (value >= end) {
            clearInterval(timer) 
            value = end
        }

        let response = Math.floor(value)
        counter.innerHTML = response

    }, step);
    
}


// * Recensioni
let getRandomReview = () => {

    if (reviews.length === 0) reviews = reviewsCopy.slice()
    
    let index = Math.floor(Math.random() * reviews.length)
    let review = reviews[index]

    // rimuove la recensione dall
    reviews.splice(index, 1)

    return review
}

let showInterviews = () => {
    for (i = 0; i < 3; i++) {
        let review = getRandomReview()

        let img = review['img']
        let name = review['name']
        let text = review['text']
        let stars = review['stars']


        reviewImg[i].innerHTML = `<img src='./img/utent/${img}.png'>`
        reviewName[i].innerText = name
        reviewText[i].innerText = text
        reviewStars[i].innerHTML = generateStars(stars)

    }

    // ! fai in modo che non escano due recensioni uguali
}

let generateStars = (stars) => {
    const fullStars = Math.floor(stars);
    const halfStar = stars % 1;
    const emptyStars = 5 - Math.ceil(stars);

    // Costruisce le icone delle stelle usando FontAwesome
    let starsHTML = '<i class="fas fa-star"></i>'.repeat(fullStars) +
                    (halfStar ? '<i class="fas fa-star-half-alt"></i>' : '') +
                    '<i class="far fa-star"></i>'.repeat(emptyStars);
    
    return starsHTML
};

showInterviews()


//^========================================================================
//^                             EVENTI
//^========================================================================
navBtns.forEach( (item) => {
    item.addEventListener('click', () => showSection(item))
})

refreshBtn.addEventListener('click', () => {
    refreshIcon.style =  'transform: rotate(180deg); transition-duration: 500ms;'

    showInterviews()
})