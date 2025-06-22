'use client';

export default function AfterGraduationOverviewPage() {
  const timeline = [
    {
      year: '2023',
      title: 'ชั้นปีที่ 4',
      location: 'วิศวกรรมคอมพิวเตอร์, มหาวิทยาลัยเชียงใหม่',
      highlights: [
        'สำเร็จการศึกษาเกียรตินิยมอันดับ 1',
        'เป็นหัวหน้าทีมโปรเจกต์จบด้าน AI - ระบบอ่านค่ามิเตอร์อัตโนมัติด้วย YOLOv8',
        'ได้รับเลือกให้นำเสนอผลงานในงานวิชาการคณะ',
      ],
    },
    {
      year: '2022',
      title: 'ชั้นปีที่ 3',
      highlights: [
        'ฝึกงานที่บริษัทซอฟต์แวร์ ทำงานในทีม DevOps และ Backend',
        'เริ่มใช้ Docker, FastAPI และ GitHub Actions อย่างจริงจัง',
        'เข้าร่วมแข่งขัน LINE Hackathon และได้รับรางวัลชมเชย',
      ],
    },
    {
      year: '2021',
      title: 'ชั้นปีที่ 2',
      highlights: [
        'เริ่มเรียนวิชา Core เช่น Operating Systems, Data Structures',
        'ทำโปรเจกต์กลุ่มเกี่ยวกับระบบลงทะเบียนเรียน',
        'เรียนรู้ React, Firebase และสร้างเว็บแอปแรกของตัวเอง',
      ],
    },
    {
      year: '2020',
      title: 'ชั้นปีที่ 1',
      highlights: [
        'เริ่มต้นชีวิตมหาวิทยาลัยท่ามกลางโควิด-19 (เรียนออนไลน์)',
        'เข้าชมรม Coding Club และเริ่มศึกษาการเขียนโปรแกรมเชิงลึก',
        'เรียนพื้นฐาน Python, C และ SQL',
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
          color: '#1976d2',
          borderBottom: '3px solid #1976d2',
          paddingBottom: '0.5rem',
        }}
      >
        🎓 After Graduation Journey
      </h1>

      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        {/* Timeline vertical line */}
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

        {timeline.map((entry, idx) => (
          <div
            key={idx}
            style={{
              position: 'relative',
              paddingLeft: '3rem',
              marginBottom: '3rem',
            }}
          >
            {/* Dot as emoji */}
            <div
              style={{
                position: 'absolute',
                left: '-0.5rem',
                top: 0,
                fontSize: '1.5rem',
                transform: 'translateY(-2px)',
              }}
            >
              🎯
            </div>

            {/* Card content */}
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
              <h2
                style={{
                  margin: 0,
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#0d47a1',
                }}
              >
                {entry.title} ({entry.year})
              </h2>
              {entry.location && (
                <p style={{ margin: '0.25rem 0', color: '#1976d2', fontWeight: 600 }}>
                  {entry.location}
                </p>
              )}
              {entry.highlights && (
                <ul
                  style={{
                    paddingLeft: '1.2rem',
                    marginTop: '0.5rem',
                    color: '#444',
                    lineHeight: 1.5,
                  }}
                >
                  {entry.highlights.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.25rem' }}>
                      • {item}
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
