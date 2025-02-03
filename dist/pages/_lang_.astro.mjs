/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Df6DIvsM.mjs';
import 'kleur/colors';
import { c as getEntry, r as renderEntry, d as $$TopArea, $ as $$BaseLayout } from '../chunks/TopArea_D8NRZpgd.mjs';
import { g as getLangFromUrl, $ as $$WelcomeBanner, a as $$FrontSection } from '../chunks/WelcomeBanner_cHjEZZDK.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://vgbs742.github.io/");
function getStaticPaths() {
  return [
    { params: { lang: "de" } }
  ];
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = getLangFromUrl(Astro2.url);
  const entry = lang + "/introtext01";
  const introContent = await getEntry("bigBits", entry);
  await renderEntry(introContent);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopArea", $$TopArea, {})} ${renderComponent($$result2, "WelcomeBanner", $$WelcomeBanner, {})} ${maybeRenderHead()}<div class="h-24"></div> ${renderComponent($$result2, "FrontSection", $$FrontSection, { "collection": "news", "sortBy": "date_published", "howMany": "4", "component": "ArticlesNude", "showDate": "true", "sectionTitle": "true" })} <div class="h-24"></div>  ` })} `;
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/pages/[lang]/index.astro", void 0);

const $$file = "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
