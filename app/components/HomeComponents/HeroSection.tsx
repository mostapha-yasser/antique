import Link from 'next/link';
import React from 'react';

function HeroSection() {
    return (
            <section className="bg-[var(--color-headerBg)] py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-[var(--color-main)]">Welcome to Antique</h1>
        <p className="mt-4 text-lg text-[var(--color-Text)]">
          Premium handcrafted tables and elegant mirrors for your home.
        </p>
        <div className="mt-6">
          <Link href="/products">
            <button className="btn btn-primary">Shop Now</button>
          </Link>
        </div>
      </section>
    );
}

export default HeroSection;