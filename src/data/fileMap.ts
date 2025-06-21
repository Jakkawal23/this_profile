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
        loadComponent: () => import('@/app/files/about'),
      },
      {
        id: 'education-overview',
        title: 'Education Overview',
        loadComponent: () => import('@/app/files/about'),
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
            id: 'science-projects',
            title: 'Science Project Competitions',
            loadComponent: () => import('@/app/files/about'),
          },
        ],
      },
      {
        id: 'university',
        title: 'University',
        files: [
          {
            id: 'roles-and-responsibilities',
            title: 'Roles & Responsibilities',
            loadComponent: () => import('@/app/files/about'),
          },
          {
            id: 'university-activities',
            title: 'Competitions & Activities',
            loadComponent: () => import('@/app/files/about'),
          },
        ],
      },
      {
        id: 'after-graduation',
        title: 'After Graduation',
        files: [
          {
            id: 'life-after-grad',
            title: 'Life After Graduation',
            loadComponent: () => import('@/app/files/about'),
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
        id: 'work',
        title: 'Work Experience',
        files: [
          {
            id: 'fulltime-talad-hub',
            title: 'TaladHub (Full-time)',
            loadComponent: () => import('@/app/files/projects'),
          },
          {
            id: 'freelance-projects',
            title: 'Freelance Projects',
            loadComponent: () => import('@/app/files/projects'),
          },
        ],
      },
      {
        id: 'internship',
        title: 'Internships',
        files: [
          {
            id: 'intern-company-1',
            title: 'Internship at [Company Name]',
            loadComponent: () => import('@/app/files/projects'),
          },
        ],
      },
      {
        id: 'competitions',
        title: 'Competitions',
        files: [
          {
            id: 'code-contest',
            title: 'Coding Competitions',
            loadComponent: () => import('@/app/files/projects'),
          },
          {
            id: 'innovation-challenge',
            title: 'Innovation/Startup Challenges',
            loadComponent: () => import('@/app/files/projects'),
          },
        ],
      },
      {
        id: 'volunteer',
        title: 'Volunteer / Other Activities',
        files: [
          {
            id: 'university-volunteer',
            title: 'University Volunteer Projects',
            loadComponent: () => import('@/app/files/projects'),
          },
          {
            id: 'community-events',
            title: 'Community / Social Impact Events',
            loadComponent: () => import('@/app/files/projects'),
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
        id: 'main-projects',
        title: 'Main Projects',
        loadComponent: () => import('@/app/files/projects'),
      },
      {
        id: 'personal-projects',
        title: 'Personal / Side Projects',
        loadComponent: () => import('@/app/files/projects'),
      },
    ],
  },
  {
    id: 'skills',
    title: 'Skills',
    files: [
      {
        id: 'tech-skills',
        title: 'Technical Skills',
        loadComponent: () => import('@/app/files/projects'),
      },
      {
        id: 'soft-skills',
        title: 'Soft Skills',
        loadComponent: () => import('@/app/files/projects'),
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
        loadComponent: () => import('@/app/files/projects'),
      },
      {
        id: 'social-links',
        title: 'Social Media Links',
        loadComponent: () => import('@/app/files/projects'),
      },
    ],
  },
];

