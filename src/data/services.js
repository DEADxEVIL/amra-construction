// Sourced from https://amraconstruction.com/ service pages.

export const services = [
  {
    id: 'architectural-design',
    number: '01',
    title: 'Architectural Design',
    icon: 'PencilRuler',
    summary: 'Combining technical requirements with aesthetic intent.',
    description:
      'Architectural design is a discipline that focuses on covering and meeting the needs and demands, to create living spaces, using certain tools and especially, creativity. The aim is to combine the technological and the aesthetic, despite the general belief that architecture is only a technological task.',
    slug: '/services/architectural-design',
  },
  {
    id: 'interior-3d-design',
    number: '02',
    title: 'Interior and 3D Design',
    icon: 'Sofa',
    summary: 'Visualizing every detail before it is built.',
    description:
      'Creating a design on your own requires specialized software that allows you to showcase your creative skills fully. Specialized 3D interior design software is a multifunctional program that lets a designer create a visualization of an idea down to the tiniest detail.',
    slug: '/services/interior-3d-design',
  },
  {
    id: 'structure-planning',
    number: '03',
    title: 'Structure and Planning',
    icon: 'Layers',
    summary: 'Drawings and calculations that guide every build.',
    description:
      'Structural design documents are presented in the form of drawings and calculations. Drawing is a medium used by engineers to explain a project\u2019s design and requirements to contractors and clients — in the form of a blueprint, map, rough sketch, layout, or a roadmap listing the requirements for each structure.',
    slug: '/services/structure-planning',
  },
  {
    id: 'residential-construction',
    number: '04',
    title: 'Residential Construction',
    icon: 'Home',
    summary: 'Homes built to last, within eave height of 6 metres.',
    description:
      'Residential construction means construction work where the construction materials, methods and procedures used are those used for single and multiple family dwelling construction projects, with the dwelling designed to an eave elevation of not more than 6 metres.',
    slug: '/services/residential-construction',
  },
  {
    id: 'commercial-construction',
    number: '05',
    title: 'Commercial Construction',
    icon: 'Building2',
    summary: 'Designing, renovating and building commercial structures.',
    description:
      'Commercial construction involves the designing, renovating and building of commercial structures. Projects use heavy equipment funded by developers, as well as local and national governments.',
    slug: '/services/commercial-construction',
  },
  {
    id: 'project-management',
    number: '06',
    title: 'Project Management',
    icon: 'ClipboardCheck',
    summary: 'Directing every phase, from ideation to completion.',
    description:
      'Construction project management involves directing and organizing each part of the project life cycle, from ideation to completion. It\u2019s a holistic practice with the goal of delivering projects on time and under budget.',
    slug: '/services/project-management',
  },
];

export const getServiceBySlug = (slug) =>
  services.find((s) => s.slug === `/services/${slug}`);
