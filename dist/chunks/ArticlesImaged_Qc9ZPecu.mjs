import { _ as __vite_glob_0_0 } from './introText01_CkWO5kqg.mjs';
import { _ as __vite_glob_0_1 } from './introText01_DCegwsnv.mjs';
import { _ as __vite_glob_0_2 } from './introText01_DfVDQY46.mjs';
import { _ as __vite_glob_0_3 } from './test-1_DNOYz_Kb.mjs';
import { _ as __vite_glob_0_4 } from './test-2_B1TjNqEP.mjs';
import { _ as __vite_glob_0_5 } from './test-WTF_BKp43QSf.mjs';
import { _ as __vite_glob_0_6 } from './test-new_tRXJcV06.mjs';
import { _ as __vite_glob_0_7 } from './test-1_DEsfWDn9.mjs';
import { _ as __vite_glob_0_8 } from './test-2_B-yme-LD.mjs';
import { _ as __vite_glob_0_9 } from './test-4_ceq5I2RH.mjs';
import { _ as __vite_glob_0_10 } from './test-WTF_D7z-mW2f.mjs';
import { _ as __vite_glob_0_11 } from './test-1_Buodhi9q.mjs';
import { _ as __vite_glob_0_12 } from './test-4_iclq_11i.mjs';
import { _ as __vite_glob_0_13 } from './test-1_DmrXB3Za.mjs';
import { _ as __vite_glob_0_14 } from './test-4_BxLj2iJ9.mjs';
import { _ as __vite_glob_0_15 } from './news_C-VPnsjS.mjs';
import { _ as __vite_glob_0_16 } from './news_YP87QYWC.mjs';
import { _ as __vite_glob_0_17 } from './news_Dz0XQztR.mjs';
import { _ as __vite_glob_0_18 } from './test-1_DxZzeIxo.mjs';
import { _ as __vite_glob_0_19 } from './test-2_q8dcPyAB.mjs';
import { _ as __vite_glob_0_20 } from './test-4_DzHt799f.mjs';
import { _ as __vite_glob_0_21 } from './test-WTF_VKm9EbBu.mjs';
import { _ as __vite_glob_0_22 } from './test-1_CaxDtYbk.mjs';
import { _ as __vite_glob_0_23 } from './test-4_kGIgXUAt.mjs';
import { _ as __vite_glob_0_24 } from './test-1_KRbMOJtD.mjs';
import { _ as __vite_glob_0_25 } from './test-4_eqqGA2wS.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, b as renderComponent, u as unescapeHTML, F as Fragment, f as renderSlot } from './astro/server_BrY61_ak.mjs';
import 'kleur/colors';
import { r as renderEntry, i as formatDate } from './handleCollections_dO9PUwyD.mjs';
/* empty css                         */

const $$Astro$1 = createAstro("https://vgbs742.github.io/");
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { thin, thick, linkUrl, linkText, pageLinks, putAnchor, bothThin, hideFirst, tagLine } = Astro2.props;
  return renderTemplate`${(thin || thick || linkText || pageLinks) && renderTemplate`${maybeRenderHead()}<spanm${addAttribute(putAnchor, "id")}></spanm>
<div class="mt-6"><div class="w-full flex flex-row space-between align-center justify-center h-headingHeight"><div class="grid grid-cols-1 grid-rows-1 w-full"><h3 class="text-secondary pb-headingPadding w-full text-4xl col-start-1 row-start-1 z-0 ml-0 font-title tracking-widest flex flex-row justify-center self-end" data-aos="fade-up" data-aos-duration="1500"><span class="self-end">${thin}</span><span class="self-end">&nbsp;</span><span class="self-end">${thick}</span></h3><h3 class="text-primary pb-headingPadding bg-secondary w-full text-4xl col-start-1 row-start-1 z-10 ml-0 font-title tracking-widest overflow-hidden max-h-headingLineA flex flex-row justify-center self-end" data-aos="fade-up" data-aos-duration="1500"><span class="self-end">${thin}</span><span class="self-end">&nbsp;</span><span class="self-end">${thick}</span></h3></div>${tagLine && renderTemplate`<span class="hidden md:flex flex-grow">&nbsp;-&nbsp;${tagLine}</span>`}<!--{linkUrl && <span class="grow text-right"><a class="font-bold text-secondary text-right" href={linkUrl}>
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

const fallbackImg = new Proxy({"src":"/vgbs742.github.io/_astro/ph.D6tWTRhR.svg","width":399,"height":289,"format":"svg"}, {
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

const $$Astro = createAstro("https://vgbs742.github.io/");
const $$ArticlesImaged = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
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
  const matches1 = /* #__PURE__ */ Object.assign({"../../collections/bigBits/de/introText01.mdx": __vite_glob_0_0,"../../collections/bigBits/en/introText01.mdx": __vite_glob_0_1,"../../collections/bigBits/fr/introText01.mdx": __vite_glob_0_2,"../../collections/news/de/test-1.mdx": __vite_glob_0_3,"../../collections/news/de/test-2.mdx": __vite_glob_0_4,"../../collections/news/de/test-WTF.mdx": __vite_glob_0_5,"../../collections/news/de/test-new.mdx": __vite_glob_0_6,"../../collections/overview/de/test-1.mdx": __vite_glob_0_7,"../../collections/overview/de/test-2.mdx": __vite_glob_0_8,"../../collections/overview/de/test-4.mdx": __vite_glob_0_9,"../../collections/overview/de/test-WTF.mdx": __vite_glob_0_10,"../../collections/overview/en/test-1.mdx": __vite_glob_0_11,"../../collections/overview/en/test-4.mdx": __vite_glob_0_12,"../../collections/overview/fr/test-1.mdx": __vite_glob_0_13,"../../collections/overview/fr/test-4.mdx": __vite_glob_0_14,"../../collections/sections/de/news.mdx": __vite_glob_0_15,"../../collections/sections/en/news.mdx": __vite_glob_0_16,"../../collections/sections/fr/news.mdx": __vite_glob_0_17,"../../collections/test/de/test-1.mdx": __vite_glob_0_18,"../../collections/test/de/test-2.mdx": __vite_glob_0_19,"../../collections/test/de/test-4.mdx": __vite_glob_0_20,"../../collections/test/de/test-WTF.mdx": __vite_glob_0_21,"../../collections/test/en/test-1.mdx": __vite_glob_0_22,"../../collections/test/en/test-4.mdx": __vite_glob_0_23,"../../collections/test/fr/test-1.mdx": __vite_glob_0_24,"../../collections/test/fr/test-4.mdx": __vite_glob_0_25});
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

export { $$SectionTitle as $, $$ArticlesImaged as a, getLangFromUrl as g };
