
import { book1, book2,book3, school, section, student, user1, user2,user3,user4,user5 } from "../assets/images";
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
    {name: 'Books', href: isLogIn ? '/books' : '/login'},
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
    {id: 12, image:user5,name:'yeabsra', password:'LIA-342591',email:'yeabsra@gmail.com',status:'not paid2', join:"2024-25-05"},
    {id: 13, image:user3,name:'brook', password:'LIA-469346',email:'brook@gmail.com',status:'active', join:"2024-25-05"},
    {id: 14, image:user2,name:'kidus', password:'LIA-4696346',email:'kidus@gmail.com',status:'active', join:"2024-25-05"},
    {id: 15, image:user1,name:'abel', password:'LIA-723057',email:'abel@gmail.com',status:'not paid', join:"2024-25-05"},
    {id: 16, image:user3,name:'yoda', password:'LIA-924042',email:'yoda@gmail.com',status:'not paid', join:"2024-25-05"},
]

export const initalBook = [
    {id:1,image:book1, name:'Enceladus', category:'fiction', author:"Human Being",description:'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.', file:'file'},
    {id:2, image:book1,name:'book1', category:'self-help',author:"Human Being", description:'Best description book by abcd', file:'file'},
    {id:3,image:book2,name:'run', category:'General',author:"Human Being", description:'Best description book by abcd', file:'file'},
    {id:4,image:book1,name:'road', category:'commic',author:"Human Being", description:'Best description book by abcd', file:'file'},
    {id:5,image:book3,name:'diary', category:'fiction',author:"Human Being", description:'Best description book by abcd', file:'file'},
    {id:6,image:book2,name:'physics', category:'STEM',author:"Human Being", description:'Best description book by abcd', file:'file'},
    {id:7,image:book1,name:'the bird', category:'fiction',author:"Human Being", description:'Best description book by abcd', file:'file'},
    {id:8,image:book3,name:'life', category:'fiction',author:"Human Being", description:'Best description book by abcd', file:'file'},
    {id:9,image:book2,name:'G-5', category:'fiction',author:"Human Being", description:'Best description book by abcd', file:'file'},
    {id:10,image:book1,name:'under', category:'fiction',author:"Human Being", description:'Best description book by abcd', file:'file'},
    {id:11,image:book3,name:'Fire', category:'fiction',author:"Human Being", description:'Best description book by abcd', file:'file'},
    {id:12,image:book2,name:'Cell', category:'fiction',author:"Human Being", description:'Best description book by abcd', file:'file'},
    {id:13,image:book1,name:'Organic', category:'fiction',author:"Human Being", description:'Best description book by abcd', file:'file'},
    {id:14,image:book3,name:'water', category:'fiction',author:"Human Being", description:'Best description book by abcd', file:'file'}
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
