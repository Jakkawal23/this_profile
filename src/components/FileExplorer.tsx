'use client';

import { useEffect, useState } from 'react';
import { FolderMeta } from '../data/fileMap';
import { fileStructure } from '../data/fileMap';

interface Props {
  onOpen: (id: string) => void;
  activeFileId?: string | null;
}

export default function FileExplorer({ onOpen, activeFileId }: Props) {
  const [expanded, setExpanded] = useState<string[]>([]);
  const [hoveredFileId, setHoveredFileId] = useState<string | null>(null);

  const toggleFolder = (folderId: string) => {
    setExpanded((prev) =>
      prev.includes(folderId)
        ? prev.filter((id) => id !== folderId)
        : [...prev, folderId]
    );
  };

  useEffect(() => {
    if (activeFileId) {
      expandFoldersToFile(activeFileId);
    }
  }, [activeFileId]);

  const expandFoldersToFile = (fileId: string) => {
    const findPath = (folders: FolderMeta[], targetId: string, path: string[] = []): string[] | null => {
      for (const folder of folders) {
        if (folder.files?.some(f => f.id === targetId)) {
          return [...path, folder.id];
        }
        if (folder.folders) {
          const result = findPath(folder.folders, targetId, [...path, folder.id]);
          if (result) return result;
        }
      }
      return null;
    };
    const path = findPath(fileStructure, fileId);
    if (path) setExpanded(prev => Array.from(new Set([...prev, ...path])));
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
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            color: 'var(--explorer-folder-font)'
          }}
          title={folder.title}
        >
          {isExpanded ? 'v 📂' : '> 📁'} {folder.title}
        </div>

        {isExpanded && (
          <ul style={{ listStyle: 'none', paddingLeft: '1rem' }}>
            {folder.files?.map((file) => {
              const isActive = activeFileId === file.id;
              const isHovered = hoveredFileId === file.id;
              return (
                <li key={file.id}>
                  <button
                    onMouseEnter={() => {
                      expandFoldersToFile(file.id);
                      setHoveredFileId(file.id);
                    }}
                    onClick={() => {
                      expandFoldersToFile(file.id);
                      onOpen(file.id);
                    }}
                    onMouseLeave={() => setHoveredFileId(null)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: '4px 0',
                      cursor: 'pointer',
                      color: isActive || isHovered ? 'var(--exploere-file-font-active)' : 'var(--exploere-file-font)',
                      backgroundColor: isActive
                        ? 'var(--exploere-file-font-active-bg)'
                        : isHovered
                          ? 'var(--exploere-file-font-hover-bg, #e0e0e0)'
                          : 'transparent',
                      borderRadius: '4px',
                      width: '100%',
                      textAlign: 'left',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      transition: 'background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s',
                      boxShadow: isHovered ? '0 2px 8px 0 #007acc33' : undefined,
                    }}
                    title={file.title}
                  >
                    📄 {file.title}
                  </button>
                </li>
              );
            })}
            {folder.folders?.map((childFolder) => renderFolder(childFolder))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <aside
      style={{
        background: "var(--explorer-background)",
        padding: '1rem',
        height: '100%',
        overflowY: 'auto', // scroll only inside sidebar
      }}
    >
      <h4 style={{ marginBottom: '1rem', color: 'var(--explorer-title)' }}>JAKKAWAL PHOOLUEMSAI</h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {fileStructure.map((folder) => renderFolder(folder))}
      </ul>
    </aside>
  );
}