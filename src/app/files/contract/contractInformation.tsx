'use client';

const contactInfo = [
  {
    title: 'Email',
    value: 'jakkawal@example.com',
    icon: '📧',
    href: 'mailto:jakkawal@example.com',
  },
  {
    title: 'Phone',
    value: '+66 89-123-4567',
    icon: '📱',
    href: 'tel:+66891234567',
  },
  {
    title: 'Location',
    value: 'Chiang Mai, Thailand',
    icon: '📍',
  },
  {
    title: 'Website',
    value: 'jakkawal.dev',
    icon: '🌐',
    href: 'https://jakkawal.dev',
  },
];

export default function ContactInformationPage() {
  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 960, margin: '0 auto', color: '#333' }}>
      {/* Contact Information */}
      <h1
        style={{
          fontSize: '2.2rem',
          fontWeight: 700,
          marginBottom: '1.5rem',
          borderBottom: '3px solid #007acc',
          paddingBottom: '0.5rem',
          color: '#007acc',
        }}
      >
        📇 Contact Information
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}
      >
        {contactInfo.map((item, i) => (
          <a
            key={i}
            href={item.href || '#'}
            target={item.href ? '_blank' : undefined}
            rel={item.href ? 'noopener noreferrer' : undefined}
            onClick={(e) => !item.href && e.preventDefault()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.2rem',
              padding: '1.2rem 1.5rem',
              backgroundColor: '#fff',
              borderRadius: '12px',
              border: '1px solid #ddd',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
              textDecoration: 'none',
              color: '#333',
              fontWeight: 500,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
              cursor: item.href ? 'pointer' : 'default',
              userSelect: 'none',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = '#007acc';
              el.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
              el.style.transform = 'translateY(-6px)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = '#ddd';
              el.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
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