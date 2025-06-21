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

  // return (
  //   <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
  //     <TopToolbar />

  //     {/* Tabs fixed under toolbar */}
  //     <EditorTabs
  //       tabs={openTabs}
  //       active={activeTab}
  //       onSwitch={setActiveTab}
  //       onClose={closeFile}
  //     />

  //     {/* Main area: sidebar + content */}
  //     <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
  //       {/* Sidebar (scroll only inside FileExplorer) */}
  //       <div style={{ width: 220, flexShrink: 0, height: '100%' }}>
  //         <FileExplorer onOpen={openFile} />
  //       </div>

  //       {/* Main content area scrolls inside only EditorView */}
  //       <div style={{ flex: 1, height: '100%', overflow: 'hidden' }}>
  //         <FileExplorer fileId={activeTab} />
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <TopToolbar />

      {/* Main area: sidebar + content */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Sidebar (scroll only inside FileExplorer) */}
        <div style={{ width: 220, flexShrink: 0, height: '100%' }}>
          <FileExplorer onOpen={openFile} />
        </div>

        {/* Right pane: EditorTabs + EditorView */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
          {/* Tabs: now only above EditorView */}
          <EditorTabs
            tabs={openTabs}
            active={activeTab}
            onSwitch={setActiveTab}
            onClose={closeFile}
          />

          {/* Content area scrolls only here */}
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <EditorView fileId={activeTab} />
          </div>
        </div>
      </div>
    </div>
  );

}
