const Software = {
    Firefox: {
        name: 'Firefox',
        downloadURL: 'https://www.mozilla.org/en-US/firefox/new/',
        developer: 'Mozilla',
        description: 'Firefox est un navigateur Web populaire conçu par Mozilla.'
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
    VSCodium: {
        name: 'VSCodium',
        downloadURL: 'https://vscodium.com/',
        developer: 'Microsoft',
        description: 'VSCodium is a community-driven, freely-licensed binary distribution of Microsoft’s editor VSCode.'
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
    CodeEdit: {
        name: 'CodeEdit',
        downloadURL: 'https://www.codeedit.app',
        developer: 'CodeEdit',
        description: 'CodeEdit is an amazing and beautiful free and open-source source-code editor built for macOS that combine the look and feel of Xcode.'
    },
    MariaDB: {
        name: 'MariaDB',
        downloadURL: 'https://mariadb.org/download/',
        developer: 'MariaDB Foundation',
        description: 'MariaDB is a community-developed, commercially supported fork of the MySQL relational database management system.'
    },
    Redis: {
        name: 'Redis',
        downloadURL: 'https://redis.io/download',
        developer: 'Redis Labs',
        description: 'Redis is an open-source, in-memory data structure store, used as a database, cache, and message broker.'
    },
    Elasticsearch: {
        name: 'Elasticsearch',
        downloadURL: 'https://www.elastic.co/downloads/elasticsearch',
        developer: 'Elastic NV',
        description: 'Elasticsearch is a search engine based on the Lucene library, providing a distributed, multitenant-capable full-text search engine.'
    },
    Grafana: {
        name: 'Grafana',
        downloadURL: 'https://grafana.com/grafana/download',
        developer: 'Grafana Labs',
        description: 'Grafana is an open-source platform for monitoring and observability, providing tools to query, visualize, alert on, and understand your metrics.'
    },
    Prometheus: {
        name: 'Prometheus',
        downloadURL: 'https://prometheus.io/download/',
        developer: 'Prometheus Team',
        description: 'Prometheus is an open-source systems monitoring and alerting toolkit originally built at SoundCloud.'
    },
    Kubernetes: {
        name: 'Kubernetes',
        downloadURL: 'https://kubernetes.io/docs/setup/',
        developer: 'Cloud Native Computing Foundation',
        description: 'Kubernetes is an open-source container-orchestration system for automating computer application deployment, scaling, and management.'
    },
    Terraform: {
        name: 'Terraform',
        downloadURL: 'https://www.terraform.io/downloads.html',
        developer: 'HashiCorp',
        description: 'Terraform is an open-source infrastructure as code software tool that provides a consistent CLI workflow to manage hundreds of cloud services.'
    },
    Ansible: {
        name: 'Ansible',
        downloadURL: 'https://www.ansible.com/products/engine',
        developer: 'Red Hat',
        description: 'Ansible is an open-source software provisioning, configuration management, and application-deployment tool.'
    },
    Puppet: {
        name: 'Puppet',
        downloadURL: 'https://puppet.com/download-puppet-open-source/',
        developer: 'Puppet, Inc.',
        description: 'Puppet is an open-source software configuration management tool.'
    },
    Chef: {
        name: 'Chef',
        downloadURL: 'https://downloads.chef.io/',
        developer: 'Progress Software',
        description: 'Chef is an open-source configuration management tool written in Ruby and Erlang.'
    },
    SaltStack: {
        name: 'SaltStack',
        downloadURL: 'https://saltproject.io/downloads/',
        developer: 'SaltStack',
        description: 'SaltStack is an open-source software for event-driven IT automation, remote task execution, and configuration management.'
    },
    JenkinsX: {
        name: 'Jenkins X',
        downloadURL: 'https://jenkins-x.io/',
        developer: 'Jenkins X project',
        description: 'Jenkins X is an open-source project that provides automated CI/CD for cloud-native applications on Kubernetes.'
    },
    ArgoCD: {
        name: 'Argo CD',
        downloadURL: 'https://argoproj.github.io/argo-cd/',
        developer: 'Argo Project',
        description: 'Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes.'
    },
    Spinnaker: {
        name: 'Spinnaker',
        downloadURL: 'https://www.spinnaker.io/downloads/',
        developer: 'Spinnaker project',
        description: 'Spinnaker is an open-source, multi-cloud continuous delivery platform for releasing software changes with high velocity and confidence.'
    },
    Consul: {
        name: 'Consul',
        downloadURL: 'https://www.consul.io/downloads',
        developer: 'HashiCorp',
        description: 'Consul is a service networking solution to connect and secure services across any runtime platform and public or private cloud.'
    },
    Vault: {
        name: 'Vault',
        downloadURL: 'https://www.vaultproject.io/downloads',
        developer: 'HashiCorp',
        description: 'Vault is an identity-based secrets and encryption management system.'
    },
    Nomad: {
        name: 'Nomad',
        downloadURL: 'https://www.nomadproject.io/downloads',
        developer: 'HashiCorp',
        description: 'Nomad is a flexible, enterprise-grade cluster scheduler for deploying applications on any infrastructure.'
    },
    Istio: {
        name: 'Istio',
        downloadURL: 'https://istio.io/latest/docs/setup/getting-started/',
        developer: 'Istio project',
        description: 'Istio is an open-source service mesh that provides a way to control how microservices share data with one another.'
    },
    Linkerd: {
        name: 'Linkerd',
        downloadURL: 'https://linkerd.io/2/getting-started/',
        developer: 'Linkerd project',
        description: 'Linkerd is an open-source service mesh for Kubernetes.'
    },
    OpenShift: {
        name: 'OpenShift',
        downloadURL: 'https://www.openshift.com/try',
        developer: 'Red Hat',
        description: 'OpenShift is a family of containerization software developed by Red Hat.'
    },
    Minikube: {
        name: 'Minikube',
        downloadURL: 'https://minikube.sigs.k8s.io/docs/start/',
        developer: 'Kubernetes project',
        description: 'Minikube is a tool that makes it easy to run Kubernetes locally.'
    },
    Kind: {
        name: 'Kind',
        downloadURL: 'https://kind.sigs.k8s.io/docs/user/quick-start/',
        developer: 'Kubernetes project',
        description: 'Kind is a tool for running local Kubernetes clusters using Docker container nodes.'
    },
    Helm: {
        name: 'Helm',
        downloadURL: 'https://helm.sh/docs/intro/install/',
        developer: 'Helm project',
        description: 'Helm is a package manager for Kubernetes.'
    },
    Kustomize: {
        name: 'Kustomize',
        downloadURL: 'https://kustomize.io/',
        developer: 'Kubernetes project',
        description: 'Kustomize is a configuration management tool for Kubernetes.'
    },
    Fluentd: {
        name: 'Fluentd',
        downloadURL: 'https://www.fluentd.org/download',
        developer: 'Fluentd project',
        description: 'Fluentd is an open-source data collector for unified logging layer.'
    },
    Logstash: {
        name: 'Logstash',
        downloadURL: 'https://www.elastic.co/downloads/logstash',
        developer: 'Elastic NV',
        description: 'Logstash is a server-side data processing pipeline that ingests data from multiple sources simultaneously, transforms it, and then sends it to your favorite “stash.”'
    },
    Kibana: {
        name: 'Kibana',
        downloadURL: 'https://www.elastic.co/downloads/kibana',
        developer: 'Elastic NV',
        description: 'Kibana is an open-source data visualization dashboard for Elasticsearch.'
    },
    Graylog: {
        name: 'Graylog',
        downloadURL: 'https://www.graylog.org/downloads',
        developer: 'Graylog, Inc.',
        description: 'Graylog is an open-source log management platform.'
    },
    Promtail: {
        name: 'Promtail',
        downloadURL: 'https://grafana.com/docs/loki/latest/clients/promtail/',
        developer: 'Grafana Labs',
        description: 'Promtail is an agent which ships the contents of local logs to a private Grafana Loki instance or Grafana Cloud.'
    },
    Loki: {
        name: 'Loki',
        downloadURL: 'https://grafana.com/docs/loki/latest/getting-started/',
        developer: 'Grafana Labs',
        description: 'Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus.'
    },
    Jaeger: {
        name: 'Jaeger',
        downloadURL: 'https://www.jaegertracing.io/docs/1.21/getting-started/',
        developer: 'Jaeger project',
        description: 'Jaeger is an open-source, end-to-end distributed tracing tool.'
    },
    Zipkin: {
        name: 'Zipkin',
        downloadURL: 'https://zipkin.io/pages/quickstart.html',
        developer: 'OpenZipkin project',
        description: 'Zipkin is a distributed tracing system.'
    },
    OpenTelemetry: {
        name: 'OpenTelemetry',
        downloadURL: 'https://opentelemetry.io/docs/',
        developer: 'OpenTelemetry project',
        description: 'OpenTelemetry is an observability framework for cloud-native software, providing a set of APIs, libraries, agents, and instrumentation to enable the collection of distributed traces and metrics.'
    },
    Thanos: {
        name: 'Thanos',
        downloadURL: 'https://thanos.io/tip/getting-started.md/',
        developer: 'Thanos project',
        description: 'Thanos is an open-source, highly available Prometheus setup with long-term storage capabilities.'
    },
    Cortex: {
        name: 'Cortex',
        downloadURL: 'https://cortexmetrics.io/docs/',
        developer: 'Cortex project',
        description: 'Cortex is a horizontally scalable, highly available, multi-tenant, long term storage for Prometheus.'
    },
    VictoriaMetrics: {
        name: 'VictoriaMetrics',
        downloadURL: 'https://victoriametrics.github.io/',
        developer: 'VictoriaMetrics project',
        description: 'VictoriaMetrics is a fast, cost-effective, and scalable monitoring solution and time series database.'
    },
    InfluxDB: {
        name: 'InfluxDB',
        downloadURL: 'https://www.influxdata.com/products/influxdb/',
        developer: 'InfluxData',
        description: 'InfluxDB is an open-source time series database developed by InfluxData.'
    },
    TimescaleDB: {
        name: 'TimescaleDB',
        downloadURL: 'https://www.timescale.com/products',
        developer: 'Timescale, Inc.',
        description: 'TimescaleDB is an open-source time-series database optimized for fast ingest and complex queries, built on PostgreSQL.'
    },
    Graphite: {
        name: 'Graphite',
        downloadURL: 'https://graphiteapp.org/',
        developer: 'Graphite project',
        description: 'Graphite is an open-source monitoring tool used to store and graph time series data.'
    },
    Netdata: {
        name: 'Netdata',
        downloadURL: 'https://www.netdata.cloud/',
        developer: 'Netdata, Inc.',
        description: 'Netdata is an open-source, distributed, real-time, performance and health monitoring tool for systems and applications.'
    },
    Zabbix: {
        name: 'Zabbix',
        downloadURL: 'https://www.zabbix.com/download',
        developer: 'Zabbix LLC',
        description: 'Zabbix is an open-source monitoring software tool for diverse IT components, including networks, servers, virtual machines, and cloud services.'
    },
    Nagios: {
        name: 'Nagios',
        downloadURL: 'https://www.nagios.org/downloads/',
        developer: 'Nagios Enterprises',
        description: 'Nagios is an open-source computer-software application that monitors systems, networks, and infrastructure.'
    },
    Icinga: {
        name: 'Icinga',
        downloadURL: 'https://icinga.com/download/',
        developer: 'Icinga GmbH',
        description: 'Icinga is an open-source computer system and network monitoring application.'
    },
    Sensu: {
        name: 'Sensu',
        downloadURL: 'https://sensu.io/downloads',
        developer: 'Sensu, Inc.',
        description: 'Sensu is an open-source monitoring tool for multi-cloud environments.'
    },
    Checkmk: {
        name: 'Checkmk',
        downloadURL: 'https://checkmk.com/download',
        developer: 'tribe29 GmbH',
        description: 'Checkmk is an open-source IT infrastructure monitoring software.'
    },
    Cacti: {
        name: 'Cacti',
        downloadURL: 'https://www.cacti.net/download_cacti.php',
        developer: 'Cacti project',
        description: 'Cacti is an open-source, web-based network monitoring and graphing tool.'
    },
    LibreNMS: {
        name: 'LibreNMS',
        downloadURL: 'https://www.librenms.org/#download',
        developer: 'LibreNMS project',
        description: 'LibreNMS is an open-source network monitoring system.'
    },
    Observium: {
        name: 'Observium',
        downloadURL: 'https://www.observium.org/download/',
        developer: 'Observium Limited',
        description: 'Observium is an open-source network monitoring platform.'
    },
    OpenNMS: {
        name: 'OpenNMS',
        downloadURL: 'https://www.opennms.org/en/install',
        developer: 'The OpenNMS Group, Inc.',
        description: 'OpenNMS is an open-source network management platform.'
    },
    Zenoss: {
        name: 'Zenoss',
        downloadURL: 'https://www.zenoss.com/product/service-assurance',
        developer: 'Zenoss, Inc.',
        description: 'Zenoss is an open-source hybrid IT monitoring platform.'
    },
    PrometheusOperator: {
        name: 'Prometheus Operator',
        downloadURL: 'https://github.com/prometheus-operator/prometheus-operator',
        developer: 'Prometheus Operator project',
        description: 'Prometheus Operator provides Kubernetes native deployment and management of Prometheus and related monitoring components.'
    },
    KubeStateMetrics: {
        name: 'Kube-state-metrics',
        downloadURL: 'https://github.com/kubernetes/kube-state-metrics',
        developer: 'Kubernetes project',
        description: 'Kube-state-metrics is a simple service that listens to the Kubernetes API server and generates metrics about the state of the objects.'
    },
    MetricsServer: {
        name: 'Metrics Server',
        downloadURL: 'https://github.com/kubernetes-sigs/metrics-server',
        developer: 'Kubernetes project',
        description: 'Metrics Server is a scalable, efficient source of container resource metrics for Kubernetes built-in autoscaling pipelines.'
    },
    Kiali: {
        name: 'Kiali',
        downloadURL: 'https://kiali.io/',
        developer: 'Kiali project',
        description: 'Kiali is an observability console for Istio with service mesh configuration capabilities.'
    },
    GrafanaLoki: {
        name: 'Grafana Loki',
        downloadURL: 'https://grafana.com/oss/loki/',
        developer: 'Grafana Labs',
        description: 'Grafana Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus.'
    },
    GrafanaTempo: {
        name: 'Grafana Tempo',
        downloadURL: 'https://grafana.com/oss/tempo/',
        developer: 'Grafana Labs',
        description: 'Grafana Tempo is an open-source, easy-to-use, and high-scale distributed tracing backend.'
    },
    GrafanaAgent: {
        name: 'Grafana Agent',
        downloadURL: 'https://grafana.com/docs/agent/latest/',
        developer: 'Grafana Labs',
        description: 'Grafana Agent is a telemetry collector for sending metrics, logs, and traces to the Grafana observability stack.'
    },
    GrafanaCloud: {
        name: 'Grafana Cloud',
        downloadURL: 'https://grafana.com/products/cloud/',
        developer: 'Grafana Labs',
        description: 'Grafana Cloud is a composable observability platform, integrating metrics, logs, and traces with Grafana.'
    },
    GrafanaEnterprise: {
        name: 'Grafana Enterprise',
        downloadURL: 'https://grafana.com/products/enterprise/',
        developer: 'Grafana Labs',
        description: 'Grafana Enterprise is a commercial version of Grafana with additional features and support.'
    },
    GrafanaEnterpriseMetrics: {
        name: 'Grafana Enterprise Metrics',
        downloadURL: 'https://grafana.com/products/enterprise-metrics/',
        developer: 'Grafana Labs',
        description: 'Grafana Enterprise Metrics is a scalable, secure, and cost-effective Prometheus-compatible metrics platform.'
    },
    GrafanaEnterpriseLogs: {
        name: 'Grafana Enterprise Logs',
        downloadURL: 'https://grafana.com/products/enterprise-logs/',
        developer: 'Grafana Labs',
        description: 'Grafana Enterprise Logs is a scalable, secure, and cost-effective log aggregation platform.'
    },
    GrafanaEnterpriseTraces: {
        name: 'Grafana Enterprise Traces',
        downloadURL: 'https://grafana.com/products/enterprise-traces/',
        developer: 'Grafana Labs',
        description: 'Grafana Enterprise Traces is a scalable, secure, and cost-effective distributed tracing platform.'
    },
    GrafanaEnterpriseStack: {
        name: 'Grafana Enterprise Stack',
        downloadURL: 'https://grafana.com/products/enterprise-stack/',
        developer: 'Grafana Labs',
        description: 'Grafana Enterprise Stack is a composable observability platform, integrating metrics, logs, and traces with Grafana.'
    },
    GrafanaEnterpriseCloud: {
        name: 'Grafana Enterprise Cloud',
        downloadURL: 'https://grafana.com/products/enterprise-cloud/',
        developer: 'Grafana Labs',
        description: 'Grafana Enterprise Cloud is a composable observability platform, integrating metrics, logs, and traces with Grafana.'
    },
    GrafanaEnterpriseOnPrem: {
        name: 'Grafana Enterprise On-Prem',
        downloadURL: 'https://grafana.com/products/enterprise-on-prem/',
        developer: 'Grafana Labs',
        description: 'Grafana Enterprise On-Prem is a composable observability platform, integrating metrics, logs, and traces with Grafana.'
    },
    GrafanaEnterpriseCloudOnPrem: {
        name: 'Grafana Enterprise Cloud On-Prem',
        downloadURL: 'https://grafana.com/products/enterprise-cloud-on-prem/',
        developer: 'Grafana Labs',
        description: 'Grafana Enterprise Cloud On-Prem is a composable observability platform, integrating metrics, logs, and traces with Grafana.'
    },
    GrafanaEnterpriseCloudOnPremStack: {
        name: 'Grafana Enterprise Cloud On-Prem Stack',
        downloadURL: 'https://grafana.com/products/enterprise-cloud-on-prem-stack/',
        developer: 'Grafana Labs',
        description: 'Grafana Enterprise Cloud On-Prem Stack is a composable observability platform, integrating metrics, logs, and traces with Grafana.'
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
