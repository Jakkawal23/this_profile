'use client';

export default function InternshipsOverviewPage() {
  const internships = [
    {
      company: 'Tech Innovators Co., Ltd.',
      position: 'Software Development Intern',
      duration: 'Jun 2023 - Aug 2023',
      location: 'Bangkok, Thailand',
      highlights: [
        'พัฒนาเว็บแอปพลิเคชันด้วย React และ Node.js',
        'ร่วมออกแบบระบบฐานข้อมูล PostgreSQL',
        'ปรับปรุงประสิทธิภาพ API เร็วขึ้น 30%',
      ],
    },
    {
      company: 'Smart Solutions Inc.',
      position: 'AI Research Intern',
      duration: 'Jan 2023 - Apr 2023',
      location: 'Chiang Mai, Thailand',
      highlights: [
        'วิจัยและพัฒนาโมเดล Machine Learning ด้วย Python และ TensorFlow',
        'สร้างระบบตรวจจับวัตถุด้วย YOLOv8',
        'นำเสนอผลงานในทีมและผู้บริหาร',
      ],
    },
    {
      company: 'FutureTech StartUp',
      position: 'Frontend Developer Intern',
      duration: 'Jun 2022 - Aug 2022',
      location: 'Remote',
      highlights: [
        'พัฒนา UI ด้วย Next.js และ Tailwind CSS',
        'เขียน unit test และปรับปรุง UX',
      ],
    },
  ];

  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 900, margin: '0 auto' }}>
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '2rem',
          color: '#1e88e5',
          borderBottom: '3px solid #1e88e5',
          paddingBottom: '0.5rem',
        }}
      >
        💼 Internship Timeline
      </h1>

      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        {/* เส้น timeline แนวตั้ง */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '16px',
            width: '4px',
            backgroundColor: '#90caf9',
            borderRadius: '2px',
          }}
        />

        {internships.map((internship, idx) => (
          <div
            key={idx}
            style={{
              position: 'relative',
              paddingLeft: '3rem',
              marginBottom: '3rem',
            }}
          >
            {/* จุด timeline แบบ emoji */}
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
              <h2 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 700, color: '#0d47a1' }}>
                {internship.position}
              </h2>

              <p style={{ margin: '0.25rem 0', fontWeight: 600, color: '#1e88e5' }}>
                {internship.company}
              </p>

              <p style={{ margin: '0.25rem 0', color: '#555' }}>
                📍 {internship.location} &nbsp; | &nbsp; 🗓 {internship.duration}
              </p>

              {internship.highlights?.length > 0 && (
                <ul
                  style={{
                    paddingLeft: '1.2rem',
                    marginTop: '0.5rem',
                    color: '#444',
                    lineHeight: 1.5,
                  }}
                >
                  {internship.highlights.map((point, i) => (
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
