const Software = {
    Firefox: {
        name: 'Firefox',
        downloadURL: 'https://www.mozilla.org/en-US/firefox/new/',
        developer: 'Mozilla',
        description: 'Firefox is a popular web browser developed by Mozilla.'
    },
    Chromium: {
        name: 'Chromium',
        downloadURL: 'https://ungoogled-software.github.io/ungoogled-chromium-binaries/',
        developer: 'ungoogled-software',
        description: 'Chromium is an open-source web browser project that serves as the basis for many other browsers.'
    },
    Vivaldi: {
        name: "Vivaldi",
        downloadURL: "https://vivaldi.com/fr/",
        developer: "Vivaldi",
        description: 'Vivaldi is a highly customizable web browser built using Chromium.'
    },
    Brave: {
        name: "Brave",
        downloadURL: "https://brave.com/fr/",
        developer: "Brave",
        description: 'Brave is a privacy-focused web browser that blocks ads and trackers by default.'
    },
    LibreOffice: {
        name: 'LibreOffice',
        downloadURL: 'https://fr.libreoffice.org/download/telecharger-libreoffice/',
        developer: 'The Document Foundation',
        description: 'LibreOffice is a free and open-source office suite, compatible with Microsoft Office.'
    },
    OpenOffice: {
        name: 'OpenOffice',
        downloadURL: 'https://www.openoffice.org/fr/',
        developer: 'Apache',
        description: 'Apache OpenOffice is an open-source office software suite for word processing, spreadsheets, presentations, graphics, and databases.'
    },
    VLC: {
        name: 'VLC',
        downloadURL: 'https://www.videolan.org/vlc/index.fr.html',
        developer: 'VideoLAN Organization',
        description: 'VLC is a free and open-source multimedia player that plays most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols.'
    },
    HandBrake: {
        name: 'HandBrake',
        downloadURL: 'https://handbrake.fr/',
        developer: 'unknown',
        description: 'HandBrake is an open-source video transcoder that converts video from nearly any format to a selection of modern, widely supported codecs.'
    },
    OBS: {
        name: 'OBS',
        downloadURL: 'https://obsproject.com/fr',
        developer: 'OBS',
        description: 'Open Broadcaster Software (OBS) Studio is a free and open-source software for video recording and live streaming.'
    },
    ShotCut: {
        name: 'ShotCut',
        downloadURL: 'https://shotcut.org/',
        developer: 'ShotCut',
        description: 'Shotcut is a free, open-source, cross-platform video editor.'
    },
    GIMP: {
        name: 'GIMP',
        downloadURL: 'https://www.gimp.org/',
        developer: 'The GIMP Development Team',
        description: 'GIMP is a free and open-source raster graphics editor used for image retouching and editing, free-form drawing, resizing, cropping, photo-montages, and more.'
    },
    Audacity: {
        name: 'Audacity',
        downloadURL: 'https://www.audacityteam.org/',
        developer: 'Audacity Team',
        description: 'Audacity is a free, open-source digital audio editor and recording application software.'
    },
    Blender: {
        name: 'Blender',
        downloadURL: 'https://www.blender.org/',
        developer: 'Blender Foundation',
        description: 'Blender is a free and open-source 3D computer graphics software toolset used for creating animated films, visual effects, art, 3D printed models, interactive 3D applications and video games.'
    },
    Inkscape: {
        name: 'Inkscape',
        downloadURL: 'https://inkscape.org/',
        developer: 'Inkscape Community',
        description: 'Inkscape is a free and open-source vector graphics editor used to create or edit vector graphics such as illustrations, diagrams, line arts, charts, logos, icons and complex paintings.'
    },
    KeePassXC: {
        name: 'KeePassXC',
        downloadURL: 'https://keepassxc.org/',
        developer: 'KeePassXC Team',
        description: 'KeePassXC is a free and open-source password manager for managing passwords securely.'
    },
    VSCode: {
        name: 'Visual Studio Code',
        downloadURL: 'https://code.visualstudio.com/',
        developer: 'Microsoft',
        description: 'Visual Studio Code is a free and open-source source-code editor developed by Microsoft.'
    },
    Git: {
        name: 'Git',
        downloadURL: 'https://git-scm.com/',
        developer: 'Git Community',
        description: 'Git is a free and open-source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.'
    },
    PostgreSQL: {
        name: 'PostgreSQL',
        downloadURL: 'https://www.postgresql.org/',
        developer: 'PostgreSQL Global Development Group',
        description: 'PostgreSQL is a powerful, open-source object-relational database system known for reliability, feature robustness, and performance.'
    },
    NodeJs: {
        name: 'Node.js',
        downloadURL: 'https://nodejs.org/',
        developer: 'Node.js Foundation',
        description: 'Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.'
    },
    FileZilla: {
        name: 'FileZilla',
        downloadURL: 'https://filezilla-project.org/',
        developer: 'FileZilla Project',
        description: 'FileZilla is a free, open-source FTP client software used to transfer files between your local machine and remote servers.'
    },
    Krita: {
        name: 'Krita',
        downloadURL: 'https://krita.org/',
        developer: 'Krita Foundation',
        description: 'Krita is a free and open-source raster graphics editor designed primarily for digital painting and animation purposes.'
    },
    Darktable: {
        name: 'Darktable',
        downloadURL: 'https://www.darktable.org/',
        developer: 'Darktable project',
        description: 'Darktable is a free and open-source photography workflow application and raw developer.'
    },
    MuseScore: {
        name: 'MuseScore',
        downloadURL: 'https://musescore.org/',
        developer: 'MuseScore community',
        description: 'MuseScore is a free and open-source music notation software.'
    },
    FreeCAD: {
        name: 'FreeCAD',
        downloadURL: 'https://www.freecadweb.org/',
        developer: 'FreeCAD community',
        description: 'FreeCAD is a free and open-source parametric 3D computer-aided design (CAD) modeler and a building information modeling (BIM) software.'
    },
    LMMS: {
        name: 'LMMS',
        downloadURL: 'https://lmms.io/',
        developer: 'LMMS community',
        description: 'LMMS (Linux MultiMedia Studio) is a free digital audio workstation (DAW) for music production.'
    },
    Natron: {
        name: 'Natron',
        downloadURL: 'https://natrongithub.github.io/',
        developer: 'Natron community',
        description: 'Natron is a free and open-source node-based compositing software.'
    },
    Flowblade: {
        name: 'Flowblade',
        downloadURL: 'https://jliljebl.github.io/flowblade/',
        developer: 'Flowblade community',
        description: 'Flowblade is a free and open-source video editor designed for simple and fast cutting and editing.'
    },
    Pinta: {
        name: 'Pinta',
        downloadURL: 'https://pinta-project.com/',
        developer: 'Pinta community',
        description: 'Pinta is a free and open-source raster graphics editor used for image editing.'
    },
    Scribus: {
        name: 'Scribus',
        downloadURL: 'https://www.scribus.net/',
        developer: 'Scribus community',
        description: 'Scribus is a free and open-source desktop publishing (DTP) application.'
    },
    MySQL: {
        name: 'MySQL',
        downloadURL: 'https://www.mysql.com/',
        developer: 'Oracle Corporation',
        description: 'MySQL is an open-source relational database management system (RDBMS).'
    },
    Deno: {
        name: 'Deno',
        downloadURL: 'https://deno.land/',
        developer: 'Deno Land',
        description: 'Deno is a simple, modern, and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.'
    },
    SimpleScreenRecorder: {
        name: 'SimpleScreenRecorder',
        downloadURL: 'https://www.maartenbaert.be/simplescreenrecorder/',
        developer: 'Maarten Baert',
        description: 'SimpleScreenRecorder is a feature-rich screen recorder for Linux.'
    },
    Kodi: {
        name: 'Kodi',
        downloadURL: 'https://kodi.tv/',
        developer: 'Kodi Foundation',
        description: 'Kodi is a free and open-source media player software application developed by the XBMC Foundation.'
    },
    ReactOS: {
        name: 'ReactOS',
        downloadURL: 'https://reactos.org/',
        developer: 'ReactOS Foundation',
        description: 'ReactOS is a free and open-source operating system based on the Windows NT architecture.'
    },
    Thunderbird: {
        name: 'Thunderbird',
        downloadURL: 'https://www.thunderbird.net/',
        developer: 'Mozilla',
        description: 'Thunderbird is a free and open-source email client, news client, RSS, and chat client developed by the Mozilla Foundation.'
    },
    qBittorrent: {
        name: 'qBittorrent',
        downloadURL: 'https://www.qbittorrent.org/',
        developer: 'The qBittorrent project',
        description: 'qBittorrent is a free and open-source peer-to-peer (P2P) BitTorrent client.'
    },
    Tor: {
        name: 'Tor Browser',
        downloadURL: 'https://www.torproject.org/',
        developer: 'The Tor Project',
        description: 'The Tor Browser is a web browser based on Mozilla Firefox that protects your privacy by bouncing your communications around a distributed network of relays run by volunteers all around the world.'
    },
    Transmission: {
        name: 'Transmission',
        downloadURL: 'https://transmissionbt.com/download/',
        developer: 'Transmission Project',
        description: 'Transmission is a free, lightweight, cross-platform BitTorrent client.'
    },
    Docker: {
        name: 'Docker',
        downloadURL: 'https://www.docker.com/',
        developer: 'Docker Inc.',
        description: 'Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.'
    },
    VirtualBox: {
        name: 'VirtualBox',
        downloadURL: 'https://www.virtualbox.org/',
        developer: 'Oracle Corporation',
        description: 'VirtualBox is a free and open-source hosted hypervisor for x86 virtualization, developed by Oracle Corporation.'
    },
    Atom: {
        name: 'Atom',
        downloadURL: 'https://atom.io/',
        developer: 'GitHub',
        description: 'Atom is a free and open-source text and source code editor developed by GitHub.'
    },
    Eclipse: {
        name: 'Eclipse',
        downloadURL: 'https://www.eclipse.org/downloads/',
        developer: 'Eclipse Foundation',
        description: 'Eclipse is an integrated development environment (IDE) used in computer programming. It contains a base workspace and an extensible plug-in system for customizing the environment.'
    },
    PyCharm: {
        name: 'PyCharm Community Edition',
        downloadURL: 'https://www.jetbrains.com/pycharm/download/',
        developer: 'JetBrains',
        description: 'PyCharm is an integrated development environment (IDE) used in computer programming, specifically for the Python language.'
    },
    NotepadPlusPlus: {
        name: 'Notepad++',
        downloadURL: 'https://notepad-plus-plus.org/downloads/',
        developer: 'Don Ho',
        description: 'Notepad++ is a free source code editor and Notepad replacement that supports several languages.'
    },
    ApacheTomcat: {
        name: 'Apache Tomcat',
        downloadURL: 'https://tomcat.apache.org/download-90.cgi',
        developer: 'Apache Software Foundation',
        description: 'Apache Tomcat is an open-source implementation of the Java Servlet, JavaServer Pages, Java Expression Language, and WebSocket technologies.'
    },
    ApacheMaven: {
        name: 'Apache Maven',
        downloadURL: 'https://maven.apache.org/download.cgi',
        developer: 'Apache Software Foundation',
        description: 'Apache Maven is a build automation tool used primarily for Java projects.'
    },
    Jenkins: {
        name: 'Jenkins',
        downloadURL: 'https://www.jenkins.io/download/',
        developer: 'Jenkins project',
        description: 'Jenkins is an open-source automation server that helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration and continuous delivery.'
    },
    AndroidStudio: {
        name: 'Android Studio',
        downloadURL: 'https://developer.android.com/studio',
        developer: 'Google',
        description: 'Android Studio is the official integrated development environment (IDE) for Android app development, based on IntelliJ IDEA.'
    },
    Anaconda: {
        name: 'Anaconda',
        downloadURL: 'https://www.anaconda.com/products/distribution',
        developer: 'Anaconda, Inc.',
        description: 'Anaconda is a free and open-source distribution of the Python and R programming languages for scientific computing, that aims to simplify package management and deployment.'
    },
    JupyterNotebook: {
        name: 'Jupyter Notebook',
        downloadURL: 'https://jupyter.org/install',
        developer: 'Project Jupyter',
        description: 'Jupyter Notebook is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations, and narrative text.'
    },
    TensorFlow: {
        name: 'TensorFlow',
        downloadURL: 'https://www.tensorflow.org/install',
        developer: 'Google Brain Team',
        description: 'TensorFlow is a free and open-source software library for machine learning and artificial intelligence.'
    },
    PyTorch: {
        name: 'PyTorch',
        downloadURL: 'https://pytorch.org/',
        developer: 'Facebook\'s AI Research lab',
        description: 'PyTorch is an open-source machine learning library based on the Torch library, used for applications such as computer vision and natural language processing.'
    },
    Pandas: {
        name: 'Pandas',
        downloadURL: 'https://pandas.pydata.org/',
        developer: 'Pandas Development Team',
        description: 'Pandas is a software library written for the Python programming language for data manipulation and analysis.'
    },
    Matplotlib: {
        name: 'Matplotlib',
        downloadURL: 'https://matplotlib.org/',
        developer: 'John D. Hunter, Michael Droettboom',
        description: 'Matplotlib is a plotting library for the Python programming language and its numerical mathematics extension NumPy.'
    },
    ScikitLearn: {
        name: 'Scikit-learn',
        downloadURL: 'https://scikit-learn.org/stable/',
        developer: 'Scikit-learn Developers',
        description: 'Scikit-learn is a free software machine learning library for the Python programming language.'
    },
    Numpy: {
        name: 'Numpy',
        downloadURL: 'https://numpy.org/',
        developer: 'Travis Oliphant',
        description: 'NumPy is a library for the Python programming language, adding support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays.'
    },
    Scipy: {
        name: 'Scipy',
        downloadURL: 'https://www.scipy.org/',
        developer: 'Travis Oliphant, Pearu Peterson, Eric Jones',
        description: 'SciPy is a free and open-source scientific computing library for Python.'
    },
    Flask: {
        name: 'Flask',
        downloadURL: 'https://flask.palletsprojects.com/en/2.0.x/',
        developer: 'Armin Ronacher',
        description: 'Flask is a micro web framework written in Python.'
    },
    Django: {
        name: 'Django',
        downloadURL: 'https://www.djangoproject.com/',
        developer: 'Django Software Foundation',
        description: 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.'
    },
    Bootstrap: {
        name: 'Bootstrap',
        downloadURL: 'https://getbootstrap.com/',
        developer: 'Twitter',
        description: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.'
    },
    Angular: {
        name: 'Angular',
        downloadURL: 'https://angular.io/',
        developer: 'Google',
        description: 'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.'
    },
    React: {
        name: 'React',
        downloadURL: 'https://reactjs.org/',
        developer: 'Facebook',
        description: 'React is a JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies.'
    },
    Vue: {
        name: 'Vue.js',
        downloadURL: 'https://vuejs.org/',
        developer: 'Evan You',
        description: 'Vue.js is an open-source model–view–viewmodel JavaScript framework for building user interfaces and single-page applications.'
    },
    D3: {
        name: 'D3.js',
        downloadURL: 'https://d3js.org/',
        developer: 'Mike Bostock',
        description: 'D3.js is a JavaScript library for producing dynamic, interactive data visualizations in web browsers.'
    },
    Three: {
        name: 'Three.js',
        downloadURL: 'https://threejs.org/',
        developer: 'Ricardo Cabello',
        description: 'Three.js is a cross-browser JavaScript library and application programming interface (API) used to create and display animated 3D computer graphics in a web browser.'
    },
    Express: {
        name: 'Express.js',
        downloadURL: 'https://expressjs.com/',
        developer: 'TJ Holowaychuk',
        description: 'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.'
    },
    NestJS: {
        name: 'NestJS',
        downloadURL: 'https://nestjs.com/',
        developer: 'NestJS',
        description: 'NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.'
    },
    Electron: {
        name: 'Electron',
        downloadURL: 'https://www.electronjs.org/',
        developer: 'GitHub',
        description: 'Electron is an open-source software framework developed and maintained by GitHub. It allows for the development of desktop GUI applications using web technologies: It combines the Chromium rendering engine and the Node.js runtime.'
    },
    TensorFlowJS: {
        name: 'TensorFlow.js',
        downloadURL: 'https://www.tensorflow.org/js',
        developer: 'Google',
        description: 'TensorFlow.js is an open-source hardware-accelerated JavaScript library for training and deploying machine learning models.'
    },
    Phaser: {
        name: 'Phaser',
        downloadURL: 'https://phaser.io/',
        developer: 'Phaser',
        description: 'Phaser is a fast, free, and fun open-source framework for Canvas and WebGL-powered browser games.'
    },
    Unity: {
        name: 'Unity',
        downloadURL: 'https://unity.com/',
        developer: 'Unity Technologies',
        description: 'Unity is a cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Inc.\'s Worldwide Developers Conference as a Mac OS X-exclusive game engine.'
    },
    Godot: {
        name: 'Godot Engine',
        downloadURL: 'https://godotengine.org/',
        developer: 'Godot community',
        description: 'Godot Engine is a feature-packed, cross-platform game engine to create 2D and 3D games from a unified interface.'
    },
    UnrealEngine: {
        name: 'Unreal Engine',
        downloadURL: 'https://www.unrealengine.com/',
        developer: 'Epic Games',
        description: 'Unreal Engine is a game engine developed by Epic Games, first showcased in the 1998 first-person shooter game Unreal.'
    },
    SublimeText: {
        name: 'Sublime Text',
        downloadURL: 'https://www.sublimetext.com/',
        developer: 'Jon Skinner',
        description: 'Sublime Text is a proprietary cross-platform source code editor with a Python application programming interface (API).'
    },
    IntelliJIDEA: {
        name: 'IntelliJ IDEA',
        downloadURL: 'https://www.jetbrains.com/idea/download/',
        developer: 'JetBrains',
        description: 'IntelliJ IDEA is an integrated development environment (IDE) written in Java for developing computer software.'
    },
    Vim: {
        name: 'Vim',
        downloadURL: 'https://www.vim.org/',
        developer: 'Bram Moolenaar',
        description: 'Vim is a highly configurable text editor built to enable efficient text editing. It is an improved version of the vi editor distributed with most UNIX systems.'
    },
    Emacs: {
        name: 'Emacs',
        downloadURL: 'https://www.gnu.org/software/emacs/',
        developer: 'GNU Project',
        description: 'Emacs is a family of text editors that are characterized by their extensibility. The manual for the most widely used variant, GNU Emacs, describes it as "the extensible, customizable, self-documenting, real-time display editor".'
    },
    Atom: {
        name: 'Atom',
        downloadURL: 'https://atom.io/',
        developer: 'GitHub',
        description: 'Atom is a free and open-source text and source code editor developed by GitHub.'
    },
    VSCode: {
        name: 'Visual Studio Code',
        downloadURL: 'https://code.visualstudio.com/',
        developer: 'Microsoft',
        description: 'Visual Studio Code is a free and open-source source-code editor developed by Microsoft.'
    },
    Eclipse: {
        name: 'Eclipse',
        downloadURL: 'https://www.eclipse.org/downloads/',
        developer: 'Eclipse Foundation',
        description: 'Eclipse is an integrated development environment (IDE) used in computer programming. It contains a base workspace and an extensible plug-in system for customizing the environment.'
    }
};


const resultsContainer = document.querySelector("#resultsList");
const searchBar = document.querySelector("input[type=text]");
const searchButton = document.querySelector("input[type=submit]");
const searchBox = document.querySelector(".container");

function searchFunction(e) {
    e.preventDefault();
    const searchValue = searchBar.value.toLowerCase();
    for (const softwareName in Software) {
        const software = Software[softwareName];
        if (!software || !software.name || !software.developer) {
            continue;
        }
        const developer = software.developer.toLowerCase();
        const name = software.name.toLowerCase();
        if (name.includes(searchValue)) {
            const existingSoftware = resultsContainer.querySelector(`.softwareInformation[data-name="${softwareName}"]`);
            if (!existingSoftware) {
                const listItem = document.createElement("div");
                listItem.classList.add("softwareInformation");
                listItem.setAttribute("data-name", softwareName);
                listItem.innerHTML = `
                    <h2 class="softwareName">${softwareName}</h2>
                    <h3 class="softwareDevelopper">${developer}</h3>
                    <p class="softwareDescription">${software.description}</p>
                    <p><a href="${software.downloadURL}" target="_blank" class="downloadButton" title="Download this software">Download</a></p>
                `;
                resultsContainer.appendChild(listItem);
            }
        }
    }
    showResults();
}

function showResults() {
    const result = document.querySelector(".content");
    const searchBox = document.querySelector(".container");
    result.classList.remove("none");
    searchBox.classList.add("none");
}

searchButton.addEventListener("click", searchFunction);
