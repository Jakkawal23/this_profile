'use client';

export default function CompetitionsOverviewPage() {
  const competitions = [
    {
      name: 'Thailand Coding Championship',
      role: 'Team Leader',
      duration: 'Dec 2023',
      location: 'Bangkok, Thailand',
      highlights: [
        'ชนะเลิศระดับภูมิภาค',
        'พัฒนาระบบจัดการข้อมูลแบบ Real-time ด้วย React และ Node.js',
        'ประสานงานทีมและนำเสนอผลงานต่อคณะกรรมการ',
      ],
    },
    {
      name: 'National AI Hackathon',
      role: 'Participant',
      duration: 'Aug 2022',
      location: 'Online',
      highlights: [
        'สร้างโมเดล Machine Learning ตรวจจับวัตถุในภาพด้วย YOLOv8',
        'พัฒนาแอปพลิเคชันเชื่อมต่อ API เพื่อแสดงผลวิเคราะห์แบบเรียลไทม์',
        'ได้รับรางวัลชมเชยด้านนวัตกรรม',
      ],
    },
    {
      name: 'University Programming Contest',
      role: 'Team Member',
      duration: 'Mar 2021',
      location: 'Chiang Mai University',
      highlights: [
        'แก้ไขโจทย์ปัญหาเชิงตรรกะและอัลกอริทึมภายในเวลาจำกัด',
        'พัฒนาความสามารถในการเขียนโค้ดและทำงานเป็นทีม',
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
          color: '#f57c00',
          borderBottom: '3px solid #f57c00',
          paddingBottom: '0.5rem',
        }}
      >
        🏆 Competitions & Activities Timeline
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
            backgroundColor: '#ffcc80',
            borderRadius: '2px',
          }}
        />

        {competitions.map((comp, idx) => (
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
              🏆
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
              <h2 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 700, color: '#e65100' }}>
                {comp.name}
              </h2>

              <p style={{ margin: '0.25rem 0', fontWeight: 600, color: '#f57c00', fontStyle: 'italic' }}>
                {comp.role}
              </p>

              <p style={{ margin: '0.25rem 0', color: '#555' }}>
                📍 {comp.location} &nbsp; | &nbsp; 🗓 {comp.duration}
              </p>

              {comp.highlights && (
                <ul
                  style={{
                    paddingLeft: '1.2rem',
                    marginTop: '0.5rem',
                    color: '#444',
                    lineHeight: 1.6,
                  }}
                >
                  {comp.highlights.map((point, i) => (
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
