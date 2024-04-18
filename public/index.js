export const PROJECTS = [
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

export const LINKS = [
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

/* Components */
export {default as HeaderSection } from "../src/components/Headers/HeaderSection/HeaderSection";
export {default as SingleProject } from "../src/components/SingleProject/SingleProject";
export {default as SingleProjectLink } from "../src/components/SingleProjectLink/SingleProjectLink";
export {default as Navbar } from "../src/components/Navbar/Navbar";