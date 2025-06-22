'use client';

export default function HighSchoolAwardsPage() {
  const awards = [
    {
      title: 'ชมรมหุ่นยนต์',
      image: '/images/robot-club.jpg',
      description: 'เรียนรู้การใช้ Arduino และประกอบหุ่นยนต์ลงแข่งขันระดับจังหวัด',
    },
    {
      title: 'แข่งขันตอบปัญหาวิทยาศาสตร์',
      image: '/images/science-quiz.jpg',
      description: 'ได้รับรางวัลรองชนะเลิศอันดับ 1 ระดับภูมิภาค',
    },
    {
      title: 'หัวหน้าห้องเรียน',
      image: '/images/class-leader.jpg',
      description: 'เป็นตัวแทนห้องเรียน ช่วยประสานงานและนำทีมในกิจกรรมต่าง ๆ',
    },
    {
      title: 'ชมรมดนตรี',
      image: '/images/music-club.jpg',
      description: 'เล่นกีตาร์ในวงดนตรีโรงเรียน มีการแสดงในงานโรงเรียนและงานสังคม',
    },
  ];

  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 960, margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '2rem', color: '#007acc' }}>
        🏅 High School Awards
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {awards.map((item, i) => (
          <div
            key={i}
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#f9f9f9',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              border: '1px solid #e0e0e0',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(-6px)';
              el.style.boxShadow = '0 10px 20px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: '100%', height: 180, objectFit: 'cover' }}
            />
            <div style={{ padding: '1.25rem', flex: 1 }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#007acc' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.6 }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
