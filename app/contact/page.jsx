import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
// components
import Form from '@/components/Form';

const Contact = () => {
  return (
    <section>
      <div className='container mx-auto'>
        {/* text & illustration */}
        <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
          {/* text */}
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              Diga Olá 👋
            </div>
            <h1 className='h1 max-w-md mb-8'>Vamos trabalhar juntos.</h1>
            <p className='subtitle max-w-[400px]'>
            Está interessado em colaborar ou precisa de um serviço específico? Adoraria saber mais sobre seu projeto e como posso ajudar a transformar suas ideias em realidade. Não hesite em entrar em contato. Vamos juntos criar algo incrível!
            </p>
          </div>
          {/* illustration */}
          <div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>
        </div>
        {/* info text & form */}
        <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
          {/* info text */}
          <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
            {/* mail */}
            <div className='flex items-center gap-x-8'>
              <MailIcon size={18} className='text-primary' />
              <div>thaisalic3@icloud.com</div>
            </div>
            {/* address */}
            <div className='flex items-center gap-x-8'>
              <HomeIcon size={18} className='text-primary' />
              <div>São João do Ivaí - PR</div>
            </div>
            {/* phone */}
            <div className='flex items-center gap-x-8'>
              <PhoneCall size={18} className='text-primary' />
              <div>+55 (43) 98111-7129</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
