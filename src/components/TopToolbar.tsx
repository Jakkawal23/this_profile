import React, { useState } from 'react';

const lightTheme = {
  '--background': '#ffffff',
  '--foreground': '#000000',
  '--explorer-background': '#f5f5f5',
  '--explorer-title': '#000000',
  '--exploere-file-font': '#007acc',
  '--exploere-file-font-active': '#ffffff',
  '--exploere-file-font-active-bg': '#007acc',
  '--explorer-folder-font': '#000000',
  '--tab-font': '#000000',
  '--tab-background': '#e0e0e0',
  '--tab-background-active': '#fff',
  '--tab-border-top': '#007acc',
  '--tab-border-right': '#cccccc',
  '--tab-border-bottom': '#cccccc',
  '--view-short-path-color': '#555555',
  '--view-content-color': '#000000',
  '--tool-font': '#000000',
  '--tool-background': '#f5f5f5',
  '--tool-background-hover': '#cccccc',
  '--tool-border-bottom': '#a5a5a5',
};

const darkTheme = {
  '--background': '#1e1e1e',
  '--foreground': '#ffffff',
  '--explorer-background': '#181818',
  '--explorer-title': '#ededed',
  '--exploere-file-font': '#4fc3f7',
  '--exploere-file-font-active': '#ffffff',
  '--exploere-file-font-active-bg': '#4fc3f7',
  '--explorer-folder-font': '#ededed',
  '--tab-font': '#ffffff',
  '--tab-background': '#23272e',
  '--tab-background-active': '#1e1e1e',
  '--tab-border-top': '#4fc3f7',
  '--tab-border-right': '#23272e',
  '--tab-border-bottom': '#23272e',
  '--view-short-path-color': '#bdbdbd',
  '--view-content-color': '#ededed',
  '--tool-font': '#ededed',
  '--tool-background': '#23272e',
  '--tool-background-hover': '#333a45',
  '--tool-border-bottom': '#444c56',
};

export default function TopToolbars() {
  const menus = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help', 'Theme'];
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  );

  // Apply theme to body
  React.useEffect(() => {
    const themeVars = theme === 'dark' ? darkTheme : lightTheme;
    Object.entries(themeVars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div
      style={{
        height: 40,
        color: 'var(--tool-font)',
        backgroundColor: 'var(--tool-background)',
        borderBottom: '1px solid var(--tool-border-bottom)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 0.75rem',
        fontSize: '0.85rem',
        userSelect: 'none',
      }}
    >
      {menus.map((menu) => (
        <div key={menu} style={{ position: 'relative', height: '100%' }}>
          <button
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              padding: '0 0.75rem',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              fontSize: 'inherit',
              transition: 'background 0.2s',
            }}
            onClick={() => {
              if (menu === 'Theme') setThemeMenuOpen((open) => !open);
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'var(--tool-background-hover)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'none';
            }}
          >
            {menu}
          </button>
          {menu === 'Theme' && themeMenuOpen && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                background: 'var(--tool-background)',
                color: 'var(--tool-font)',
                border: '1px solid var(--tool-border-bottom)',
                borderRadius: 4,
                minWidth: 120,
                zIndex: 10,
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              }}
            >
              <button
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  color: 'inherit',
                  padding: '0.5rem 1rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: 'inherit',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--tool-background-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                onClick={() => {
                  setTheme('light');
                  setThemeMenuOpen(false);
                }}
              >
                Light Mode
              </button>
              <button
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  color: 'inherit',
                  padding: '0.5rem 1rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: 'inherit',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--tool-background-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                onClick={() => {
                  setTheme('dark');
                  setThemeMenuOpen(false);
                }}
              >
                Dark Mode
              </button>
            </div>
          )}

        </div>
      ))}

      <div style={{ marginLeft: 'auto', padding: '0 0.5rem', fontSize: '0.8rem' }}>
        Selection: None
      </div>
    </div>
  );
}
