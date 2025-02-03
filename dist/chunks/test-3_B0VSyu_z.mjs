import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro/server_Df6DIvsM.mjs';
import '@astrojs/internal-helpers/path';
import './TopArea_D8NRZpgd.mjs';
import { $ as $$Image } from './_astro_assets_CUAaKfUh.mjs';
import 'clsx';

const frontmatter = {
  "id": "DE-testnew-id",
  "is_draft": false,
  "title": "DE-testnew-titel",
  "slug": "DE-testnew-slug",
  "authoban": ["johann-keller"],
  "date_published": "2012-11-10T00:00:00.000Z",
  "date_updated": "2012-12-24T00:00:00.000Z",
  "is_og": false,
  "is_upToDate": true,
  "make_page": false,
  "author": ["johann-keller"],
  "is_trans_ready": true,
  "headline": "DE-testnew-HL",
  "drophead": "DE-testnew-DH",
  "lead": "DE-testnew-Lead",
  "excerpt": "DE-testnew-Excerpt"
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
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "one-number-sign",
      children: "One number sign…"
    }), "\n", createVNode(_components.p, {
      children: "hlalfslkdfj hlalfslkdfj hlalfslkdfj lsdfkjdsf sajlkdf sf d fsa f asdf adsfsdf asdf dsfas hie\nfadsfhlalfslkdfj hlalfslkdfj hlalfslkdfj lsdfkjdsf\nhlalfslkdfj hlalfslkdfj hlalfslkdfj lsdfkjdsf sajlkdf sf d fsa f asdf adsfsdf asdf dsfas hie\nfadsfhlalfslkdfj hlalfslkdfj hlalfslkdfj lsdfkjdsf\nhlalfslkdfj hlalfslkdfj hlalfslkdfj lsdfkjdsf sajlkdf sf d fsa f asdf adsfsdf asdf dsfas hie\nfadsfhlalfslkdfj hlalfslkdfj hlalfslkdfj lsdfkjdsf\nhlalfslkdfj hlalfslkdfj hlalfslkdfj lsdfkjdsf sajlkdf sf d fsa f asdf adsfsdf asdf dsfas hie\nfadsfhlalfslkdfj hlalfslkdfj hlalfslkdfj lsdfkjdsf"
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

const url = "src/collections/news/de/test-3.mdx";
const file = "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/news/de/test-3.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/news/de/test-3.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const __vite_glob_0_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	__usesAstroImage,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_5 as _ };
