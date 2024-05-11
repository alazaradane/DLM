
import { atomic, book1, book2,book3, code, dune, educated, hunger, martian, neuro, ready, school, section, snow, student, user1, user2,user3,user4,user5, watchmen } from "../assets/images";
import { CloudArrowUpIcon,LockClosedIcon,ArrowPathIcon, FingerPrintIcon } from "@heroicons/react/24/outline";



// Dashboard data report
export const dashboardData = [
    { imgURL:student, value: '6k+', label: 'Users' },
    { imgURL:school, value: '30K+', label: 'Books' },
    { imgURL: section, value: '117', label: 'Bills' },
];


export const successMessage = [
    {main: 'Success', detail: 'Login successfully'}  
]


export const errorMessage = [
    {main: 'Error', detail: 'Something went wrong'}   
]

//Navigation
const isLogIn = true;



export const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '#feature' },
    {name: 'Books', href: !isLogIn ? '/books' : '/login'},
    { name: 'Join Us', href: '#news' },
  ]

  

//feature 
export const features = [
    {
      name: 'Personalized Recommendations',
      description:
        'Provide users with personalized book recommendations based on their reading history, preferences, and genres they enjoy.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Reading Lists',
      description:
        'Enable users to create and manage reading lists where they can save books they want to read or have already read. ',
      icon: LockClosedIcon,
    },
    {
      name: 'Advanced Search',
      description:
        'Implement an advanced search feature that allows users to easily find books by various criteria such as title, author, genre, publication date, and more.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Advanced security',
      description:
        'We use industry-standard security measures to safeguard your information.',
      icon: FingerPrintIcon,
    },
  ]

//Pricing
export const includedFeatures = [
    'Private forum access',
    'Member resources',
    'Entry to annual conference',
    'Official member t-shirt',
  ]

export const SITEMAP = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Our Team", "Projects"],
  },
  {
    title: "Help Center",
    links: ["Discord", "Twitter", "GitHub", "Contact Us"],
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Free Products", "Program"],
  },
  {
    title: "Products",
    links: ["Templates", "UI Kits", "Icons", "Mockups"],
  },
];


export const initalDataStud = [
    {id: 1, image:user1, name:'alazar', password:'LIA-163264' ,email:'alazar@gmail.com',status:'Active', join:'2024-25-05'},
    {id: 2, image:user2, name:'nebyu', password:'LIA-53251' ,email:'nebyu@gmail.com',status:'not paid', join:"2022-15-09"}, 
    {id: 3, image:user3, name:'mikial', password:'LIA-436392',email:'miki@gmail.com',status:'Active', join:"2024-25-05"},
    {id: 4, image:user4,name:'ahmed', password:'LIA-462746',email:'ahmed@gmail.com',status:'Active', join:"2024-25-05"},
    {id: 5, image:user5,name:'human', password:'LIA-462746',email:'human@gmail.com',status:'not paid', join:"2024-25-05"},
    {id: 6, image:user2,name:'unkown', password:'LIA-423746',email:'unkown@gmail.com',status:'Active', join:"2024-25-05"},
    {id: 7, image:user1,name:'name', password:'LIA-465746',email:'name@gmail.com',status:'Active', join:"2024-25-05"},
    {id: 8, image:user3,name:'dagi', password:'LIA-462396',email:'dagi@gmail.com',status:'not paid', join:"2024-25-05"},
    {id: 9, image:user4,name:'bini', password:'LIA-292746',email:'bini@gmail.com',status:'not paid', join:"2024-25-05"},
    {id: 10, image:user3,name:'ephriem', password:'LIA-469646',email:'ephriem@gmail.com',status:'Active', join:"2024-25-05"},
    {id: 11, image:user5,name:'nati', password:'LIA-462486',email:'nati@gmail.com',status:'not paid', join:"2024-25-05"},
    {id: 12, image:user5,name:'yeabsra', password:'LIA-342591',email:'yeabsra@gmail.com',status:'not paid', join:"2024-25-05"},
    {id: 13, image:user3,name:'brook', password:'LIA-469346',email:'brook@gmail.com',status:'Active', join:"2024-25-05"},
    {id: 14, image:user2,name:'kidus', password:'LIA-4696346',email:'kidus@gmail.com',status:'Active', join:"2024-25-05"},
    {id: 15, image:user1,name:'abel', password:'LIA-723057',email:'abel@gmail.com',status:'not paid', join:"2024-25-05"},
    {id: 16, image:user3,name:'yoda', password:'LIA-924042',email:'yoda@gmail.com',status:'not paid', join:"2024-25-05"},
]

export const initalBook = [
    {id:1,image:martian, name:'The Martian', category:'fiction', author:"Andy Weir", price:20,description:'A gripping tale of survival on Mars after an astronaut is left behind by his crew.', file:'file'},
    {id:2, image:atomic,name:'Atomic Habits', category:'self-help',author:"Human Being", price:25, description:'James Clear', file:'file'},
    {id:3,image:educated,name:'Educated', category:'General',author:"Tara Westover",price:19, description:'Tara Westovers remarkable journey from growing up in a strict and isolated household in rural Idaho to pursuing higher education against all odds. ', file:'file'},
    {id:4,image:watchmen,name:'Watchmen', category:'commic',author:"Alan Moore and Dave Gibbons",price:25, description:'graphic novel deconstructs the superhero genre while exploring complex themes such as power, morality', file:'file'},
    {id:5,image:dune,name:'Dune', category:'fiction',author:" Frank Herbert",price:15, description:'A classic science fiction novel set in a distant future where noble houses vie for control over a desert planet.', file:'file'},
    {id:6,image:code,name:'The Code Book', category:'STEM',author:"Simon Singh", price:27, description:'explores the history and significance of codes and ciphers throughout human civilization', file:'file'},
    {id:7,image:neuro,name:'Neuromancer', category:'fiction',author:"William Gibson",price:30, description:'A groundbreaking cyberpunk novel that explores themes of artificial intelligence and virtual reality.', file:'file'},
    {id:8,image:snow,name:'Snow Crash', category:'fiction',author:"Neal Stephenson",price:33, description:'A fast-paced adventure set in a dystopian future where virtual reality and the real world collide.', file:'file'},
    {id:9,image:hunger,name:'The Hunger Games', category:'fiction',author:"Suzanne Collins",price:20, description:'A dystopian novel set in a future where children are forced to fight to the death in a televised spectacle.', file:'file'},
    {id:10,image:ready,name:'Ready Player One', category:'fiction',author:"Ernest Cline", price:'Free',description:'A thrilling adventure set in a virtual reality world where the protagonist embarks on a quest to find hidden treasure.', file:'file'},
    {id:11,image:book3,name:'The Hitchhikers Guide to the Galaxy', category:'fiction',author:"Douglas Adams",price:10, description:' A comedic science fiction series following the misadventures of an ordinary human and his alien friend as they travel through space.', file:'file'},
    {id:12,image:book2,name:'The Left Hand of Darkness', category:'fiction',author:"Ursula K. Le Guin", price:45,description:'A thought-provoking novel set on a planet where the inhabitants can change gender at will.', file:'file'},
    {id:13,image:book1,name:'Hyperion', category:'fiction',author:"Dan Simmons ", price:28, description:'The first book in a science fiction series that weaves together multiple storylines set in a universe on the brink of war.', file:'file'},
    {id:14,image:book3,name:'The Three-Body Problem', category:'fiction',author:"Liu Cixin", price:33,description:'A mind-bending science fiction novel that explores humanitys first contact with an alien civilization.', file:'file'}
]

export const category = [
  {
    id: 0,
    name: 'Category',
  },
  {
    id: 1,
    name: 'fiction',
  },
  {
    id: 2,
    name: 'STEM',
  },
  {
    id: 3,
    name: 'commic',
  },
  {
    id: 4,
    name: 'General',
  },
  {
    id: 5,
    name: 'self-help',
  }
]
