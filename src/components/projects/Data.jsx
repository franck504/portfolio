import Image1 from "../../assets/tenimparitra.gif";
import Image2 from "../../assets/tanalahy.gif";
import Image3 from "../../assets/kaly.gif";
import Image4 from "../../assets/jobFinder.gif";
import Image5 from "../../assets/csao.gif";
import Image6 from "../../assets/diamon.gif";
import Image7 from "../../assets/saveat.gif";
import Image8 from "../../assets/entrelles.gif";
import Logo1 from "../../assets/icon_app/tenimparitra.png";
import Logo2 from "../../assets/icon_app/tanalahy.png";
import Logo6 from "../../assets/icon_app/diamon.png";
import Logo7 from "../../assets/icon_app/saveat.png";
import Logo8 from "../../assets/icon_app/entrelles.png";
import ImageCutisia from "../../assets/cutisia.gif";
import LogoCutisia from "../../assets/icon_app/cutisia.png";
import ImageToroteny from "../../assets/toroteny.gif";
import LogoToroteny from "../../assets/icon_app/toroteny.png";
import ImageVakibot from "../../assets/vakibot.gif";

export const Data = [
  {
    id: 11,
    image: ImageToroteny,
    title: "Toroteny🇲🇬",
    description: {
      en: "The leading NLP engine for the Malagasy language. Hybrid model (FastText Word Embeddings + probabilistic N-Grams) trained on over 1 million sentences. Offers semantic analysis and lexical prediction capabilities.",
      fr: "Moteur de traitement automatique du langage naturel (NLP) pour la langue malgache. Modèle hybride (FastText Word Embeddings + N-Grammes probabilistes) entraîné sur plus de 1 million de phrases pour l'analyse sémantique et la prédiction lexicale.",
    },
    techno: ["Python", "NLP", "Machine Learning", "FastText", "N-Grams", "Levenshtein", "Data Science", "Scraping"],
    type: "NLP - AI",
    logo: LogoToroteny,
    color: "#027929"
  },
  {
    id: 10,
    image: ImageCutisia,
    title: "CutisIA",
    description: {
      en: "Intelligent medical assistant capable of detecting 6 tropical skin diseases (Leprosy, Monkeypox, etc.) in real-time on smartphones. An Edge-to-Cloud project combining high precision and offline accessibility for rural areas using Deep Learning.",
      fr: "Assistant médical intelligent capable de détecter 6 pathologies cutanées tropicales (dont la Lèpre et le Monkeypox) en temps réel sur smartphone. Projet Edge-to-Cloud alliant haute précision et fonctionnement hors-ligne pour les zones rurales grâce au Deep Learning.",
    },
    techno: ["CNN", "EfficientNetV2-L", "U-Net", "TFLite", "FastAPI", "OpenCV", "Grad-CAM", "XAI", "Python", "SQLite", "CRISP-DM", "Flutter", "TensorFlow", "TensorFlow-Lite"],
    type: "Mobile / DL",
    logo: LogoCutisia,
    color: "#1966fa"
  },
  {
    id: 9,
    image: Image8,
    title: "Entrelles",
    description: {
      en: "Women-only carpooling mobile application with trip proposals and bookings. Features secure online card payments, platform fee management, KYC verification, real-time geolocation, and Gemini API integration.",
      fr: "Application mobile de covoiturage féminin avec propositions et réservations de trajets. Paiement sécurisé par carte bancaire, gestion des commissions de la plateforme, vérification KYC, géolocalisation et intégration de l'API Gemini.",
    },
    techno: ["Flutter", "Stripe", "KYC", "Checkout", "Webview", "Webhooks", "NodeJS", "Express", "MongoDB", "Deeplink", "REST API", "Swagger", "Cloudinary", "Google Maps", "Gemini API"],
    type: "Mobile",
    logo: Logo8,
    color: "#eb026d"
  },
  {
    id: 8,
    image: ImageVakibot,
    title: "VakiBot",
    description: {
      en: "VakiBot is a RAG assistant that answers questions from uploaded documents (PDF/DOCX/TXT) with cited, source-grounded responses. It stores embeddings in ChromaDB and uses vector or hybrid BM25 retrieval before generation with a Groq LLM, with guardrails to reduce hallucinations.",
      fr: "Assistant RAG intelligent répondant aux questions à partir de documents importés (PDF/DOCX/TXT) avec citations de sources. Stockage vectoriel dans ChromaDB, recherche hybride BM25, génération via LLM Groq et garde-fous anti-hallucination, déployé sous Docker Compose.",
    },
    techno: ["LangChain", "Docker", "FastAPI", "ChromaDB", "Groq LLM", "RAG", "Python", "BM25", "Jina Embeddings"],
    type: "RAG",
    logo: null,
    color: "#1a365d"
  },
  {
    id: 7,
    image: Image7,
    title: "SavEat",
    description: {
      en: "Smart refrigerator management application combining Artificial Intelligence and IoT to fight food waste. SavEat suggests recipes based on expiration dates, sends proactive smart alerts, and supports voice recognition with a custom HMI.",
      fr: "Application intelligente de gestion de réfrigérateur combinant Intelligence Artificielle et IoT pour lutter contre le gaspillage alimentaire. SavEat propose des recettes selon les dates de péremption, des alertes intelligentes et une interaction vocale avancée.",
    },
    techno: ["Flutter", "Python", "Speech To Text", "Text To Speech", "LLM", "Ollama", "MQTT", "Websocket", "REST API", "FastAPI", "Flask", "Object recognition", "Raspberry Pi", "PostgreSQL", "SQLAlchemy", "Pydantic", "Swagger"],
    type: "Desktop / IoT",
    logo: Logo7,
    color: "#09182b"
  },
  {
    id: 6,
    image: Image6,
    title: "Diamon",
    description: {
      en: "Mobile application and IoT connected device for diabetic patient monitoring, with automatic insulin and glucagon injection, intelligent coaching, and a multi-recipient emergency alert system.",
      fr: "Application mobile et dispositif IoT de suivi pour patients diabétiques, avec injection automatisée d'insuline/glucagon, coaching intelligent et système d'alerte multi-destinataires.",
    },
    techno: ["Flutter", "ExpressJS", "MongoDb Atlas", "C++ Arduino", "MQTT", "Websocket", "Socket.io", "Bluetooth", "ESP32"],
    type: "Mobile / IoT",
    logo: Logo6,
    color: "#206de8"
  },
  {
    id: 1,
    image: Image1,
    title: "Tenimparitra",
    description: {
      en: "An interactive mobile application combining a collaborative dictionary and a social network dedicated to Malagasy dialects and cultural preservation.",
      fr: "Application mobile interactive servant à la fois de dictionnaire collaboratif et de réseau social dédié aux dialectes malgaches et à la préservation culturelle.",
    },
    techno: ["Flutter", "ExpressJS", "Neo4j"],
    type: "Mobile",
    logo: Logo1,
    color: "#057509"
  },
  {
    id: 2,
    image: Image2,
    title: "Tanalahy",
    description: {
      en: "A mobile application for controlling photographic lighting devices via Wi-Fi UDP and ESP8266, enhancing workflow precision and user experience.",
      fr: "Application mobile de contrôle d'éclairage photographique intelligent via Wi-Fi UDP et microcontrôleur ESP8266, offrant précision et ergonomie accrue.",
    },
    techno: ["Flutter", "Wifi - UDP", "Platform Channel Kotlin", "C++ Arduino", "ESP8266"],
    type: "Mobile / IoT",
    logo: Logo2,
    color: "#4c326f"
  },
  {
    id: 5,
    image: Image5,
    title: "CSAO",
    description: {
      en: "Operational equipment and attendance tracking application for the National Gendarmerie training center, allowing registration and archiving across all squadrons and platoons.",
      fr: "Application de gestion pour centre d'instruction opérationnel de la Gendarmerie Nationale : enregistrement et archivage des présences et des équipements par escadron et peloton.",
    },
    techno: ["Flutter", "ExpressJS", "MySQL"],
    type: "Mobile",
    logo: null,
    color: "var(--title-color)"
  },
  {
    id: 4,
    image: Image4,
    title: "Sample Login App",
    description: {
      en: "Complete, responsive user authentication flow for mobile applications: account creation, sign-in, and password recovery interfaces.",
      fr: "Ensemble d'interfaces modernes pour la gestion d'utilisateurs d'une application mobile : inscription, authentification et récupération de mot de passe.",
    },
    techno: ["Flutter"],
    type: "Mobile",
    logo: null,
    color: "var(--title-color)"
  },
  {
    id: 3,
    image: Image3,
    title: "Kaly",
    description: {
      en: "A fast food ordering and purchasing mobile application with catalog browsing, shopping cart, and Firebase backend.",
      fr: "Application mobile de commande et de livraison rapide de repas avec catalogue de produits, panier et backend Firebase.",
    },
    techno: ["Flutter", "Firebase"],
    type: "Mobile",
    logo: null,
    color: "var(--title-color)"
  }
];
