
import { school, section, student, user1, user2 } from "../assets/images";

// Dashboard data report
export const dashboardData = [
    { imgURL:student, value: '500', label: 'Students' },
    { imgURL:school, value: '7', label: 'Class' },
    { imgURL: section, value: '10', label: 'Sections' },
];


export const successMessage = [
    {main: 'Success', detail: 'Login successfully'}  
]


export const errorMessage = [
    {main: 'Error', detail: 'Something went wrong'}   
]

export const initalDataStud = [
    {id: 1, image:user1, name:'alazar', password:'LIA-163264' ,email:'alazar@gmail.com',status:'Active', join:'2024-25-05'},
    {id: 2, image:user2, name:'nebyu', password:'LIA-53251' ,email:'nebyu@gmail.com',status:'not paid', join:"2022-15-09"}, 
    {id: 3, name:'mikial', password:'LIA-436392',email:'miki@gmail.com',status:'Active', join:"2024-25-05"},
    {id: 4, name:'ahmed', password:'LIA-462746',email:'ahmed@gmail.com',status:'Active', join:"2024-25-05"},
    {id: 5, name:'human', password:'LIA-462746',email:'human@gmail.com',status:'not paid', join:"2024-25-05"},
    {id: 6, name:'unkown', password:'LIA-423746',email:'unkown@gmail.com',status:'Active', join:"2024-25-05"},
    {id: 7, name:'name', password:'LIA-465746',email:'name@gmail.com',status:'Active', join:"2024-25-05"},
    {id: 8, name:'dagi', password:'LIA-462396',email:'dagi@gmail.com',status:'not paid', join:"2024-25-05"},
    {id: 9, name:'bini', password:'LIA-292746',email:'bini@gmail.com',status:'not paid', join:"2024-25-05"},
    {id: 10, name:'ephriem', password:'LIA-469646',email:'ephriem@gmail.com',status:'Active', join:"2024-25-05"},
    {id: 11, name:'nati', password:'LIA-462486',email:'nati@gmail.com',status:'not paid', join:"2024-25-05"},
    {id: 12, name:'yeabsra', password:'LIA-342591',email:'yeabsra@gmail.com',status:'not paid2', join:"2024-25-05"},
    {id: 13, name:'brook', password:'LIA-469346',email:'brook@gmail.com',status:'active', join:"2024-25-05"},
    {id: 14, name:'kidus', password:'LIA-4696346',email:'kidus@gmail.com',status:'active', join:"2024-25-05"},
    {id: 15, name:'abel', password:'LIA-723057',email:'abel@gmail.com',status:'not paid', join:"2024-25-05"},
    {id: 16, name:'yoda', password:'LIA-924042',email:'yoda@gmail.com',status:'not paid', join:"2024-25-05"},
]

export const initalBook = [
    {id:1,name:'abcd', category:'fiction', description:'Best description book by abcd', file:'file'}
]
