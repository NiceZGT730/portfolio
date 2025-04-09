export default function About() {
  return (
    <section className="section min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="heading neon-glow">About Me</h1>
        <p className="text-base animate-fade-in">
          I’m Bandit Chaluay, a student at Chiang Mai University majoring in
          Modern Management and Information Technology (3.31 GPA). With a strong
          passion for computer programming, I’m seeking internship opportunities
          to enhance my coding skills and gain real-world experience in a
          professional team environment.
        </p>
        <p className="text-base animate-fade-in">
          I have hands-on experience with languages like PHP, Python,
          JavaScript, TypeScript, and SQL, and frameworks such as Laravel,
          Node.js, and Angular. My projects range from building e-commerce
          platforms to managing game servers, showcasing my ability to work on
          both frontend and backend development.
        </p>
        <p className="text-base animate-fade-in">
          Contact me at{" "}
          <a
            href="mailto:banditchaluay06@gmail.com"
            className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition"
          >
            banditchaluay06@gmail.com
          </a>{" "}
          or 090-986-6492.
        </p>
      </div>
    </section>
  );
}
