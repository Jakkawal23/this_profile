// data/fileMap.ts
export interface FileMeta {
  id: string;
  title: string;
  loadComponent?: () => Promise<any>; // ไฟล์จริงมี loadComponent
  // ถ้าเป็น folder จะไม่มี loadComponent
}

export interface FolderMeta extends FileMeta {
  files?: FileMeta[];    // ไฟล์ที่อยู่ใน folder (ไฟล์ปกติไม่มี)
  folders?: FolderMeta[]; // โฟลเดอร์ลูก (recursive)
}

export const fileStructure: FolderMeta[] = [
  {
    id: 'about',
    title: 'About Me',
    files: [
      {
        id: 'profile-summary',
        title: 'Profile Summary',
        loadComponent: () => import('@/app/files/abountMe/profileSummary'),
      },
      {
        id: 'education-overview',
        title: 'Education Overview',
        loadComponent: () => import('@/app/files/abountMe/educationOverview'),
      },
      {
        id: 'experience-overview',
        title: 'Experience Overview',
        loadComponent: () => import('@/app/files/abountMe/experienceOverview'),
      },
    ],
  },
  {
    id: 'education',
    title: 'Education',
    folders: [
      {
        id: 'high-school',
        title: 'High School',
        files: [
          {
            id: 'high-school-overview',
            title: 'Overview',
            loadComponent: () => import('@/app/files/education/highSchool/overview'),
          },
          {
            id: 'high-school-activities',
            title: 'Activities',
            loadComponent: () => import('@/app/files/education/highSchool/activities'),
          },
          {
            id: 'high-school-roles',
            title: 'Roles',
            loadComponent: () => import('@/app/files/education/highSchool/roles'),
          },
          {
            id: 'high-school-awards',
            title: 'Awards',
            loadComponent: () => import('@/app/files/education/highSchool/awards'),
          },
        ],
      },
      {
        id: 'university',
        title: 'University',
        files: [
          {
            id: 'university-overview',
            title: 'Overview',
            loadComponent: () => import('@/app/files/education/university/overview'),
          },
          {
            id: 'university-activities',
            title: 'Activities',
            loadComponent: () => import('@/app/files/education/university/activities'),
          },
          {
            id: 'university-roles',
            title: 'Roles',
            loadComponent: () => import('@/app/files/education/university/roles'),
          },
          {
            id: 'university-awards',
            title: 'Awards',
            loadComponent: () => import('@/app/files/education/university/awards'),
          },
        ],
      },
      {
        id: 'after-graduation',
        title: 'After Graduation',
        files: [
          {
            id: 'after-graduation-overview',
            title: 'Overview',
            loadComponent: () => import('@/app/files/education/afterGraduation/overview'),
          },
        ],
      },
    ],
  },
  {
    id: 'experience',
    title: 'Experience',
    folders: [
      {
        id: 'work-experience',
        title: 'Work Experience',
        files: [
          {
            id: 'work-experience-overview',
            title: 'Overview',
            loadComponent: () => import('@/app/files/experience/workExperience/overview'),
          },
        ],
      },
      {
        id: 'internship',
        title: 'Internships',
        files: [
          {
            id: 'internship-overview',
            title: 'Overview',
            loadComponent: () => import('@/app/files/experience/internships/overview'),
          },
        ],
      },
      {
        id: 'competitions',
        title: 'Competitions',
        files: [
          {
            id: 'competitions-overview',
            title: 'Overview',
            loadComponent: () => import('@/app/files/experience/competitions/overview'),
          },
        ],
      },
    ],
  },
  {
    id: 'projects',
    title: 'Projects',
    files: [
      {
        id: 'projects-overview',
        title: 'Overview',
        loadComponent: () => import('@/app/files/projects/overview'),
      },
    ],
  },
  {
    id: 'skills',
    title: 'Skills',
    files: [
      {
        id: 'technical-skills',
        title: 'Technical Skills',
        loadComponent: () => import('@/app/files/skills/technicalSkills'),
      },
      {
        id: 'soft-skills',
        title: 'Soft Skills',
        loadComponent: () => import('@/app/files/skills/softSkills'),
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    files: [
      {
        id: 'contact-info',
        title: 'Contact Information',
        loadComponent: () => import('@/app/files/contract/contractInformation'),
      },
      {
        id: 'social-links',
        title: 'Social Media Links',
        loadComponent: () => import('@/app/files/contract/socialMedia'),
      },
    ],
  },
];

