import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro/server_BrY61_ak.mjs';
import '@astrojs/internal-helpers/path';
import './handleCollections_dO9PUwyD.mjs';
import { $ as $$Image } from './_astro_assets_BYbBxHrA.mjs';
import { $ as $$ReferenceSingle, A as ABimg, a as ABdata } from './test002_xUYz5PJl.mjs';
import { A as AAimg, $ as $$Slider, a as AAdata } from './test001_BmgS2pUs.mjs';
import 'clsx';

const frontmatter = {
  "id": "DE-test1-id",
  "is_draft": false,
  "title": "DE-test1-titel",
  "slug": "DE-test1-slug",
  "authoban": ["johann-keller"],
  "date_published": "2012-11-10T00:00:00.000Z",
  "date_updated": "2012-12-24T00:00:00.000Z",
  "is_og": false,
  "is_upToDate": true,
  "author": ["johann-keller"],
  "is_trans_ready": true,
  "headline": "DE-test1-HL",
  "drophead": "DE-test1-DH",
  "lead": "DE-test1-Lead",
  "excerpt": "DE-test1-Excerpt",
  "thumb2": "@assets/for_content/img/public_transport/vehicles/tram/fischermaetteli/test001/test001.jpg",
  "capAlt": [{
    "caption": "cap1DE",
    "alt": "alt1DE"
  }, {
    "caption": "cap2DE"
  }]
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "one-number-sign",
    "text": "One number sign…"
  }];
}
const thumb = AAimg;
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
      children: ["hlalfslkdfj hlalfslkdfj hlalfslkdfj lsdfkjdsf sajlkdf sf d fsa f asdf adsfsdf asdf dsfas hie\nfadsfhlalfslkdfj hlalfslkdfj hlalfslkdfj lsdfkjdsf", createVNode($$ReferenceSingle, {
        id: "example4"
      }), " sajlkdf sf d fsa f asdf adsfsdf asdf dsfas hie\nfadsfhlalfslkdfj hlalfslkdfj hlalfslkdfj lsdfkjdsf sajlkdf sf d fsa f asdf adsfsdf asdf dsfas fadsfhlalfslkdfj hlalfslkdfjhie\nhlalfslkdfj hie", createVNode($$ReferenceSingle, {
        id: "example1"
      }), createVNode($$ReferenceSingle, {
        id: "example2"
      }), "\nlsdfkjdsf sajlkdf sf d fsa f asdf adsfsdf asdf dsfas fadsf", createVNode($$ReferenceSingle, {
        id: "example2"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["hhh", createVNode($$ReferenceSingle, {
          id: "example1"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["hhh", createVNode($$ReferenceSingle, {
          id: "example2"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["hhh", createVNode($$ReferenceSingle, {
          id: "example3"
        })]
      }), "\n"]
    }), "\n", createVNode($$Slider, {
      items: [AAimg, ABimg],
      capAlt: frontmatter.capAlt,
      dataFile: [AAdata, ABdata],
      aspect: "3/2"
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

const url = "src/collections/news/de/test-1.mdx";
const file = "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/news/de/test-1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/news/de/test-1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  __usesAstroImage,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  thumb,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_3 as _ };
