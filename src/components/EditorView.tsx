'use client';

import dynamic from 'next/dynamic';
import { fileStructure } from '../data/fileMap';
import { getAllFiles, findFolderPathByFileId } from '../utils/fileHelpers';

export default function EditorView({ fileId }: { fileId: string | null }) {
  if (!fileId) return <p style={{ padding: '1rem' }}>No file selected</p>;

  const allFiles = getAllFiles(fileStructure);
  const file = allFiles.find((f) => f.id === fileId);
  if (!file) return <p>File not found</p>;

  const folderPath = findFolderPathByFileId(fileStructure, fileId);

  if (!file.loadComponent) return <p>No component to load for this file.</p>;

  const Component = dynamic(file.loadComponent, {
    loading: () => <p>Loading...</p>,
    ssr: false,
  });

  return (
    
    <div style={{ flex: 1, padding: '0.75rem'}}>
      {/* Breadcrumb */}
      <nav style={{ fontSize: '0.9rem', color: '#555' }}>
        {folderPath
          ? folderPath.map((folder, idx) => (
              <span key={folder.id}>
                {folder.title}
                {idx < folderPath.length - 1 ? ' > ' : ''}
              </span>
            ))
          : 'Unknown'}{' '}
        {' > '}
        <span>{file.title}</span>
      </nav>
      <div style={{ flex: 1, padding: '0.75rem', overflowY: 'auto' }}>
        {/* Content */}
        <Component />
      </div>
    </div>
  );
}
