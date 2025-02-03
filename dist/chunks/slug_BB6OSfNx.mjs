import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as defineScriptVars, b as renderComponent, e as addAttribute } from './astro/server_Df6DIvsM.mjs';
import 'kleur/colors';
import { g as getCollection, b as getTranslations, c as getEntry, r as renderEntry, f as formatDate, $ as $$BaseLayout, d as $$TopArea, e as getPageUrl, h as getItemLang } from './TopArea_D8NRZpgd.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://vgbs742.github.io/");
const $$TwoThings = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TwoThings;
  const { left, right } = Astro2.props;
  return renderTemplate`${renderTemplate`${maybeRenderHead()}<div class="my-4 space-y-1 italic"><div class="h-0.5 bg-secondary" data-aos="fade-up" data-aos-duration="1000"></div><div class="flex flex-row space-between"><span class="grow">${left}</span><span></span><span>${right}</span></div><div class="h-0 bg-secondary"></div></div>`}`;
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

const $$Astro = createAstro("https://vgbs742.github.io/");
const $$Slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "author": authorString, "datePub": page.data.date_published, "dateUp": page.data.date_updated, "keywords": keywords, "title": page.data.title, "excerpt": page.data.excerpt }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopArea", $$TopArea, {})} ${maybeRenderHead()}<article class="bg-primary flex flex-col justify-center place-self-center text-justify"> <div class="px-8 2xl:max-w-7xl mx-auto py-8 w-full"> <div class="space-y-1 max-w-3xl mx-auto"> <!-- div Title and Decorative Elements --> <h1 class="text-5xl"> ${page.data.headline} </h1> <h2 class="text-xl font-semibold italic"> ${page.data.drophead} </h2> </div> <div class="max-w-3xl mx-auto mt-1 italic"> ${page.data.lead} </div> <div class="max-w-3xl mx-auto"> ${renderTemplate`${renderComponent($$result2, "TwoThings", $$TwoThings, { "left": dateString, "right": authorString })}`} ${page.data.is_trans_ready && renderTemplate`${renderComponent($$result2, "Content", Content, {})}`} ${!page.data.is_trans_ready && renderTemplate`<h3>${noTranslation.data.excuse.title[lang]}</h3>
          <p>${noTranslation.data.excuse.text[lang]}</p>
          <h4>${noTranslation.data.excuse.announceOthers[lang]}</h4>
          <ul> ${translations.map((translation, index) => renderTemplate`<li${addAttribute(index, "key")}> <a class="font-bold"${addAttribute(getPageUrl(translation, sections), "href")}>${getItemLang(translation)["full"]} &nbsp; ↗</a> </li>`)} </ul>`} </div> </div> </article> <div class="max-w-3xl mx-auto"> ${renderComponent($$result2, "ReferenceList", $$ReferenceList, {})} </div> ` })}`;
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/pages_complete/news/slug.astro", void 0);

export { $$Slug as $ };
