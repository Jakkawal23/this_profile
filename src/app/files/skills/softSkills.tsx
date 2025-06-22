'use client';

type SoftSkillItem = {
  icon: string;
  title: string;
  description?: string;
  bulletPoints?: string[];
};

const softSkills: SoftSkillItem[] = [
  {
    icon: '🤝',
    title: 'การทำงานเป็นทีม',
    description:
      'สื่อสารกับทีมงานได้ดี ทั้ง Dev, PO และ Designer เคยร่วมพัฒนาโปรเจกต์ที่ต้องประสานงานหลากหลายฝ่าย',
  },
  {
    icon: '🎤',
    title: 'การนำเสนอ & Storytelling',
    description:
      'ถ่ายทอดไอเดียให้คนเข้าใจง่าย ผ่านการพูดหรือวิดีโอ มีประสบการณ์ในการ Pitch โปรเจกต์ทั้งในงานแข่งขันและห้องเรียน',
  },
  {
    icon: '🚀',
    title: 'การเรียนรู้และการปรับตัว',
    description:
      'ชอบทดลองสิ่งใหม่ ปรับตัวกับเครื่องมือหรือปัญหาที่ไม่เคยเจอได้ดี เรียนรู้ด้วยตัวเองอย่างรวดเร็ว',
  },
  {
    icon: '🧠',
    title: 'ทัศนคติในการทำงาน',
    bulletPoints: [
      '✅ Growth mindset – เชื่อว่าทักษะทุกอย่างพัฒนาได้',
      '✅ Open-minded – เปิดรับความเห็นและแนวทางใหม่',
      '✅ รับผิดชอบสูง – ส่งงานตรงเวลา พร้อมรับผิดหากเกิดปัญหา',
    ],
  },
];

export default function SoftSkillsPage() {
  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 900, margin: '0 auto', color: '#333' }}>
      <h1
        style={{
          fontSize: '2.25rem',
          fontWeight: 700,
          marginBottom: '2rem',
          color: '#ff6f61', // ใช้สีส้มแดงสดใสเหมือน Project Overview
          borderBottom: '4px solid #ff6f61',
          paddingBottom: '0.5rem',
        }}
      >
        🌱 Soft Skills
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.8rem',
        }}
      >
        {softSkills.map((skill, index) => (
          <section
            key={index}
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
                color: '#ff6f61',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '1rem',
                userSelect: 'none',
              }}
            >
              <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>{skill.icon}</span>
              {skill.title}
            </h2>

            {skill.description && (
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: '#444',
                  marginBottom: skill.bulletPoints ? '1rem' : 0,
                  flexGrow: 1,
                }}
              >
                {skill.description}
              </p>
            )}

            {skill.bulletPoints && (
              <ul
                style={{
                  paddingLeft: '1.2rem',
                  lineHeight: 1.7,
                  fontSize: '1rem',
                  color: '#444',
                  marginTop: 0,
                }}
              >
                {skill.bulletPoints.map((point, i) => (
                  <li key={i} style={{ marginBottom: '0.4rem' }}>
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
