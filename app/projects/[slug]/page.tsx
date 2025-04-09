import Image from 'next/image';
import Link from 'next/link';

const projectDetails = {
  'crud-recipe': {
    title: 'CRUD Recipe Sharing Website',
    description: 'A collaborative project with four team members to create a recipe-sharing platform using Laravel.',
    frameworks: 'Laravel',
    role: 'Backend developer focusing on writing functions in controllers and implementing backend logic.',
    images: ['/images/recipe1.jpg', '/images/recipe2.jpg'],
    github: 'https://github.com/banditchaluay/recipe-sharing',
    link: 'https://example.com',
  },
  'stock-management': {
    title: 'Stock Management System for Company',
    description: 'Designed a system to manage stock and customer orders with inventory tracking and invoice generation.',
    frameworks: 'HTML, CSS, PHP, MySQL, Bootstrap, JavaScript',
    role: 'Developed the entire system, including frontend, backend, and database.',
    images: ['/images/stock1.jpg', '/images/stock2.jpg'],
    github: 'https://github.com/banditchaluay/stock-management',
    link: 'https://example.com',
  },
};

type ProjectSlug = keyof typeof projectDetails;

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projectDetails[params.slug as ProjectSlug];

  if (!project) {
    return <div className="section text-center">Project not found</div>;
  }

  return (
    <section className="section min-h-screen">
      <h1 className="heading neon-glow">{project.title}</h1>
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        <p className="text-[var(--color-text)]">{project.description}</p>
        <p><strong>Frameworks & Tools:</strong> {project.frameworks}</p>
        <p><strong>Role:</strong> {project.role}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images.map((img, index) => (
            <Image key={index} src={img} alt={`${project.title} ${index + 1}`} width={400} height={300} className="rounded-md border border-[var(--color-accent)]" />
          ))}
        </div>
        <div className="space-x-4">
          <Link href={project.github} target="_blank" className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition">GitHub</Link>
          <Link href={project.link} target="_blank" className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition">Live Demo</Link>
        </div>
      </div>
    </section>
  );
}