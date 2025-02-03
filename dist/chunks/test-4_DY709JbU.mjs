import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro/server_Df6DIvsM.mjs';
import '@astrojs/internal-helpers/path';
import './TopArea_D8NRZpgd.mjs';
import { $ as $$Image } from './_astro_assets_CUAaKfUh.mjs';
import 'clsx';

const frontmatter = {
  "id": "DE-test-4-id",
  "is_draft": false,
  "title": "DE-test-4-title",
  "slug": "DE-test-4-slug",
  "date_published": "2012-12-13T00:00:00.000Z",
  "is_og": false,
  "is_upToDate": true,
  "make_page": true,
  "author": ["beispiel"],
  "is_trans_ready": true,
  "headline": "DE-test-4-HL",
  "drophead": "DE-test-4-DH",
  "lead": "DE-test-4-Lead",
  "excerpt": "DE-test-4-Excerpt"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "beispielhafter-untertitel",
    "text": "Beispielhafter Untertitel"
  }, {
    "depth": 3,
    "slug": "beispielhafter-untertitel-1",
    "text": "Beispielhafter Untertitel"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h3: "h3",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h3, {
      id: "beispielhafter-untertitel",
      children: "Beispielhafter Untertitel"
    }), "\n", createVNode(_components.p, {
      children: "Hier kann dann irgendwas stehen, wasauchimmer das sein mag.\nHier kann dann irgendwas stehen, wasauchimmer das sein mag.\nHier kann dann irgendwas stehen, wasauchimmer das sein mag.\nHier kann dann irgendwas stehen, wasauchimmer das sein mag.\nHier kann dann irgendwas stehen, wasauchimmer das sein mag."
    }), "\n", createVNode(_components.p, {
      children: "Hier kann dann irgendwas stehen, wasauchimmer das sein mag.\nHier kann dann irgendwas stehen, wasauchimmer das sein mag.\nHier kann dann irgendwas stehen, wasauchimmer das sein mag.\nHier kann dann irgendwas stehen, wasauchimmer das sein mag."
    }), "\n", createVNode(_components.h3, {
      id: "beispielhafter-untertitel-1",
      children: "Beispielhafter Untertitel"
    }), "\n", createVNode(_components.p, {
      children: "Hier kann dann irgendwas stehen, wasauchimmer das sein mag.\nHier kann dann irgendwas stehen, wasauchimmer das sein mag.\nHier kann dann irgendwas stehen, wasauchimmer das sein mag.\nHier kann dann irgendwas stehen, wasauchimmer das sein mag.\nHier kann dann irgendwas stehen, wasauchimmer das sein mag.\nHier kann dann irgendwas stehen, wasauchimmer das sein mag.\nHier kann dann irgendwas stehen, wasauchimmer das sein mag.\nHier kann dann irgendwas stehen, wasauchimmer das sein mag.\nHier kann dann irgendwas stehen, wasauchimmer das sein mag."
    })]
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

const url = "src/collections/news/de/test-4.mdx";
const file = "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/news/de/test-4.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/news/de/test-4.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const __vite_glob_0_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	__usesAstroImage,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_6 as _ };
