'use client';

export default function ExperienceOverviewPage() {
  const experiences = [
    {
      company: 'SOFT SQUARE 1999 CO.,LTD.',
      position: 'Software Developer',
      years: 'Jun 2023 – Sep 2023',
      location: 'Pathum Thani, Thailand',
      highlights: [
        'Talad Hub ระบบบริหารจัดการตลาด Web (เจ้าของไอเดีย)',
        'Line LIFF ระบบตลาดสำหรับพ่อค้าแม่ค้า Line LIFF (Talad Hub)',
        'OCR อ่านค่ามิเตอร์ และจำแนกมิเตอร์ (Talad Hub)',
        'ระบบขอเบิกค่าใช้จ่ายให้กับผู้ค้า',
        'ระบบขออนุมัติค่าใช้จ่ายค้างจ่าย',
        'OCR สำหรับกรอกเอกสารเบิกค่าใช้จ่าย',
        'ระบบลาภายในองค์กรด้วย Line LIFF',
        'TUEK SOM GARAGE ชนะการพัฒนา Product',
        'Build Startup Team Training',
      ],
    },
    {
      company: 'SOFT SQUARE 1999 CO.,LTD.',
      position: 'Software Developer (Internship)',
      years: 'Oct 2023 - Feb 2024 ( 5 mos. )',
      location: 'Pathum Thani',
      highlights: [
        'ระบบขออนุมัติค่าใช้จ่ายค้างจ่าย',
        'พัฒนาระบบให้รองรับหลายบริษัท',
        'Soft Skill Training',
        'Hard Skill Training',
      ],
    },
    {
      company: 'SOFT SQUARE 1999 CO.,LTD.',
      position: 'Software Developer (Internship)',
      years: 'Mar 2023 - May 2023 ( 3 mos. )',
      location: 'Pathum Thani',
      highlights: [
        'ระบบอนุมัติค่าใช้จ่ายภายในองค์กร',
        'Soft Skill Training',
        'Hard Skill Training',
      ],
    },
    {
      company: 'SOFT SQUARE 1999 CO.,LTD.',
      position: 'Software Developer (Internship)',
      years: 'Apr 2022 - Jun 2022 ( 3 mos. )',
      location: 'Online',
      highlights: [
        'จัดทำโปรแกรมจัดการข้อมูลพื้นฐาน',
        'ซัพพอร์ตการแก้ไขปัญหาจากการส่งมอบงาน',
        'Soft Skill Training',
        'Hard Skill Training',
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
          userSelect: 'none',
        }}
      >
        💼 Experience Timeline
      </h1>

      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        {/* timeline vertical line */}
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

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            style={{
              position: 'relative',
              paddingLeft: '3rem',
              marginBottom: '3rem',
            }}
          >
            {/* timeline dot as emoji */}
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

            {/* content card */}
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
              <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 700, color: '#0d47a1' }}>
                {exp.position}
              </h2>
              <p
                style={{
                  margin: '0.25rem 0',
                  color: '#1565c0',
                  fontWeight: 600,
                  fontStyle: 'italic',
                }}
              >
                {exp.company}
              </p>
              <p style={{ margin: '0.25rem 0', color: '#555' }}>
                📍 {exp.location} &nbsp; | &nbsp; 🗓 {exp.years}
              </p>

              {exp.highlights && (
                <ul
                  style={{
                    paddingLeft: '1.2rem',
                    marginTop: '0.5rem',
                    color: '#444',
                    lineHeight: 1.5,
                  }}
                >
                  {exp.highlights.map((item, i) => (
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
