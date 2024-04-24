export const projectsList = [
    {
        index: "01",
        title: 'Aboutme',
        slug: "aboutme",
        date: "2023",
        type: "web",
        description: 'One page project',
        techs: ["Html", "Css",  "Js"],
        roles: ["Frontend Dev", "UX/UI Designer"],
        links: [
            {
                name: "Github",
                url: "https://github.com/TLLRSK/Project-Alpha--ID3"
            },
            {
                name: "Live",
                url: "https://aboutme-pjgv.netlify.app/"
            }
        ]
    },
    {
        index: "02",
        title: 'Todoapp',
        slug: "todoapp",
        date: "2023",
        type: "web",
        description: 'Add, check & delete any task',
        techs: ["Html", "Sass", "Js"],
        roles: ["Frontend Dev", "UX/UI Designer"],
        links: [
            {
                name: "Github",
                url: "https://github.com/TLLRSK/TodoApp"
            },
            {
                name: "Live",
                url: "https://todoapp-pjgv.netlify.app/"
            }
        ]
    },
    {
        index: "03",
        title: 'Blanca Amorós',
        slug: "blancaamoros",
        date: "2024",
        type: "web",
        description: 'Headless React Web and e-Commerce on Wordpress',
        techs: ["Html", "Sass", "Js", "React"],
        roles: ["Frontend Dev", "UX/UI Designer"],
        links: [
            {
                name: "Github",
                url: "https://github.com/TLLRSK/QuoteApp"
            },
            {
                name: "Live",
                url: "https:/www.blancaamoros.com"
            }
        ]
    },
    {
        index: "04",
        title: "Robberta's",
        slug: "robbertas",
        date: "2023",
        type: "web",
        description: 'E-commerce setted up on Wordpress',
        techs: ["Html", "Sass", "Js", "Php"],
        roles: ["Frontend Dev", "UX/UI Designer"],
        links: [
            {
                name: "Github",
                url: "https://github.com/TLLRSK/Robbertas"
            },
            {
                name: "Live",
                url: "https://pedrojgil.com/robbertas/"
            }
        ]
    }
];

export const linksList = [
    {
        action: "Talk",
        url: "mailto:hi@pedrojgil.com",
        text: ["HI@", "PEDROJGIL", ".COM"]
    },
    {
        action: "Work",
        url: "https://www.linkedin.com/in/pedro-j-gil-15b92b54/",
        text: ["LINKEDIN"]
    },
    {
        action: "Code",
        url: "https://github.com/TLLRSK",
        text: ["GITHUB"]
    },
    {
        action: "Art",
        url: "https://estoybienestoybien.tumblr.com/",
        text: ["ARTWORKS"]
    }
]

export const helloDescription = [
    {
        char: "a",
        text : ["This is", "Pedro"]
    },
    {
        char: "b",
        text : ["Junior", "Frontend Dev"]
    },
    {
        char: "c",
        text : ["Visual Artist", "for +10 years"]
    },
    {
        char: "d",
        text : ["Based in", "Valencia, Esp"]
    }
]

export const helloLists = [
    {  
        char: "b",
        title: "fields",
        items: ["Web Development", "E-commerce", "UX/UI Design", "Illustration", "2D Animation"]
    },
    {
        char: "c",
        title: "tools",
        items: ["Html", "Sass", "Js", "React", "Typescript", "Php", "Figma", "Wordpress"]
    }
];

export  const navLinks = [
    {index: 0, path: '/hello', title: 'Hello'},
    {index: 1, path: '/work', title: 'Work'},
    {index: 2, path: '/contact', title: 'Contact'}
]

/* Components */
export {default as HeaderSection } from "../src/components/Headers/HeaderSection/HeaderSection";
export {default as HelloDescription} from "../src/components/Hello/HelloDescription";
export {default as HelloListBox} from "../src/components/Hello/HelloListBox";
export {default as ContactLinksList} from "../src/components/Contact/ContactLinksList";
export {default as ContactLink} from "../src/components/Contact/ContactLink";
export {default as BtnHelloPageToggler} from "../src/components/Buttons/BtnHelloPageToggler";
export {default as BtnWorkCloseProject} from "../src/components/Buttons/BtnWorkCloseProject";
export {default as SingleProject } from "../src/components/SingleProject/SingleProject";
export {default as ProjectTab } from "../src/components/ProjectTab/ProjectTab";
export {default as Navbar } from "../src/components/Navbar/Navbar";
export {default as ArrowDown} from "../src/components/Arrows/ArrowDown";

/* Views */
export {default as Home } from "../src/views/home/Home";
export {default as Hello } from "../src/views/hello/Hello";
export {default as Work } from "../src/views/work/Work";
export {default as Contact } from "../src/views/contact/Contact";