import type { Component } from 'vue'
import { HomeIcon, InformationCircleIcon, EnvelopeIcon, CubeIcon } from '@heroicons/vue/24/solid'

import {
    MingcuteGithub2Fill,
    MingcuteLinkedinFill,
    MingcuteSocialXLine,
    MingcuteVueLine,
    MdiLanguagePython,
    MdiLanguageRust
} from '@/assets/icons'

interface TechStack {
    name: string
    icon: Component
}

export interface PageInfo {
    name: String
    linkTo: String
    icon: Component
}

export const pages: PageInfo[] = [
    {
        name: 'Home',
        linkTo: '/',
        icon: HomeIcon
    },
    {
        name: 'About',
        linkTo: '/about',
        icon: InformationCircleIcon
    },
    {
        name: 'Projects',
        linkTo: '/projects',
        icon: CubeIcon
    },
    {
        name: 'Contact',
        linkTo: '/contact',
        icon: EnvelopeIcon
    }
    // {
    //   name: 'Saved',
    //   linkTo: '#saved',
    //   icon: BookmarkIcon
    // }
]

export const socialLinks: PageInfo[] = [
    {
        name: 'X',
        linkTo: 'https://twitter.com/jontec8',
        icon: MingcuteSocialXLine
    },
    {
        name: 'LinkedIn',
        linkTo: 'https://www.linkedin.com/in/giovanni-d-andrea-b3b456111/',
        icon: MingcuteLinkedinFill
    },
    {
        name: 'Github',
        linkTo: 'https://github.com/gdjohn4s',
        icon: MingcuteGithub2Fill
    }
]

export const techStack: TechStack[] = [
    {
        name: 'Vue',
        icon: MingcuteVueLine
    },
    {
        name: 'Rust',
        icon: MdiLanguageRust
    },
    {
        name: 'Python',
        icon: MdiLanguagePython
    }
]
