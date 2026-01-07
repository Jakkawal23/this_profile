'use client';

export default function ExperienceOverviewPage() {
  const experiences = [
    {
      company: 'XXXXXX TECH CO., LTD.',
      position: 'Junior Software Developer',
      years: 'Jun 2023 – Sep 2023',
      location: 'Pathum Thani, Thailand',
      highlights: [
        'MarketFlow: An end-to-end Marketplace Management Web Platform (Core Architect)',
        'Merchant Connect: Developed a Line LIFF application for real-time vendor inventory tracking',
        'Implemented AI-based OCR for automatic utility meter reading and classification',
        'Built an automated Vendor Reimbursement Request system',
        'Developed a multi-level Pending Expense Approval workflow',
        'Integrated OCR technology for digitized expense document processing',
        'Internal Leave Management System via Line LIFF integration',
        'Winner of the "InnoDrive Garage" Product Development Hackathon',
        'Completed intensive Startup Team Leadership & Strategy Training',
      ],
    },
    {
      company: 'XXXXXX TECH CO., LTD.',
      position: 'Software Developer Intern (Enterprise Solutions)',
      years: 'Oct 2023 - Feb 2024 ( 5 mos. )',
      location: 'Pathum Thani, Thailand',
      highlights: [
        'Refactored the Expense Approval module for improved processing speed',
        'Scaled the system architecture to support Multi-Tenant/Multi-Company environments',
        'Advanced Professional Communication & Agile Methodology training',
        'Intensive Full-stack Development Workshop (React & Node.js focus)',
      ],
    },
    {
      company: 'XXXXXX TECH CO., LTD.',
      position: 'Software Developer Intern (Internal Systems)',
      years: 'Mar 2023 - May 2023 ( 3 mos. )',
      location: 'Pathum Thani, Thailand',
      highlights: [
        'Designed and implemented an Internal Corporate Expense Approval system',
        'Collaborative Teamwork & Emotional Intelligence (EQ) Training',
        'Fundamentals of Secure Coding and Database Management training',
      ],
    },
    {
      company: 'XXXXXX TECH CO., LTD.',
      position: 'Software Developer Intern (Remote)',
      years: 'Apr 2022 - Jun 2022 ( 3 mos. )',
      location: 'Remote',
      highlights: [
        'Developed a Master Data Management (MDM) module for core system configurations',
        'Assisted in post-deployment bug fixing and technical support for client handovers',
        'Effective Remote Collaboration & Time Management training',
        'Introduction to CI/CD pipelines and Version Control (Git) training',
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
