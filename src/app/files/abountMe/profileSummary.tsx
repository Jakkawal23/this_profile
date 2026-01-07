'use client';

export default function ProfileSummaryPage() {
  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 800, margin: '0 auto', color: '#333' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        👨‍💻 Profile Summary
      </h1>

      {/* ข้อมูลส่วนตัว */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🧑‍🏫 ข้อมูลส่วนตัว</h2>
        <p><strong>ชื่อ:</strong> จักรวาล กาแล็กซี่ (Jakkawal Galaxy)</p>
        <p><strong>ชื่อเล่น:</strong> Whale</p>
        <p><strong>ที่อยู่:</strong> เชียงใหม่, ประเทศไทย</p>
        <p><strong>ภาษาที่ใช้ได้:</strong> ไทย (เจ้าของภาษา), อังกฤษ (ดีมาก), จีน (พื้นฐาน)</p>
      </section>

      {/* เป้าหมาย & จุดแข็ง */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🎯 เป้าหมาย & จุดแข็ง</h2>
        <p style={{ lineHeight: 1.6 }}>
          นักพัฒนา Full-Stack ที่หลงใหลในเทคโนโลยีใหม่ ๆ มีความสามารถในการออกแบบและพัฒนา
          Web Application ตั้งแต่ต้นจนจบ รวมถึงมีพื้นฐานด้าน AI และ UX ที่ช่วยให้เข้าใจทั้งมุมเทคนิค
          และมุมมองของผู้ใช้
        </p>
        <p style={{ lineHeight: 1.6, marginTop: '0.5rem' }}>
          จุดแข็งคือการเรียนรู้ไว สื่อสารชัดเจน ทำงานร่วมกับทีมได้ดี และสามารถคิดเชิงระบบ
        </p>
      </section>

      {/* ทักษะเทคนิค */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>💻 ทักษะด้านเทคนิค</h2>
        <ul style={{ paddingLeft: '1.2rem', lineHeight: 1.7 }}>
          <li><strong>Frontend:</strong> React, Next.js, Tailwind CSS</li>
          <li><strong>Backend:</strong> Node.js, FastAPI, NestJS</li>
          <li><strong>AI / ML:</strong> Python, YOLOv8, OpenCV, scikit-learn</li>
          <li><strong>Database:</strong> PostgreSQL, MongoDB, Firebase</li>
          <li><strong>DevOps:</strong> Docker, Git, GitHub Actions</li>
        </ul>
      </section>

      {/* ทักษะเสริม */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🌟 Soft Skills & ความถนัดอื่น ๆ</h2>
        <ul style={{ paddingLeft: '1.2rem', lineHeight: 1.7 }}>
          <li>UX Writing และ Storytelling ผ่านวิดีโอ</li>
          <li>Presentation และการสื่อสารในทีมข้ามสายงาน</li>
          <li>มี Growth Mindset และสามารถเรียนรู้สิ่งใหม่ได้เร็ว</li>
          <li>ชอบงานที่ท้าทาย มี Impact และเปิดโอกาสให้เติบโต</li>
        </ul>
      </section>

      {/* การศึกษา */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🎓 การศึกษา</h2>
        <p>
          <strong>วิศวกรรมคอมพิวเตอร์</strong> – มหาวิทยาลัยเชียงใหม่ <br />
          (เกียรตินิยมอันดับ 1)
        </p>
      </section>

      {/* ประเภทงานที่สนใจ */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🔍 ประเภทงานที่สนใจ</h2>
        <ul style={{ paddingLeft: '1.2rem', lineHeight: 1.7 }}>
          <li>Web Application Developer (Full-stack / Backend)</li>
          <li>AI Engineer / Computer Vision Developer</li>
          <li>Product Developer ที่มี UX-Mindset</li>
          <li>Startup / Innovation Team ที่ให้ทดลองและพัฒนาอย่างอิสระ</li>
        </ul>
      </section>

      {/* ช่องทางการติดต่อ */}
      <section>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>📫 ช่องทางการติดต่อ</h2>
        <p><strong>Email:</strong> jakkawal@example.com</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/jakkawal23" target="_blank" style={{ color: '#007acc' }}>github.com/jakkawal23</a></p>
      </section>
    </div>
  );
}
