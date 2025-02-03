/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate } from '../chunks/astro/server_BrY61_ak.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://vgbs742.github.io/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate``;
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/pages/index.astro", void 0);

const $$file = "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/pages/index.astro";
const $$url = "/vgbs742.github.io";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
