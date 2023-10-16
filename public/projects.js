import Aboutme from "../src/views/projects/aboutme/Aboutme";
import Todoapp from "../src/views/projects/todoapp/Todoapp";
import Robbertas from "../src/views/projects/robbertas/Robbertas";
import Quoteapp from "../src/views/projects/quoteapp/Quoteapp";

export const PROJECTS = [
    {
        index: 0,
        title: 'Aboutme',
        path: '/aboutme',
        mainColor: 'green',
        component: Aboutme,
        tag: 'web',
        roles: 'UX/UI DESIGNER - FRONTEND DEV',
        techs: 'CSS - JS',
        link:  'https://aboutprrrrrt.netlify.app/'
    },
    {
        index: 1,
        title: 'Todoapp',
        path: '/todoapp',
        mainColor: 'blue',
        component: Todoapp,
        tag: 'app',
        roles: 'UX/UI DESIGNER - FRONTEND DEV',
        techs: 'SASS - JS',
        link:  'https://prrrrt-todoapp.netlify.app/'
    },
    {
        index: 2,
        title: 'Quoteapp',
        path: '/quoteapp',
        mainColor: 'black--100',
        component: Quoteapp,
        tag: 'app',
        roles: 'UX/UI DESIGNER - FRONTEND DEV',
        techs: 'SASS - JS',
        link:  'https://prrrrt-todoapp.netlify.app/'
    },
    {
        index: 3,
        title: 'Robberta´s',
        path: '/robbertas',
        mainColor: 'red',
        component: Robbertas,
        tag: 'web',
        roles: 'UX/UI DESIGNER - FRONTEND DEV',
        techs: 'SASS - JS - PHP - WORDPRESS',
        link:  'https://perctrax.bandcamp.com/'
    },
];