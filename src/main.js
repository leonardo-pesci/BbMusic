//^========================================================================
//^                            ELEMENTI
//^========================================================================
const navBtns = document.querySelectorAll('.navBtn');
const mainSections = document.querySelectorAll('.mainSection')

//^========================================================================
//^                            VARIABILI
//^========================================================================

//^========================================================================
//^                            FUNZIONI
//^========================================================================
let setLastSection = (lastSection) => {
    localStorage.setItem('lastSection', JSON.stringify(lastSection))
}

let showSection = (item) => {
        let lowerItem = item.toLowerCase()
        
        mainSections.forEach( (section) => {
            section.classList.add('hidden')
        })

        setLastSection(item)

        const section = document.querySelector(`#${lowerItem}`)
        section.classList.remove('hidden')
}

showSection(lastSection)

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

document.querySelector('#' + lastSection + 'Btn').style.color = 'white'

//^========================================================================
//^                             EVENTI
//^========================================================================
navBtns.forEach( (item) => {
    item.addEventListener('click', () => {
        let name = item.id.replace('Btn', '')
        navBtns.forEach( (btn) => {
            btn.style.color = 'var(--color-2)'
        })
        item.style.color = 'white'
        
        showSection(name)
    })
})






// section menu active
function onScroll(event) {
    const sections = document.querySelectorAll(".menu-scroll");
    const scrollPos =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

    for (let i = 0; i < sections.length; i++) {
    const currLink = sections[i];
    const val = currLink.getAttribute("href");
    const refElement = document.querySelector(val);
    const scrollTopMinus = scrollPos + 73;
    if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
    ) {
        document.querySelector(".menu-scroll").classList.remove("active");
        currLink.classList.add("active");
    } else {
        currLink.classList.remove("active");
    }
    }
}

window.document.addEventListener("scroll", onScroll);
// ==== About Tabs
const tabButtons = document.querySelectorAll(".tabButtons button");
const tabPanels = document.querySelectorAll(".tabPanel");

function showPanel(panelIndex) {
    tabButtons.forEach(function (node) {
    node.classList.remove(
        "hi",
        "ne",
        "rj",
    );
    });
    tabButtons[panelIndex].classList.add(
    "hi",
    "ck",
    "ne",
    "rj",
    );
    tabPanels.forEach(function (node) {
    node.style.display = "none";
    });
    tabPanels[panelIndex].style.display = "flex";
}
showPanel(0);

