'use client';

import { useState } from 'react';
import { FolderMeta } from '../data/fileMap'; // import type FolderMeta
import { fileStructure } from '../data/fileMap'; // import data

interface Props {
  onOpen: (id: string) => void;
}

export default function FileExplorer({ onOpen }: Props) {
  const [expanded, setExpanded] = useState<string[]>([]);
  const [activeFileId, setActiveFileId] = useState<string | null>(null);

  const toggleFolder = (folderId: string) => {
    setExpanded((prev) =>
      prev.includes(folderId)
        ? prev.filter((id) => id !== folderId)
        : [...prev, folderId]
    );
  };

  const handleFileClick = (fileId: string) => {
    setActiveFileId(fileId);
    onOpen(fileId);
  };

  const renderFolder = (folder: FolderMeta) => {
    const isExpanded = expanded.includes(folder.id);

    return (
      <li key={folder.id}>
        <div
          onClick={() => toggleFolder(folder.id)}
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            marginBottom: '0.25rem',
            userSelect: 'none',
          }}
        >
          {isExpanded ? 'v 📂' : '> 📁'} {folder.title}
        </div>

        {isExpanded && (
          <ul style={{ listStyle: 'none', paddingLeft: '1rem' }}>
            {/* แสดงไฟล์ในโฟลเดอร์นี้ */}
            {folder.files?.map((file) => (
              <li key={file.id}>
                <button
                  onClick={() => handleFileClick(file.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '4px 0',
                    cursor: 'pointer',
                    color: activeFileId === file.id ? '#fff' : '#007acc',
                    backgroundColor:
                      activeFileId === file.id ? '#007acc' : 'transparent',
                    borderRadius: '4px',
                    width: '100%',
                    textAlign: 'left',
                  }}
                >
                  📄 {file.title}
                </button>
              </li>
            ))}

            {/* แสดงโฟลเดอร์ลูก (recursive) */}
            {folder.folders?.map((childFolder) => renderFolder(childFolder))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <aside
      style={{
        // width: 200,
        background: '#f0f0f0',
        padding: '1rem',
        overflowY: 'auto',
      }}
    >
      <h4 style={{ marginBottom: '1rem' }}>/this_profile</h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {fileStructure.map((folder) => renderFolder(folder))}
      </ul>
    </aside>
  );
}
