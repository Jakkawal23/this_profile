'use client';

export default function ProjectOverviewPage() {
  const projects = [
    {
      title: 'Smart Home Automation',
      description:
        'สร้างระบบควบคุมอุปกรณ์ไฟฟ้าผ่านมือถือ โดยใช้ ESP8266 และ MQTT โปรเจกต์นี้ทำให้ผมได้เรียนรู้ IoT และการสื่อสารแบบไร้สาย',
      year: '2023',
      image: '/images/project-smart-home.jpg',
    },
    {
      title: 'Personal Portfolio Website',
      description:
        'เว็บไซต์แสดงประวัติส่วนตัวและผลงานเขียนด้วย Next.js และ Tailwind CSS เพื่อใช้สมัครงานและแสดงตัวตนทางออนไลน์',
      year: '2022',
      image: '/images/project-portfolio.jpg',
    },
    {
      title: 'AI-Powered Meter Reader',
      description:
        'พัฒนาโมเดล YOLOv8 สำหรับอ่านเลขมิเตอร์ไฟฟ้าอัตโนมัติ ช่วยลดความผิดพลาดและเพิ่มความรวดเร็วในการอ่านค่า',
      year: '2024',
      image: '/images/project-ai-meter.jpg',
    },
    {
      title: 'TikTok Content Creator Bot',
      description:
        'สร้างบอทสำหรับช่วยจัดการและวิเคราะห์ข้อมูลจากช่อง TikTok ของตัวเอง เพื่อเพิ่มประสิทธิภาพการทำคอนเทนต์',
      year: '2023',
      image: '/images/project-tiktok-bot.jpg',
    },
  ];

  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 900, margin: '0 auto' }}>
      <h1
        style={{
          fontSize: '2.25rem',
          fontWeight: '700',
          marginBottom: '2rem',
          color: '#ff6f61', // สีส้มแดงสดใส
          borderBottom: '4px solid #ff6f61',
          paddingBottom: '0.5rem',
        }}
      >
        🚀 Project Highlights
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.8rem',
        }}
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
            <div style={{ padding: '1rem', flex: 1 }}>
              <h3
                style={{
                  margin: '0 0 0.5rem 0',
                  fontSize: '1.3rem',
                  color: '#ff6f61',
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  flexGrow: 1,
                  fontSize: '1rem',
                  color: '#444',
                  lineHeight: 1.5,
                  marginBottom: '1rem',
                }}
              >
                {project.description}
              </p>
              <p style={{ fontWeight: '600', color: '#999' }}>Year: {project.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
