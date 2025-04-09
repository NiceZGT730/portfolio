import Image from "next/image";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: ProjectProps) {
  return (
    <div className="bg-[rgba(60,40,80,0.3)] rounded-md border border-[var(--color-accent)] overflow-hidden transition hover:bg-[rgba(80,50,100,0.5)] animate-fade-in">
      <Image
        src={image}
        alt={title}
        width={400}
        height={192}
        className="w-full h-40 object-cover opacity-90 hover:opacity-100 transition"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[var(--color-primary)] neon-glow">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-text)] mt-1">{description}</p>
        <a
          href={link}
          target="_blank"
          className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition mt-2 inline-block"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}
