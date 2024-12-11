import Image1 from "../../assets/tenimparitra.gif";
import Image2 from "../../assets/tanalahy.gif";
import Image3 from "../../assets/datalogger.gif";


export const Data = [
  {
    id: 1,
    image: Image1,
    title: "Tenimparitra Malagasy",
    description:
      "An application that is both a dictionary and a social network for Malagasy dialects.",
    techno: ["Flutter", "ExpressJS", "Neo4j"],
    links: {
      github: "https://github.com/f504",
      appleStore: "https://appleStore.com/",
      googlePlay: "https://play.google.com/"
    },
    type : "Mobile"
  },
    {
      id: 2,
      image: Image2,
      title: "Tanalahy",
      description:
        "A mobile application for controlling a lighting device for photography. \n INNOVATION through improved user experience and greater precision.",
      techno: ["Flutter", "Wifi - UDP","Plateform Channel KOTLIN", "C++ Arduino" , "ESP8266"],
      links: {
          github: "https://github.com/f504",
          appleStore: "https://appleStore.com/",
          googlePlay: "https://play.google.com/"
        },
        type : "Mobile"
    },
    {
      id: 3,
      image: Image3,
      title: "Mi-Mesure",
      description:
        "Creation of a water pressure and flow value logger with a real-time monitoring web interface.",
      techno: ["ReactJS", "ExpressJS", "RethinkDB" , "C++ Arduino"],
      links: {
        github: "https://github.com/f504",
        appleStore: "https://appleStore.com/",
        googlePlay: "https://play.google.com/"
      },
      type : "Web"
    },
  ];