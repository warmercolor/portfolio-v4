(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{145:function(e,a,r){Promise.resolve().then(r.bind(r,5328))},5328:function(e,a,r){"use strict";r.r(a);var t=r(7437),o=r(2265),n=r(161),i=r(9364);let s=[{image:"/work/project1.jpg",category:"Backend",name:"BandKamp",description:"Projeto criado com Python, Django e utilizado testes unit\xe1rios. Meu foco foi generics Views. Usei tamb\xe9m uma bela documenta\xe7\xe3o que pode conferir acessando o link.",link:null,github:"https://github.com/Kenzie-Academy-Brasil-Developers/m5-bandkamp-generic-view-t-alice"},{image:"/work/project2.jpg",category:"Backend",name:"Kopa do Mundo",description:"Projeto de CRUD, feito em Python, Django, com foco em gerenciar informa\xe7\xf5es b\xe1sicas de sele\xe7\xf5es da Copa do Mundo.",link:null,github:"https://github.com/Kenzie-Academy-Brasil-Developers/m5-kopa-do-mundo-t-alice"},{image:"/work/project3.jpg",category:"Backend",name:"PetKare",description:"Projeto criado com Python e Django, utiliza testes unit\xe1rios. Foi focado em ajudar donos de Pet Shop a guardar dados de animais.",link:null,github:"https://github.com/Kenzie-Academy-Brasil-Developers/m5-pet-kare-t-alice"},{image:"/work/project4.jpg",category:"Frontend",name:"Nu Kenzie",description:"Projeto frontend criado com React, SASS, e algumas libs disponiveis para React. \xc9 uma aplica\xe7\xe3o para gerenciamento de gastos, cadastrando entradas e sa\xeddas.",link:"https://nukenzie-six.vercel.app/Home",github:"https://github.com/warmercolor/react-nu-kenzie"},{image:"/work/project5.png",category:"Frontend",name:"Hub",description:"Projeto front-end criado com React, StyledComponents, ContextAPI, e deploy realizado no Vercel",link:"https://kenzie-hub-alice-ck1728xvq-warmercolor.vercel.app",github:"https://github.com/warmercolor/react-kenzie-hub"},{image:"/work/project6.png",category:"Frontend",name:"2Give",description:"Projeto feito em React, com o proposito de criar uma plataforma onde voc\xea n\xe3o s\xf3 pode encontrar eventos beneficentes, mas tamb\xe9m criar seus pr\xf3prios eventos.",link:"https://2-give-app.vercel.app",github:"https://github.com/grupo3-daniel-m3/2Give-app"},{image:"/work/project8.png",category:"Desing",name:"Financial Dashboard",description:"Painel financeiro interativo com gr\xe1ficos, indicadores de desempenho, e menus de navega\xe7\xe3o. O design se concentra na disposi\xe7\xe3o visual dos dados e na interface com o usu\xe1rio, garantindo a apresenta\xe7\xe3o clara e acess\xedvel das informa\xe7\xf5es financeiras.",link:"https://www.figma.com/design/BwVqe7I6NTWdmcwpoHLZoA/Finacial-Dash?node-id=0-1&t=QzKsiF6vnzcBscOd-1",github:null},{image:"/work/project9.png",category:"Desing",name:"Juice",description:"Design responsivo para um website de sucos frescos, incluindo paleta de cores, tipografia, e layouts para dispositivos m\xf3veis e desktop. Focado na apar\xeancia visual e na organiza\xe7\xe3o dos elementos, como navega\xe7\xe3o, imagens e fontes.",link:"https://warmercolor.github.io/juice-responsive/",github:"https://github.com/warmercolor/juice-responsive"},{image:"/work/project10.png",category:"Frontend",name:"Elecar",description:"Site responsivo criado para a sele\xe7\xe3o de carros de luxo el\xe9tricos. Desenvolvido desde o design no Figma at\xe9 a implementa\xe7\xe3o frontend. O site apresenta uma interface elegante e moderna, com informa\xe7\xf5es detalhadas sobre cada ve\xedculo, incluindo temperatura, quilometragem e n\xedvel de bateria. Inclui tamb\xe9m se\xe7\xf5es sobre a tecnologia dos carros e mais.",link:"https://warmercolor.github.io/responsive-car/",github:"https://github.com/warmercolor/responsive-car"}],c=["all projects",...new Set(s.map(e=>e.category))];a.default=()=>{let[e,a]=(0,o.useState)(c),[r,l]=(0,o.useState)("all projects"),d=s.filter(e=>"all projects"===r?e:e.category===r);return(0,t.jsx)("section",{className:"min-h-screen pt-12",children:(0,t.jsxs)("div",{className:"container mx-auto",children:[(0,t.jsx)("h2",{className:"section-title mb-8 xl:mb-16 text-center mx-auto",children:"Meus projetos"}),(0,t.jsxs)(n.Tabs,{defaultValue:r,className:"mb-24 xl:mb-48",children:[(0,t.jsx)(n.TabsList,{className:"w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none",children:e.map((e,a)=>(0,t.jsx)(n.TabsTrigger,{onClick:()=>l(e),value:e,className:"capitalize w-[162px] md:w-auto",children:e},a))}),(0,t.jsx)("div",{className:"text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4",children:d.map((e,a)=>(0,t.jsx)(n.TabsContent,{value:r,children:(0,t.jsx)(i.Z,{project:e})},a))})]})]})})}},9364:function(e,a,r){"use strict";r.d(a,{Z:function(){return components_ProjectCard}});var t=r(7437),o=r(1396),n=r.n(o),i=r(6691),s=r.n(i),c=r(5477),l=r(1310),d=r(3298);r(2265);var u=r(9213),m=r(3889);let p=(0,u.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function Badge(e){let{className:a,variant:r,...o}=e;return(0,t.jsx)("div",{className:(0,m.cn)(p({variant:r}),a),...o})}var components_ProjectCard=e=>{let{project:a}=e;return(0,t.jsxs)(c.Zb,{className:"group overflow-hidden relative",children:[(0,t.jsx)(c.Ol,{className:"p-0",children:(0,t.jsxs)("div",{className:"relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden",children:[(0,t.jsx)(s(),{className:"absolute bottom-0 shadow-2xl",src:a.image,layout:"fill",objectFit:"cover",alt:a.name,priority:!0}),(0,t.jsxs)("div",{className:"flex gap-x-4",children:[(null==a?void 0:a.link)&&(0,t.jsx)(n(),{href:a.link,className:"bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200",children:(0,t.jsx)(l.Z,{className:"text-white"})}),(null==a?void 0:a.github)&&(0,t.jsx)(n(),{href:a.github,className:"bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300",children:(0,t.jsx)(d.Z,{className:"text-white"})})]})]})}),(0,t.jsxs)("div",{className:"px-8 py-6 h-[340px]",children:[(0,t.jsx)(Badge,{className:"uppercase text-sm font-medium mb-2 absolute top-4 left-5",children:a.category}),(0,t.jsx)("h4",{className:"h4 mb-1",children:a.name}),(0,t.jsx)("p",{className:"text-muted-foreground text-lg",children:a.description})]})]})}},5477:function(e,a,r){"use strict";r.d(a,{Ol:function(){return s},SZ:function(){return l},Zb:function(){return i},ll:function(){return c}});var t=r(7437),o=r(2265),n=r(3889);let i=o.forwardRef((e,a)=>{let{className:r,...o}=e;return(0,t.jsx)("div",{ref:a,className:(0,n.cn)("rounded-[30px] border bg-background text-card-foreground",r),...o})});i.displayName="Card";let s=o.forwardRef((e,a)=>{let{className:r,...o}=e;return(0,t.jsx)("div",{ref:a,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",r),...o})});s.displayName="CardHeader";let c=o.forwardRef((e,a)=>{let{className:r,...o}=e;return(0,t.jsx)("h3",{ref:a,className:(0,n.cn)("text-2xl font-semibold leading-none tracking-tight",r),...o})});c.displayName="CardTitle";let l=o.forwardRef((e,a)=>{let{className:r,...o}=e;return(0,t.jsx)("p",{ref:a,className:(0,n.cn)("text-sm text-muted-foreground",r),...o})});l.displayName="CardDescription";let d=o.forwardRef((e,a)=>{let{className:r,...o}=e;return(0,t.jsx)("div",{ref:a,className:(0,n.cn)("p-6 pt-0",r),...o})});d.displayName="CardContent";let u=o.forwardRef((e,a)=>{let{className:r,...o}=e;return(0,t.jsx)("div",{ref:a,className:(0,n.cn)("flex items-center p-6 pt-0",r),...o})});u.displayName="CardFooter"},161:function(e,a,r){"use strict";r.r(a),r.d(a,{Tabs:function(){return s},TabsContent:function(){return d},TabsList:function(){return c},TabsTrigger:function(){return l}});var t=r(7437),o=r(2265),n=r(4169),i=r(3889);let s=n.fC,c=o.forwardRef((e,a)=>{let{className:r,...o}=e;return(0,t.jsx)(n.aV,{ref:a,className:(0,i.cn)("inline-flex items-center justify-center xl:bg-white p-1 text-muted-foreground rounded-[30px] dark:md:bg-secondary",r),...o})});c.displayName=n.aV.displayName;let l=o.forwardRef((e,a)=>{let{className:r,...o}=e;return(0,t.jsx)(n.xz,{ref:a,className:(0,i.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm h-[48px]",r),...o})});l.displayName=n.xz.displayName;let d=o.forwardRef((e,a)=>{let{className:r,...o}=e;return(0,t.jsx)(n.VY,{ref:a,className:(0,i.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",r),...o})});d.displayName=n.VY.displayName},3889:function(e,a,r){"use strict";r.d(a,{cn:function(){return cn}});var t=r(7042),o=r(4769);function cn(){for(var e=arguments.length,a=Array(e),r=0;r<e;r++)a[r]=arguments[r];return(0,o.m6)((0,t.W)(a))}}},function(e){e.O(0,[284,991,408,971,472,744],function(){return e(e.s=145)}),_N_E=e.O()}]);