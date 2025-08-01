import React from 'react';

function WhyChooseUs() {
    return (
   <section className="py-16 px-6 bg-[var(--color-Background)]">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-[var(--color-main)] mb-4">
      Why Choose Antique?
    </h2>
    <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
      At Antique, we blend traditional craftsmanship with modern elegance to bring you the finest tables and mirrors for your space.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition">
        <h3 className="text-xl font-semibold mb-2 text-[var(--color-Text)]">Premium Quality</h3>
        <p className="text-gray-600">
          Our products are made from the finest materials ensuring durability and elegance.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition">
        <h3 className="text-xl font-semibold mb-2 text-[var(--color-Text)]">Authentic Craftsmanship</h3>
        <p className="text-gray-600">
          Each piece is handcrafted with attention to detail, blending tradition and creativity.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition">
        <h3 className="text-xl font-semibold mb-2 text-[var(--color-Text)]">Reliable Delivery</h3>
        <p className="text-gray-600">
          Fast and secure delivery, right to your door—safely packed and handled with care.
        </p>
      </div>
    </div>
  </div>
</section>
    );
}

export default WhyChooseUs;