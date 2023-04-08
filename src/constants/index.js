import {
  mobile,
  backend,
  creator,
  web,
  registration,
  inauguration,
  presentation,
  fullstack,
  webdesign,
  techquiz,
  mrengineer,
  cpuassembling,
  carrent,
  jobit,
  tripguide,

  logomaking,
  spellbee,
  googling,
  poster,
  treasure,
  closecerm,

  instasite,
  tesla,
  reactjs,
  telegram,
  whatsapp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Events",
  },
  {
    id: "contact",
    title: "Register",
  },
];

const services = [
  {
    title: "Inauguration",
    icon: web,
  },
  {
    title: "Technical Events",
    icon: mobile,
  },
  {
    title: "Non Technical Events",
    icon: backend,
  },
  {
    title: "Closing Ceremony",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Paper Presentation",
    icon: presentation,
  },
  {
    name: "Full stack Development",
    icon: fullstack,
  },
  {
    name: "Web Designing",
    icon: webdesign,
  },
  {
    name: "Technical Quiz",
    icon: techquiz,
  },
  {
    name: "MR Engineer",
    icon: mrengineer,
  },
  {
    name: "Hardware CPU Assembling",
    icon: cpuassembling,
  },
  {
    name: "Quiz & Logo Making",
    icon: logomaking,
  },
  {
    name: "Spell Bee",
    icon: spellbee,
  },
  {
    name: "Poster Making",
    icon: poster,
  },
  {
    name: "Googling",
    icon: googling,
  },
  {
    name: "Treasure Hunting",
    icon: treasure,
  },
];

const experiences = [
    {
      title: "Registration & Inauguration session",
      //time: "8:30 AM - 10:30 AM",
      icon: inauguration,
      iconBg: "#E6DEDD",
      venue: "VENUE : Main Hall",
      points: [
        "Registration is the process of signing up for an event or program.",
        "It involves providing personal information such as name, email, and affiliation.",
      ],
    },
    {
      title: "Slide to Success",
      //time: "10:30 AM - 11:30 AM",
      icon: presentation,
      iconBg: "#383E56",
      venue: "VENUE : Seminar hall - 1",
      points: [
        "'Slide to Success' is the title of the presentation.",
        "The presentation may include visual aids such as slides or diagrams to help illustrate concepts and ideas.",
      ],
    },
    {
      title: "Null void",
      //time: "11:30 AM - 12:30 PM",
      icon: reactjs,
      iconBg: "#E6DEDD",
      venue: "VENUE : Computer Lab - 1",
      points: [
        "Coding is the process of writing computer programs using a programming language to solve specific problems or perform specific tasks.",
      ],
    },
    {
      title: "Interface Design",
      //time: "1:30 PM - 2:30 PM",
      icon: webdesign,
      iconBg: "#383E56",
      venue: "VENUE : Computer Lab - 2",
      points: [
        "Interface Design = User Interface (UI) Design",
        "Focus on designing digital website visual elements, layout, and functionality",
      ],
    },
    {
      title: "Techie Buzz",
      //time: "2:30 PM - 03:30 PM",
      icon: techquiz,
      iconBg: "#E6DEDD",
      venue: "VENUE : Seminar Hall - 2",
      points: [
        "The quiz is focused on testing your technical knowledge in various areas related to technology and computer science.",
        "Questions may cover topics such as programming languages, databases, operating systems, computer networks, cybersecurity, and more.",
      ],
    },
    {
      title: "Mr. Engineer",
      //time: "3:30 PM - 4:30 PM",
      icon: mrengineer,
      iconBg: "#383E56",
      venue: "VENUE : Seminar Hall - 2",
      points: [
        "To be successful as a Mr. Engineer, individuals need to have strong analytical and problem-solving skills, attention to detail, excellent communication abilities, and a willingness to continuously learn and adapt to new technologies and trends.",
        "Based on Interview Concepts",
      ],
    },
    {
      title: "Nodezilla",
      //time: "4:30 PM - 05:00 PM",
      icon: cpuassembling,
      iconBg: "#E6DEDD",
      venue: "VENUE : Computer Lab - 1",
      points: [
        "Assembling a CPU, also known as building a computer.",
        "The process of assembling a CPU involves installing each of these components in the appropriate slots and connecting them using cables and screws.",
      ],
    },
    
];

const experiences2=[
  {
    title: "Brain War",
    //time: "10:00 AM - 11:30 AM",
    icon: logomaking,
    iconBg: "#383E56",
    venue: "VENUE : Seminar Hall - 1",
    points: [
      "A general quiz covers a wide range of topics, including history, geography, science, literature, sports, and more.",
      "Logo design is the process of creating a visual symbol or emblem that represents a brand or organization.",
    ],
  },
  {
    title: "Spell Bee",
    //time: "11:30 AM - 12:00 AM",
    icon: spellbee,
    iconBg: "#E6DEDD",
    venue: "VENUE : Seminar Hall - 1",
    points: [
      "A spelling bee is a competition in which participants are given words to spell correctly.",
      "Participants may be given the definition, origin, or part of speech of the word to aid in spelling it correctly",
      "The competition may be conducted in rounds, with participants eliminated after misspelling a word.",
    ],
  },
  {
    title: "Placard",
    //time: "12:00 PM - 12:45 PM",
    icon: poster,
    iconBg: "#383E56",
    venue: "VENUE : Computer lab - 1",
    points: [
      "Poster making is the process of creating a visual representation of an idea, message, or concept to communicate to a specific audience.",
      "It is an art of making people feel attractive to your product or service which is ultimately relies on the content, design, color of the poster."
    ],
  },
  {
    title: "Web Wizard",
    //time: "01:15 PM - 02:00 PM",
    icon: googling,
    iconBg: "#E6DEDD",
    venue: "VENUE : Computer lab - 1",
    points: [
      "Googling is the act of using the Google search engine to find information on the internet.",
      "Effective googling requires knowledge of search operators, such as using quotation marks for exact phrase searches, or the minus sign to exclude certain words.",
      "It is important to critically evaluate the information found through googling, as not all sources may be reliable or accurate.",
      "Googling can be used for a variety of purposes, such as research, finding solutions to problems, or discovering new information.",
    ],
  },
  {
    title: "Ready to Rumble",
    //time: "02:00 PM - 03:00 PM",
    icon: treasure,
    iconBg: "#383E56",
    venue: "VENUE : CSE Department",
    points: [
      "'Ready to Rumble' can be a fun and rewarding activity that combines adventure, history, and discovery.",
      "Find a Object is a Main Concept of a Event",
    ],
  },
  {
    title: "Closing ceremony",
    //time: "03:00 PM - 05:00 PM",
    icon: closecerm,
    iconBg: "#E6DEDD",
    venue: "VENUE : Seminar Hall - 1",
    points: [
      "The closing ceremony marks the end of an event or conference.",
      "It provides an opportunity to thank the participants, sponsors, organizers, and volunteers who contributed to the success of the event.",
      "Key achievements and highlights of the event can be acknowledged and celebrated. ",
      "Certificates, awards, or prizes can be presented to recognize outstanding contributions or achievements.",
    ],
   },
];

const testimonials = [
  {
    testimonial:
      "Quote1",
    name: "name1",
    designation: "CFO",
    company: "company1",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "quote2",
    name: "name2",
    designation: "COO",
    company: "company2",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "quote3",
    name: "name3",
    designation: "CTO",
    company: "company3",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Instagram",
    description:
      "Welcome to our symposium Instagram page! Here, we showcase the latest updates and highlights from our event, featuring keynote speakers, panel discussions, and interactive sessions that aim to foster collaboration and exchange of ideas.",
    tags: [
      {
        name: "tekzesta",
        color: "blue-text-gradient",
      },
      {
        name: "gcedpi",
        color: "green-text-gradient",
      },
      {
        name: "cse",
        color: "pink-text-gradient",
      },
    ],
    image: instasite,
    source_code_link: "https://www.instagram.com/tekzesta23/",
  },
  {
    name: "whatsApp",
    description:"Welcome to our symposium! This event is designed to bring together experts, scholars, and enthusiasts from different fields to exchange ideas and insights on various topics. Our symposium will feature keynote speakers, panel discussions, and interactive sessions that aim to foster meaningful conversations and promote collaborative learning.",
    tags: [
      {
        name: "tekzesta",
        color: "blue-text-gradient",
      },
      {
        name: "gcedpi",
        color: "green-text-gradient",
      },
      {
        name: "cse",
        color: "pink-text-gradient",
      },
    ],
    image: whatsapp,
    source_code_link: "https://chat.whatsapp.com/JZ25gwIssUq2E2roHTYD2R",
  },
  {
    name: "Telegram",
    description:
      "Welcome to our symposium Telegram group! This group is dedicated to facilitating discussions and networking among experts, scholars, and enthusiasts from different fields. Our symposium features keynote speakers, panel discussions, and interactive sessions that aim to promote collaboration and exchange of ideas.",
    tags: [
      {
        name: "tekzesta",
        color: "blue-text-gradient",
      },
      {
        name: "gcedpi",
        color: "green-text-gradient",
      },
      {
        name: "cse",
        color: "pink-text-gradient",
      },
    ],
    image: telegram,
    source_code_link: "https://t.me/tekzesta",
  },
];

export { services, technologies, experiences, testimonials, projects,experiences2 };
