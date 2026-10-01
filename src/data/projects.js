// Sourced from https://amraconstruction.com/ "Our Projects" section.
// Images point to the original AMRA-hosted files — replace with local/optimized
// copies in src/assets/images/projects/ if you have licensed copies on hand.

const slugify = (name, location) =>
  `${name}-${location}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const raw = [
  {
    name: 'Sahid Alam',
    location: 'Purnea',
    area: '4500',
    floors: 'G+2',
    image:
      'https://amraconstruction.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-27-at-7.56.37-PM.jpeg',
  },
  {
    name: 'Sanju Naik',
    location: 'Forbesganj',
    area: '6000',
    floors: 'G+2',
    image:
      'https://amraconstruction.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-25-at-4.30.45-PM.jpeg',
  },
  {
    name: 'Guncha Perween',
    location: 'Purnea',
    area: '4200',
    floors: 'G+1',
    image:
      'https://amraconstruction.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-25-at-4.30.45-PM-1.jpeg',
  },
  {
    name: 'Naiyer Iqubal',
    location: 'Purnea',
    area: '3800',
    floors: 'G+1',
    image:
      'https://amraconstruction.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-25-at-4.30.46-PM.jpeg',
  },
  {
    name: 'Sanjay Tiwari',
    location: 'Purnea',
    area: '8400',
    floors: 'G+3',
    image:
      'https://amraconstruction.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-25-at-4.30.44-PM-1-1.jpeg',
  },
  {
    name: 'Mantu Ji',
    location: 'Purnea',
    area: '4000',
    floors: 'G+2',
    image:
      'https://amraconstruction.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-25-at-4.30.44-PM.jpeg',
  },
];

export const projects = raw.map((p, i) => ({
  id: slugify(p.name, p.location),
  number: String(i + 1).padStart(2, '0'),
  ...p,
  slug: `/projects/${slugify(p.name, p.location)}`,
}));

export const getProjectBySlug = (slug) =>
  projects.find((p) => p.id === slug);
