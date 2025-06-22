'use client';

export default function HighSchoolOverviewPage() {
  const highSchoolTimeline = [
    {
      year: '2018',
      grade: 'ม.6',
      location: 'โรงเรียนเชียงใหม่วิทยาคม',
      gpa: '3.82',
      highlights: [
        'เป็นหัวหน้าชุมนุม Coding Club',
        'พัฒนาโปรเจกต์ร่วมกับเพื่อนเพื่อส่งประกวดระดับจังหวัด',
        'เตรียมสอบเข้าวิศวกรรมคอมพิวเตอร์',
      ],
    },
    {
      year: '2017',
      grade: 'ม.5',
      location: 'โรงเรียนเชียงใหม่วิทยาคม',
      gpa: '3.85',
      highlights: [
        'เข้าร่วมแข่งขันตอบปัญหาวิทยาศาสตร์-คอมพิวเตอร์',
        'เริ่มพัฒนาเว็บไซต์เล็กๆ ด้วย HTML/CSS',
      ],
    },
    {
      year: '2016',
      grade: 'ม.4',
      location: 'โรงเรียนเชียงใหม่วิทยาคม',
      gpa: '3.80',
      highlights: [
        'เริ่มเรียนสายวิทย์-คณิต',
        'ค้นพบความชอบด้านเทคโนโลยีและเริ่มเรียนเขียนโปรแกรม',
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
          userSelect: 'none',
        }}
      >
        🏫 High School Journey
      </h1>

      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        {/* Vertical timeline line */}
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

        {highSchoolTimeline.map((entry, idx) => (
          <div
            key={idx}
            style={{
              position: 'relative',
              paddingLeft: '3rem',
              marginBottom: '3rem',
            }}
          >
            {/* Timeline Dot with Emoji */}
            <div
              style={{
                position: 'absolute',
                left: '-0.5rem',
                top: 0,
                fontSize: '1.5rem',
                transform: 'translateY(-2px)',
              }}
            >
              📘
            </div>

            {/* Content Card */}
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
                {entry.grade} ({entry.year})
              </h2>
              <p
                style={{
                  margin: '0.25rem 0',
                  color: '#388e3c',
                  fontWeight: 600,
                  fontStyle: 'italic',
                }}
              >
                {entry.location}
              </p>
              <p style={{ margin: '0.25rem 0', color: '#555' }}>
                🎯 GPA: {entry.gpa}
              </p>

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
