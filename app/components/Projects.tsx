import Link from 'next/link';

const projects = [
  {
    slug: 'imdb-api',
    title: 'IMDb API Integration & Favorite Management',
    description: 'A web platform that integrates IMDb API for movie search and allows users to manage their favorite movies using LocalStorage.',
  },
  
  {
    slug: 'crud-recipe',
    title: 'CRUD Recipe Sharing Website',
    description: 'A collaborative recipe-sharing platform.',
  },
  {
    slug: 'maintenance-management',
    title: 'Maintenance Request Management System',
    description: 'A backend-driven web platform for managing repair requests and admin job assignments.',
  },
  
  {
    slug: 'stock-management',
    title: 'Stock Management System',
    description: 'A system to manage stock and orders.',
  },
  {
    slug: 'crud-ecommerce',
    title: 'CRUD E-commerce Website',
    description: 'An e-commerce platform with admin and user roles.',
  },
  {
    slug: 'electricity-bill',
    title: 'Electricity Bill Calculator',
    description: 'A web app to calculate electricity bills.',
  },
  {
    slug: 'server-admin',
    title: 'Server Administrator & Developer',
    description: 'Managed and customized game servers.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="heading neon-glow">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="bg-[rgba(60,40,80,0.3)] rounded-md border border-[var(--color-accent)] p-4 transition hover:bg-[rgba(80,50,100,0.5)] animate-fade-in"
          >
            <h3 className="text-lg font-semibold text-[var(--color-primary)] neon-glow">{project.title}</h3>
            <p className="text-sm text-[var(--color-text)] mt-1">{project.description}</p>
            <Link
              href={`/projects/${project.slug}`}
              className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition mt-2 inline-block"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}