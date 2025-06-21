'use client';

import { useEffect, useRef } from 'react';
import { fileStructure } from '../data/fileMap';
import { getAllFiles } from '../utils/fileHelpers';

interface Props {
  tabs: string[];
  active: string | null;
  onSwitch: (id: string) => void;
  onClose: (id: string) => void;
  onCloseAll?: () => void; // เพิ่ม prop นี้แบบ optional
}

export default function EditorTabs({ tabs, active, onSwitch, onClose, onCloseAll }: Props) {
  const allFiles = getAllFiles(fileStructure);
  const scrollRef = useRef<HTMLDivElement>(null);

  // เก็บ ref สำหรับแต่ละ tab
  const tabRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // scroll ไปหาแท็บที่ active ทุกครั้งที่ active เปลี่ยน
  useEffect(() => {
    if (active && tabRefs.current[active]) {
      tabRefs.current[active]!.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [active]);

  return (
    <div style={{ borderBottom: '1px solid var(--tab-border-bottom)', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      <div
        ref={scrollRef}
        style={{
          overflowX: 'auto',
          overflowY: 'hidden',
          whiteSpace: 'nowrap',
          display: 'flex',
          flex: 1,
        }}
      >
        <div style={{ display: 'flex', minWidth: 'max-content' }}>
          {tabs.map((id) => {
            const file = allFiles.find((f) => f.id === id);
            if (!file) return null;

            return (
              <div
                key={id}
                ref={(el) => {
                  tabRefs.current[id] = el;
                }}
                style={{
                  padding: '0.5rem 1rem',
                  color: 'var(--tab-font)',
                  background: id === active ? 'var(--tab-background-active)' : 'var(--tab-background)',
                  borderTop: id === active ? '2px solid var(--tab-border-top)' : '2px solid transparent',
                  borderRight: '1px solid var(--tab-border-right)',
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
      {/* ปุ่ม Clear All */}
      {tabs.length > 0 && (
        <button
          onClick={() => {
            if (onCloseAll) {
              onCloseAll();
            } else {
              tabs.slice().reverse().forEach(onClose);
            }
          }}
          style={{
            marginLeft: 8,
            background: 'none',
            border: 'none',
            color: 'var(--tab-font)',
            cursor: 'pointer',
            fontSize: '0.95em',
            padding: '0.25rem 0.75rem',
            borderRadius: 4,
            transition: 'background 0.2s',
          }}
          title="Close all tabs"
        >
          Clear
        </button>
      )}
    </div>
  );
}
