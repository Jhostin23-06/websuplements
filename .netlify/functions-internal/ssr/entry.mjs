import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DF-XNaUx.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CpefMNvD.mjs');
const _page1 = () => import('./chunks/acercade_B1y5uqza.mjs');
const _page2 = () => import('./chunks/_id__DsPFLVeT.mjs');
const _page3 = () => import('./chunks/productos_DqIG7cmA.mjs');
const _page4 = () => import('./chunks/index_CJr4G4fm.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.5.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/acercade.astro", _page1],
    ["src/pages/productos/[id].astro", _page2],
    ["src/pages/productos.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "426a7b29-01ab-403e-a2a2-d59cc5af3d5d"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
