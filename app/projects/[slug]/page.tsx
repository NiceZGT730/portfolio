import Image from 'next/image';
import Link from 'next/link';

const projectDetails: Record<string, {
  title: string;
  description: string;
  frameworks: string;
  role: string;
  date: string;
  images: string[];
  github?: string; 
}> = {
  'imdb-api': {
  title: 'IMDb API Integration & Favorite Management',
  description: 'A personal project to integrate IMDb API with Angular, allowing users to search for movies and add their favorites using LocalStorage.',
  frameworks: 'Angular, LocalStorage',
  role: 'Fullstack developer responsible for both backend integration with IMDb API and frontend implementation using Angular. Built the favorite management system with LocalStorage to store user preferences.',
  date: 'April 2025',
  images: ['/images/imdb/p1.jpg', '/images/imdb/p2.jpg','/images/imdb/p3.jpg','/images/imdb/p4.jpg','/images/imdb/p5.jpg'], // Placeholder รอใส่รูป
  github: 'https://github.com/NiceZGT730/project447', 
},

  'crud-recipe': {
    title: 'CRUD Recipe Sharing Website',
    description: 'A collaborative project with four team members to create a recipe-sharing platform using Laravel.',
    frameworks: 'Laravel',
    role: 'Backend developer focusing on writing functions in controllers and implementing backend logic.',
    date: 'October 2024',
    images: ['/images/Food/p1.jpg', '/images/Food/p2.jpg','/images/Food/p3.jpg'], // Placeholder รอใส่รูป
    github: 'https://github.com/ChinatipJ/Project', // ถ้ายังไม่มีจริง เปลี่ยนได้

  },
  'maintenance-management': {
  title: 'Maintenance Request Management System',
  description: 'A backend-driven web platform for submitting repair requests and managing admin task assignments. Developed solo, focusing on backend logic and system architecture.',
  frameworks: 'HTML, CSS, Boostrap5, MySQL',
  role: 'Backend developer responsible for building the entire backend system, including API design, database structure, and admin task management.',
  date: 'October 2024',
  images: ['/images/954417/p1.jpg', '/images/954417/p2.jpg','/images/954417/p3.jpg','/images/954417/p4.jpg','/images/954417/p5.jpg','/images/954417/p6.jpg','/images/954417/p7.jpg','/images/954417/p8.jpg','/images/954417/p9.jpg'], // Placeholder รอใส่รูป
  
  github: 'https://github.com/NiceZGT730/954417', // ถ้ายังไม่มีจริง เปลี่ยนได้
},

  'stock-management': {
    title: 'Stock Management System for Company',
    description:
      'Designed a system to manage stock and customer orders. The system allows admins to track inventory, generate price quotes, and create invoices for customer orders.',
    frameworks: 'HTML, CSS, PHP, MySQL, Bootstrap, JavaScript',
    role: 'Responsible for developing the entire system, including frontend, backend, and database.',
    date: 'March 2024',
    images: ['/images/stock1.jpg', '/images/stock2.jpg'], // Placeholder รอใส่รูป


  },
  'crud-ecommerce': {
    title: 'CRUD E-commerce Website',
    description: 'Designed and implemented an e-commerce platform with roles for admin and user.',
    frameworks: 'HTML, CSS, PHP, SQL',
    role: 'Responsible for developing the system, covering frontend, backend, and database.',
    date: 'March 2023',
    images: ['/images/ecommerce1.jpg', '/images/ecommerce2.jpg'], // Placeholder รอใส่รูป


  },
  'electricity-bill': {
    title: 'Electricity Bill Calculator Website',
    description:
      'Developed a web application that calculates monthly electricity bills based on user input, such as household electricity usage in units.',
    frameworks: 'HTML, CSS, PHP',
    role: 'Responsible for developing the project, including user interface design and backend logic.',
    date: 'October 2022',
    images: ['/images/electricity1.jpg', '/images/electricity2.jpg'], // Placeholder รอใส่รูป


  },
  'server-admin': {
    title: 'Server Administrator & Developer',
    description:
      'Managed and hosted game servers (Unturned, FiveM, Minecraft, GTA SAMP, Scum) using VPS, customized plugins and mods, and utilized SQL for player data management.',
    frameworks: 'SQL, Basic Scripting',
    role: 'Server administrator and developer, customizing and configuring resources.',
    date: '2016 - 2021',
    images: ['/images/server/p1.jpg', '/images/server/p2.png','/images/server/p3.jpg','/images/server/p4.png'], // Placeholder รอใส่รูป


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
        <p><strong>Date:</strong> {project.date}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.images.map((img, index) => (
            <div key={index} className="relative w-full">
              <Image
                src={img}
                alt={`${project.title} ${index + 1}`}
                width={600}
                height={450}
                className="rounded-md border border-[var(--color-accent)] w-full h-auto object-contain transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="space-x-4">
          {project.github && ( // เช็คว่ามี github หรือไม่
            <Link href={project.github} target="_blank" className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition">
              GitHub
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export const dynamic = 'force-static';