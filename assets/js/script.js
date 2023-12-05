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
    Vivaldi: {
        name: "Vivaldi",
        downloadURL: "https://vivaldi.com/fr/",
        developer: "Vivaldi",
    },
    Brave: {
        name: "Brave",
        downloadURL: "https://brave.com/fr/",
        developer: "Brave",
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
    GIMP: {
        name: 'GIMP',
        downloadURL: 'https://www.gimp.org/',
        developer: 'The GIMP Development Team',
    },
    Audacity: {
        name: 'Audacity',
        downloadURL: 'https://www.audacityteam.org/',
        developer: 'Audacity Team',
    },
    Blender: {
        name: 'Blender',
        downloadURL: 'https://www.blender.org/',
        developer: 'Blender Foundation',
    },
    Inkscape: {
        name: 'Inkscape',
        downloadURL: 'https://inkscape.org/',
        developer: 'Inkscape Community',
    },
    KeePassXC: {
        name: 'KeePassXC',
        downloadURL: 'https://keepassxc.org/',
        developer: 'KeePassXC Team',
    },
    VSCode: {
        name: 'Visual Studio Code',
        downloadURL: 'https://code.visualstudio.com/',
        developer: 'Microsoft',
    },
    Git: {
        name: 'Git',
        downloadURL: 'https://git-scm.com/',
        developer: 'Git Community',
    },
    PostgreSQL: {
        name: 'PostgreSQL',
        downloadURL: 'https://www.postgresql.org/',
        developer: 'PostgreSQL Global Development Group',
    },
    NodeJs: {
        name: 'Node.js',
        downloadURL: 'https://nodejs.org/',
        developer: 'Node.js Foundation',
    },
    FileZilla: {
        name: 'FileZilla',
        downloadURL: 'https://filezilla-project.org/',
        developer: 'FileZilla Project',
    },
    Krita: {
        name: 'Krita',
        downloadURL: 'https://krita.org/',
        developer: 'Krita Foundation',
    },
    Darktable: {
        name: 'Darktable',
        downloadURL: 'https://www.darktable.org/',
        developer: 'Darktable project',
    },
    MuseScore: {
        name: 'MuseScore',
        downloadURL: 'https://musescore.org/',
        developer: 'MuseScore community',
    },
    FreeCAD: {
        name: 'FreeCAD',
        downloadURL: 'https://www.freecadweb.org/',
        developer: 'FreeCAD community',
    },
    HandBrake: {
        name: 'LMMS',
        downloadURL: 'https://lmms.io/',
        developer: 'LMMS community',
    },
    OBS: {
        name: 'Natron',
        downloadURL: 'https://natrongithub.github.io/',
        developer: 'Natron community',
    },
    ShotCut: {
        name: 'Flowblade',
        downloadURL: 'https://jliljebl.github.io/flowblade/',
        developer: 'Flowblade community',
    },
    GIMP: {
        name: 'Pinta',
        downloadURL: 'https://pinta-project.com/',
        developer: 'Pinta community',
    },
    Inkscape: {
        name: 'Scribus',
        downloadURL: 'https://www.scribus.net/',
        developer: 'Scribus community',
    },
    PostgreSQL: {
        name: 'MySQL',
        downloadURL: 'https://www.mysql.com/',
        developer: 'Oracle Corporation',
    },
    NodeJs: {
        name: 'Deno',
        downloadURL: 'https://deno.land/',
        developer: 'Deno Land',
    },
    Blender: {
        name: 'Natron',
        downloadURL: 'https://natrongithub.github.io/',
        developer: 'Natron community',
    },
    OBS: {
        name: 'SimpleScreenRecorder',
        downloadURL: 'https://www.maartenbaert.be/simplescreenrecorder/',
        developer: 'Maarten Baert',
    },
    ShotCut: {
        name: 'Flowblade',
        downloadURL: 'https://jliljebl.github.io/flowblade/',
        developer: 'Flowblade community',
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
