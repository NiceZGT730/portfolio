export default function Skills() {
    const skills = ['PHP', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Laravel', 'Node.js', 'Angular', 'Bootstrap', 'Git', 'MySQL', 'Excel', 'Power BI'];

  return (
    <section id="skills" className="section">
      <h2 className="heading neon-glow">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[rgba(60,40,80,0.3)] text-[var(--color-text)] text-center py-3 rounded-md border border-[var(--color-accent)] hover:bg-[rgba(80,50,100,0.5)] hover:text-[var(--color-primary)] transition animate-fade-in"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
