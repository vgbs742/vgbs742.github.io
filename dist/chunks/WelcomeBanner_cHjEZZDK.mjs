import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, b as renderComponent, u as unescapeHTML, F as Fragment, f as renderSlot } from './astro/server_Df6DIvsM.mjs';
import 'kleur/colors';
import { f as formatDate, r as renderEntry, g as getCollection, a as getOneLang, s as sortBigFirst, i as getSection } from './TopArea_D8NRZpgd.mjs';
import { _ as __vite_glob_0_0 } from './introText01_DGwStZJa.mjs';
import { _ as __vite_glob_0_1 } from './introText01_Hexsz7eE.mjs';
import { _ as __vite_glob_0_2 } from './introText01_BHzjs0QG.mjs';
import { _ as __vite_glob_0_3 } from './test-1_DKyCbPAq.mjs';
import { _ as __vite_glob_0_4 } from './test-2_DMDUUz6b.mjs';
import { _ as __vite_glob_0_5 } from './test-3_B0VSyu_z.mjs';
import { _ as __vite_glob_0_6 } from './test-4_DY709JbU.mjs';
import { _ as __vite_glob_0_7 } from './test-1_Cs4gX_08.mjs';
import { _ as __vite_glob_0_8 } from './test-2_DUj2qBIv.mjs';
import { _ as __vite_glob_0_9 } from './test-4_BisXgceu.mjs';
import { _ as __vite_glob_0_10 } from './test-WTF_DEwLSNxU.mjs';
import { _ as __vite_glob_0_11 } from './test-1_D-2jQt3Y.mjs';
import { _ as __vite_glob_0_12 } from './test-4_D_Yn3HLm.mjs';
import { _ as __vite_glob_0_13 } from './test-1_B-VmweYT.mjs';
import { _ as __vite_glob_0_14 } from './test-4_D98oopRI.mjs';
import { _ as __vite_glob_0_15 } from './news_D2UvsUsg.mjs';
import { _ as __vite_glob_0_16 } from './news_C5PxnAXS.mjs';
import { _ as __vite_glob_0_17 } from './news_2HOOaFug.mjs';
import { _ as __vite_glob_0_18 } from './test-1_CmKkp2Bu.mjs';
import { _ as __vite_glob_0_19 } from './test-2_CC2lUxN5.mjs';
import { _ as __vite_glob_0_20 } from './test-4_2DOY_ezE.mjs';
import { _ as __vite_glob_0_21 } from './test-WTF_D4m8f4KN.mjs';
import { _ as __vite_glob_0_22 } from './test-1_DYqncqb1.mjs';
import { _ as __vite_glob_0_23 } from './test-4_xCHnviA7.mjs';
import { _ as __vite_glob_0_24 } from './test-1_BKIaPqWT.mjs';
import { _ as __vite_glob_0_25 } from './test-4_Bj5lXkPp.mjs';
/* empty css                         */
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_CUAaKfUh.mjs';

const $$Astro$4 = createAstro("https://vgbs742.github.io/");
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { thin, thick, linkUrl, linkText, pageLinks, putAnchor, bothThin, hideFirst, tagLine } = Astro2.props;
  return renderTemplate`${(thin || thick || linkText || pageLinks) && renderTemplate`${maybeRenderHead()}<spanm${addAttribute(putAnchor, "id")}></spanm>
<div class="mt-6"><div class="w-full flex flex-row space-between align-center justify-center h-headingHeight"><div class="grid grid-cols-1 grid-rows-1 w-full"><h3 class="text-secondary pb-headingPadding w-full text-4xl col-start-1 row-start-1 z-0 ml-0 font-title tracking-widest flex flex-row justify-center self-end" data-aos="fade-up" data-aos-duration="1500"><span class="self-end">${thin}</span></h3><h3 class="text-primary pb-headingPadding bg-secondary w-full text-4xl col-start-1 row-start-1 z-10 ml-0 font-title tracking-widest overflow-hidden max-h-headingLineA flex flex-row justify-center self-end" data-aos="fade-up" data-aos-duration="1500"><span class="self-end">${thin}</span><span class="self-end">&nbsp;</span><span class="self-end">${thick}</span></h3></div>${tagLine && renderTemplate`<span class="hidden md:flex flex-grow">&nbsp;-&nbsp;${tagLine}</span>`}<!--{linkUrl && <span class="grow text-right"><a class="font-bold text-secondary text-right" href={linkUrl}>
			{linkText} &nbsp; ↗
		</a></span>}-->${pageLinks && renderTemplate`<div class="text-secondary">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(pageLinks)}` })}</div>`}</div>${tagLine && renderTemplate`<span class="italic md:hidden">&nbsp;-&nbsp;${tagLine}</span>`}<!-- <div 
		class="h-0.5 bg-secondary -mt-2"
		>
	</div>--></div>`}`;
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/snippets/SectionTitle.astro", void 0);

const defaultLang = "de";
const ui = {
  en: {
    "nav.index": "Home",
    "nav.about": "About",
    "nav.news": "News"
  },
  fr: {
    "nav.index": "Accueil",
    "nav.about": "à propos",
    "nav.news": "nouvelles"
  },
  de: {
    "nav.index": "Start",
    "nav.about": "über uns",
    "nav.news": "Neuigkeiten"
  }
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}

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
  return renderTemplate`${maybeRenderHead()}<section class="bg-primary"> <div class="px-8 2xl:max-w-7xl mx-auto py-6"> ${sectionTitle == "true" && renderTemplate`${renderComponent($$result, "SectionTitle", $$SectionTitle, { "thin": sectionData.data.name.thin, "thick": sectionData.data.name.thick, "linkUrl": sectionData.data.slug, "linkText": sectionData.data.seeAll, "bothThin": bothThin })}`} <div> ${renderSlot($$result, $$slots["default"])} </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-secondary gap-6 pt-2 mt-2"> ${items.map((item, index) => renderTemplate`<div class="h-full flex flex-col"> <h3 class="font-title text-2xl block"> ${item.data.headline} </h3> ${(item.data.date_published || item.data.author) && showDate2 == "true" && renderTemplate`<div class="text-sm mt-0.5 font-light italic"><span>${formatDate(item.data.date_published)}</span> <span></span></div>`} <p class="text-sm leading-relaxed mt-1 grow"> ${item.data.excerpt} </p> <div class="mt-2"> ${item.data.make_page != false && renderTemplate`<a${addAttribute("/" + lang + "/" + sectionData.data.slug + "/" + item.data.slug, "href")} class="mt-3 text-base font-semibold">${sectionData.data.readIt} &nbsp; ↗</a>`} </div> </div>`)} </div> </div> </section>`;
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/general/ArticlesNude.astro", void 0);

const fallbackImg = new Proxy({"src":"/_astro/ph.D6tWTRhR.svg","width":399,"height":289,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/assets/for_content/img/fallback/ph.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/assets/for_content/img/fallback/ph.svg");
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://vgbs742.github.io/");
const $$ArticlesImaged = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ArticlesImaged;
  const lang = getLangFromUrl(Astro2.url);
  const { items: itemsRaw, collection, showDate, sectionTitle, sectionData, bothThin } = Astro2.props;
  var items = itemsRaw.filter((itemRaw) => itemRaw.data.is_draft != true);
  function calculateAosDuration(index) {
    return 1500 + index * 500;
  }
  for (let i = 0; i < items.length; i++) {
    await renderEntry(items[i]);
  }
  const matches1 = /* #__PURE__ */ Object.assign({"../../collections/bigBits/de/introText01.mdx": __vite_glob_0_0,"../../collections/bigBits/en/introText01.mdx": __vite_glob_0_1,"../../collections/bigBits/fr/introText01.mdx": __vite_glob_0_2,"../../collections/news/de/test-1.mdx": __vite_glob_0_3,"../../collections/news/de/test-2.mdx": __vite_glob_0_4,"../../collections/news/de/test-3.mdx": __vite_glob_0_5,"../../collections/news/de/test-4.mdx": __vite_glob_0_6,"../../collections/overview/de/test-1.mdx": __vite_glob_0_7,"../../collections/overview/de/test-2.mdx": __vite_glob_0_8,"../../collections/overview/de/test-4.mdx": __vite_glob_0_9,"../../collections/overview/de/test-WTF.mdx": __vite_glob_0_10,"../../collections/overview/en/test-1.mdx": __vite_glob_0_11,"../../collections/overview/en/test-4.mdx": __vite_glob_0_12,"../../collections/overview/fr/test-1.mdx": __vite_glob_0_13,"../../collections/overview/fr/test-4.mdx": __vite_glob_0_14,"../../collections/sections/de/news.mdx": __vite_glob_0_15,"../../collections/sections/en/news.mdx": __vite_glob_0_16,"../../collections/sections/fr/news.mdx": __vite_glob_0_17,"../../collections/test/de/test-1.mdx": __vite_glob_0_18,"../../collections/test/de/test-2.mdx": __vite_glob_0_19,"../../collections/test/de/test-4.mdx": __vite_glob_0_20,"../../collections/test/de/test-WTF.mdx": __vite_glob_0_21,"../../collections/test/en/test-1.mdx": __vite_glob_0_22,"../../collections/test/en/test-4.mdx": __vite_glob_0_23,"../../collections/test/fr/test-1.mdx": __vite_glob_0_24,"../../collections/test/fr/test-4.mdx": __vite_glob_0_25});
  const posts1 = Object.values(matches1);
  for (let i = 0; i < posts1.length; i++) {
  }
  for (let i = 0; i < items.length; i++) {
    const singlePostForThumb = posts1.filter(
      (post) => {
        post.frontmatter.slug == items[i].data.slug;
        return post.frontmatter.slug == items[i].data.slug;
      }
    );
    if (singlePostForThumb[0].thumb) {
      items[i]["thumb"] = singlePostForThumb[0].thumb;
    } else {
      items[i]["thumb"] = fallbackImg;
    }
  }
  return renderTemplate`${maybeRenderHead()}<section class="bg-primary" data-astro-cid-fguvdabe> <div class="px-8 2xl:max-w-7xl mx-auto py-3" data-astro-cid-fguvdabe> <div class="space-y-2" data-astro-cid-fguvdabe> <!-- Section Title and Decorative Elements --> ${sectionTitle == "true" && renderTemplate`${renderComponent($$result, "SectionTitle", $$SectionTitle, { "thin": sectionData.data.name.thin, "thick": sectionData.data.name.thick, "linkUrl": sectionData.data.slug, "linkText": sectionData.data.seeAll, "bothThin": bothThin, "data-astro-cid-fguvdabe": true })}`} </div> <div data-astro-cid-fguvdabe> ${renderSlot($$result, $$slots["default"])} </div> <ul class="mx-auto grid grid-cols-1  sm:grid-cols-2 text-secondary md:grid-cols-3 lg:grid-cols-4 items-start gap-6 mt-2 pt-2" role="list" data-astro-cid-fguvdabe> ${items.map((item, index) => renderTemplate`<li class="flow-root h-full" data-aos="fade-up"${addAttribute(calculateAosDuration(index), "data-aos-duration")} data-astro-cid-fguvdabe> <div class="h-full" data-astro-cid-fguvdabe> <div class="h-full flex flex-col justify-between" data-astro-cid-fguvdabe> <div class="grow" data-astro-cid-fguvdabe> <div class="my-2 grid grid-cols-1 grid-rows-1 canvas" data-astro-cid-fguvdabe> <div class="h-40 col-start-1 row-start-1 overflow-clip img"${addAttribute("background: url(" + item.thumb.src + ");background-size: cover;background-position: center;", "style")} data-astro-cid-fguvdabe></div> <div class="h-40 col-start-1 row-start-1 z-10 over" data-astro-cid-fguvdabe></div> </div> <h3 class="italic text-2xl block font-bold" data-astro-cid-fguvdabe>${item.data.headline}</h3> ${(item.data.date_published || item.data.author) && showDate == "true" && renderTemplate`<div class="text-sm mt-1 font-light italic" data-astro-cid-fguvdabe><span data-astro-cid-fguvdabe>${formatDate(item.data.date_published)}</span> <span data-astro-cid-fguvdabe></span></div>`} <p class="text-base mt-1.5 leading-relaxed" data-astro-cid-fguvdabe> ${item.data.is_trans_ready && item.data.excerpt} ${!item.data.is_trans_ready && sectionData.data.no_trans_excerpt} </p> </div> <div class="mt-2" data-astro-cid-fguvdabe> <a${addAttribute("/" + lang + "/" + sectionData.data.slug + "/" + item.data.slug, "href")} class="mt-3 text-base font-semibold" data-astro-cid-fguvdabe> ${sectionData.data.readIt} &nbsp; ↗
</a> </div> </div> </div> </li>`)} </ul> </div> </section> `;
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/general/ArticlesImaged.astro", void 0);

const $$Astro = createAstro("https://vgbs742.github.io/");
const $$FrontSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
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

const backgroundImage = new Proxy({"src":"/_astro/GBSRiedbach2.DtjwglgL.jpg","width":3278,"height":2089,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/assets/for_content/img/GBSRiedbach2.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/assets/for_content/img/GBSRiedbach2.jpg");
							return target[name];
						}
					});

const $$WelcomeBanner = createComponent(($$result, $$props, $$slots) => {
  console.log("WelcomeBanner.astro");
  console.log(backgroundImage);
  return renderTemplate`${maybeRenderHead()}<div class="mx-8 h-welcomBannerHeight overflow-clip grid grid-cols-1 grid-rows-1 " data-aos="fade-up" data-aos-duration="2200"> <div class="flex flex-col-reverse h-full col-start-1 row-start-1"> ${renderComponent($$result, "Image", $$Image, { "src": backgroundImage, "alt": "background image", "class": "min-h-full object-cover object-left-bottom" })} </div> <div class="h-full p-4 col-start-1 row-start-1 mix-blend-color-dodge font-title flex flex-col-reverse text-right"> <h2 class="text-5xl md:text-7xl lg:text-7xl drop-shadow-xs text-slate-300">
Versuch den letzten<br>ABDe 4/8 zu retten
</h2> </div> </div> <div class="px-8"> <div class="bg-secondary h-1.5 w-full" data-aos="fade-up" data-aos-duration="2200"></div> </div>`;
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/banners/WelcomeBanner.astro", void 0);

export { $$WelcomeBanner as $, $$FrontSection as a, getLangFromUrl as g };
