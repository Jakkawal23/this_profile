'use client';

export default function ExperienceOverviewPage() {
  const experiences = [
    {
      company: 'Tech Galaxy Co., Ltd.',
      position: 'Full-Stack Developer Intern',
      years: 'Jun 2023 – Sep 2023',
      location: 'Bangkok, Thailand',
      highlights: [
        'Developed internal tools using React and Node.js',
        'Integrated RESTful APIs and improved system performance by 20%',
        'Collaborated in Agile team and participated in sprint reviews',
      ],
    },
    {
      company: 'Code Camp Hackathon',
      position: 'Participant (Finalist)',
      years: 'Aug 2022',
      location: 'Online',
      highlights: [
        'Built real-time collaboration app within 48 hours',
        'Led frontend UI implementation using Next.js and Tailwind CSS',
      ],
    },
    {
      company: 'CMU Software Development Club',
      position: 'Club Leader',
      years: '2021 – 2022',
      location: 'Chiang Mai, Thailand',
      highlights: [
        'Organized workshops for 100+ students on Git, Docker, and APIs',
        'Led team to develop open-source university event portal',
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
