import dynamic from 'next/dynamic';
import { fileStructure } from '../data/fileMap';
import { getAllFiles, findFolderPathByFileId } from '../utils/fileHelpers';

interface EditorViewProps {
  fileId: string | null;
  onOpen: (id: string) => void;
}

export default function EditorView({ fileId, onOpen }: EditorViewProps) {
  if (!fileId) return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: 'var(--foreground)'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 600 }}>ยินดีต้อนรับสู่ แฟ้มงานของ Jakkawal Galaxy</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--view-short-path-color)' }}>
        สามารถเลือกดูตามหมวดหมู่ได้เลย หรือกด <b>Profile Summary</b> เพื่อดูภาพรวม
      </p>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <button
          onClick={() => onOpen('profile-summary')}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            background: 'var(--explorer-background)',
            border: '1px solid var(--tab-border-bottom)',
            borderRadius: 8,
            padding: '1.2rem 2.2rem',
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px 0 #0001',
            transition: 'background 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--tool-background-hover)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--explorer-background)'}
        >
          <span style={{ fontSize: '2.2rem', marginBottom: 8 }}>📁</span>
          Profile Summary
        </button>
        <button
          onClick={() => onOpen('education-overview')}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            background: 'var(--explorer-background)',
            border: '1px solid var(--tab-border-bottom)',
            borderRadius: 8,
            padding: '1.2rem 2.2rem',
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px 0 #0001',
            transition: 'background 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--tool-background-hover)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--explorer-background)'}
        >
          <span style={{ fontSize: '2.2rem', marginBottom: 8 }}>📁</span>
          Education Overview
        </button>
        <button
          onClick={() => onOpen('experience-overview')}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            background: 'var(--explorer-background)',
            border: '1px solid var(--tab-border-bottom)',
            borderRadius: 8,
            padding: '1.2rem 2.2rem',
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px 0 #0001',
            transition: 'background 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--tool-background-hover)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--explorer-background)'}
        >
          <span style={{ fontSize: '2.2rem', marginBottom: 8 }}>📁</span>
          Experience Overview
        </button>
      </div>
    </div>
  );

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
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Breadcrumb */}
      <nav style={{ fontSize: '0.9rem', color: 'var(--view-short-path-color)', padding: '0.75rem', flexShrink: 0 }}>
        {folderPath
          ? folderPath.map((folder, idx) => (
            <span key={folder.id}>
              {folder.title}
              {idx < folderPath.length - 1 ? ' > ' : ''}
            </span>
          ))
          : 'Unknown'}
        {' > '}
        <span>{file.title}</span>
      </nav>

      {/* Content Area */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        paddingTop: '0.125rem',
        paddingRight: '1rem',
        paddingBottom: '1rem',
        paddingLeft: '2rem',
        color: 'var(--view-content-color)'
      }}>
        <Component />
      </div>
    </div>
  );
}