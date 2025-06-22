'use client';

export default function WorkExperienceOverviewPage() {
  const workExperiences = [
    {
      company: 'NextGen Software Solutions',
      position: 'Full-Stack Developer',
      duration: 'Sep 2023 - Present',
      location: 'Bangkok, Thailand',
      highlights: [
        'พัฒนาเว็บแอปพลิเคชันด้วย React, Node.js และ PostgreSQL',
        'ออกแบบระบบ Microservices และ API integration',
        'ดูแลและปรับปรุงระบบ CI/CD ด้วย GitHub Actions และ Docker',
      ],
    },
    {
      company: 'Creative Tech Co., Ltd.',
      position: 'Frontend Developer',
      duration: 'Oct 2021 - Aug 2023',
      location: 'Chiang Mai, Thailand',
      highlights: [
        'พัฒนา UI ด้วย Next.js และ Tailwind CSS',
        'ร่วมออกแบบ UX/UI กับทีม Designer',
        'ปรับปรุงประสิทธิภาพเว็บไซต์ ทำให้โหลดเร็วขึ้น 25%',
      ],
    },
    {
      company: 'Startup Hub',
      position: 'Junior Software Engineer',
      duration: 'Jul 2020 - Sep 2021',
      location: 'Remote',
      highlights: [
        'พัฒนา API ด้วย Express และ MongoDB',
        'เขียน Unit Tests ด้วย Jest และ Cypress',
        'ร่วมแก้ไขบั๊กและพัฒนาฟีเจอร์ใหม่ตามคำร้องขอ',
      ],
    },
  ];

  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 900, margin: '0 auto' }}>
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 700,
          marginBottom: '2rem',
          color: '#43a047',
          borderBottom: '3px solid #43a047',
          paddingBottom: '0.5rem',
        }}
      >
        💼 Work Experience Timeline
      </h1>

      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        {/* Timeline Vertical Line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '16px',
            width: '4px',
            backgroundColor: '#a5d6a7',
            borderRadius: '2px',
          }}
        />

        {workExperiences.map((work, idx) => (
          <div
            key={idx}
            style={{
              position: 'relative',
              paddingLeft: '3rem',
              marginBottom: '3rem',
            }}
          >
            {/* Timeline Dot as Emoji */}
            <div
              style={{
                position: 'absolute',
                left: '-0.5rem',
                top: 0,
                fontSize: '1.5rem',
                transform: 'translateY(-2px)',
              }}
            >
              💼
            </div>

            {/* Card Content */}
            <div
              style={{
                backgroundColor: 'white',
                padding: '1rem 1.5rem',
                borderRadius: '8px',
                boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                userSelect: 'text',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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
              <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 700, color: '#2e7d32' }}>
                {work.position}
              </h2>

              <p style={{ margin: '0.25rem 0', color: '#43a047', fontWeight: 600 }}>
                {work.company}
              </p>

              <p style={{ margin: '0.25rem 0', color: '#555' }}>
                📍 {work.location} &nbsp; | &nbsp; 🗓 {work.duration}
              </p>

              {work.highlights?.length > 0 && (
                <ul
                  style={{
                    paddingLeft: '1.2rem',
                    marginTop: '0.5rem',
                    color: '#444',
                    lineHeight: 1.5,
                  }}
                >
                  {work.highlights.map((point, i) => (
                    <li key={i} style={{ marginBottom: '0.25rem' }}>
                      • {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
