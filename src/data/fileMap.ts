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
    id: 'profile',
    title: 'Profile',
    folders: [
      {
        id: 'about-section',
        title: 'About Section',
        files: [
          {
            id: 'about',
            title: 'About Me',
            loadComponent: () => import('@/app/files/about'),
          },
        ],
      },
    ],
    files: [
      {
        id: 'contact',
        title: 'Contact Info',
        loadComponent: () => import('@/app/files/about'),
      },
    ],
  },
  {
    id: 'projects',
    title: 'Projects',
    files: [
      {
        id: 'projects-overview',
        title: 'Projects Overview',
        loadComponent: () => import('@/app/files/projects'),
      },
    ],
  },
];
