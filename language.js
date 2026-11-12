(function(){
const translations={
  en:{
    navWork:"Projects & Apps",
    heroPrimary:"View projects",
    metaProjects:"Featured projects",
    workKicker:"FEATURED WORK",
    workText:"Functional websites, app prototypes, and personal tools—each labeled by its current stage.",
    moreComing:"MORE IN PROGRESS",
    moreComingText:"New tools and experiments will be featured once their public demos are ready.",
    projectNumber:"PROJECT 04",
    project2Number:"PROJECT 05",
    chaekEyebrow:"KOREAN • READING • LEARNING",
    chaekPreviewTitle:"Read Korean<br>at your pace.",
    chaekPreviewDesc:"A mobile-friendly reading library with vocabulary practice.",
    chaekPreviewButton:"Explore the project",
    chaekNumber:"PROJECT 01",
    chaekStatus:"IN DEVELOPMENT",
    chaekTitle:"Chaeksoop — Korean Reading Library",
    chaekRole:"Product Direction · AI-Assisted Development · Mobile QA",
    chaekDescription:"An offline-friendly Korean reading web app for iPhone. I directed reading, personal-library, vocabulary, and flashcard features; audio and library-filtering behavior remain under testing.",
    chaekHighlight1:"Personal reading library",
    chaekHighlight2:"Vocabulary and flashcard practice",
    chaekHighlight3:"iPhone-oriented interface",
    chaekHighlight4:"Testing and bug investigation",
    vuneEyebrow:"WELLNESS • PRIVACY • PRODUCT DESIGN",
    vunePreviewTitle:"Private by<br>design.",
    vunePreviewDesc:"Local-only wellness tracking, check-ins, and journaling.",
    vunePreviewButton:"Explore the prototype",
    vuneNumber:"PROJECT 02",
    vuneStatus:"WEB PROTOTYPE",
    vuneTitle:"Vune — Privacy-First Wellness Tracker",
    vuneRole:"Product Direction · Privacy-Focused UX · QA & Testing",
    vuneDescription:"Functional browser prototype with an encrypted local vault, cycle check-ins, calendar, journal, and recovery backup. Intended for fictional test data—not clinical use or real patient records.",
    vuneHighlight1:"Encrypted local data vault",
    vuneHighlight2:"Check-ins and cycle calendar",
    vuneHighlight3:"Journal and recovery-key backup",
    vuneHighlight4:"Offline-capable web prototype",
    roadmapEyebrow:"PLANNING • GOALS • PROGRESS",
    roadmapPreviewTitle:"Plan with<br>clarity.",
    roadmapPreviewDesc:"A lightweight browser-based learning and career planner.",
    roadmapPreviewButton:"Explore the project",
    roadmapNumber:"PROJECT 03",
    roadmapStatus:"LIVE PERSONAL TOOL",
    roadmapTitle:"Interactive Career Roadmap",
    roadmapRole:"Project Direction · UX/UI · AI-Assisted Development",
    roadmapDescription:"Interactive personal planning website for organizing learning goals, milestones, checklists, and progress. The interface saves individual progress in the browser.",
    roadmapHighlight1:"Interactive goal checklists",
    roadmapHighlight2:"Progress summaries",
    roadmapHighlight3:"Responsive personal dashboard",
    roadmapHighlight4:"Browser-saved progress",
    
    skip:"Skip to content",brandSubtitle:"WEB DEVELOPMENT",navCapabilities:"Capabilities + Process",navProcess:"Process",navAbout:"About",navContact:"Contact",
    heroKicker:"AI-ASSISTED WEB DEVELOPMENT",heroTitle:"From idea to a polished <em>web experience.</em>",heroText:"I turn ideas into responsive, thoughtfully designed websites by combining project direction, UX/UI decisions, testing, debugging, and AI-assisted development.",heroSecondary:"Let's connect",
    metaLanguages:"Languages supported",metaResponsive:"Responsive design",floatResponsive:"Responsive ✓",floatDeployed:"Deployed ✓",heroPreview1Nav:"Projects   About   Contact",heroPreview1Title:"Where Behavior<br>Meets Data",heroPreview1Copy:"A responsive, multilingual professional portfolio.",heroPreview2Nav:"Developed Websites   Process   Contact",heroPreview2Title:"From Idea to a<br>Web Experience",heroPreview2Copy:"A responsive, multilingual web-development portfolio.",
    workTitle:"Built with intention, tested in practice.",previewText:"Healthcare, workforce, and behavioral analytics in one recruiter-focused portfolio.",
    projectStatus:"LIVE",projectTitle:"Data Analytics Portfolio",projectRole:"Project Owner · UX/UI Direction · AI-Assisted Development · QA & Deployment",projectDescription:"Designed and launched a responsive, multilingual professional portfolio centered on healthcare, workforce, and behavioral analytics. I directed the project from concept and requirements through iterative development, debugging, testing, and deployment.",
    highlightResponsive:"Responsive desktop + mobile interface",highlightLanguages:"English, Spanish + Korean localization",highlightNavigation:"Interactive navigation + carousels",highlightGithub:"GitHub version control + Pages deployment",viewLive:"View live site",viewRepo:"View repository",
    project2Title:"Web Development Portfolio",project2Role:"Project Owner · UX/UI Direction · AI-Assisted Development · QA & Deployment",project2Description:"Designed and launched this standalone web development portfolio to showcase completed websites and the process behind them. The site uses a turquoise visual system, multilingual content, a project carousel, responsive layouts, and a dedicated contact experience.",project2PreviewTitle:"From Idea to a<br>Web Experience",previewText2:"A one-page portfolio showcasing responsive web development, project direction, and AI-assisted workflows.",project2PreviewButton:"Developed Websites",project2Highlight1:"Turquoise responsive design system",project2Highlight2:"English, Spanish + Korean localization",project2Highlight3:"Expandable developed-websites carousel",project2Highlight4:"Dedicated contact page + GitHub deployment",
    designedKicker:"DESIGNED BY",designedTitle:"A collaborative build, directed by me.",designedText:"The website combines my project direction and decisions with AI-assisted development and GitHub-based version control.",designedAlanna:"Project direction · UX/UI · QA",designedChatgpt:"AI development collaboration",designedClaude:"AI development collaboration",designedGithub:"Version control · Deployment",
    capKicker:"CAPABILITIES + PROCESS",capTitle:"How I take a build from concept to launch.",capText:"My work combines project direction, UX/UI decisions, development, testing, and deployment in one iterative workflow.",cap1Title:"Project Direction",cap1Text:"Defining goals, requirements, page structure, priorities, and what a finished experience should accomplish.",cap2Title:"UX / UI Direction",cap2Text:"Shaping information hierarchy, navigation, spacing, visual consistency, responsive behavior, and usability.",cap3Title:"Responsive Development",cap3Text:"Building and refining HTML, CSS, and JavaScript experiences that adapt across desktop and mobile screens.",cap4Title:"AI-Assisted Build",cap4Text:"Using generative AI as a development collaborator while directing requirements and validating the implementation.",cap5Title:"QA & Debugging",cap5Text:"Testing interactions, spotting inconsistencies, tracing issues, and iterating until behavior matches the intended design.",cap6Title:"GitHub Deployment",cap6Text:"Managing version-controlled updates, repository organization, production changes, and GitHub Pages deployment.",
    processKicker:"PROCESS",processTitle:"A practical loop from concept to launch.",processText:"I work iteratively: define what the site needs to do, build a strong base, test it in context, then refine the details that make it feel complete.",step1:"Concept",step1Small:"Purpose + audience",step2:"Requirements",step2Small:"Content + behavior",step3:"Build",step3Small:"Structure + styling",step4:"Test",step4Small:"Usability + bugs",step5:"Refine",step5Small:"Details + polish",step6:"Deploy",step6Small:"Ship + improve",
    aboutKicker:"ABOUT",aboutTitle:"I like building things that make information easier to navigate.",aboutP1:"I'm Alanna Thornton. My background is rooted in psychology, people-centered work, and data, and web development gives me another way to turn ideas and information into useful experiences.",aboutP2:"My approach is collaborative and iterative: I define what needs to happen, use modern development tools—including generative AI—to accelerate the build, then test and refine until the final product matches the goal.",aboutLink:"More about my background",footerText:"Web Development Portfolio",
    home:"Home",contactKicker:"CONTACT",contactTitle:"Let's connect.",contactIntro:"Whether you'd like to talk about a website, a digital project, or a potential collaboration, I'd be happy to hear from you.",outlookLabel:"Outlook",outlookNote:"Best for professional and portfolio inquiries.",gmailLabel:"Gmail",gmailNote:"An alternative email address for reaching me.",linkedinLabel:"LinkedIn",linkedinNote:"Connect with me professionally and view my experience.",phoneLabel:"Phone",phoneNote:"Available for direct professional contact.",backHome:"← Back to Home"
  },
  es:{
    navWork:"Proyectos y apps",
    heroPrimary:"Ver proyectos",
    metaProjects:"Proyectos destacados",
    workKicker:"TRABAJOS DESTACADOS",
    workText:"Sitios funcionales, prototipos de aplicaciones y herramientas personales con su estado actual.",
    moreComing:"MÁS EN DESARROLLO",
    moreComingText:"Mostraré nuevas herramientas cuando sus demos públicas estén listas.",
    projectNumber:"PROYECTO 04",
    project2Number:"PROYECTO 05",
    chaekEyebrow:"COREANO • LECTURA • APRENDIZAJE",
    chaekPreviewTitle:"Lee coreano<br>a tu ritmo.",
    chaekPreviewDesc:"Biblioteca de lectura móvil con práctica de vocabulario.",
    chaekPreviewButton:"Explorar proyecto",
    chaekNumber:"PROYECTO 01",
    chaekStatus:"EN DESARROLLO",
    chaekTitle:"Chaeksoop — Biblioteca de lectura en coreano",
    chaekRole:"Dirección de producto · Desarrollo con IA · QA móvil",
    chaekDescription:"Aplicación de lectura en coreano para iPhone con funciones sin conexión. Dirigí el lector, la biblioteca, el vocabulario y las tarjetas; el audio y los filtros siguen en pruebas.",
    chaekHighlight1:"Biblioteca personal de lectura",
    chaekHighlight2:"Vocabulario y tarjetas",
    chaekHighlight3:"Diseño pensado para iPhone",
    chaekHighlight4:"Pruebas y análisis de errores",
    vuneEyebrow:"BIENESTAR • PRIVACIDAD • DISEÑO",
    vunePreviewTitle:"Privacidad<br>por diseño.",
    vunePreviewDesc:"Seguimiento y diario de bienestar con datos locales.",
    vunePreviewButton:"Explorar prototipo",
    vuneNumber:"PROYECTO 02",
    vuneStatus:"PROTOTIPO WEB",
    vuneTitle:"Vune — Seguimiento privado de bienestar",
    vuneRole:"Dirección de producto · UX de privacidad · Pruebas y QA",
    vuneDescription:"Prototipo web funcional con almacenamiento cifrado local, registro del ciclo, calendario, diario y recuperación. Solo para datos ficticios, no para uso clínico.",
    vuneHighlight1:"Almacenamiento local cifrado",
    vuneHighlight2:"Registros y calendario",
    vuneHighlight3:"Diario y recuperación",
    vuneHighlight4:"Prototipo web sin conexión",
    roadmapEyebrow:"PLANIFICACIÓN • METAS • PROGRESO",
    roadmapPreviewTitle:"Planifica con<br>claridad.",
    roadmapPreviewDesc:"Planificador personal de aprendizaje y carrera.",
    roadmapPreviewButton:"Explorar proyecto",
    roadmapNumber:"PROYECTO 03",
    roadmapStatus:"HERRAMIENTA PERSONAL",
    roadmapTitle:"Plan de carrera interactivo",
    roadmapRole:"Dirección de proyecto · UX/UI · Desarrollo con IA",
    roadmapDescription:"Sitio interactivo para organizar metas, hitos, tareas y progreso profesional. Guarda los avances en el navegador.",
    roadmapHighlight1:"Listas de metas interactivas",
    roadmapHighlight2:"Resumen del progreso",
    roadmapHighlight3:"Panel personal adaptable",
    roadmapHighlight4:"Progreso guardado localmente",
    
    skip:"Saltar al contenido",brandSubtitle:"DESARROLLO WEB",navCapabilities:"Capacidades + Proceso",navProcess:"Proceso",navAbout:"Sobre mí",navContact:"Contacto",
    heroKicker:"DESARROLLO WEB ASISTIDO POR IA",heroTitle:"De una idea a una <em>experiencia web</em> pulida.",heroText:"Convierto ideas en sitios web responsivos y cuidadosamente diseñados combinando dirección de proyectos, decisiones de UX/UI, pruebas, depuración y desarrollo asistido por IA.",heroSecondary:"Conectemos",
    metaLanguages:"Idiomas disponibles",metaResponsive:"Diseño responsivo",floatResponsive:"Responsivo ✓",floatDeployed:"Publicado ✓",heroPreview1Nav:"Proyectos   Sobre mí   Contacto",heroPreview1Title:"Donde el comportamiento<br>se encuentra con los datos",heroPreview1Copy:"Un portafolio profesional responsivo y multilingüe.",heroPreview2Nav:"Sitios desarrollados   Proceso   Contacto",heroPreview2Title:"De la idea a una<br>experiencia web",heroPreview2Copy:"Un portafolio de desarrollo web responsivo y multilingüe.",
    workTitle:"Construidos con intención, probados en la práctica.",previewText:"Analítica de salud, fuerza laboral y comportamiento en un portafolio orientado a reclutadores.",
    projectStatus:"EN VIVO",projectTitle:"Portafolio de Análisis de Datos",projectRole:"Responsable del proyecto · Dirección UX/UI · Desarrollo asistido por IA · QA e implementación",projectDescription:"Diseñé y lancé un portafolio profesional responsivo y multilingüe centrado en analítica de salud, fuerza laboral y comportamiento. Dirigí el proyecto desde el concepto y los requisitos hasta el desarrollo iterativo, la depuración, las pruebas y la implementación.",
    highlightResponsive:"Interfaz responsiva para escritorio + móvil",highlightLanguages:"Localización en inglés, español + coreano",highlightNavigation:"Navegación interactiva + carruseles",highlightGithub:"Control de versiones en GitHub + Pages",viewLive:"Ver sitio en vivo",viewRepo:"Ver repositorio",
    project2Title:"Portafolio de Desarrollo Web",project2Role:"Responsable del proyecto · Dirección UX/UI · Desarrollo asistido por IA · QA e implementación",project2Description:"Diseñé y lancé este portafolio independiente de desarrollo web para mostrar sitios terminados y el proceso detrás de ellos. El sitio utiliza un sistema visual turquesa, contenido multilingüe, un carrusel de proyectos, diseños responsivos y una experiencia de contacto dedicada.",project2PreviewTitle:"De la idea a una<br>experiencia web",previewText2:"Un portafolio de una sola página que muestra desarrollo web responsivo, dirección de proyectos y flujos de trabajo asistidos por IA.",project2PreviewButton:"Sitios desarrollados",project2Highlight1:"Sistema de diseño turquesa y responsivo",project2Highlight2:"Localización en inglés, español + coreano",project2Highlight3:"Carrusel ampliable de sitios desarrollados",project2Highlight4:"Página de contacto dedicada + implementación en GitHub",
    designedKicker:"DISEÑADO POR",designedTitle:"Una construcción colaborativa, dirigida por mí.",designedText:"El sitio combina mi dirección y decisiones de proyecto con desarrollo asistido por IA y control de versiones basado en GitHub.",designedAlanna:"Dirección de proyecto · UX/UI · QA",designedChatgpt:"Colaboración de desarrollo con IA",designedClaude:"Colaboración de desarrollo con IA",designedGithub:"Control de versiones · Implementación",
    capKicker:"CAPACIDADES + PROCESO",capTitle:"Cómo llevo un proyecto del concepto al lanzamiento.",capText:"Mi trabajo combina dirección de proyecto, decisiones de UX/UI, desarrollo, pruebas e implementación en un solo flujo iterativo.",cap1Title:"Dirección de Proyecto",cap1Text:"Definir objetivos, requisitos, estructura de páginas, prioridades y lo que debe lograr la experiencia final.",cap2Title:"Dirección UX / UI",cap2Text:"Dar forma a la jerarquía de información, navegación, espaciado, consistencia visual, comportamiento responsivo y usabilidad.",cap3Title:"Desarrollo Responsivo",cap3Text:"Construir y perfeccionar experiencias con HTML, CSS y JavaScript que se adapten a pantallas de escritorio y móviles.",cap4Title:"Construcción Asistida por IA",cap4Text:"Usar IA generativa como colaboradora de desarrollo mientras dirijo los requisitos y valido la implementación.",cap5Title:"QA y Depuración",cap5Text:"Probar interacciones, detectar inconsistencias, rastrear problemas e iterar hasta que el comportamiento coincida con el diseño previsto.",cap6Title:"Implementación con GitHub",cap6Text:"Gestionar actualizaciones con control de versiones, organización del repositorio, cambios de producción e implementación con GitHub Pages.",
    processKicker:"PROCESO",processTitle:"Un ciclo práctico del concepto al lanzamiento.",processText:"Trabajo de forma iterativa: defino lo que el sitio debe hacer, construyo una base sólida, lo pruebo en contexto y luego perfecciono los detalles que lo hacen sentir completo.",step1:"Concepto",step1Small:"Propósito + audiencia",step2:"Requisitos",step2Small:"Contenido + comportamiento",step3:"Construcción",step3Small:"Estructura + estilos",step4:"Pruebas",step4Small:"Usabilidad + errores",step5:"Refinar",step5Small:"Detalles + acabado",step6:"Publicar",step6Small:"Lanzar + mejorar",
    aboutKicker:"SOBRE MÍ",aboutTitle:"Me gusta crear cosas que hagan la información más fácil de navegar.",aboutP1:"Soy Alanna Thornton. Mi experiencia se basa en psicología, trabajo centrado en las personas y datos, y el desarrollo web me da otra forma de convertir ideas e información en experiencias útiles.",aboutP2:"Mi enfoque es colaborativo e iterativo: defino lo que debe suceder, utilizo herramientas modernas de desarrollo —incluida la IA generativa— para acelerar la construcción y luego pruebo y perfecciono hasta que el producto final cumple el objetivo.",aboutLink:"Más sobre mi experiencia",footerText:"Portafolio de Desarrollo Web",
    home:"Inicio",contactKicker:"CONTACTO",contactTitle:"Conectemos.",contactIntro:"Ya sea que quieras hablar de un sitio web, un proyecto digital o una posible colaboración, me encantará saber de ti.",outlookLabel:"Outlook",outlookNote:"La mejor opción para consultas profesionales y de portafolio.",gmailLabel:"Gmail",gmailNote:"Una dirección de correo alternativa para contactarme.",linkedinLabel:"LinkedIn",linkedinNote:"Conecta conmigo profesionalmente y revisa mi experiencia.",phoneLabel:"Teléfono",phoneNote:"Disponible para contacto profesional directo.",backHome:"← Volver al inicio"
  },
  ko:{
    navWork:"프로젝트 및 앱",
    heroPrimary:"프로젝트 보기",
    metaProjects:"대표 프로젝트",
    workKicker:"대표 작업",
    workText:"작동하는 웹사이트, 앱 프로토타입, 개인 도구를 개발 상태와 함께 소개합니다.",
    moreComing:"추가 프로젝트 진행 중",
    moreComingText:"공개 데모가 준비되면 새로운 도구와 실험을 소개하겠습니다.",
    projectNumber:"프로젝트 04",
    project2Number:"프로젝트 05",
    chaekEyebrow:"한국어 • 독서 • 학습",
    chaekPreviewTitle:"내 속도에 맞춰<br>한국어 읽기",
    chaekPreviewDesc:"어휘 연습 기능을 갖춘 모바일 독서 라이브러리",
    chaekPreviewButton:"프로젝트 보기",
    chaekNumber:"프로젝트 01",
    chaekStatus:"개발 중",
    chaekTitle:"책숲 — 한국어 독서 라이브러리",
    chaekRole:"제품 기획 · AI 지원 개발 · 모바일 QA",
    chaekDescription:"아이폰을 위한 오프라인 친화적인 한국어 독서 웹 앱입니다. 독서, 개인 서재, 단어와 플래시카드 기능을 기획했으며 오디오와 필터 기능은 테스트 중입니다.",
    chaekHighlight1:"개인 독서 라이브러리",
    chaekHighlight2:"어휘 및 플래시카드",
    chaekHighlight3:"아이폰 중심 인터페이스",
    chaekHighlight4:"테스트 및 버그 분석",
    vuneEyebrow:"웰니스 • 개인정보 보호 • 디자인",
    vunePreviewTitle:"개인정보 보호를<br>설계의 중심에",
    vunePreviewDesc:"로컬에 저장되는 건강 기록과 일지",
    vunePreviewButton:"프로토타입 보기",
    vuneNumber:"프로젝트 02",
    vuneStatus:"웹 프로토타입",
    vuneTitle:"Vune — 개인정보 보호 중심 웰니스 기록",
    vuneRole:"제품 기획 · 개인정보 보호 UX · QA 및 테스트",
    vuneDescription:"암호화된 로컬 저장소, 생리 주기 기록, 달력, 일지, 복구 백업 기능을 갖춘 웹 프로토타입입니다. 실제 의료정보가 아닌 가상 데이터로만 테스트해야 합니다.",
    vuneHighlight1:"암호화된 로컬 저장소",
    vuneHighlight2:"기록 및 주기 달력",
    vuneHighlight3:"일지 및 복구 백업",
    vuneHighlight4:"오프라인 지원 웹 프로토타입",
    roadmapEyebrow:"계획 • 목표 • 진행 상황",
    roadmapPreviewTitle:"더 명확하게<br>계획하기",
    roadmapPreviewDesc:"학습과 커리어를 위한 브라우저 기반 계획 도구",
    roadmapPreviewButton:"프로젝트 보기",
    roadmapNumber:"프로젝트 03",
    roadmapStatus:"개인용 도구",
    roadmapTitle:"인터랙티브 커리어 로드맵",
    roadmapRole:"프로젝트 기획 · UX/UI · AI 지원 개발",
    roadmapDescription:"학습 목표, 마일스톤, 체크리스트, 진행 상황을 정리하는 개인용 대시보드입니다. 브라우저에 진행 상황을 저장합니다.",
    roadmapHighlight1:"대화형 목표 체크리스트",
    roadmapHighlight2:"진행 상황 요약",
    roadmapHighlight3:"반응형 개인 대시보드",
    roadmapHighlight4:"브라우저에 진행 상황 저장",
    
    skip:"본문으로 건너뛰기",brandSubtitle:"웹 개발",navCapabilities:"역량 + 프로세스",navProcess:"프로세스",navAbout:"소개",navContact:"연락하기",
    heroKicker:"AI 지원 웹 개발",heroTitle:"아이디어를 완성도 높은 <em>웹 경험</em>으로.",heroText:"프로젝트 방향 설정, UX/UI 결정, 테스트, 디버깅, AI 지원 개발을 결합해 아이디어를 반응형 웹사이트로 구현합니다.",heroSecondary:"연락하기",
    metaLanguages:"지원 언어",metaResponsive:"반응형 디자인",floatResponsive:"반응형 ✓",floatDeployed:"배포 완료 ✓",heroPreview1Nav:"프로젝트   소개   연락하기",heroPreview1Title:"행동과 데이터가<br>만나는 곳",heroPreview1Copy:"반응형 다국어 전문 포트폴리오입니다.",heroPreview2Nav:"개발한 웹사이트   프로세스   연락하기",heroPreview2Title:"아이디어에서<br>웹 경험으로",heroPreview2Copy:"반응형 다국어 웹 개발 포트폴리오입니다.",
    workTitle:"의도를 담아 만들고 실제로 테스트했습니다.",previewText:"헬스케어, 인력, 행동 분석을 하나의 채용 담당자 중심 포트폴리오로 구성했습니다.",
    projectStatus:"운영 중",projectTitle:"데이터 분석 포트폴리오",projectRole:"프로젝트 오너 · UX/UI 방향 설정 · AI 지원 개발 · QA 및 배포",projectDescription:"헬스케어, 인력, 행동 분석을 중심으로 반응형 다국어 전문 포트폴리오를 설계하고 출시했습니다. 기획과 요구사항 정의부터 반복 개발, 디버깅, 테스트, 배포까지 프로젝트를 주도했습니다.",
    highlightResponsive:"데스크톱 + 모바일 반응형 인터페이스",highlightLanguages:"영어, 스페인어 + 한국어 현지화",highlightNavigation:"인터랙티브 내비게이션 + 캐러셀",highlightGithub:"GitHub 버전 관리 + Pages 배포",viewLive:"라이브 사이트 보기",viewRepo:"저장소 보기",
    project2Title:"웹 개발 포트폴리오",project2Role:"프로젝트 오너 · UX/UI 방향 설정 · AI 지원 개발 · QA 및 배포",project2Description:"완성된 웹사이트와 그 제작 과정을 보여주기 위해 이 독립형 웹 개발 포트폴리오를 설계하고 출시했습니다. 터키석 계열의 시각 시스템, 다국어 콘텐츠, 프로젝트 캐러셀, 반응형 레이아웃, 전용 연락 페이지를 포함합니다.",project2PreviewTitle:"아이디어에서<br>웹 경험으로",previewText2:"반응형 웹 개발, 프로젝트 방향 설정, AI 지원 워크플로를 보여주는 원페이지 포트폴리오입니다.",project2PreviewButton:"개발한 웹사이트",project2Highlight1:"터키석 반응형 디자인 시스템",project2Highlight2:"영어, 스페인어 + 한국어 현지화",project2Highlight3:"확장 가능한 개발 웹사이트 캐러셀",project2Highlight4:"전용 연락 페이지 + GitHub 배포",
    designedKicker:"디자인 및 제작",designedTitle:"제가 방향을 이끈 협업형 빌드입니다.",designedText:"이 웹사이트는 저의 프로젝트 방향과 의사결정에 AI 지원 개발과 GitHub 기반 버전 관리를 결합해 만들었습니다.",designedAlanna:"프로젝트 방향 · UX/UI · QA",designedChatgpt:"AI 개발 협업",designedClaude:"AI 개발 협업",designedGithub:"버전 관리 · 배포",
    capKicker:"역량 + 프로세스",capTitle:"아이디어를 출시까지 이끄는 방식.",capText:"프로젝트 방향 설정, UX/UI 결정, 개발, 테스트, 배포를 하나의 반복적인 워크플로로 결합합니다.",cap1Title:"프로젝트 방향 설정",cap1Text:"목표, 요구사항, 페이지 구조, 우선순위와 최종 경험이 달성해야 할 목적을 정의합니다.",cap2Title:"UX / UI 방향 설정",cap2Text:"정보 계층, 내비게이션, 여백, 시각적 일관성, 반응형 동작과 사용성을 설계합니다.",cap3Title:"반응형 개발",cap3Text:"데스크톱과 모바일 화면에 맞게 HTML, CSS, JavaScript 경험을 구축하고 개선합니다.",cap4Title:"AI 지원 빌드",cap4Text:"요구사항을 주도하고 구현 결과를 검증하면서 생성형 AI를 개발 협업 도구로 활용합니다.",cap5Title:"QA 및 디버깅",cap5Text:"인터랙션을 테스트하고 불일치를 찾고 문제를 추적하며 의도한 디자인과 일치할 때까지 반복 개선합니다.",cap6Title:"GitHub 배포",cap6Text:"버전 관리 업데이트, 저장소 구성, 프로덕션 변경과 GitHub Pages 배포를 관리합니다.",
    processKicker:"프로세스",processTitle:"아이디어에서 출시까지 이어지는 실용적인 반복 과정.",processText:"사이트가 해야 할 일을 정의하고, 탄탄한 기반을 만든 뒤, 실제 맥락에서 테스트하고 완성도를 높이는 세부 사항을 반복적으로 다듬습니다.",step1:"개념",step1Small:"목적 + 대상",step2:"요구사항",step2Small:"콘텐츠 + 동작",step3:"빌드",step3Small:"구조 + 스타일",step4:"테스트",step4Small:"사용성 + 버그",step5:"개선",step5Small:"디테일 + 완성도",step6:"배포",step6Small:"출시 + 개선",
    aboutKicker:"소개",aboutTitle:"정보를 더 쉽게 탐색할 수 있게 만드는 것을 좋아합니다.",aboutP1:"저는 Alanna Thornton입니다. 심리학, 사람 중심의 업무, 데이터에 기반한 경험을 가지고 있으며, 웹 개발은 아이디어와 정보를 유용한 경험으로 바꾸는 또 다른 방법입니다.",aboutP2:"제 방식은 협업적이고 반복적입니다. 무엇이 필요한지 정의하고 생성형 AI를 포함한 현대적인 개발 도구로 제작 속도를 높인 뒤, 최종 결과가 목표에 맞을 때까지 테스트하고 개선합니다.",aboutLink:"제 배경 더 보기",footerText:"웹 개발 포트폴리오",
    home:"홈",contactKicker:"연락하기",contactTitle:"연락해 주세요.",contactIntro:"웹사이트, 디지털 프로젝트 또는 협업 가능성에 대해 이야기하고 싶다면 언제든지 연락해 주세요.",outlookLabel:"Outlook",outlookNote:"전문적인 문의와 포트폴리오 관련 문의에 가장 적합합니다.",gmailLabel:"Gmail",gmailNote:"연락 가능한 대체 이메일 주소입니다.",linkedinLabel:"LinkedIn",linkedinNote:"전문적으로 연결하고 제 경력을 확인할 수 있습니다.",phoneLabel:"전화",phoneNote:"전문적인 직접 연락이 가능합니다.",backHome:"← 홈으로"
  }
};

const titles={
  en:{"Alanna Thornton | Web Development":"Alanna Thornton | Web Development","Contact | Alanna Thornton":"Contact | Alanna Thornton"},
  es:{"Alanna Thornton | Web Development":"Alanna Thornton | Desarrollo Web","Contact | Alanna Thornton":"Contacto | Alanna Thornton"},
  ko:{"Alanna Thornton | Web Development":"Alanna Thornton | 웹 개발","Contact | Alanna Thornton":"연락하기 | Alanna Thornton"}
};
const originalTitle=document.title;
function applyLanguage(lang){
  const dict=translations[lang]||translations.en;
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;
    if(dict[key]!==undefined)el.textContent=dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    const key=el.dataset.i18nHtml;
    if(dict[key]!==undefined)el.innerHTML=dict[key];
  });
  document.title=(titles[lang]&&titles[lang][originalTitle])||originalTitle;
  localStorage.setItem('webDevLanguage',lang);
  document.querySelectorAll('.language-menu [data-lang]').forEach(btn=>{
    const active=btn.dataset.lang===lang;
    btn.classList.toggle('active',active);
    btn.setAttribute('aria-checked',active?'true':'false');
  });
}
function init(){
  const wrap=document.querySelector('.language-switcher');
  const toggle=wrap&&wrap.querySelector('.language-toggle');
  const menu=wrap&&wrap.querySelector('.language-menu');
  if(wrap&&toggle&&menu){
    toggle.addEventListener('click',e=>{
      e.stopPropagation();
      const open=wrap.classList.toggle('open');
      toggle.setAttribute('aria-expanded',String(open));
    });
    menu.addEventListener('click',e=>{
      const btn=e.target.closest('[data-lang]');
      if(!btn)return;
      applyLanguage(btn.dataset.lang);
      wrap.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
    });
    document.addEventListener('click',e=>{
      if(!wrap.contains(e.target)){
        wrap.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      }
    });
    document.addEventListener('keydown',e=>{
      if(e.key==='Escape'){
        wrap.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      }
    });
  }
  applyLanguage(localStorage.getItem('webDevLanguage')||'en');
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();