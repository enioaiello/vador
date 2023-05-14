const Software = {
    Firefox: {
        name: 'Firefox',
        downloadURL: 'https://www.mozilla.org/en-US/firefox/new/',
        developer: 'Mozilla',
    },
    Chromium: {
        name: 'Chromium',
        downloadURL: 'https://ungoogled-software.github.io/ungoogled-chromium-binaries/',
        developer: 'ungoogled-software'
    },
    LibreOffice: {
        name: 'LibreOffice',
        downloadURL: 'https://fr.libreoffice.org/download/telecharger-libreoffice/',
        developer: 'The Document Foundation',
    },
    OpenOffice: {
        name: 'OpenOffice',
        downloadURL: 'https://www.openoffice.org/fr/',
        developer: 'Apache',
    },
    VLC: {
        name: 'VLC',
        downloadURL: 'https://www.videolan.org/vlc/index.fr.html',
        developper: 'VideoLAN Organization'
    },
    HandBrake: {
        name: 'HandBrake',
        downloadURL: 'https://handbrake.fr/',
        developper: 'unknown'
    },
    OBS: {
        name: 'OBS',
        downloadURL: 'https://obsproject.com/fr',
        developper: 'OBS',
    },
    ShotCut: {
        name: 'ShotCut',
        downloadURL: 'https://shotcut.org/',
        developer: 'ShotCut'
    },
}

const softwareNameItem = document.querySelector(".softwareName");
const softwareDevelopperItem = document.querySelector(".softwareDevelopper");
const downloadButtonItem = document.querySelector(".downloadButton");

const searchBar = document.querySelector("input[type=text]");
const searchButton = document.querySelector("input[type=submit]");
const result = document.querySelector(".content");
const searchBox = document.querySelector(".container");

function searchFunction(e) {
    e.preventDefault();
    result.classList.remove("none");
    searchBox.classList.add("none");
    const searchValue = searchBar.value.toLowerCase();
    for (const softwareName in Software) {
        const software = Software[softwareName];
        const developer = software.developer.toLowerCase();
        const name = software.name.toLowerCase();
        if (name.includes(searchValue)) {
            softwareNameItem.textContent = softwareName;
            softwareDevelopperItem.textContent = developer;
            downloadButtonItem.setAttribute("href", software.downloadURL);
            return;
        }
    }
}


searchButton.addEventListener("click", searchFunction);
