import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/shared_BR-sfRuF.mjs';
import 'es-module-lexer';
import { s as NOOP_MIDDLEWARE_HEADER, t as decodeKey } from './chunks/astro/server_BrY61_ak.mjs';
import 'clsx';
import 'html-escaper';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/","adapterName":"","routes":[{"file":"file:///Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"fallback","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://vgbs742.github.io/","base":"/vgbs742.github.io","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/pages/de/aktuelles/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/pages/[lang]/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/pages/de/aktuelles/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/general/ArticlesImaged.astro",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/technical/FrontSection.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[lang]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/de/aktuelles/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/navigation/Menu.astro",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/general/TopArea.astro",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/pages_complete/news/slug.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/de/aktuelles/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/references/referenceList.astro",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/i18n/langFunctions.ts",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/content/Slider.astro",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/news/de/test-1.mdx",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/news/de/test-1.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/.astro/content-modules.mjs",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/node_modules/astro/dist/content/runtime.js",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/news/de/test-2.mdx",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/news/de/test-2.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/overview/de/test-1.mdx",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/overview/de/test-1.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/overview/de/test-2.mdx",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/overview/de/test-2.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/overview/de/test-4.mdx",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/overview/de/test-4.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/overview/en/test-4.mdx",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/overview/en/test-4.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/overview/fr/test-4.mdx",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/overview/fr/test-4.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/de/test-1.mdx",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/de/test-1.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/de/test-2.mdx",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/de/test-2.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/de/test-4.mdx",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/de/test-4.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/en/test-4.mdx",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/en/test-4.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/fr/test-4.mdx",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/fr/test-4.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/snippets/handleCollections.ts",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/de/aktuelles/[...page]@_@astro":"pages/de/aktuelles/_---page_.astro.mjs","\u0000@astro-page:src/pages/de/aktuelles/[...slug]@_@astro":"pages/de/aktuelles/_---slug_.astro.mjs","\u0000@astro-page:src/pages/[lang]/index@_@astro":"pages/_lang_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_dd-3d2V4.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/.astro/content-modules.mjs":"chunks/content-modules_CMv379sq.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CdNjDrz6.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DxQ3aF7C.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/de/test-1.mdx?astroPropagatedAssets":"chunks/test-1_D7RF4Nlt.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/en/test-1.mdx?astroPropagatedAssets":"chunks/test-1_C40SNsV2.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/de/test-WTF.mdx?astroPropagatedAssets":"chunks/test-WTF_CNLBXbTh.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/de/test-4.mdx?astroPropagatedAssets":"chunks/test-4_CbkbhkC8.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/fr/test-1.mdx?astroPropagatedAssets":"chunks/test-1_CWadUwop.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/en/test-4.mdx?astroPropagatedAssets":"chunks/test-4_DXYJa_xU.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/fr/test-4.mdx?astroPropagatedAssets":"chunks/test-4_CNZthlWv.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/sections/en/news.mdx?astroPropagatedAssets":"chunks/news_Ds-4RHmu.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/test/de/test-2.mdx?astroPropagatedAssets":"chunks/test-2_DzFtwjVq.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/sections/fr/news.mdx?astroPropagatedAssets":"chunks/news_CiDjPcLM.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/sections/de/news.mdx?astroPropagatedAssets":"chunks/news_CPuYQmEp.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/overview/de/test-1.mdx?astroPropagatedAssets":"chunks/test-1_BSWZqg-D.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/overview/de/test-2.mdx?astroPropagatedAssets":"chunks/test-2_B5gEWvUi.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/overview/en/test-1.mdx?astroPropagatedAssets":"chunks/test-1_t9R6EMxi.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/overview/de/test-WTF.mdx?astroPropagatedAssets":"chunks/test-WTF_D07B5lqC.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/overview/de/test-4.mdx?astroPropagatedAssets":"chunks/test-4_QxhT5cKu.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/overview/en/test-4.mdx?astroPropagatedAssets":"chunks/test-4_DCIix_hn.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/overview/fr/test-1.mdx?astroPropagatedAssets":"chunks/test-1_Cgnc2ZZE.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/overview/fr/test-4.mdx?astroPropagatedAssets":"chunks/test-4_CKrr1-Zq.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/bigBits/de/introText01.mdx?astroPropagatedAssets":"chunks/introText01_pUTftH3S.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/bigBits/fr/introText01.mdx?astroPropagatedAssets":"chunks/introText01_Di6Eo4U1.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/news/de/test-WTF.mdx?astroPropagatedAssets":"chunks/test-WTF_CroHrNBK.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/bigBits/en/introText01.mdx?astroPropagatedAssets":"chunks/introText01_5gcfRHGO.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/news/de/test-2.mdx?astroPropagatedAssets":"chunks/test-2_CCqcnUC0.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/news/de/test-new.mdx?astroPropagatedAssets":"chunks/test-new_BTiwpSaZ.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/collections/news/de/test-1.mdx?astroPropagatedAssets":"chunks/test-1_D0dGggNs.mjs","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.DojF692_.js","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/navigation/Menu.astro?astro&type=script&index=0&lang.ts":"_astro/Menu.astro_astro_type_script_index_0_lang.xrgDyk7R.js","/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/content/Slider.astro?astro&type=script&index=0&lang.ts":"_astro/Slider.astro_astro_type_script_index_0_lang.DpFp6zj-.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/navigation/Menu.astro?astro&type=script&index=0&lang.ts","const d=document.getElementById(\"mobileMenuButton\"),e=document.getElementById(\"mobileMenuContent\"),i=document.getElementById(\"mobileLangButton\"),s=document.getElementById(\"mobileLangContent\"),c=document.querySelector(\".wantLang\"),o=document.querySelector(\".chooseLang\");c.addEventListener(\"click\",function(){o.classList.remove(\"max-w-0\"),c.classList.remove(\"max-w-36\"),o.classList.add(\"max-w-36\"),c.classList.add(\"max-w-0\")});document.querySelector(\"body\");var t=\"closed\";d.addEventListener(\"click\",function(){t==\"closed\"?(n==\"open\"&&(l(),n=\"closed\"),m(),t=\"open\"):(a(),t=\"closed\")});function a(){e.classList.add(\"h-0\"),e.classList.remove(\"h-fit\"),e.classList.add(\"my-0\"),e.classList.remove(\"my-4\")}function m(){e.classList.remove(\"h-0\"),e.classList.add(\"h-fit\"),e.classList.remove(\"my-0\"),e.classList.add(\"my-4\")}var n=\"closed\";i.addEventListener(\"click\",function(){n==\"closed\"?(t==\"open\"&&(a(),t=\"closed\"),L(),n=\"open\"):(l(),n=\"closed\")});function l(){s.classList.add(\"h-0\"),s.classList.remove(\"h-fit\"),s.classList.add(\"my-0\"),s.classList.remove(\"my-4\")}function L(){s.classList.remove(\"h-0\"),s.classList.add(\"h-fit\"),s.classList.remove(\"my-0\"),s.classList.add(\"my-4\")}"]],"assets":["/vgbs742.github.io/file:///Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/dist/index.html","/vgbs742.github.io/file:///Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/dist/index.html"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-always","locales":["de"],"defaultLocale":"de","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"jHFcZXzLfcImddlpN6rf4D1rJvKNewg4/D5ZOKVz3MU="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
