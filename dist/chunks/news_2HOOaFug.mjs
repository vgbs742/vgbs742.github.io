import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro/server_Df6DIvsM.mjs';
import '@astrojs/internal-helpers/path';
import './TopArea_D8NRZpgd.mjs';
import { $ as $$Image } from './_astro_assets_CUAaKfUh.mjs';
import 'clsx';

const frontmatter = {
  "is_draft": true,
  "title": "Actualitées",
  "slug": "actualitees",
  "is_upToDate": true,
  "is_trans_ready": true,
  "seeAll": "voir toutes",
  "readIt": "en savoir plus",
  "menu_include": true,
  "menu_order": 1,
  "name": {
    "thin": "Nouvelles",
    "thick": ""
  },
  "items": {
    "title": {
      "thin": "Dernières",
      "thick": "Nouvelles"
    }
  },
  "headline": "DE-test1-HL",
  "drophead": "DE-test1-DH",
  "lead": "DE-test1-Lead",
  "no_trans_excerpt": "DE_no_excerpt"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: "DETESTSECTION"
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const url = "src/collections/sections/fr/news.mdx";
const file = "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/sections/fr/news.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/sections/fr/news.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const __vite_glob_0_17 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  __usesAstroImage,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_17 as _ };
