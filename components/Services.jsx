import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Web Design',
    description:
      'Adoro transformar ideias em experiências visuais incríveis. Com anos de prática em web design, minha missão é criar interfaces que sejam não apenas bonitas, mas também intuitivas e funcionais. Uso o Figma para esboçar e prototipar cada detalhe, garantindo que o design final seja um reflexo perfeito do que o cliente imaginou. Meu objetivo é sempre proporcionar uma experiência de usuário agradável e eficaz, alinhando estética e funcionalidade de maneira harmoniosa.',
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Programação',
    description:
      'A programação é minha paixão e minha especialidade. Trabalhando como desenvolvedora fullstack, utilizo uma ampla gama de tecnologias para construir soluções robustas e inovadoras. Seja criando aplicações interativas com React, desenvolvendo backends poderosos com NestJS, ou integrando serviços de nuvem como Azure DevOps, adoro resolver problemas complexos e ver minhas soluções ajudando as pessoas no dia a dia. Além disso, tenho experiência com interpolação de solos, mapas interativos e análise de dados com Python, o que me permite abordar projetos com uma perspectiva multifacetada.',
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Product Owner',
    description:
      'Como Product Owner, minha função é ser a ponte entre as ideias e a realidade. Adoro trabalhar com equipes diversas para transformar conceitos em produtos tangíveis que realmente atendam às necessidades dos usuários. Foco na definição clara dos objetivos, na priorização das tarefas e na garantia de que todos estão alinhados e motivados. Utilizando metodologias ágeis, asseguro que estamos sempre entregando valor e buscando a inovação contínua. Minha experiência abrange desde a concepção inicial até a entrega final, garantindo que cada etapa do desenvolvimento seja bem gerenciada e bem-sucedida.',
  },
];

const Services = () => {
  return (
    <section className='mt-40 mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          Habilidades
        </h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => {
            return (
              <Card
                className='w-full max-w-[424px] h-[550px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                key={index}
              >
                <CardHeader className='text-primary absolute -top-[60px]'>
                  <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className='text-center'>
                  <CardTitle className='mb-4'>{item.title}</CardTitle>
                  <CardDescription className='text-lg'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
