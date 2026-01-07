'use client';

export default function UniversityOverviewPage() {
  const universityTimeline = [
    {
      year: '2023',
      grade: 'ชั้นปีที่ 4',
      location: 'ภาควิชาวิศวกรรมซอฟต์แวร์',
      gpa: '3.92',
      highlights: [
        'สำเร็จการศึกษาเกียรตินิยมอันดับ 1 (Summa Cum Laude)',
        'หัวหน้าโครงการวิจัยอาวุโส: ระบบวิเคราะห์ภาพถ่ายดาวเทียมเพื่อพยากรณ์ผลผลิตทางการเกษตร (PyTorch)',
        'ได้รับรางวัล "Best Senior Project" ประจำปีการศึกษา',
      ],
    },
    {
      year: '2022',
      grade: 'ชั้นปีที่ 3',
      gpa: '3.88',
      highlights: [
        'ได้รับทุนฝึกงานภาคฤดูร้อน ณ บริษัทเทคโนโลยีข้ามชาติ ในตำแหน่ง Cloud Solutions Intern',
        'ออกแบบและวางโครงสร้างพื้นฐานด้วย Terraform และ Kubernetes (EKS)',
        'ชนะเลิศอันดับ 2 ในงาน National Cloud Computing Challenge',
      ],
    },
    {
      year: '2021',
      grade: 'ชั้นปีที่ 2',
      gpa: '3.82',
      highlights: [
        'เน้นศึกษาด้าน Algorithm Design และ Database Management Systems (PostgreSQL)',
        'พัฒนาโปรเจกต์ระบบบริหารจัดการคลังสินค้าแบบ Real-time โดยใช้ Go และ Redis',
        'เป็นติวเตอร์ (TA) ประจำวิชา Object-Oriented Programming',
      ],
    },
    {
      year: '2020',
      grade: 'ชั้นปีที่ 1',
      gpa: '3.70',
      highlights: [
        'ปรับตัวสู่ระบบการเรียนทางไกลแบบผสมผสาน (Hybrid Learning)',
        'ก่อตั้งกลุ่มสมาคมโอเพนซอร์ส (Open Source Community) ภายในคณะ',
        'ฝึกฝนทักษะพื้นฐาน Java, C++ และการเขียน Shell Script บน Linux',
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
          color: '#1e88e5',
          borderBottom: '3px solid #1e88e5',
          paddingBottom: '0.5rem',
          userSelect: 'none',
        }}
      >
        🎓 University Journey
      </h1>

      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        {/* Vertical Line */}
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

        {universityTimeline.map((entry, idx) => (
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
              🧑‍🎓
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
              <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 700, color: '#1565c0' }}>
                {entry.grade} ({entry.year})
              </h2>
              {entry.location && (
                <p
                  style={{
                    margin: '0.25rem 0',
                    color: '#1976d2',
                    fontWeight: 600,
                    fontStyle: 'italic',
                  }}
                >
                  {entry.location}
                </p>
              )}
              {entry.gpa && (
                <p style={{ margin: '0.25rem 0', fontWeight: '600', color: '#444' }}>
                  🎯 GPA: {entry.gpa}
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
