"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const techLogos = [
    { src: "https://cdn.svgporn.com/logos/php.svg", alt: "PHP" },
    { src: "https://cdn.svgporn.com/logos/python.svg", alt: "Python" },
    { src: "https://cdn.svgporn.com/logos/javascript.svg", alt: "JavaScript" },
    {
      src: "https://cdn.svgporn.com/logos/typescript-icon.svg",
      alt: "TypeScript",
    },
    { src: "https://cdn.svgporn.com/logos/laravel.svg", alt: "Laravel" },
    { src: "https://cdn.svgporn.com/logos/nodejs-icon.svg", alt: "Node.js" },
    { src: "https://cdn.svgporn.com/logos/angular-icon.svg", alt: "Angular" },
    { src: "https://cdn.svgporn.com/logos/mysql.svg", alt: "MySQL" },
  ];

  const [positions, setPositions] = useState<{ top: string; left: string }[]>(
    []
  );

  useEffect(() => {
    const generatePosition = () => {
      const minDistance = 15;
      const profileArea = {
        centerX: 50,
        centerY: 50,
        radius: 20,
      };
      const newPositions: { top: string; left: string }[] = [];

      techLogos.forEach(() => {
        let attempts = 0;
        const maxAttempts = 50;

        while (attempts < maxAttempts) {
          const top = Math.random() * 70 + 15;
          const left = Math.random() * 70 + 15;

          const distanceFromProfile = Math.sqrt(
            Math.pow(top - profileArea.centerY, 2) +
              Math.pow(left - profileArea.centerX, 2)
          );
          if (distanceFromProfile < profileArea.radius) {
            attempts++;
            continue;
          }

          const isTooClose = newPositions.some((pos) => {
            const posTop = parseFloat(pos.top);
            const posLeft = parseFloat(pos.left);
            const distance = Math.sqrt(
              Math.pow(top - posTop, 2) + Math.pow(left - posLeft, 2)
            );
            return distance < minDistance;
          });

          if (!isTooClose) {
            newPositions.push({ top: `${top}%`, left: `${left}%` });
            break;
          }
          attempts++;
        }

        if (attempts >= maxAttempts) {
          newPositions.push({
            top: `${Math.random() * 70 + 15}%`,
            left: `${Math.random() * 70 + 15}%`,
          });
        }
      });

      setPositions(newPositions);
    };

    generatePosition();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--color-bg)] text-white relative overflow-hidden">
      {/* Tech Logos Background */}
      <div className="absolute inset-0 pointer-events-none">
        {techLogos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={60}
            height={60}
            className="absolute opacity-5 animate-float"
            style={{
              top: positions[index]?.top || "50%",
              left: positions[index]?.left || "50%",
              animationDelay: `${index * 0.5}s`,
            }}
          />
        ))}
      </div>
      <div className="text-center space-y-6 z-10">
        <div className="relative w-56 h-56 md:w-72 md:h-72 mx-auto">
          <Image
            src="/images/profile.avif"
            alt="Profile"
            width={288}
            height={288}
            className="rounded-full object-cover border-2 border-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)] hover:shadow-[0_0_15px_var(--color-secondary)] transition duration-300"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold neon-glow animate-fade-in">
          <TypeAnimation
            sequence={[
              "Fullstack Developer", // คำแรก
              3000, // รอ 2 วินาที
              "Bandit Chaluay", // คำที่สอง
              3000, // รอ 2 วินาที
            ]}
            wrapper="span"
            speed={50} // ความเร็วในการพิมพ์
            repeat={Infinity} // วนซ้ำไม่สิ้นสุด
          />
        </h1>
        <p className="text-base md:text-lg max-w-xl mx-auto animate-fade-in">
          Designing and building the future of web technology.
        </p>
        <a href="#projects" className="btn inline-block animate-fade-in">
          View Projects
        </a>
      </div>
    </section>
  );
}
