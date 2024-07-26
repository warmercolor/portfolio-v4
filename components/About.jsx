import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from 'lucide-react';

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Thaisa Alice Ramalho da Cunha',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+55 (43) 98111-7129',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'thaisalic3@icloud.com',
  },
  {
    icon: <Calendar size={20} />,
    text: 'Nascida em 02 de agosto, de 1999',
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Desenvolvedora Fullstack - Pleno',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'São João do Ivaí - PR',
  },
];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Kenzie Academy',
        qualification: 'Desenvolvimento Fullstack',
        years: '2021 - 2023',
      },
      {
        university: 'JStack',
        qualification: 'React e Banco de Dados',
        years: '2022',
      },
      // {
      //   university: 'Yet Another University',
      //   qualification: 'Ph.D in Computer Science',
      //   years: '2021 - 2025',
      // },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Spro It Solutions - EAWARE',
        role: 'Desenvolvedora Fullstack',
        years: 'mai de 2023 - jul de 2024',
      },
      {
        company: 'Kenzie Academy',
        role: 'Peer Coach | Monitora',
        years: 'jun de 2022 - set de 2022',
      },
      // {
      //   company: 'Tech Innovators',
      //   role: 'Lead Developer',
      //   years: '2022 - Present',
      // },
    ],
  },
];

const skillData = [
  {
    title: 'skills',
    data: [
      {
        ling: 'Front-end',
        name: 'HTML, CSS, SASS, JavaScript, TypeScript, React (JS and Native), Angular, Next.js, HTML5, CSS3, Redux, Sass, Material-UI, Figma',
      },
      {
        ling: 'Back-end',
        name: 'Nest.js, Node.js, Python, Flask, Django, Lua, Express, Firebase',
      },
      {
        ling: 'Banco de Dados',
        name: 'MongoDB, SQL, MySQL, PostgreSQL, SQLite',
      },
      {
        ling: 'Ferramentas e Outros',
        name: 'Docker, Git, Azure, GeoServer, Kafka, Kubernetes, Pandas, Matplotlib, Numpy',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
      },
      {
        imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
      },
      {
        imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg',
      },
      {
        imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      },
      {
        imgPath: '/about/linux.svg',
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          Sobre mim
        </h2>
        <div className='flex flex-col xl:flex-row'>
          {/* image */}
          <div className='hidden xl:flex flex-1 relative'>
            <DevImg
              containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
              imgSrc='/hero/developer.png'
            />
          </div>
          {/* tabs */}
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                  Informações Pessoais
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='qualifications'
                >
                  Qualificações
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className='text-lg mt-12 xl:mt-8'>
                {/* personal */}
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>
                      Qualidade de serviço
                    </h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                      Sou especialista em criar sites intuitivos com
                      tecnologia de ponta, proporcionando dinâmica e envolvente
                      experiências do usuário.
                    </p>
                    {/* icons */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className='flex items-center gap-x-4 mx-auto xl:mx-0'
                            key={index}
                          >
                            <div className='text-primary'>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    {/* <div className='flex flex-col gap-y-2'>
                      <div className='text-primary'>Language Skill</div>
                      <div className='border-b border-border'></div>
                      <div>English, French, Spanish, Italian</div>
                    </div> */}
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value='qualifications'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>
                      Minha jornada
                    </h3>
                    {/* experience & education wrapper */}
                    <div className='grid md:grid-cols-2 gap-y-8'>
                      {/* experience */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <Briefcase />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'experience').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'experience').data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {company}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {role}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <GraduationCap size={28} />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'education').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'education').data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {university}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {qualification}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value='skills'>
                  <div className='text-center xl:text-left'>
                    {/* skills */}
                    <div className='mb-16'>
                    <h3 className='h3 mb-8'>Minhas Competências</h3>
                      {/* <h4 className='text-xl font-semibold mb-2'>Skills</h4> */}
                      <div className='border-b border-border mb-4'></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, 'skills').data.map(
                          (item, index) => {
                            const { ling, name } = item;
                            return (
                              <div
                                className='w-2/4 text-center xl:text-left mx-auto xl:mx-0 mb-5'
                                key={index}
                              >
                                <div className='font-medium' style={{color: '#fe6e58'}}>{ling}</div>
                                <div className='font-medium'>{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className='text-xl font-semibold mb-2 xl:text-left'>
                        Tools
                      </h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* tool list */}
                      <div className='flex gap-x-8 justify-center xl:justify-start'>
                        {getData(skillData, 'tools').data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=''
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
