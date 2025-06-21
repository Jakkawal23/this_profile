'use client';

import { useState } from 'react';
import FileExplorer from '../components/FileExplorer';
import EditorTabs from '../components/EditorTabs';
import EditorView from '../components/EditorView';
import TopToolbar from '../components/TopToolbar';

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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <TopToolbar />

      <div style={{ flex: 1, display: 'flex' }}>
        <div style={{ width: 220, flexShrink: 0 }}>
          <FileExplorer onOpen={openFile} />
        </div>


        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <EditorTabs
            tabs={openTabs}
            active={activeTab}
            onSwitch={setActiveTab}
            onClose={closeFile}
          />
          <EditorView fileId={activeTab} />
        </div>
      </div>
    </div>
  );
}
