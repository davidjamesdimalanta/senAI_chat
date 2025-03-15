'use client';

import React from 'react';

export default function DesignSystem() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="mb-8">Design System</h1>
      
      {/* Typography Section */}
      <section className="mb-12">
        <h2 className="mb-4">Typography</h2>
        <div className="grid gap-4">
          <div className="flex flex-col">
            <h1>Heading 1 (36px/30px)</h1>
            <span className="text-neutral-grey">Used for main headers</span>
          </div>
          <div className="flex flex-col">
            <h2>Heading 2 (28px/24px)</h2>
            <span className="text-neutral-grey">Used for section headers</span>
          </div>
          <div className="flex flex-col">
            <h3>Heading 3 (24px/20px)</h3>
            <span className="text-neutral-grey">Used for subsection headers</span>
          </div>
          <div className="flex flex-col">
            <div className="subheading">Subheading (18px/16px)</div>
            <span className="text-neutral-grey">Used for smaller headers</span>
          </div>
          <div className="flex flex-col">
            <p>Body Text (16px/12px)</p>
            <span className="text-neutral-grey">Used for main content</span>
          </div>
        </div>
      </section>
      
      {/* Font Weights Section */}
      <section className="mb-12">
        <h2 className="mb-4">Font Weights</h2>
        <div className="grid gap-4">
          <div className="flex flex-col">
            <p className="font-weight-normal">Normal Weight (400)</p>
            <span className="text-neutral-grey">Used for body text</span>
          </div>
          <div className="flex flex-col">
            <p className="font-weight-medium">Medium Weight (500)</p>
            <span className="text-neutral-grey">Used for emphasis</span>
          </div>
          <div className="flex flex-col">
            <p className="font-weight-semibold">Semibold Weight (600)</p>
            <span className="text-neutral-grey">Used for strong emphasis</span>
          </div>
          <div className="flex flex-col">
            <p className="font-weight-bold">Bold Weight (700)</p>
            <span className="text-neutral-grey">Used for headings</span>
          </div>
        </div>
      </section>
      
      {/* Color Palette Section */}
      <section className="mb-12">
        <h2 className="mb-4">Color Palette</h2>
        
        {/* Primary Colors */}
        <div className="mb-8">
          <h3 className="mb-4">Primary Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <div className="h-24 bg-[#000501] rounded-md mb-2"></div>
              <span className="font-weight-medium">Black (#000501)</span>
              <span className="text-neutral-grey">Used for text and key elements</span>
            </div>
            <div className="flex flex-col">
              <div className="h-24 bg-[#5728A5] rounded-md mb-2"></div>
              <span className="font-weight-medium">Royal (#5728A5)</span>
              <span className="text-neutral-grey">Used for primary actions</span>
            </div>
            <div className="flex flex-col">
              <div className="h-24 bg-[#FFFFFF] border border-neutral-light-grey rounded-md mb-2"></div>
              <span className="font-weight-medium">White (#FFFFFF)</span>
              <span className="text-neutral-grey">Used for backgrounds</span>
            </div>
          </div>
        </div>
        
        {/* Neutral Colors */}
        <div className="mb-8">
          <h3 className="mb-4">Neutral Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <div className="h-24 bg-[#333333] rounded-md mb-2"></div>
              <span className="font-weight-medium">Dark Grey (#333333)</span>
              <span className="text-neutral-grey">Used for secondary text</span>
            </div>
            <div className="flex flex-col">
              <div className="h-24 bg-[#636566] rounded-md mb-2"></div>
              <span className="font-weight-medium">Grey (#636566)</span>
              <span className="text-neutral-grey">Used for tertiary text</span>
            </div>
            <div className="flex flex-col">
              <div className="h-24 bg-[#DEDBDB] rounded-md mb-2"></div>
              <span className="font-weight-medium">Light Grey (#DEDBDB)</span>
              <span className="text-neutral-grey">Used for borders and dividers</span>
            </div>
          </div>
        </div>
        
        {/* Secondary Colors */}
        <div>
          <h3 className="mb-4">Secondary Colors (Blues)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="flex flex-col">
              <div className="h-24 bg-[#d4f0fc] rounded-md mb-2"></div>
              <span className="font-weight-medium">Sky Blue (#d4f0fc)</span>
              <span className="text-neutral-grey">Lightest blue</span>
            </div>
            <div className="flex flex-col">
              <div className="h-24 bg-[#89d6fb] rounded-md mb-2"></div>
              <span className="font-weight-medium">Baby Blue (#89d6fb)</span>
              <span className="text-neutral-grey">Light blue</span>
            </div>
            <div className="flex flex-col">
              <div className="h-24 bg-[#02a9f7] rounded-md mb-2"></div>
              <span className="font-weight-medium">Meta Blue (#02a9f7)</span>
              <span className="text-neutral-grey">Medium blue</span>
            </div>
            <div className="flex flex-col">
              <div className="h-24 bg-[#02577a] rounded-md mb-2"></div>
              <span className="font-weight-medium">Light Denim (#02577a)</span>
              <span className="text-neutral-grey">Dark blue</span>
            </div>
            <div className="flex flex-col">
              <div className="h-24 bg-[#01303f] rounded-md mb-2"></div>
              <span className="font-weight-medium">Dark Denim (#01303f)</span>
              <span className="text-neutral-grey">Darkest blue</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Button Examples */}
      <section className="mb-12">
        <h2 className="mb-4">Button Examples</h2>
        <div className="grid gap-4">
          <div>
            <button className="bg-[#5728A5] text-white px-6 py-3 rounded-lg font-weight-semibold hover:bg-opacity-90 transition-all">
              Primary Button
            </button>
          </div>
          <div>
            <button className="border-2 border-[#5728A5] text-[#5728A5] px-6 py-3 rounded-lg font-weight-semibold hover:bg-[#5728A5] hover:text-white transition-all">
              Secondary Button
            </button>
          </div>
          <div>
            <button className="bg-[#333333] text-white px-6 py-3 rounded-lg font-weight-semibold hover:bg-opacity-90 transition-all">
              Dark Button
            </button>
          </div>
          <div>
            <button className="bg-[#d4f0fc] text-[#01303f] px-6 py-3 rounded-lg font-weight-semibold hover:bg-[#89d6fb] transition-all">
              Light Button
            </button>
          </div>
        </div>
      </section>
      
      {/* Additional UI Elements can be added here */}
    </div>
  );
} 