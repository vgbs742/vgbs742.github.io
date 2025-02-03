import { c as createAstro, a as createComponent, r as renderTemplate, d as defineScriptVars, j as renderScript, e as addAttribute, b as renderComponent, m as maybeRenderHead } from './astro/server_Df6DIvsM.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { l as getLangFromUrl, m as getSlugNoLangFromUrl } from './TopArea_D8NRZpgd.mjs';
import { $ as $$Image } from './_astro_assets_CUAaKfUh.mjs';
/* empty css                                                              */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://vgbs742.github.io/");
const $$Slider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Slider;
  const lang = getLangFromUrl(Astro2.url);
  getSlugNoLangFromUrl(Astro2.url);
  const { items, interval = 5e3, aspect, capAlt, dataFile } = Astro2.props;
  const sliderId = `slider-${Math.random().toString(36).substr(2, 9)}`;
  for (let i = 0; i < items.length; i++) {
    items[i].data = dataFile[i];
  }
  for (let i = 0; i < items.length; i++) {
    items[i].capAlt = capAlt[i];
  }
  return renderTemplate(_a || (_a = __template(["", '<div class="hidden" data-astro-cid-jbob4fnn></div> <div class="hidden aspect-square" data-astro-cid-jbob4fnn></div> <div class="hidden aspect-4/3" data-astro-cid-jbob4fnn></div> <div class="hidden aspect-3/4" data-astro-cid-jbob4fnn></div> <div class="hidden aspect-3/2" data-astro-cid-jbob4fnn></div> <div class="hidden aspect-2/3" data-astro-cid-jbob4fnn></div> <div class="hidden aspect-16/9" data-astro-cid-jbob4fnn></div> <div class="hidden aspect-9/16" data-astro-cid-jbob4fnn></div> <div class="hidden max-h-0" data-astro-cid-jbob4fnn></div> <div class="hidden scale-y-0" data-astro-cid-jbob4fnn></div> <div', "", " data-astro-cid-jbob4fnn> ", ' <!-- Navigation buttons --> <button class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary bg-opacity-75 hover:bg-opacity-100 all-neutral-dark rounded-full p-3 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary" data-slider-prev data-astro-cid-jbob4fnn> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-jbob4fnn> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-jbob4fnn></path> </svg> </button> <button class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary bg-opacity-75 hover:bg-opacity-100 all-neutral-dark rounded-full p-3 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary" data-slider-next data-astro-cid-jbob4fnn> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-jbob4fnn> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-jbob4fnn></path> </svg> </button> <!-- indicators and caption --> <div class="flex flex-col flex-wrap absolute bottom-0 w-full transition-all duration-150 ease" data-astro-cid-jbob4fnn> <!-- Slide indicators --> <div class="mx-auto my-2 flex space-x-3 z-10 w-full justify-center" data-astro-cid-jbob4fnn> ', ' </div> <!-- caption --> <div class="caption grid text-sm w-full z-10 h-fit transition-all duration-50 ease-in-out p-3" caption-outer-container data-astro-cid-jbob4fnn> <div class="grid grid-cols-1 grid-rows-1 bg-secondary transition-all duration-500 ease-in-out h-fit py-2" caption-inner-container data-astro-cid-jbob4fnn> ', ' </div> </div> </div> </div> <div class="captionMobile text-sm grid w-full z-10 h-fit transition-all duration-50 ease-in-out pb-3 -my-3" caption-outer-container-mobile data-astro-cid-jbob4fnn> <div class="grid grid-cols-1 grid-rows-1 bg-secondarytransition-all duration-500 ease-in-out h-fit shadow-lg z-50" caption-inner-container-mobile data-astro-cid-jbob4fnn> ', " </div> </div> ", " <script>(function(){", `
  const sliderContainer = document.getElementById(sliderId);
  const slides = sliderContainer.querySelectorAll('[data-slider-container]');
  const prevButton = sliderContainer.querySelector('[data-slider-prev]');
  const nextButton = sliderContainer.querySelector('[data-slider-next]');
  const indicators = sliderContainer.querySelectorAll('[data-slider-indicator]');
  const captionInner = sliderContainer.querySelectorAll('[caption-inner-container]');
  const captionOuter = sliderContainer.querySelectorAll('[caption-outer-container]');
  const captionInnerMobile = document.querySelectorAll('[caption-inner-container-mobile]');
  const captionOuterMobile = document.querySelectorAll('[caption-outer-container-mobile]');
  let currentSlide = 0;
  let intervalId;

  function showSlide(index) {
    slides[currentSlide].classList.remove('opacity-100');
    slides[currentSlide].classList.add('opacity-0');
    slides[currentSlide].classList.add('invisible');
    indicators[currentSlide].classList.remove('bg-opacity-100');
    indicators[currentSlide].classList.add('bg-opacity-50');

    captionInner[0].children[currentSlide].classList.add("invisible");
    //captionInner[0].children[currentSlide].classList.remove("flex");
    captionInner[0].children[currentSlide].classList.add("opacity-0");
    captionInner[0].children[currentSlide].classList.remove("opacity-100");
    captionInner[0].children[currentSlide].classList.remove("max-h-96");
    captionInner[0].children[currentSlide].classList.add("h-0");
    captionInner[0].children[currentSlide].classList.remove("h-fit");
    captionInner[0].children[currentSlide].classList.add("max-h-8");
    captionInner[0].children[currentSlide].classList.remove("py-3");

    captionInnerMobile[0].children[currentSlide].classList.add("invisible");
    //captionInnerMobile[0].children[currentSlide].classList.remove("flex");
    captionInnerMobile[0].children[currentSlide].classList.add("opacity-0");
    captionInnerMobile[0].children[currentSlide].classList.remove("opacity-100");
    captionInnerMobile[0].children[currentSlide].classList.remove("max-h-96");
    captionInnerMobile[0].children[currentSlide].classList.add("h-0");
    captionInnerMobile[0].children[currentSlide].classList.remove("h-fit");
    captionInnerMobile[0].children[currentSlide].classList.add("max-h-8");
    captionInnerMobile[0].children[currentSlide].classList.remove("py-3");

    currentSlide = index;
    
    slides[currentSlide].classList.remove('opacity-0');
    slides[currentSlide].classList.add('opacity-100');
    slides[currentSlide].classList.remove('invisible');
    indicators[currentSlide].classList.remove('bg-opacity-50');
    indicators[currentSlide].classList.add('bg-opacity-100');

    captionInner[0].children[currentSlide].classList.remove("invisible");
    //captionInner[0].children[currentSlide].classList.add("flex");
    captionInner[0].children[currentSlide].classList.remove("opacity-0");
    captionInner[0].children[currentSlide].classList.add("opacity-100");
    captionInner[0].children[currentSlide].classList.add("max-h-96");
    captionInner[0].children[currentSlide].classList.remove("h-0");
    captionInner[0].children[currentSlide].classList.add("h-fit");
    captionInner[0].children[currentSlide].classList.remove("max-h-8");
    captionInner[0].children[currentSlide].classList.add("py-3");

    captionInnerMobile[0].children[currentSlide].classList.remove("invisible");
    //captionInnerMobile[0].children[currentSlide].classList.add("flex");
    captionInnerMobile[0].children[currentSlide].classList.remove("opacity-0");
    captionInnerMobile[0].children[currentSlide].classList.add("opacity-100");
    captionInnerMobile[0].children[currentSlide].classList.add("max-h-96");
    captionInnerMobile[0].children[currentSlide].classList.remove("h-0");
    captionInnerMobile[0].children[currentSlide].classList.add("h-fit");
    captionInnerMobile[0].children[currentSlide].classList.remove("max-h-8");
    captionInnerMobile[0].children[currentSlide].classList.add("py-3");

    items[currentSlide].caption == null && captionInner[0].children[currentSlide].classList.remove("py-3");
    //singleimage[currentSlide].caption == null && captionInnerMobile[0].children[currentSlide].classList.remove("py-3");

    items.length < 2 && hideNavUI();
  }

  function hideNavUI(){
    indicators[0].classList.add('hidden');
    prevButton.classList.add('hidden');
    nextButton.classList.add('hidden');
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
  }

  function startAutoslide() {
    intervalId = setInterval(nextSlide, interval);
  }

  function stopAutoSlide() {
    clearInterval(intervalId);
  }

  showSlide(0);
  //startAutoslide();

  prevButton.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    //startAutoslide();
  });

  nextButton.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
    //startAutoslide();
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      showSlide(index);
      stopAutoSlide();
      //startAutoslide();
    });
  });

  sliderContainer.addEventListener('mouseenter', stopAutoSlide);
  //sliderContainer.addEventListener('mouseleave', startAutoslide);
})();<\/script> `])), maybeRenderHead(), addAttribute("flex flex-col custom-slider relative w-full overflow-hidden shadow-lg my-3  bg-secondary aspect-" + aspect, "class"), addAttribute(sliderId, "id"), items.map((thisImage, index) => renderTemplate`<div class="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-200 ease-in-out invisible" data-slider-container data-astro-cid-jbob4fnn> ${renderComponent($$result, "Image", $$Image, { "src": thisImage, "alt": thisImage.capAlt.alt || thisImage.data.generic_alt[lang] || "", "class": "absolute medium-zoomable top-0 left-0 w-full h-full object-cover", "data-slider-image": true, "data-index": index, "medium-zoomable": true, "data-astro-cid-jbob4fnn": true })}  </div>`), items.map((_, index) => renderTemplate`<button class="w-3 h-3 rounded-full bg-primary bg-opacity-50 hover:bg-opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary" style="z-index: 0;" data-slider-indicator${addAttribute(index, "data-index")} data-astro-cid-jbob4fnn></button>`), items.map((thisImage, index) => renderTemplate`<div class="invisible overflow-hidden transition-all ease-in-out duration-300 delay-0 opacity-0 mx-0 mb-0 order-1 px-4 h-0 max-h-8 [grid-area: 1/1/1/1]  text-primary "${addAttribute(index, "data-index")} data-astro-cid-jbob4fnn>${thisImage.capAlt.caption || thisImage.data.generic_caption[lang] || " "}<span class="ref float-right" data-astro-cid-jbob4fnn><a${addAttribute(thisImage.data.source_url, "href")} data-astro-cid-jbob4fnn>${"   by " + thisImage.data.author + ", " + thisImage.data.source_name}</a></span></div>`), items.map((thisImage, index) => renderTemplate`<div class="invisible overflow-hidden transition-all ease-in-out duration-300 delay-0 opacity-0 mx-0 mb-0 order-1 px-4 h-0 max-h-8 [grid-area: 1/1/1/1]  text-primary "${addAttribute(index, "data-index")} data-astro-cid-jbob4fnn>${thisImage.capAlt.caption || thisImage.data.generic_caption[lang] || " "}<span class="ref float-right" data-astro-cid-jbob4fnn><a${addAttribute(thisImage.data.source_url, "href")} data-astro-cid-jbob4fnn>${"    by " + thisImage.data.author + ", " + thisImage.data.source_name}</a></span></div>`), renderScript($$result, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/content/Slider.astro?astro&type=script&index=0&lang.ts"), defineScriptVars({ interval, sliderId, items }));
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/content/Slider.astro", void 0);

const AAimg = new Proxy({"src":"/_astro/test001.DbSD2vN9.jpg","width":4080,"height":3072,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/assets/for_content/img/public_transport/vehicles/tram/fischermaetteli/test001/test001.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/assets/for_content/img/public_transport/vehicles/tram/fischermaetteli/test001/test001.jpg");
							return target[name];
						}
					});

const type = "img";
const filetype = "jpg";
const attribute = "strict";
const author = "author";
const source_name = "wiki";
const source_url = "www.wiki.org";
const year = "2002";
const generic_caption = {"de":"fährt","fr":"roule","en":"drives"};
const generic_alt = {"de":"fährt","fr":"roule","en":"drives"};
const AAdata = {
  type,
  filetype,
  attribute,
  author,
  source_name,
  source_url,
  year,
  generic_caption,
  generic_alt,
};

export { $$Slider as $, AAimg as A, AAdata as a };
