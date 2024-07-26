'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/project1.jpg',
    category: 'Backend',
    name: 'BandKamp',
    description:
      'Projeto criado com Python, Django e utilizado testes unitários. Meu foco foi generics Views. Usei também uma bela documentação que pode conferir acessando o link.',
    link: null,
    github: 'https://github.com/Kenzie-Academy-Brasil-Developers/m5-bandkamp-generic-view-t-alice',
  },
  {
    image: '/work/project2.jpg',
    category: 'Backend',
    name: 'Kopa do Mundo',
    description:
      'Projeto de CRUD, feito em Python, Django, com foco em gerenciar informações básicas de seleções da Copa do Mundo.',
    link: null,
    github: 'https://github.com/Kenzie-Academy-Brasil-Developers/m5-kopa-do-mundo-t-alice',
  },
  {
    image: '/work/project3.jpg',
    category: 'Backend',
    name: 'PetKare',
    description:
      'Projeto criado com Python e Django, utiliza testes unitários. Foi focado em ajudar donos de Pet Shop a guardar dados de animais.',
    link: null,
    github: 'https://github.com/Kenzie-Academy-Brasil-Developers/m5-pet-kare-t-alice',
  },
  {
    image: '/work/project4.jpg',
    category: 'Frontend',
    name: 'Nu Kenzie',
    description:
      'Projeto frontend criado com React, SASS, e algumas libs disponiveis para React. É uma aplicação para gerenciamento de gastos, cadastrando entradas e saídas.',
    link: 'https://nukenzie-six.vercel.app/Home',
    github: 'https://github.com/warmercolor/react-nu-kenzie',
  },
  {
    image: '/work/project5.png',
    category: 'Frontend',
    name: 'Hub',
    description:
      'Projeto front-end criado com React, StyledComponents, ContextAPI, e deploy realizado no Vercel',
    link: 'https://kenzie-hub-alice-ck1728xvq-warmercolor.vercel.app',
    github: 'https://github.com/warmercolor/react-kenzie-hub',
  },
  {
    image: '/work/project6.png',
    category: 'Frontend',
    name: '2Give',
    description:
      'Projeto feito em React, com o proposito de criar uma plataforma onde você não só pode encontrar eventos beneficentes, mas também criar seus próprios eventos.',
    link: 'https://2-give-app.vercel.app',
    github: 'https://github.com/grupo3-daniel-m3/2Give-app',
  },
  {
    image: '/work/project8.png',
    category: 'Desing',
    name: 'Financial Dashboard',
    description: 'Painel financeiro interativo com gráficos, indicadores de desempenho, e menus de navegação. O design se concentra na disposição visual dos dados e na interface com o usuário, garantindo a apresentação clara e acessível das informações financeiras.',
    link: 'https://www.figma.com/design/BwVqe7I6NTWdmcwpoHLZoA/Finacial-Dash?node-id=0-1&t=QzKsiF6vnzcBscOd-1',
    github: null,
  },
  {
    image: '/work/project9.png',
    category: 'Desing',
    name: 'Juice',
    description: 'Design responsivo para um website de sucos frescos, incluindo paleta de cores, tipografia, e layouts para dispositivos móveis e desktop. Focado na aparência visual e na organização dos elementos, como navegação, imagens e fontes.',
    link: 'https://warmercolor.github.io/juice-responsive/',
    github: 'https://github.com/warmercolor/juice-responsive',
  },
  {
    image: '/work/project10.png',
    category: 'Frontend',
    name: 'Elecar',
    description: 'Site responsivo criado para a seleção de carros de luxo elétricos. Desenvolvido desde o design no Figma até a implementação frontend. O site apresenta uma interface elegante e moderna, com informações detalhadas sobre cada veículo, incluindo temperatura, quilometragem e nível de bateria. Inclui também seções sobre a tecnologia dos carros e mais.',
    link: 'https://warmercolor.github.io/responsive-car/',
    github: 'https://github.com/warmercolor/responsive-car'
  }
  
];

// remove category duplicates
const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    return category === 'all projects'
      ? project
      : project.category === category;
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          Meus projetos
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
