import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro/server_Df6DIvsM.mjs';
import '@astrojs/internal-helpers/path';
import './TopArea_D8NRZpgd.mjs';
import { $ as $$Image } from './_astro_assets_CUAaKfUh.mjs';
import { $ as $$ReferenceSingle, A as ABimg, a as ABdata } from './test002_mTRPsjPL.mjs';
import { A as AAimg, $ as $$Slider, a as AAdata } from './test001_z-aeLVnB.mjs';
import 'clsx';

const frontmatter = {
  "id": "DE-test4-id",
  "is_draft": false,
  "is_trans_ready": false,
  "is_og": false,
  "is_upToDate": true,
  "title": "DE-test4-titel",
  "slug": "DE-test4-slug-d",
  "authoban": ["johann-keller"],
  "date_published": "2045-07-12T00:00:00.000Z",
  "author": ["johann-keller"],
  "headline": "DE-test4-HL",
  "drophead": "DE-test4-DH",
  "lead": "DE-test4-Lead",
  "excerpt": "DE-test4-Excerpt",
  "ACapAlt": [{
    "caption": "cap4DE",
    "alt": "alt4DE"
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
        id: "example4"
      }), createVNode($$ReferenceSingle, {
        id: "example2"
      }), "\nlsdfkjdsf sajlkdf sf d fsa f asdf adsfsdf asdf dsfas fadsf", createVNode($$ReferenceSingle, {
        id: "example2"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["hhh", createVNode($$ReferenceSingle, {
          id: "example4"
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
      capAlt: frontmatter.ACapAlt,
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

const url = "src/collections/test/de/test-4.mdx";
const file = "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/de/test-4.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/de/test-4.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const __vite_glob_0_20 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_20 as _ };
