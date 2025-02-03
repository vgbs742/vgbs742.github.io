import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from './astro/server_BrY61_ak.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://vgbs742.github.io/");
const $$ReferenceSingle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ReferenceSingle;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span class="reference align-top text-xs ml-0.5"${addAttribute(id, "data-ref-id")}></span>`;
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/references/referenceSingle.astro", void 0);

const ABimg = new Proxy({"src":"/vgbs742.github.io/_astro/test002.DThrmC6y.jpeg","width":1238,"height":503,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/assets/for_content/img/public_transport/vehicles/tram/fischermaetteli/test002/test002.jpeg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/assets/for_content/img/public_transport/vehicles/tram/fischermaetteli/test002/test002.jpeg");
							return target[name];
						}
					});

const type = "img";
const filetype = "jpeg";
const attribute = "strict";
const author = "author";
const source_name = "wiki";
const source_url = "www.wiki.org";
const year = "2002";
const generic_caption = {"de":"fährt","fr":"roule","en":"drives"};
const generic_alt = {"de":"fährt","fr":"roule","en":"drives"};
const ABdata = {
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

export { $$ReferenceSingle as $, ABimg as A, ABdata as a };
