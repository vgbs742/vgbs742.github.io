import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro/server_BrY61_ak.mjs';
import '@astrojs/internal-helpers/path';
import './handleCollections_dO9PUwyD.mjs';
import { $ as $$Image } from './_astro_assets_BYbBxHrA.mjs';
import 'clsx';

const frontmatter = {
  "id": "FR-test1-id",
  "is_draft": false,
  "title": "FR-test1-titel",
  "slug": "FR-test1-slug",
  "date_published": "2012-12-12T00:00:00.000Z",
  "is_og": false,
  "is_upToDate": true,
  "author": ["beispiel"],
  "is_trans_ready": true,
  "headline": "FR-test1-HL",
  "drophead": "FR-test1-DH",
  "lead": "FR-test1-Lead",
  "excerpt": "FR-test1-Excerpt"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "one-number-sign",
    "text": "One number sign…"
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
      id: "one-number-sign",
      children: "One number sign…"
    }), "\n", createVNode(_components.p, {
      children: "hlalfslkdfj hlalfslkdfj hlalfslkdfj lsdfkjdsf sajlkdf sf d fsa f asdf adsfsdf asdf dsfas hie\nfadsfhlalfslkdfj hlalfslkdfj hlalfslkdfj lsdfkjdsf sajlkdf sf d fsa f asdf adsfsdf asdf dsfas hie\nfadsfhlalfslkdfj hlalfslkdfj hlalfslkdfj lsdfkjdsf sajlkdf sf d fsa f asdf adsfsdf asdf dsfas fadsfhlalfslkdfj hlalfslkdfjhie\nhlalfslkdfj hie\nlsdfkjdsf sajlkdf sf d fsa f asdf adsfsdf asdf dsfas fadsf"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "hhh"
      }), "\n", createVNode(_components.li, {
        children: "hhh"
      }), "\n", createVNode(_components.li, {
        children: "hhh"
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

const url = "src/collections/test/fr/test-1.mdx";
const file = "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/fr/test-1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/fr/test-1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const __vite_glob_0_24 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	__usesAstroImage,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_24 as _ };
