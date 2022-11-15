const basicOffer = document.querySelector('.basic')
const proOffer = document.querySelector('.pro')
const premiumOffer = document.querySelector('.premium')

const userBar = document.querySelector('.bar-users div') 
const internetBar = document.querySelector('.bar-internet div') 
const projectBar = document.querySelector('.bar-project div') 

basicOffer.addEventListener('mouseover', function(){
    basicOffer.classList.add('expand')

    userBar.style.width = "5%"
    internetBar.style.width = "5%"
    projectBar.style.width = "5%"
})
basicOffer.addEventListener('mouseout', function(){
    basicOffer.classList.remove('expand')

    userBar.style.width = "0%"
    internetBar.style.width = "0%"
    projectBar.style.width = "0%"
})

proOffer.addEventListener('mouseover', function(){
    proOffer.classList.add('expand')
    userBar.style.width = "30%"
    internetBar.style.width = "70%"
    projectBar.style.width = "50%"
})
proOffer.addEventListener('mouseout', function(){
    proOffer.classList.remove('expand')

    userBar.style.width = "0%"
    internetBar.style.width = "0%"
    projectBar.style.width = "0%"
})

premiumOffer.addEventListener('mouseover', function(){
    premiumOffer.classList.add('expand')
    userBar.style.width = "100%"
    internetBar.style.width = "100%"
    projectBar.style.width = "100%"
})
premiumOffer.addEventListener('mouseout', function(){
    premiumOffer.classList.remove('expand')

    userBar.style.width = "0%"
    internetBar.style.width = "0%"
    projectBar.style.width = "0%"
})