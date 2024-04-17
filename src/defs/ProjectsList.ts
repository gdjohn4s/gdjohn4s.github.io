export interface Project {
    name: String
    description: String
    linkTo: String
    imageSrc: String
}

export const projectList: Project[] = [
    {
        name: 'Codeishot',
        description: 'Share your code with your friends!',
        linkTo: 'https://codeishot.com',
        imageSrc: '/img/project_codeishot.png'
    },
    {
        name: 'Apivault',
        description: 'The best vault for public APIs!',
        linkTo: 'https://apivault.dev',
        imageSrc: '/img/project_apivault.png'
    },
    {
        name: 'Save the Planet',
        description: 'The Time remaining before our extintion.',
        linkTo: 'https://savetheplanet.exifly.it/',
        imageSrc: '/img/project_savetheplanet.png'
    },
    {
        name: 'Others',
        description: 'Other projects and so on..',
        linkTo: 'https://github.com/gdjohn4s',
        imageSrc: '/img/project_mygithub.png'
    }
]
