'use client';

export default function HighSchoolOverviewPage() {
  const highSchoolTimeline = [
    {
      year: '2018',
      grade: 'ม.6',
      location: 'โรงเรียน[XXXXX]',
      gpa: '3.88',
      highlights: [
        'ประธานชมรมหุ่นยนต์และระบบอัตโนมัติ (Robotics Club)',
        'ตัวแทนโรงเรียนเข้าแข่งขันพัฒนาซอฟต์แวร์ระดับภูมิภาค',
        'สำเร็จหลักสูตรเตรียมความพร้อมด้านวิศวกรรมสารสนเทศ',
      ],
    },
    {
      year: '2017',
      grade: 'ม.5',
      location: 'โรงเรียน[XXXXX]',
      gpa: '3.91',
      highlights: [
        'ได้รับรางวัลรองชนะเลิศอันดับ 1 การแข่งขันทักษะวิชาการด้านคณิตศาสตร์',
        'เริ่มศึกษาการเขียนโปรแกรมภาษา Python สำหรับวิเคราะห์ข้อมูลเบื้องต้น',
      ],
    },
    {
      year: '2016',
      grade: 'ม.4',
      location: 'โรงเรียน[XXXXX]',
      gpa: '3.75',
      highlights: [
        'เข้าศึกษาในหลักสูตรห้องเรียนพิเศษวิทยาศาสตร์-คณิตศาสตร์ (SMTE)',
        'ได้รับคัดเลือกเป็นกรรมการนักเรียนฝ่ายกิจกรรมเทคโนโลยี',
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
