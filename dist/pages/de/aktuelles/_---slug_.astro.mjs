/* empty css                                       */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent } from '../../../chunks/astro/server_Df6DIvsM.mjs';
import 'kleur/colors';
import { $ as $$Slug } from '../../../chunks/slug_BB6OSfNx.mjs';
import { g as getCollection, a as getOneLang } from '../../../chunks/TopArea_D8NRZpgd.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://vgbs742.github.io/");
async function getStaticPaths() {
  const pages = await getCollection("news");
  const pagesThisLang = getOneLang(pages, "de");
  const pagesToMake = pagesThisLang.filter((page) => {
    return page.data.make_page != false;
  });
  const paths = pagesToMake.map((page) => {
    const slug = page.data.slug;
    return { params: { slug: slug || void 0 }, props: { page, pages } };
  });
  return paths;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const { page, pages } = Astro2.props;
  const splitSlug = page.filePath.split("/");
  const lang = splitSlug[splitSlug.length - 2];
  return renderTemplate`${renderComponent($$result, "Page", $$Slug, { "lang": lang, "slug": slug, "page": page, "pages": pages })}`;
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/pages/de/aktuelles/[...slug].astro", void 0);

const $$file = "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/pages/de/aktuelles/[...slug].astro";
const $$url = "/de/aktuelles/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
