/* empty css                                       */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as defineScriptVars, b as renderComponent, e as addAttribute } from '../../../chunks/astro/server_BrY61_ak.mjs';
import 'kleur/colors';
import { d as getCollection, f as getTranslations, h as getEntry, r as renderEntry, i as formatDate, $ as $$BaseLayout, e as $$TopArea, j as getPageUrl, k as getItemLang, c as getOneLang } from '../../../chunks/handleCollections_dO9PUwyD.mjs';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const $$Astro$2 = createAstro("https://vgbs742.github.io/");
const $$TwoThings = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TwoThings;
  const { left, right } = Astro2.props;
  return renderTemplate`${renderTemplate`${maybeRenderHead()}<div class="my-4 space-y-2 italic"><div class="h-0.5 bg-secondary" data-aos="fade-up" data-aos-duration="1000"></div><div class="flex flex-row space-between"><span class="grow">${left}</span><span></span><span>${right}</span></div><div class="h-1.5 bg-secondary"></div></div>`}`;
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/snippets/TwoThings.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ReferenceList = createComponent(async ($$result, $$props, $$slots) => {
  const sourcesColl = await getCollection("sources");
  await getCollection("lilBits");
  return renderTemplate(_a || (_a = __template(["", '<div class="referenceContainer hidden"> <div>\nreferenceContainer\n</div> <div> <ul class="referenceList"></ul> </div> </div> <div class="hidden flex-row w-full  min-w-5 mb-2"></div> <div class="hidden"></div> <div class="hidden"></div> <script>(function(){', `
	////////////////console.log("sourcesColl");
	////////////////console.log(sourcesColl);
	const references = document.querySelectorAll(".reference");
	const container = document.querySelector(".referenceContainer");
	const list = document.querySelector(".referenceList");
	////////////////console.log("references");
	////////////////console.log(references);

	if(references.length > 0){
		container.classList.remove("hidden")
	}else{
		////////////////console.log("no references");
	}

	var sourceIds = [];

	for(let i = 0; i < references.length; i++){
		const idRaw = references[i].attributes['data-ref-id'].nodeValue;
		if(!sourceIds.includes(idRaw)){
			sourceIds.push(idRaw);
		}
	}
	
	////////////////console.log("sourceIds");
	////////////////console.log(sourceIds);

	for(let i = 0; i < references.length; i++){
		const idRaw = references[i].attributes['data-ref-id'].nodeValue;
		references[i].innerHTML = sourceIds.indexOf(idRaw) + 1;
	}

	var listContent = "";
	for(let i = 0; i < sourceIds.length; i++){
		////////////////console.log("sourceIds[i]");
		////////////////console.log(sourceIds[i]);
		const thisSourceData = sourcesColl.filter(source => source.id == sourceIds[i]);
		////////////////console.log("thisSourceData");
		////////////////console.log(thisSourceData);
		var thisSourceContent = "<li>";
		thisSourceContent += "<div class='flex flex-row w-full mb-2'>"
		thisSourceContent += "<div class='min-w-5'>"
		thisSourceContent += i + 1;
		thisSourceContent += ": ";
		thisSourceContent += "</div>"
		thisSourceContent += "<div class='w-full'>"
		thisSourceContent += "<div class=''>"
		//source content after start into new var
		//if not like after start, add comma in front of information
		if(thisSourceData[0].data.title){
			thisSourceContent += '"';
			thisSourceContent += thisSourceData[0].data.title;
			thisSourceContent += '"';
			thisSourceContent += ", ";
		}
		if(thisSourceData[0].data.author){
			thisSourceContent += thisSourceData[0].data.author;
			thisSourceContent += ", ";
		}
		if(thisSourceData[0].data.date){
			thisSourceContent += thisSourceData[0].data.date;
			thisSourceContent += ", ";
		}
		thisSourceContent += "</div>"
		thisSourceContent += "<div class=''>"
		if(thisSourceData[0].data.publication){
			thisSourceContent += thisSourceData[0].data.publication;
			thisSourceContent += ", ";
		}
		if(thisSourceData[0].data.url){

			thisSourceContent += thisSourceData[0].data.publisher;
			thisSourceContent += ", ";
		}

		/*if(thisSourceData[0].data.url){
			thisSourceContent += thisSourceData[0].data.url;
			thisSourceContent += ", ";
		}
		if(thisSourceData[0].data.archived && thisSourceData[0].data.archiveUrl){
			thisSourceContent += thisSourceData[0].data.archiveUrl;
			thisSourceContent += ", ";
		}
		if(thisSourceData[0].data.archived && thisSourceData[0].data.archiveDate){
			thisSourceContent += thisSourceData[0].data.archiveDate;
			thisSourceContent += ", ";
		}*/
		
		thisSourceContent += "</div>"
		thisSourceContent += "</div>";
		thisSourceContent += "</li>";
		listContent += thisSourceContent;
	}

	////////////////console.log("listContent");
	////////////////console.log(listContent);

	list.innerHTML = listContent;

})();<\/script>`])), maybeRenderHead(), defineScriptVars({ sourcesColl }));
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/references/referenceList.astro", void 0);

const $$Astro$1 = createAstro("https://vgbs742.github.io/");
const $$Slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Slug;
  const lB = await getCollection("lilBits");
  const tArt = lB.filter((entry) => {
    return entry.id == "article";
  })[0].data;
  const { lang, slug, page, pages } = Astro2.props;
  var translations = getTranslations(page, pages);
  translations = translations.filter((translation) => translation.data.is_trans_ready == true);
  const peops = await getCollection("people");
  const sections = await getCollection("sections");
  const noTranslation = await getEntry("lilBits", "noTranslation");
  page.data.date_published.toLocaleString(lang);
  const { Content } = await renderEntry(page);
  var authorString = "";
  for (let i = 0; i < page.data.author.length; i++) {
    const thisAuth = peops.filter((person) => person.id == page.data.author[i].id);
    authorString += thisAuth[0].data.name_first + " " + thisAuth[0].data.name_last;
    if (i < page.data.author.length - 1) {
      authorString += ", ";
    }
  }
  var dateString = "";
  if (page.data.date_published) {
    dateString += tArt.published[lang];
    dateString += " ";
    dateString += formatDate(page.data.date_published);
  }
  if (page.data.date_updated) {
    dateString += ", ";
    dateString += tArt.updated[lang];
    dateString += " ";
    dateString += formatDate(page.data.date_updated);
  }
  const keywords = page.data.keywords;
  console.log("keywords");
  console.log(page.data);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "author": authorString, "datePub": page.data.date_published, "dateUp": page.data.date_updated, "keywords": keywords, "title": page.data.title, "excerpt": page.data.excerpt }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopArea", $$TopArea, {})} ${maybeRenderHead()}<article class="bg-primary flex flex-col justify-center place-self-center text-justify"> <div class="px-8 2xl:max-w-7xl mx-auto py-8 w-full"> <div class="space-y-2 max-w-3xl mx-auto"> <!-- div Title and Decorative Elements --> <h1 class="text-5xl font-bold italic"> ${page.data.headline} </h1> <h2 class="text-xl font-bold italic"> ${page.data.drophead} </h2> </div> <div class="max-w-3xl mx-auto mt-1"> ${page.data.lead} </div> <div class="max-w-3xl mx-auto"> ${renderTemplate`${renderComponent($$result2, "TwoThings", $$TwoThings, { "left": dateString, "right": authorString })}`} ${page.data.is_trans_ready && renderTemplate`${renderComponent($$result2, "Content", Content, {})}`} ${!page.data.is_trans_ready && renderTemplate`<h3>${noTranslation.data.excuse.title[lang]}</h3>
          <p>${noTranslation.data.excuse.text[lang]}</p>
          <h4>${noTranslation.data.excuse.announceOthers[lang]}</h4>
          <ul> ${translations.map((translation, index) => renderTemplate`<li${addAttribute(index, "key")}> <a class="font-bold"${addAttribute(getPageUrl(translation, sections), "href")}>${getItemLang(translation)["full"]} &nbsp; ↗</a> </li>`)} </ul>`} </div> </div> </article> <div class="max-w-3xl mx-auto"> ${renderComponent($$result2, "ReferenceList", $$ReferenceList, {})} </div> ` })}`;
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/pages_complete/news/slug.astro", void 0);

const $$Astro = createAstro("https://vgbs742.github.io/");
async function getStaticPaths() {
  const pages = await getCollection("news");
  const pagesThisLang = getOneLang(pages, "de");
  const paths = pagesThisLang.map((page) => {
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
const $$url = "/vgbs742.github.io/de/aktuelles/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
