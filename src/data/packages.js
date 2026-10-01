// Sourced verbatim from https://amraconstruction.com/package/
// "Packages for turnkey house construction & halls construction".
// The first four packages are full house-construction specs; Regal and
// Regal Pro (the halls-construction tiers) omit kitchen/door sections,
// matching the source site.

export const packages = [
  {
    id: 'budget',
    name: 'Budget Package',
    rate: '₹1,599 / sqft',
    rateNote: 'Incl. GST',
    sections: [
      { title: 'Designs & Drawings', items: ['2D Floor Plan', 'Basic Elevation', 'Structural Design'] },
      {
        title: 'Structure',
        items: [
          'Steel — Sunvik, Meenakshi, Kamdhenu or equivalent',
          'Aggregates — 20mm & 40mm',
          'Blocks — Standard Solid Concrete blocks, 6 inch / 4 inch',
          'Cement — Dalmia, Coromandel or Zuari',
          'M sand for blockwork & plastering',
          'RCC Design Mix — M25',
          'Dr. Fixit waterproofing',
          'Ceiling height — 10 feet',
        ],
      },
      {
        title: 'Flooring',
        items: [
          'Living & dining — tiles up to ₹50/sqft',
          'Rooms & kitchen — tiles, granite or wooden flooring up to ₹50/sqft',
          'Balcony & open areas — anti-skid tiles up to ₹40/sqft',
          'Staircase — Sadarahalli granite or marble up to ₹70/sqft',
          'Parking — anti-skid tiles up to ₹40/sqft',
        ],
      },
      {
        title: 'Kitchen',
        items: [
          'Ceramic wall tiles, 2 ft above slab — up to ₹40/sqft',
          'Main sink faucet — up to ₹1,300',
          'Other faucets & accessories — ISI marked',
          'Kitchen sink — stainless steel single sink, ₹3,000',
          'Kitchen granite, 40mm thick — up to ₹120/sqft',
        ],
      },
      {
        title: 'Bathroom',
        items: [
          'Ceramic wall tiles, 7 ft height — up to ₹40/sqft',
          'Sanitary ware & CP fittings — up to ₹30,000 per 1,000 sqft',
          'CPVC pipe — Astral',
          'EWC, health faucet, wash basin, 2-in-1 wall mixer, overhead shower',
          'Bathroom doors — waterproof flush doors',
        ],
      },
      {
        title: 'Electrical',
        items: ['Wires — fireproof, Finolex', 'Switches & sockets — Anchor Roma'],
      },
      {
        title: 'Doors & Windows',
        items: [
          'Main door — flush door with veneer, sal wood frame 5"x3", ₹10,000 incl. fixtures',
          'Internal doors — membrane/laminate flush doors, sal wood frame 4"x2.5", up to ₹8,000',
          'Windows — aluminium, glass & mesh shutters (two track)',
        ],
      },
      {
        title: 'Painting',
        items: ['Interior — JK Putty + Tractor Emulsion', 'Exterior — Asian Primer + Ace Exterior Emulsion'],
      },
      {
        title: 'Miscellaneous',
        items: [
          'Overhead tank — Sintex double layered, 1,000L',
          'Underground sump — 4,000L',
          'Staircase railing — MS railing',
          'Parapet wall, 3 ft height',
        ],
      },
    ],
  },
  {
    id: 'basic',
    name: 'Basic Package',
    rate: '₹1,699 / sqft',
    rateNote: 'Incl. GST',
    sections: [
      { title: 'Designs & Drawings', items: ['2D Floor Plan', '3D Elevation', 'Structural Design'] },
      {
        title: 'Structure',
        items: [
          'Steel — Captain, Shyam or equivalent',
          'Aggregates — 20mm & 40mm',
          'Blocks — Standard Solid Concrete blocks, 6 inch / 4 inch',
          'Cement — ACC, Birla or equivalent',
          'M sand for blockwork & plastering',
          'RCC Design Mix — M25',
          'Dr. Fixit waterproofing',
          'Ceiling height — 10 feet',
        ],
      },
      {
        title: 'Flooring',
        items: [
          'Living & dining — tiles up to ₹70/sqft',
          'Rooms & kitchen — tiles, granite or wooden flooring up to ₹50/sqft',
          'Balcony & open areas — anti-skid tiles up to ₹50/sqft',
          'Staircase — Sadarahalli granite or marble up to ₹70/sqft',
          'Parking — anti-skid tiles up to ₹40/sqft',
        ],
      },
      {
        title: 'Kitchen',
        items: [
          'Ceramic wall tiles, 2 ft above slab — up to ₹50/sqft',
          'Main sink faucet — up to ₹1,500',
          'Other faucets & accessories — ISI marked',
          'Kitchen sink — stainless steel single sink, ₹5,000',
          'Kitchen granite, 40mm thick — up to ₹120/sqft',
        ],
      },
      {
        title: 'Bathroom',
        items: [
          'Ceramic wall tiles, 7 ft height — up to ₹50/sqft',
          'Sanitary ware & CP fittings — up to ₹40,000 per 1,000 sqft',
          'CPVC pipe — Astral',
          'EWC, health faucet, wash basin, 2-in-1 wall mixer, overhead shower',
          'Bathroom doors — waterproof flush doors',
        ],
      },
      {
        title: 'Electrical',
        items: ['Wires — fireproof, Finolex', 'Switches & sockets — Anchor Roma'],
      },
      {
        title: 'Doors & Windows',
        items: [
          'Main door — Indian or African teak door, teak frame 5"x3", ₹20,000',
          'Internal doors — membrane/laminate flush doors, sal wood frame 4"x2.5"',
          'Windows — aluminium, glass & mesh shutters (two track)',
        ],
      },
      {
        title: 'Painting',
        items: ['Interior — JK Putty + Tractor Emulsion', 'Exterior — Asian Primer + Ace Exterior Emulsion'],
      },
      {
        title: 'Miscellaneous',
        items: [
          'Overhead tank — Sintex double layered, 1,000L',
          'Staircase railing — MS railing',
          'Parapet wall, 3 ft height',
          'Window grills — basic MS grills, enamel paint, ₹110/sqft',
        ],
      },
    ],
  },
  {
    id: 'classic',
    name: 'Classic Package',
    rate: '₹1,799 / sqft',
    rateNote: 'Incl. GST',
    sections: [
      { title: 'Designs & Drawings', items: ['2D Floor Plan', '3D Elevation', 'Structural Design'] },
      {
        title: 'Structure',
        items: [
          'Steel — JSW Steel',
          'Aggregates — 20mm & 40mm',
          'Blocks — Standard Solid Concrete blocks, 6 inch / 4 inch',
          'Cement — ACC, Birla — Grade 43 & 53',
          'M sand for blockwork & plastering',
          'RCC Design Mix — M25',
          'Dr. Fixit waterproofing',
          'Ceiling height — 10 feet',
        ],
      },
      {
        title: 'Flooring',
        items: [
          'Living & dining — tiles, granite or marble up to ₹100/sqft',
          'Rooms & kitchen — tiles, granite or wooden flooring up to ₹70/sqft',
          'Balcony & open areas — anti-skid tiles up to ₹60/sqft',
          'Staircase — Sadarahalli granite or marble up to ₹80/sqft',
          'Parking — anti-skid tiles up to ₹50/sqft',
        ],
      },
      {
        title: 'Kitchen',
        items: [
          'Ceramic wall tiles, 2 ft above slab — up to ₹50/sqft',
          'Main sink faucet — up to ₹2,000',
          'Other faucets & accessories — Jaquar / Parryware / Hindware',
          'Kitchen sink — stainless steel single sink, ₹6,000',
          'Kitchen granite, 40mm thick — up to ₹160/sqft',
        ],
      },
      {
        title: 'Bathroom',
        items: [
          'Ceramic wall tiles, 7 ft height — up to ₹60/sqft',
          'Sanitary ware & CP fittings — up to ₹50,000 per 1,000 sqft',
          'CPVC pipe — Astral',
          'EWC, health faucet, wash basin, 2-in-1 wall mixer, overhead shower',
          'Bathroom doors — waterproof flush doors',
        ],
      },
      {
        title: 'Electrical',
        items: ['Wires — fireproof, Finolex', 'Switches & sockets — Anchor Roma or suitable'],
      },
      {
        title: 'Doors & Windows',
        items: [
          'Main door — Burma teak door, teak frame 5"x3", ₹30,000',
          'Internal doors — membrane/laminate flush doors, sal wood frame 4"x2.5"',
          'Windows — aluminium, glass & mesh shutters (two track)',
        ],
      },
      {
        title: 'Painting',
        items: ['Interior — JK Putty + Tractor Emulsion Shyne', 'Exterior — Asian Primer + Apex Exterior Emulsion'],
      },
      {
        title: 'Miscellaneous',
        items: [
          'Overhead tank — Sintex double layered, 1,500L',
          'Underground sump — 6,000L',
          'Staircase railing — MS railing',
          'Parapet wall, 3 ft height',
          'Window grills — basic MS grills, enamel paint, ₹110/sqft',
        ],
      },
    ],
  },
  {
    id: 'royale',
    name: 'Royale Package',
    rate: '₹1,999 / sqft',
    rateNote: null,
    sections: [
      {
        title: 'Designs & Drawings',
        items: ['2D Floor Plan', '3D Elevation', 'Structural Design', 'Electrical Drawings', 'Plumbing Drawings'],
      },
      {
        title: 'Structure',
        items: [
          'Steel — JSW Steel',
          'Aggregates — 20mm & 40mm',
          'Blocks — Standard Solid Concrete blocks, 6 inch / 4 inch',
          'Cement — ACC, Birla — Grade 43 & 53',
          'M sand for blockwork & plastering',
          'RCC Design Mix — M25',
          'Dr. Fixit waterproofing',
          'Ceiling height — 10 feet',
        ],
      },
      {
        title: 'Flooring',
        items: [
          'Living & dining — tiles, granite or marble up to ₹140/sqft',
          'Rooms & kitchen — tiles, granite or wooden flooring up to ₹120/sqft',
          'Balcony & open areas — anti-skid tiles up to ₹65/sqft',
          'Staircase — Sadarahalli granite or marble up to ₹100/sqft',
          'Parking — anti-skid tiles up to ₹60/sqft',
        ],
      },
      {
        title: 'Kitchen',
        items: [
          'Ceramic wall tiles, 2 ft above slab — up to ₹80/sqft',
          'Main sink faucet — up to ₹3,500',
          'Other faucets & accessories — Jaquar / Parryware / Hindware',
          'Kitchen sink — stainless steel or granite finish, ₹8,000 (Futura, Carysil)',
          'Kitchen granite, 40mm thick — up to ₹180/sqft',
        ],
      },
      {
        title: 'Bathroom',
        items: [
          'Ceramic wall tiles, 7 ft height — up to ₹80/sqft',
          'Sanitary ware & CP fittings — up to ₹70,000 per 1,000 sqft',
          'CPVC pipe — Ashirwad / Supreme',
          'EWC, health faucet, wash basin, 2-in-1 wall mixer, overhead shower',
          'Mirror, soap dish, towel rail — worth ₹7,000 per 1,000 sqft',
          'Bathroom doors — waterproof flush doors',
        ],
      },
      {
        title: 'Electrical',
        items: ['Wires — fireproof, Finolex', 'Switches & sockets — GM Modular / Legrand'],
      },
      {
        title: 'Doors & Windows',
        items: [
          'Main door — Burma teak door, teak frame 5"x3.5", ₹40,000',
          'Internal doors — hardwood panelled door, sal wood frame 4"x3"',
          'Windows — white sal wood / UPVC, glass & mesh shutters',
          'Pooja room door — Burma teak, teak frame 5"x2.5", ₹25,000',
        ],
      },
      {
        title: 'Painting',
        items: ['Interior — JK Putty + Apcolite Premium Emulsion', 'Exterior — Asian Primer + Apex Exterior Emulsion'],
      },
      {
        title: 'Miscellaneous',
        items: [
          'Overhead tank — Sintex double layered, 2,000L',
          'Underground sump — 7,000L',
          'Staircase railing — MS railing with teak wood hand rail',
          'Parapet wall, 3 ft height',
          'Window grills — MS grills, enamel paint, as per client requirement, ₹130/sqft',
        ],
      },
    ],
  },
  {
    id: 'regal',
    name: 'Regal Package',
    rate: '₹1,549 / sqft',
    rateNote: 'Incl. GST',
    sections: [
      { title: 'Designs & Drawings', items: ['2D Floor Plan', '3D Elevation', 'Structural Design'] },
      {
        title: 'Structure',
        items: [
          'Structure — RCC framed structure',
          'Steel — Sunvik, Meenakshi, Kamdhenu or equivalent',
          'Aggregates — 20mm & 40mm',
          'Fine aggregate — M sand',
          'Ceiling height — 10 feet',
          'Blocks — Standard Solid Concrete blocks, 6 inch / 4 inch',
          'Cement — ACC, Birla — Grade 43 & 53',
          'RCC Design Mix — M25',
          'Dr. Fixit waterproofing',
        ],
      },
      {
        title: 'Bathroom',
        items: [
          'Ceramic wall tiles, 7 ft height — up to ₹35/sqft',
          'Sanitary ware & CP fittings — up to ₹30,000 per 2,000 sqft',
          'Water closet and sink',
          'Bathroom doors — waterproof flush doors',
        ],
      },
      {
        title: 'Electrical',
        items: ['Wires — fireproof, Finolex', 'Switches & sockets — Anchor Roma'],
      },
      {
        title: 'Flooring',
        items: [
          'Main area — tiles up to ₹50/sqft',
          'Stairs — tiles or granite up to ₹90/sqft',
          'Balcony & open area — tiles up to ₹50/sqft',
          'Bathroom flooring — tiles up to ₹35/sqft',
        ],
      },
      { title: 'Windows', items: ['Aluminium windows with glass shutters'] },
      {
        title: 'Painting',
        items: ['Interior — JK Putty + Tractor Emulsion', 'Exterior — Asian Primer + Ace Exterior Emulsion'],
      },
      {
        title: 'Miscellaneous',
        items: ['Overhead tank — Sintex double layered, 1,000L', 'Staircase railing — MS railing'],
      },
    ],
  },
  {
    id: 'regal-pro',
    name: 'Regal Pro Package',
    rate: '₹1,699 / sqft',
    rateNote: 'Incl. GST',
    sections: [
      { title: 'Designs & Drawings', items: ['2D Floor Plan', '2D Elevation', '3D Elevation', 'Structural Design'] },
      {
        title: 'Structure',
        items: [
          'Structure — RCC framed structure',
          'Steel — JSW Steel',
          'Aggregates — 20mm & 40mm',
          'Fine aggregate — M sand',
          'Ceiling height — 10 feet',
          'Blocks — Standard Solid Concrete blocks, 6 inch / 4 inch',
          'Cement — ACC, Birla — Grade 43 & 53',
          'RCC Design Mix — M25',
          'Dr. Fixit waterproofing',
        ],
      },
      {
        title: 'Bathroom',
        items: [
          'Ceramic wall tiles, 7 ft height — up to ₹40/sqft',
          'Sanitary ware & CP fittings — up to ₹50,000 per 2,000 sqft',
          'Water closet and sink',
          'Bathroom doors — waterproof flush doors',
        ],
      },
      {
        title: 'Electrical',
        items: ['Wires — fireproof, Finolex', 'Switches & sockets — Anchor Roma'],
      },
      {
        title: 'Flooring',
        items: [
          'Main area — tiles up to ₹70/sqft',
          'Stairs — tiles or granite up to ₹100/sqft',
          'Balcony & open area — tiles up to ₹60/sqft',
          'Bathroom flooring — tiles up to ₹40/sqft',
        ],
      },
      {
        title: 'Windows',
        items: ['Aluminium windows with glass shutters', 'Window grills — MS grills, up to ₹150/sqft'],
      },
      {
        title: 'Painting',
        items: ['Interior — JK Putty + Tractor Emulsion', 'Exterior — Asian Primer + Ace Exterior Emulsion'],
      },
      {
        title: 'Miscellaneous',
        items: ['Overhead tank — Sintex double layered, 1,500L', 'Staircase railing — MS railing'],
      },
    ],
  },
];

export const getPackageById = (id) => packages.find((p) => p.id === id);
