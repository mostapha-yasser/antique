import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
function  ProductCategories() {
    return (
         <section className="py-12 px-4 bg-[var(--color-Background)]">
        <h2 className="text-2xl font-semibold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Link href="/products?category=table" className="group">
            <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
              <Image
                src="/images/table-category.jpg"
                alt="Tables"
                width={800}
                height={500}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center bg-white">
                <h3 className="text-xl font-bold text-[var(--color-main)]">Tables</h3>
              </div>
            </div>
          </Link>

          <Link href="/products?category=mirror" className="group">
            <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
              <Image
                src="/images/mirror-category.jpg"
                alt="Mirrors"
                width={800}
                height={500}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center bg-white">
                <h3 className="text-xl font-bold text-[var(--color-main)]">Mirrors</h3>
              </div>
            </div>
          </Link>
        </div>
      </section>
    );
}

export default  ProductCategories;