'use client';

export default function EducationOverviewPage() {
  const education = [
    {
      name: 'Tech Institute of Northern Thailand',
      degree: 'B.Eng. in Software Engineering',
      years: '2019 - 2023',
      location: 'Chiang Mai, Thailand',
      gpa: '3.82',
      highlights: ['First-Class Honors', 'Student Council President', 'Student Lead Ambassador', 'Class Representative', 'Teaching Assistant (Java Programming)'],
    },
    {
      name: 'Mae Sai International Language Academy',
      program: 'Digital Business Program',
      years: '2016 - 2018',
      location: 'Chiang Rai, Thailand',
      gpa: '3.90',
      highlights: ['Vice President of Student Union', 'Event Coordinator for Cultural Exchange'],
    },
    {
      name: 'Phu Kham Wittaya School',
      program: 'Science-Mathematics Program',
      years: '2016 - 2018',
      location: 'Chiang Rai, Thailand',
      gpa: '3.78',
      highlights: ['Student Body President', 'Regional Science Fair Silver Medalist'],
    },
    {
      name: 'Green Valley International School',
      program: 'Primary Education',
      years: '2008 - 2015',
      location: 'Chiang Mai, Thailand',
      highlights: ['Academic Excellence Award', 'Head of Reading Club'],
    },
    {
      name: 'Lanna Riverside School',
      program: 'Primary Education',
      years: '2008 - 2015',
      location: 'Chiang Mai, Thailand',
      highlights: ['Science Project Competition Winner', 'Mental Math Excellence'],
    },
  ];

  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 900, margin: '0 auto' }}>
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 700,
          marginBottom: '2rem',
          color: '#f57c00',
          borderBottom: '3px solid #f57c00',
          paddingBottom: '0.5rem',
          userSelect: 'none',
        }}
      >
        🎓 Education Timeline
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
            backgroundColor: '#ffb74d',
            borderRadius: '2px',
          }}
        />

        {education.map((edu, idx) => (
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
              🎓
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
              <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 700, color: '#bf360c' }}>
                {edu.name}
              </h2>
              <p
                style={{
                  margin: '0.25rem 0',
                  color: '#ef6c00',
                  fontWeight: 600,
                  fontStyle: 'italic',
                }}
              >
                {edu.degree || edu.program}
              </p>
              <p style={{ margin: '0.25rem 0', color: '#555' }}>
                📍 {edu.location} &nbsp; | &nbsp; 🗓 {edu.years}
              </p>
              {edu.gpa && (
                <p style={{ margin: '0.25rem 0', fontWeight: '600', color: '#444' }}>
                  🎯 GPA: {edu.gpa}
                </p>
              )}
              {edu.highlights && (
                <ul
                  style={{
                    paddingLeft: '1.2rem',
                    marginTop: '0.5rem',
                    color: '#444',
                    lineHeight: 1.5,
                  }}
                >
                  {edu.highlights.map((item, i) => (
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
