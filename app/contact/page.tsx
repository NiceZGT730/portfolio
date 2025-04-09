export default function Contact() {
  return (
    <section className="section min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="heading neon-glow">Contact Me</h1>
        <form className="max-w-md mx-auto space-y-4 animate-fade-in">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 bg-[rgba(60,40,80,0.3)] text-[var(--color-text)] border border-[var(--color-accent)] rounded-md focus:outline-none focus:border-[var(--color-primary)]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-[rgba(60,40,80,0.3)] text-[var(--color-text)] border border-[var(--color-accent)] rounded-md focus:outline-none focus:border-[var(--color-primary)]"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 bg-[rgba(60,40,80,0.3)] text-[var(--color-text)] border border-[var(--color-accent)] rounded-md h-24 focus:outline-none focus:border-[var(--color-primary)]"
          ></textarea>
          <button type="submit" className="btn w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
