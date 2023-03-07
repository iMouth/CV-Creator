export interface ProjectIF {
    id: string,
    title: string,
    link: string,
    desc1: string,
    desc2: string,
    desc3: string,
    desc4: string,
    desc5: string,
}

export interface ExperienceIF {
    id: string,
    position: string,
    company: string,
    location: string,
    date: string,
    desc1: string,
    desc2: string,
    desc3: string,
    desc4: string,
    desc5: string,
}

export interface InfoIF {
    name: string,
    phone: string,
    email: string,
    website: string,
    linkedin: string,
    github: string,
    college: string,
    major: string,
    graduation: string,
    gpa: string,
    languages: string,
    tools: string,
    frameworks: string,
    project: Array<ProjectIF>,
    experience: Array<ExperienceIF>,
}