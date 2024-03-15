/* empty css                             */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent } from '../astro_BSef-ilO.mjs';
import { a as $$Image, $ as $$Layout } from './_id__CN62zpmo.mjs';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="py-8 px-4 lg:py-10 lg:px-0 text-center flex justify-between w-full"> <div class="lg:flex lg:items-center md:flex md:items-center lg:justify-center md:justify-center lg:gap-10 md:gap-10 w-full text-center mb-6 mt-20"> <div> <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-white">
Failoc Suplementos
</h2> <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400 lg:w-96 md:w-96">
Toda la información acerca de los suplementos que necesitas para mejorar tu rendimiento.
</p> </div> ${renderComponent($$result, "Image", $$Image, { "class": "text-white bg-white rounded-full lg:mx-0 md:mx-0 mx-auto mt-5 lg:mt-0", "loading": "lazy", "format": "png", "width": 150, "height": 150, "src": "/logo.png", "alt": "Logo Suplementos" })} </div> </header>`;
}, "D:/Web Moderno/web-tavo/web-suplementos/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Suplementos Failoc", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "class": "col-span-1 w-full rounded-xl", "src": "/banner2.jpg", "alt": "Banner Inicio", "width": 200, "height": 200, "data-astro-cid-j7pv25f6": true })} <h1 class="font-extralight text-justify sm:text-sm md:text-lg lg:text-xl dark:text-gray-400 text-pretty" data-astro-cid-j7pv25f6>Lograr una alimentación equilibrada que satisfaga todas tus necesidades nutricionales puede ser todo un desafío. En <span data-astro-cid-j7pv25f6>FAILOC SUPLEMENTOS</span>, hemos creado una empresa pensada para ayudarte en este camino. Nos dedicamos a proporcionarte los mejores suplementos para complementar tu dieta y garantizar que obtengas los nutrientes esenciales que tu cuerpo necesita. Descubre cómo podemos ayudarte a alcanzar tus objetivos de bienestar con nuestra amplia gama de productos de alta calidad. <span data-astro-cid-j7pv25f6>¡Bienvenido a una vida más saludable con FAILOC SUPLEMENTOS!</span></h1> </div> ` })} `;
}, "D:/Web Moderno/web-tavo/web-suplementos/src/pages/index.astro", void 0);

const $$file = "D:/Web Moderno/web-tavo/web-suplementos/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
