'use client';

import { useState } from 'react';
import EditorTabs from '@/components/EditorTabs';
import EditorView from '@/components/EditorView';
import FileExplorer from '@/components/FileExplorer';
import TopToolbar from '@/components/TopToolbar';

export default function HomePage() {
  const [openTabs, setOpenTabs] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const openFile = (id: string) => {
    if (!openTabs.includes(id)) {
      setOpenTabs((prev) => [...prev, id]);
    }
    setActiveTab(id);
  };

  const closeFile = (id: string) => {
    const remaining = openTabs.filter((f) => f !== id);
    setOpenTabs(remaining);
    if (activeTab === id) {
      setActiveTab(remaining.length > 0 ? remaining[remaining.length - 1] : null);
    }
  };

  const closeAllFiles = () => {
    setOpenTabs([]);
    setActiveTab(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <TopToolbar />

      {/* Main area: sidebar + content */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Sidebar (scroll only inside FileExplorer) */}
        <div style={{ width: 300, flexShrink: 0, height: '100%' }}>
          <FileExplorer onOpen={openFile} activeFileId={activeTab} />
        </div>

        {/* Right pane: EditorTabs + EditorView */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', background: 'var(--background)' }}>
          {/* Tabs: now only above EditorView */}
          <EditorTabs
            tabs={openTabs}
            active={activeTab}
            onSwitch={setActiveTab}
            onClose={closeFile}
            onCloseAll={closeAllFiles}
          />

          {/* Content area scrolls only here */}
          <div style={{ flex: 1, overflow: 'hidden', color: '#fff' }}>
            <EditorView fileId={activeTab} onOpen={openFile} />
          </div>
        </div>
      </div>
    </div>
  );

}
