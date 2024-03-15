/* empty css                             */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent, h as addAttribute } from '../astro_BSef-ilO.mjs';
import { a as $$Image, p as productos, $ as $$Layout } from './_id__CN62zpmo.mjs';

const $$Astro$1 = createAstro();
const $$Producto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Producto;
  const { producto, href } = Astro2.props;
  const { id, title, description, image } = producto;
  return renderTemplate`${maybeRenderHead()}<article class="relative flex flex-col items-center justify-center max-w-full p-[1px] rounded-md bg-gradient-to-b from-white/20 via-transparent to-transparent hover:via-white/10 group"> <div class="bg-[#000214]/50 flex-1 group-hover:bg-[#000214]/10 w-full px-6 py-10 rounded transition"> <figure class="flex items-center justify-center"> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-full", "alt": "Producto 1", "src": image, "width": 200, "height": 200 })} </figure> <h3 class="mt-4 text-pretty text-2xl font-bold text-center text-white"> <a${addAttribute(href ?? "#", "href")} class="text-pretty">${title} </a> </h3> <p class="text-xl text-center text-sky-200 text-pretty">${description}</p> </div> </article>`;
}, "D:/Web Moderno/web-tavo/web-suplementos/src/components/Producto.astro", void 0);

const $$Astro = createAstro();
const $$Productos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Productos;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Productos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 mt-32 sm:grid-cols-2 my-4 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8"> ${productos.map((producto) => renderTemplate`${renderComponent($$result2, "Producto", $$Producto, { "producto": producto, "href": `/productos/${producto.id}` })}`)} <img src="../../public/banner.jpg" alt="Banner" class="w-full rounded-md lg:col-span-2 sm:col-span-full"> </div> ` })}`;
}, "D:/Web Moderno/web-tavo/web-suplementos/src/pages/productos.astro", void 0);

const $$file = "D:/Web Moderno/web-tavo/web-suplementos/src/pages/productos.astro";
const $$url = "/productos";

export { $$Productos as default, $$file as file, $$url as url };
