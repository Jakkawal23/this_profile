'use client';

type SkillGroup = {
  icon: string;
  title: string;
  items: string[];
};

const technicalSkills: SkillGroup[] = [
  {
    icon: '🧩',
    title: 'Frontend',
    items: [
      'React.js, Next.js, Tailwind CSS, Zustand',
      'พื้นฐาน Angular และ TypeScript',
    ],
  },
  {
    icon: '🛠️',
    title: 'Backend',
    items: [
      'Node.js (Express), FastAPI, NestJS',
      'REST APIs, Authentication (JWT, OAuth)',
    ],
  },
  {
    icon: '🧠',
    title: 'AI & Computer Vision',
    items: [
      'YOLOv8, OpenCV, pytesseract, EasyOCR',
      'เบื้องต้น LangChain และ AI Prompt Engineering',
    ],
  },
  {
    icon: '📦',
    title: 'Database & DevOps',
    items: [
      'PostgreSQL, MongoDB, Firebase',
      'Docker, GitHub Actions, Vercel',
    ],
  },
];

export default function TechnicalSkillsPage() {
  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 900, margin: '0 auto', color: '#333' }}>
      <h1
        style={{
          fontSize: '2.25rem',
          fontWeight: 700,
          marginBottom: '2rem',
          color: '#2e7d32', // สีเขียวเข้ม
          borderBottom: '4px solid #2e7d32',
          paddingBottom: '0.5rem',
        }}
      >
        💻 Technical Skills
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.8rem',
        }}
      >
        {technicalSkills.map((group, idx) => (
          <section
            key={idx}
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              padding: '1.5rem 1.8rem',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(-8px)';
              el.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
          >
            <h2
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#2e7d32',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '1rem',
                userSelect: 'none',
              }}
            >
              <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>{group.icon}</span>
              {group.title}
            </h2>

            <ul
              style={{
                paddingLeft: '1.2rem',
                lineHeight: 1.7,
                fontSize: '1rem',
                color: '#444',
                marginTop: 0,
                flexGrow: 1,
              }}
            >
              {group.items.map((item, i) => (
                <li key={i} style={{ marginBottom: '0.4rem' }}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
