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

export const Data = [
  {
    id: 10,
    image: ImageToroteny,
    title: "Toroteny",
    description: "The leading NLP engine for the Malagasy language. Hybrid model (FastText Word Embeddings + probabilistic N-Grams) trained on over 1 million sentences. Offers semantic analysis and lexical prediction capabilities.",
    techno: ["Python", "FastText", "NLP", "Machine Learning", "N-Grams", "Data Science", "Scrapping"],
    links: {
      github: "https://github.com/f504",
      appleStore: "https://appleStore.com/",
      googlePlay: "https://play.google.com/"
    },
    type: "NLP - IA",
    logo: LogoToroteny,
    color: "#027929"
  },
  {
    id: 9,
    image: ImageCutisia,
    title: "CutisIA",
    description:
      "Intelligent medical assistant capable of detecting 6 tropical skin diseases (Leprosy, Monkeypox, etc.) in real-time on smartphones. An Edge-to-Cloud project combining high precision and offline accessibility for rural areas using Deep Learning.",
    techno: ["Flutter", "TensorFlow", "TensorFlow-Lite", "EfficientNetV2-L", "U-Net", "TFLite", "FastAPI", "OpenCV", "Grad-CAM", "XAI", "Python", "SQLite"],
    links: {
      github: "https://github.com/f504",
      appleStore: "https://appleStore.com/",
      googlePlay: "https://play.google.com/"
    },
    type: "Mobile / DL",
    logo: LogoCutisia,
    color: "#1966fa"
  },
  {
    id: 8,
    image: Image8,
    title: "Entrelles",
    description:
      "Application mobile de covoiturage feminine, proposition et reservation, la conductrice recoit de l'argent , le voyageur paye via carte VISA, le plateforme prend sa commision",
    techno: ["Flutter", "Stripe", "KYC", "Checkout", "Webview", "Webhooks", "NodeJS", "Express", "MongoDB", "Deeplink", "REST API", "Swagger", "Cloudinary", "Google Maps", "Gemini API"],
    links: {
      github: "https://github.com/f504",
      appleStore: "https://appleStore.com/",
      googlePlay: "https://play.google.com/"
    },
    type: "Mobile",
    logo: Logo8,
    color: "#eb026d"
  },
  {
    id: 7,
    image: Image7,
    title: "SavEat",
    description:
      "Application de Gestion de Réfrigérateur intelligent avec Intelligence Artificielle, IoT pour but de lutter contre le gaspillage alimentaire. SavEat propose des recettes selon la date de péremption, des alertes intelligentes, des interactions par reconnaissance vocale, une IHM avancée.",
    techno: ["Flutter", "Python", "Speech To Text", "Text To Speech", "LLM", "Ollama", "MQTT", "Websocket", "REST API", "fastAPI", "Flask", "Object recognition", "Raspberry Pi", "Postgresql", "SQLAlchemy", "Pydantic", "Swagger"],
    links: {
      github: "https://github.com/f504",
      appleStore: "https://appleStore.com/",
      googlePlay: "https://play.google.com/"
    },
    type: "Desktop",
    logo: Logo7,
    color: "#09182b"
  },
  {

    id: 6,
    image: Image6,
    title: "Diamon",
    description:
      "Mobile application and IoT device for diabetic patient monitoring, with automatic injection of insulin and glucagon, featuring intelligent coaching and multi-recipient alert system.",
    techno: ["Flutter", "ExpressJS", "MongoDb Atlas", "C++ Arduino", "MQTT", "Websocket", "Socket.io", "Bluetooth", "ESP32"],
    links: {
      github: "https://github.com/f504",
      appleStore: "https://appleStore.com/",
      googlePlay: "https://play.google.com/"
    },
    type: "Mobile",
    logo: Logo6,
    color: "#206de8"
  },
  {
    id: 1,
    image: Image1,
    title: "Tenimparitra",
    description:
      "An application that is both a dictionary and a social network for Malagasy dialects.",
    techno: ["Flutter", "ExpressJS", "Neo4j"],
    links: {
      github: "https://github.com/f504",
      appleStore: "https://appleStore.com/",
      googlePlay: "https://play.google.com/"
    },
    type: "Mobile",
    logo: Logo1,

    color: "#057509"
  },
  {
    id: 2,
    image: Image2,
    title: "Tanalahy",
    description:
      "A mobile application for controlling a lighting device for photography. \n INNOVATION through improved user experience and greater precision.",
    techno: ["Flutter", "Wifi - UDP", "Plateform Channel KOTLIN", "C++ Arduino", "ESP8266"],
    links: {
      github: "https://github.com/f504",
      appleStore: "https://appleStore.com/",
      googlePlay: "https://play.google.com/"
    },
    type: "Mobile",
    logo: Logo2,
    color: "#4c326f"
  },
  {
    id: 5,
    image: Image5,
    title: "CSAO",
    description:
      "A weapon management application for the National Gendarmerie, designed for an operational training center for trainees. It allows for the registration and archiving of attendance and absences for all trainees, across all squadrons and platoons.",
    techno: ["Flutter", "ExpressJS", "MySQL"],
    links: {
      github: "https://github.com/f504",
      appleStore: "https://appleStore.com/",
      googlePlay: "https://play.google.com/"
    },
    type: "Mobile",
    logo: null,
    color: "var(--title-color)"
  },
  {
    id: 4,
    image: Image4,
    title: "Sample Login App",
    description:
      "All the interfaces required for managing users of a job search application: account creation, authentication, forgot password.",
    techno: ["Flutter"],
    links: {
      github: "https://github.com/f504",
      appleStore: "https://appleStore.com/",
      googlePlay: "https://play.google.com/"
    },
    type: "Mobile",
    logo: null,
    color: "var(--title-color)"
  },
  {
    id: 3,
    image: Image3,
    title: "Kaly",
    description:
      "A fast food ordering and purchasing application",
    techno: ["Flutter", "Firebase"],
    links: {
      github: "https://github.com/f504",
      appleStore: "https://appleStore.com/",
      googlePlay: "https://play.google.com/"
    },
    type: "Mobile",
    logo: null,
    color: "var(--title-color)"
  },


];