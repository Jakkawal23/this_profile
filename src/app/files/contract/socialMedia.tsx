'use client';

const socialLinks = [
  {
    title: 'GitHub',
    value: 'github.com/jakkawal23',
    icon: '🐙',
    href: 'https://github.com/jakkawal23',
  },
  {
    title: 'YouTube',
    value: '@jakkawalgalaxy',
    icon: '🎥',
    href: 'https://youtube.com/@jakkawalgalaxy',
  },
  {
    title: 'TikTok',
    value: '@jakkawal_galaxy',
    icon: '🎬',
    href: 'https://tiktok.com/@jakkawal_galaxy',
  },
];

export default function SocialMediaPage() {
  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 960, margin: '0 auto', color: '#333' }}>
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 700,
          marginBottom: '1.5rem',
          borderBottom: '3px solid #00bfa5',
          paddingBottom: '0.5rem',
          color: '#00bfa5',
        }}
      >
        🌐 Social Media Links
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {socialLinks.map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.2rem',
              padding: '1.2rem 1.5rem',
              backgroundColor: '#fff',
              borderRadius: '12px',
              border: '1px solid #ccc',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
              textDecoration: 'none',
              color: '#333',
              fontWeight: 500,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
              cursor: 'pointer',
              userSelect: 'none',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = '#00bfa5';
              el.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
              el.style.transform = 'translateY(-6px)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = '#ccc';
              el.style.boxShadow = '0 4px 10px rgba(0,0,0,0.05)';
              el.style.transform = 'translateY(0)';
            }}
          >
            <span style={{ fontSize: '1.9rem', lineHeight: 1 }}>{item.icon}</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{item.title}</div>
              <div style={{ fontSize: '0.95rem', color: 'inherit', marginTop: '0.15rem' }}>
                {item.value}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
