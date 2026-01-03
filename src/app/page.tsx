'use client';

import Hero from '@/components/sections/Hero';
import SkillsSection from '@/components/sections/SkillsSection';

export default function Home() {
  return (
    <div className="flex-1 pb-16">
      <Hero />
      <SkillsSection />
    </div>
  );
}
