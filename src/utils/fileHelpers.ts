import { FolderMeta, FileMeta } from '../data/fileMap';

// ดึงไฟล์ทุกไฟล์จากโครงสร้าง recursive
export function getAllFiles(folders: FolderMeta[]): FileMeta[] {
  let allFiles: FileMeta[] = [];

  for (const folder of folders) {
    if (folder.files) allFiles = allFiles.concat(folder.files);
    if (folder.folders) allFiles = allFiles.concat(getAllFiles(folder.folders));
  }

  return allFiles;
}

// หา folder ที่ไฟล์นั้นอยู่แบบ recursive เพื่อ breadcrumb
// คืนเป็น array ของ folder ลำดับชั้น (จากบนลงล่าง) ที่ไฟล์นี้อยู่
export function findFolderPathByFileId(
  folders: FolderMeta[],
  fileId: string,
  path: FolderMeta[] = []
): FolderMeta[] | null {
  for (const folder of folders) {
    // ถ้าเจอไฟล์ใน folder นี้
    if (folder.files?.some(f => f.id === fileId)) {
      return [...path, folder]; // รวม path เดิม + folder นี้
    }

    // ถ้าโฟลเดอร์ลูกก็ recursive หา
    if (folder.folders) {
      const foundPath = findFolderPathByFileId(folder.folders, fileId, [...path, folder]);
      if (foundPath) return foundPath;
    }
  }
  return null;
}

