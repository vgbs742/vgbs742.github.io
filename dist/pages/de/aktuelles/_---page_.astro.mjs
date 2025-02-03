/* empty css                                       */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from '../../../chunks/astro/server_BrY61_ak.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, a as getSlugNoLangFromUrl, b as getSection, c as getOneLang, $ as $$BaseLayout, d as getCollection, s as sortBigFirst, e as $$TopArea } from '../../../chunks/handleCollections_dO9PUwyD.mjs';
import 'clsx';
import { $ as $$SectionTitle, a as $$ArticlesImaged } from '../../../chunks/ArticlesImaged_Qc9ZPecu.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro$2 = createAstro("https://vgbs742.github.io/");
const $$Intro = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Intro;
  return renderTemplate`${maybeRenderHead()}<section class="bg-primary"> <div class="px-8 2xl:max-w-7xl mx-auto py-6"> <div class="grid grid-cols-1 lg:grid-cols-4 text-secondary gap-6"> <p class="text-base lg:col-start-2 leading-relaxed" data-aos="fade-up" data-aos-duration="2000">
I'm a self-taught front-end designer and developer who enjoys creating
        modern designs with Tailwind CSS. I have customers worldwide and have
        had successful projects. Recently, two of my projects were acquired, and
        I'm currently working on Lexington Themes. I also curate Colors &amp;
        Fonts and create VS Code Themes.
</p> <p class="text-base lg:col-start-2 leading-relaxed underline underline-offset-4" data-aos="fade-up" data-aos-duration="2500">
I am currently available for Enquires. If you need a landing page or
        redesign something that you already have, do not hesitate to get in
        contact. <a href="mailto:michael@andreuzza.com">michael@andreuzza.com</a> </p> <p class="text-base lg:col-start-4 leading-relaxed" data-aos="fade-up" data-aos-duration="2500">
As a solo developer, I offer a unique and personalized approach to
        design and build exclusively and responsive landing pages using Astro
        and Tailwind CSS.
</p> <p class="text-base lg:col-start-4 leading-relaxed" data-aos="fade-up" data-aos-duration="3000">
My singular focus on your project ensures efficient and effective
        results, delivering a stunning website tailored to your specific
        business needs and goals. Trust on my expertise allows to craft anything
        that will help you stand out and convert visitors into customers.
</p> </div> </div> </section>`;
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/general/Intro.astro", void 0);

const $$Astro$1 = createAstro("https://vgbs742.github.io/");
const $$PageSelector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PageSelector;
  const { thin, thick, page, putAnchor } = Astro2.props;
  var partAnchor = "";
  if (putAnchor) {
    partAnchor += "#" + putAnchor;
  }
  var pageLinks = "";
  if (page.lastPage != 1) {
    var baseUrl = page.url.first;
    if (!baseUrl) {
      baseUrl = page.url.current;
    }
    baseUrl += "/";
    pageLinks += "<span class='flex flex-row items-center'>";
    pageLinks += "<a ";
    if (page.url.prev) {
      pageLinks += "href='" + page.url.prev + partAnchor + "'";
    }
    pageLinks += " class='aspect-square w-3 h-3 border-t-2 border-l-2 border-secondary -rotate-45'>";
    pageLinks += "</a>";
    for (let i = 0; i < page.lastPage; i++) {
      var classes = "px-1";
      if (i + 1 == page.currentPage) {
        classes += " underline";
      }
      if (i + 1 == 1) {
        pageLinks += " <a class='" + classes + "' href='" + baseUrl + partAnchor + "'>" + (i + 1) + "</a> ";
      } else {
        pageLinks += " <a class='" + classes + "' href='" + baseUrl + (i + 1) + partAnchor + "'>" + (i + 1) + "</a> ";
      }
    }
    pageLinks += "<a ";
    if (page.url.next) {
      pageLinks += "href='" + page.url.next + partAnchor + "'";
    }
    pageLinks += " class='aspect-square w-3 h-3 border-b-2 border-r-2 border-secondary -rotate-45'>";
    pageLinks += "</a>";
    pageLinks += "";
    pageLinks += "</span>";
  }
  return renderTemplate`${maybeRenderHead()}<div class="px-8 2xl:max-w-7xl mx-auto py-3"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "thin": thin, "thick": thick, "putAnchor": putAnchor, "pageLinks": pageLinks })} </div>`;
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/technical/PageSelector.astro", void 0);

const $$Astro = createAstro("https://vgbs742.github.io/");
async function getStaticPaths({ paginate }) {
  const sortBy = "date_published";
  const pages = await getCollection("news");
  const pagesThisLang = getOneLang(pages, "de");
  const pagesOrdered = sortBigFirst(pagesThisLang, sortBy);
  return paginate(pagesOrdered, {
    pageSize: 12
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const lang = getLangFromUrl(Astro2.url);
  getSlugNoLangFromUrl(Astro2.url);
  const { page } = Astro2.props;
  const collection = "news";
  const items = page.data;
  const sectionDataRaw = await getSection(collection);
  const sectionData = getOneLang(sectionDataRaw, lang)[0];
  const keywords = sectionData.data.keywords;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "*keywords": keywords, "title": sectionData.data.title, "excerpt": sectionData.data.excerpt }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopArea", $$TopArea, {})} ${renderComponent($$result2, "Intro", $$Intro, {})} ${renderComponent($$result2, "PageSelector", $$PageSelector, { "page": page, "putAnchor": "articles", "thin": sectionData.data.items.title.thin, "thick": sectionData.data.items.title.thick })} ${renderComponent($$result2, "ArticlesImaged", $$ArticlesImaged, { "items": items, "collection": collection, "sectionData": sectionData, "showDate": "true" })} ${renderComponent($$result2, "PageSelector", $$PageSelector, { "page": page })} ` })}`;
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/pages/de/aktuelles/[...page].astro", void 0);

const $$file = "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/pages/de/aktuelles/[...page].astro";
const $$url = "/vgbs742.github.io/de/aktuelles/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
