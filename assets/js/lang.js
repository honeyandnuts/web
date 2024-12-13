// Language data
const translations = {
    am: {
        honeyAndNuts: "Մեղր և Ընկույզ",
        callForDelivery: "Զանգահարեք առաքման համար",
        homeL: "Գլխավոր",
        menuL: "Մենյու",
        factsL: "Փաստեր",
        contactL: "Կապ մեզ հետ",
        callForDeliveryM: "Զանգահարեք առաքման համար",
        homeM: "Գլխավոր",
        menuM: "Մենյու",
        factsM: "Փաստեր",
        contactM: "Կապ մեզ հետ",
        footerName: "Մեղր և Ընկույզ",
        allRight: ": Բոլոր իրավունքները պաշտպանված են: Ստեղծված է",
    },
    en: {
        honeyAndNuts: "Honey & Nuts",
        callForDelivery: "Call for Delivery",
        homeL: "Home",
        menuL: "Menu",
        factsL: "Facts",
        contactL: "Contact Us",
        callForDeliveryM: "Call for Delivery",
        homeM: "Home",
        menuM: "Menu",
        factsM: "Facts",
        contactM: "Contact Us",
        footerName: "Honey & Nuts",
        allRight: ". All rights reserved. Created by",
    },
    ru: {
        honeyAndNuts: "Мед и Орехи",
        callForDelivery: "Звоните для доставки",
        homeL: "Главная",
        menuL: "Меню",
        factsL: "Факты",
        contactL: "Связаться с нами",
        callForDeliveryM: "Звоните для доставки",
        homeM: "Главная",
        menuM: "Меню",
        factsM: "Факты",
        contactM: "Связаться с нами",
        footerName: "Мед и Орехи",
        allRight: ". Все права защищены. Автор:",
    },
};

// Get references to elements
const languageSelector = document.getElementById("languageSelector");
const languageSelectorMobile = document.getElementById("languageSelectorMobile");
const honeyAndNutsElement = document.getElementById("honeyAndNuts");
const callForDeliveryElement = document.getElementById("callForDelivery");
const homeElement = document.getElementById("homeL");
const menuElement = document.getElementById("menuL");
const factsElement = document.getElementById("factsL");
const contactElement = document.getElementById("contactL");
const callForDeliveryMElement = document.getElementById("callForDeliveryM");
const homeMElement = document.getElementById("homeM");
const menuMElement = document.getElementById("menuM");
const factsMElement = document.getElementById("factsM");
const contactMElement = document.getElementById("contactM");
const footerNameElement = document.getElementById("footerName");
const allRightElement = document.getElementById("allRight");

// Function to update content based on selected language
function updateLanguage(language) {
    const translation = translations[language];
    if (translation) {
        honeyAndNutsElement.textContent = translation.honeyAndNuts;
        callForDeliveryElement.textContent = translation.callForDelivery;
        homeElement.textContent = translation.homeL;
        menuElement.textContent = translation.menuL;
        factsElement.textContent = translation.factsL;
        contactElement.textContent = translation.contactL;
        callForDeliveryMElement.textContent = translation.callForDeliveryM;
        homeMElement.textContent = translation.homeM;
        menuMElement.textContent = translation.menuM;
        factsMElement.textContent = translation.factsM;
        contactMElement.textContent = translation.contactM;
        footerNameElement.textContent = translation.footerName;
        allRightElement.textContent = translation.allRight;
    }
}

// Add event listener for language selection
languageSelector.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    updateLanguage(selectedLanguage);
});
languageSelectorMobile.addEventListener("change", (event) => {
    const selectedLanguageMobile = event.target.value;
    updateLanguage(selectedLanguageMobile);
});

// Initialize with the default language
updateLanguage("en");
