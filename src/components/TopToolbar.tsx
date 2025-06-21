'use client';

export default function TopToolbar() {
  return (
    <div
      style={{
        height: 40,
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #ddd',
        display: 'flex',
        alignItems: 'center',
        padding: '0 1rem',
        fontSize: '0.9rem',
        userSelect: 'none',
      }}
    >
      {/* ปุ่ม/ข้อความตัวอย่าง */}
      <button style={{ marginRight: 8 }}>Save</button>
      <button style={{ marginRight: 8 }}>Undo</button>
      <button style={{ marginRight: 8 }}>Redo</button>
      <div style={{ marginLeft: 'auto' }}>Selection: None</div>
    </div>
  );
}
