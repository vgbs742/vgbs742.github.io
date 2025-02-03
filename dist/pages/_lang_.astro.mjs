/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, f as renderSlot, e as addAttribute } from '../chunks/astro/server_BrY61_ak.mjs';
import 'kleur/colors';
import { i as formatDate, d as getCollection, c as getOneLang, s as sortBigFirst, b as getSection, h as getEntry, r as renderEntry, e as $$TopArea, $ as $$BaseLayout } from '../chunks/handleCollections_dO9PUwyD.mjs';
import { g as getLangFromUrl, $ as $$SectionTitle, a as $$ArticlesImaged } from '../chunks/ArticlesImaged_Qc9ZPecu.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://vgbs742.github.io/");
const $$Numbered = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Numbered;
  const lang = getLangFromUrl(Astro2.url);
  const { items, collection, showDate: showDate2, sectionTitle: sectionTitle2, sectionData, howMany, bothThin } = Astro2.props;
  function calculateAosDuration(index) {
    return 1500 + index * 500;
  }
  return renderTemplate`${maybeRenderHead()}<section class="bg-primary"> <div class="px-8 2xl:max-w-7xl mx-auto py-3"> <div class="space-y-2"> <!-- Section Title and Decorative Elements --> ${sectionTitle2 == "true" && renderTemplate`${renderComponent($$result, "SectionTitle", $$SectionTitle, { "thin": sectionData.data.name.thin, "thick": sectionData.data.name.thick, "linkUrl": sectionData.data.slug, "linkText": sectionData.data.seeAll, "bothThin": bothThin })}`} </div> <div> ${renderSlot($$result, $$slots["default"])} </div> <ul class="mx-auto grid grid-cols-1  sm:grid-cols-2 text-secondary md:grid-cols-3 lg:grid-cols-4 items-start gap-6 mt-3 lg:mt-24" role="list"> ${items.map((item, index) => renderTemplate`<li class="flow-root h-full" data-aos="fade-up"${addAttribute(calculateAosDuration(index), "data-aos-duration")}> <div class="h-full"> <div class="h-full flex flex-col justify-between"> <div class="grow"> <p class="group-hover:text-secondary/70 text-secondary text-9xl font-black lg:rotate-90 xl:-translate-x-28 lg:-translate-x-16 lg:mb-8 xl:mb-0  lg:pb-8">
0${index + 1}.
</p> <h3 class="italic text-2xl block font-bold">${item.data.headline}</h3> <p class="text-base mt-3 leading-relaxed"> ${item.data.excerpt} </p> </div> <div class="mt-2"> <a${addAttribute("/" + lang + "/" + sectionData.data.slug + "/" + item.data.slug, "href")} class="mt-3 text-base font-semibold"> ${sectionData.data.readIt} &nbsp; ↗
</a> </div> </div> </div> </li>`)} </ul> </div> </section>`;
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/general/Numbered.astro", void 0);

const $$Astro$2 = createAstro("https://vgbs742.github.io/");
const $$ArticlesNude = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ArticlesNude;
  const lang = getLangFromUrl(Astro2.url);
  const { items, collection, showDate: showDate2, sectionTitle, sectionData, bothThin } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-primary"> <div class="px-8 2xl:max-w-7xl mx-auto py-6"> ${sectionTitle == "true" && renderTemplate`${renderComponent($$result, "SectionTitle", $$SectionTitle, { "thin": sectionData.data.name.thin, "thick": sectionData.data.name.thick, "linkUrl": sectionData.data.slug, "linkText": sectionData.data.seeAll, "bothThin": bothThin })}`} <div> ${renderSlot($$result, $$slots["default"])} </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-secondary gap-6 pt-2 mt-2"> ${items.map((item, index) => renderTemplate`<div class="h-full flex flex-col"> <h3 class="italic text-2xl block"> ${item.data.headline} </h3> ${(item.data.date_published || item.data.author) && showDate2 == "true" && renderTemplate`<div class="text-sm mt-1 font-light italic"><span>${formatDate(item.data.date_published)}</span> <span></span></div>`} <p class="text-sm leading-relaxed mt-1.5 grow"> ${item.data.excerpt} </p> <div class="mt-2"> <a${addAttribute("/" + lang + "/" + sectionData.data.slug + "/" + item.data.slug, "href")} class="mt-3 text-base font-semibold"> ${sectionData.data.readIt} &nbsp; ↗
</a> </div> </div>`)} </div> </div> </section>`;
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/general/ArticlesNude.astro", void 0);

const $$Astro$1 = createAstro("https://vgbs742.github.io/");
const $$FrontSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FrontSection;
  const lang = getLangFromUrl(Astro2.url);
  const { collection, howMany, component, showDate, sectionTitle, bothThin, sortBy } = Astro2.props;
  const itemsAllLang = await getCollection(collection);
  const itemsUnorderly = getOneLang(itemsAllLang, lang);
  const itemsSorted = sortBigFirst(itemsUnorderly, sortBy);
  const items = itemsSorted.slice(0, howMany);
  const sectionDataRaw = await getSection(collection);
  const sectionData = getOneLang(sectionDataRaw, lang)[0];
  return renderTemplate`${component == "ArticlesImaged" && renderTemplate`${renderComponent($$result, "ArticlesImaged", $$ArticlesImaged, { "items": items, "collection": collection, "sectionData": sectionData, "showDate": showDate, "sectionTitle": sectionTitle, "bothThin": bothThin }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}${component == "ArticlesNude" && renderTemplate`${renderComponent($$result, "ArticlesNude", $$ArticlesNude, { "items": items, "collection": collection, "sectionData": sectionData, "showDate": showDate, "sectionTitle": sectionTitle, "bothThin": bothThin }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}${component == "Numbered" && renderTemplate`${renderComponent($$result, "Numbered", $$Numbered, { "items": items, "collection": collection, "sectionData": sectionData, "showDate": showDate, "sectionTitle": sectionTitle, "bothThin": bothThin }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/technical/FrontSection.astro", void 0);

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
  const { Content: Intro } = await renderEntry(introContent);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopArea", $$TopArea, {})} ${renderComponent($$result2, "Intro", Intro, {})} ${maybeRenderHead()}<div class="h-24"></div> ${renderComponent($$result2, "FrontSection", $$FrontSection, { "collection": "news", "sortBy": "date_published", "howMany": "4", "component": "ArticlesNude", "showDate": "true", "sectionTitle": "true" })} <div class="h-24"></div>  ` })} `;
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/pages/[lang]/index.astro", void 0);

const $$file = "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/pages/[lang]/index.astro";
const $$url = "/vgbs742.github.io/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
