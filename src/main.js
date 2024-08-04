//^========================================================================
//^                            ELEMENTI
//^========================================================================
const navBtns = document.querySelectorAll('.navBtn');
const mainSections = document.querySelectorAll('.mainSection')

//^========================================================================
//^                            VARIABILI
//^========================================================================
let lastSection = 'home'
const lastSectionStorage = localStorage.getItem('lastSection')
if (lastSectionStorage) lastSection = JSON.parse(lastSectionStorage)

//^========================================================================
//^                            FUNZIONI
//^========================================================================
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


/*
// L'observer
let options = {
	root: null,
	rootMargin: '0px',
	threshold: 1,
}

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
        
        let response = ''

        switch (counter.id) {
            case 'people':
                response = Math.floor(value)
                break;

            case 'money':
                response = '€' + Math.floor(value / 100) + '.' + Math.floor(value % 100)
                break;
        
            case 'percentage':
                response = Math.floor(value) + '%'
                break;
        
            default:
                break;
        }

        counter.innerHTML = response

    }, step);
    
}
*/

//^========================================================================
//^                             EVENTI
//^========================================================================
navBtns.forEach( (item) => {
    item.addEventListener('click', () => showSection(item))})