import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro/server_Df6DIvsM.mjs';
import '@astrojs/internal-helpers/path';
import './TopArea_D8NRZpgd.mjs';
import { $ as $$Image } from './_astro_assets_CUAaKfUh.mjs';
import 'clsx';

const frontmatter = {
  "id": "DE-test-WTF-id",
  "is_draft": false,
  "title": "DE-test-WTF-title",
  "slug": "DE-test-WTF-slug",
  "date_published": "2012-12-13T00:00:00.000Z",
  "is_og": false,
  "is_upToDate": true,
  "author": ["beispiel"],
  "is_trans_ready": true,
  "headline": "DE-test-WTF-HL",
  "drophead": "DE-test-WTF-DH",
  "lead": "DE-test-WTF-Lead",
  "excerpt": "DE-test-WTF-Excerpt"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "wtf-wtf-wtf",
    "text": "WTF WTF WTF"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "wtf-wtf-wtf",
      children: "WTF WTF WTF"
    }), "\n", createVNode(_components.p, {
      children: "WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF\nWTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF\nWTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF\nWTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF\nWTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF\nWTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF\nWTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF\nWTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF WTF"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "WTF"
      }), "\n", createVNode(_components.li, {
        children: "WTF"
      }), "\n", createVNode(_components.li, {
        children: "WTF"
      }), "\n", createVNode(_components.li, {
        children: "WTF"
      }), "\n", createVNode(_components.li, {
        children: "WTF"
      }), "\n"]
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

const url = "src/collections/test/de/test-WTF.mdx";
const file = "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/de/test-WTF.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/de/test-WTF.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const __vite_glob_0_21 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	__usesAstroImage,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_21 as _ };
