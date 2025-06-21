'use client';

import { useRef } from 'react';
import { fileStructure } from '../data/fileMap';
import { getAllFiles } from '../utils/fileHelpers';

interface Props {
  tabs: string[];
  active: string | null;
  onSwitch: (id: string) => void;
  onClose: (id: string) => void;
}

export default function EditorTabs({ tabs, active, onSwitch, onClose }: Props) {
  const allFiles = getAllFiles(fileStructure);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ borderBottom: '1px solid #ccc', overflow: 'hidden' }}>
      <div
        ref={scrollRef}
        style={{
          overflowX: 'auto',
          overflowY: 'hidden',
          whiteSpace: 'nowrap',
          display: 'flex',
        }}
      >
        <div style={{ display: 'flex', minWidth: 'max-content' }}>
          {tabs.map((id) => {
            const file = allFiles.find((f) => f.id === id);
            if (!file) return null;

            return (
              <div
                key={id}
                style={{
                  padding: '0.5rem 1rem',
                  background: id === active ? '#fff' : '#e0e0e0',
                  borderTop: '2px solid #007acc',
                  borderRight: '1px solid #ccc',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  flexShrink: 0,
                }}
                onClick={() => onSwitch(id)}
              >
                {file.title}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose(id);
                  }}
                  style={{ marginLeft: 8, cursor: 'pointer' }}
                >
                  ✕
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
