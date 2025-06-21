'use client';

export default function TopToolbar() {
  const menus = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'];

  return (
    <div
      style={{
        height: 40,
        backgroundColor: '#1e1e1e',
        borderBottom: '1px solid #333',
        display: 'flex',
        alignItems: 'center',
        padding: '0 0.75rem',
        fontSize: '0.85rem',
        color: '#cccccc',
        userSelect: 'none',
      }}
    >
      {menus.map((menu) => (
        <button
          key={menu}
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
          // onClick={() => alert(`${menu} clicked`)}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#333';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'none';
          }}
        >
          {menu}
        </button>
      ))}

      <div style={{ marginLeft: 'auto', padding: '0 0.5rem', fontSize: '0.8rem', color: '#999' }}>
        Selection: None
      </div>
    </div>
  );
}
