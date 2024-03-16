import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CY8z7jmD.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BVtx-owT.mjs');
const _page1 = () => import('./chunks/acercade_CbBf8cbD.mjs');
const _page2 = () => import('./chunks/ofertas_LlcAOjOZ.mjs');
const _page3 = () => import('./chunks/_id__kNzeAhO9.mjs');
const _page4 = () => import('./chunks/productos_BrsJippx.mjs');
const _page5 = () => import('./chunks/index_DZKQcyN8.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.5.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/acercade.astro", _page1],
    ["src/pages/ofertas.astro", _page2],
    ["src/pages/productos/[id].astro", _page3],
    ["src/pages/productos.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "6e9dc2b7-77ec-459b-9ff7-80de9c35b500"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
