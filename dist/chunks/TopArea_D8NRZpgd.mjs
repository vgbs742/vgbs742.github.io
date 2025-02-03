import { A as AstroError, R as RenderUndefinedEntryError, a as createComponent, r as renderTemplate, u as unescapeHTML, U as UnknownContentCollectionError, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, b as renderComponent, c as createAstro, e as addAttribute, j as renderScript, f as renderSlot, k as renderHead, l as ASTRO_VERSION, N as NoMatchingImport, m as maybeRenderHead, F as Fragment } from './astro/server_Df6DIvsM.mjs';
import { bold } from 'kleur/colors';
import 'clsx';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { removeBase, isRemotePath, prependForwardSlash, slash } from '@astrojs/internal-helpers/path';
import * as devalue from 'devalue';
import { createRequire } from 'node:module';
import { parse as parse$1 } from 'es-module-lexer';
import './shared_BR-sfRuF.mjs';
import 'xxhash-wasm';
import { markdownConfigDefaults, parseFrontmatter, isFrontmatterValid, remarkCollectImages, rehypeShiki, rehypePrism, rehypeHeadingIds } from '@astrojs/markdown-remark';
import 'github-slugger';
import { z } from 'zod';
import path from 'node:path';
import fs from 'node:fs';
import 'fast-glob';
import 'micromatch';
import 'esbuild';
import { AstroTelemetry } from '@astrojs/telemetry';
import { version } from 'vite';
import { bundledThemes } from 'shiki';
import 'ci-info';
import 'preferred-pm';
import 'prompts';
import 'which-pm';
import 'tinyexec';
import 'html-escaper';
import 'common-ancestor-path';
import debugPackage from 'debug';
import 'js-yaml';
import 'tsconfck';
import 'zod-to-json-schema';
import '@rollup/pluginutils';
import 'dlv';
import 'dset';
import 'cookie';
import '@astrojs/compiler';
import { fileURLToPath } from 'node:url';
import autoprefixerPlugin from 'autoprefixer';
import tailwindPlugin from 'tailwindcss';
import fs$1 from 'node:fs/promises';
import { parse } from 'acorn';
import { visit } from 'unist-util-visit';
import { VFile } from 'vfile';
import { createProcessor, nodeTypes } from '@mdx-js/mdx';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import { SourceMapGenerator } from 'source-map';
import { visit as visit$1, SKIP } from 'estree-util-visit';
import { toHtml } from 'hast-util-to-html';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";
const CONTENT_LAYER_TYPE = "content_layer";

const VALID_INPUT_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const DEFAULT_OUTPUT_FORMAT = "webp";
const DEFAULT_HASH_PROPS = [
  "src",
  "width",
  "height",
  "format",
  "quality",
  "fit",
  "position"
];

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_Cv7fLz4y.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://vgbs742.github.io/", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry.legacyId ? emulateLegacyEntry(entry) : entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry(entry) {
  const legacyEntry = {
    ...entry,
    id: entry.legacyId,
    slug: entry.id
  };
  delete legacyEntry.legacyId;
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      if (entry2.legacyId) {
        return { ...emulateLegacyEntry(entry2), collection };
      }
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(
        `The collection ${JSON.stringify(collection)} does not exist. Please ensure it is defined in your content config.`
      );
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_CUAaKfUh.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      const id = imageSrcToImportId(decodedImagePath.src, fileName);
      const imported = imageAssetMap.get(id);
      if (!id || imageObjects.has(id) || !imported) {
        continue;
      }
      const image = await getImage({ ...decodedImagePath, src: imported });
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute
    }).map(([key, value]) => value ? `${key}=${JSON.stringify(String(value))}` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_9juKJ3Zy.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
});

function getTranslations(post, posts) {
  const translations = posts.filter((onePage) => onePage.filePath?.split("/")[onePage.filePath?.split("/").length - 1] == post.filePath?.split("/")[post.filePath?.split("/").length - 1]);
  return translations;
}
function getOneLang(posts, lang) {
  const oneLang = posts.filter(
    (post) => {
      const filePath = post.filePath.split("/");
      const thisLang = filePath[filePath.length - 2];
      return thisLang == lang;
    }
  );
  return oneLang;
}
async function getSection(section) {
  var sectionData = await getCollection("sections");
  sectionData = sectionData.filter(
    (dat) => {
      const fileName = dat.filePath?.split("/")[dat.filePath?.split("/").length - 1];
      const fileNameNoType = fileName?.split(".")[0];
      return fileNameNoType == section;
    }
  );
  return sectionData;
}
function getItemLang(item) {
  const langNames = { "de": "Deutsch", "en": "English", "fr": "Français" };
  const filePath = item.filePath.split("/");
  const fileLang = filePath[filePath.length - 2];
  const stuff = { full: langNames[fileLang], short: fileLang };
  return stuff;
}
function getSectionNameInLang(sections, section, lang) {
  const sectionSingle = sections.filter((dat) => {
    const fileName = dat.filePath?.split("/")[dat.filePath?.split("/").length - 1];
    const fileNameNoType = fileName?.split(".")[0];
    return fileNameNoType == section;
  });
  const sectionOneLang = sectionSingle.filter(
    (dat) => {
      const fileParent = dat.filePath?.split("/")[dat.filePath?.split("/").length - 2];
      return fileParent == lang;
    }
  );
  const sectionInLang = sectionOneLang[0].data.slug;
  return sectionInLang;
}
function getPageUrl(item, sections) {
  var lang = getItemLang(item).short;
  var url = "/";
  url += lang;
  url += "/";
  url += getSectionNameInLang(sections, item.collection, lang);
  url += "/";
  url += item.data.slug;
  url += "/";
  return url;
}

function formatDate(uglyDate) {
  var prettyDate = "";
  const day = uglyDate.getDate();
  const month = uglyDate.getMonth() + 1;
  const year = uglyDate.getFullYear();
  if (day < 10) {
    prettyDate += "0";
  }
  prettyDate += day;
  prettyDate += ".";
  if (month < 10) {
    prettyDate += "0";
  }
  prettyDate += month;
  prettyDate += ".";
  if (year < 10) {
    prettyDate += "0";
  }
  prettyDate += year;
  return prettyDate;
}
function sortBigFirst(things, sorter) {
  return things.sort((a, b) => {
    if (a.data[sorter] > b.data[sorter]) {
      return -1;
    }
    if (a.data[sorter] < b.data[sorter]) {
      return 1;
    }
    return 0;
  });
}
function sortSmallFirst(things, sorter) {
  return things.sort((a, b) => {
    if (a.data[sorter] < b.data[sorter]) {
      return -1;
    }
    if (a.data[sorter] > b.data[sorter]) {
      return 1;
    }
    return 0;
  });
}

const $$Astro$3 = createAstro("https://vgbs742.github.io/");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, keywords, author, excerpt } = Astro2.props;
  return renderTemplate`<meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta name="author"${addAttribute(author || "proximus habitat", "content")}><meta name="keywords" content="Add ypour keywords here"><meta name="description"${addAttribute(excerpt, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Teachers:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet"><title>VGBS ${title && " - " + title}</title><!-- Favicon guidelines generated with https://favicon.io/ --><link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"><link rel="manifest" href="/favicons/site.webmanifest"><link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#0000ff"><meta name="msapplication-TileColor" content="#0000ff"><meta name="theme-color" content="#0000ff"><link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"><!-- HTML in your document's head --><link rel="preconnect" href="https://rsms.me/"><link rel="stylesheet" href="https://rsms.me/inter/inter.css">`;
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/BaseHead.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://vgbs742.github.io/");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, keywords, author, excerpt, datePub, dateUp } = Astro2.props;
  var allKeywords = keywords;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="selection:bg-complementary-split-pink selection:text-secondary text-secondary"> <head>', "", '</head> <body class="bg-primary"> ', " ", ' <script type="text/javascript" src="https://unpkg.com/aos@2.3.1/dist/aos.js"><\/script> <script type="text/javascript">\n      AOS.init({once: true, offset: 0});\n    <\/script> </body> </html>'])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "keywords": allKeywords, "author": author, "excerpt": excerpt, "datePub": datePub, "dateUp": dateUp }), renderHead(), renderSlot($$result, $$slots["default"]), renderScript($$result, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/layouts/BaseLayout.astro", void 0);

const languages = {
  de: "Deutsch",
  fr: "Français",
  en: "English"
};
const defaultLang = "de";
const dict = {
  nav: {
    en: {
      "index": "Home",
      "about": "About",
      "news": "News",
      "translation": "change language"
    },
    fr: {
      "index": "Accueil",
      "about": "À propos",
      "news": "Nouvelles",
      "translation": "langues"
    },
    de: {
      "index": "Start",
      "about": "Über uns",
      "news": "Aktuelles",
      "translation": "Andere Sprachen"
    }
  },
  phrases: {
    en: {
      "readMore": "Read more"
    },
    fr: {
      "readMore": "En savoir plus"
    },
    de: {
      "readMore": [
        "Mehr erfahren",
        "weiterlesen"
      ]
    }
  },
  members: {
    en: {
      "founder": "founder"
    },
    fr: {
      "founder": "fondateur"
    },
    de: {
      "founder": "Gründer"
    }
  },
  translation: {
    en: {
      "missing.header": "Sorry",
      "missing.text": "not available in your language, maybe in another?"
    },
    fr: {
      "missing.header": "aie",
      "missing.text": "pas disponible en cette langue, ....?"
    },
    de: {
      "missing.header": "excusi",
      "missing.text": "gits no nid i dere sprache, villich ire angere?"
    }
  },
  title: {
    en: {
      "start": "Title - ",
      "news": "news"
    },
    fr: {
      "start": "Titre - ",
      "news": "nouvelles"
    },
    de: {
      "start": "Titel - ",
      "news": "neues"
    }
  }
};

function resolveJsToTs(filePath) {
  if (filePath.endsWith(".jsx") && !fs.existsSync(filePath)) {
    const tryPath = filePath.slice(0, -4) + ".tsx";
    if (fs.existsSync(tryPath)) {
      return tryPath;
    }
  }
  return filePath;
}

const isWindows = typeof process !== "undefined" && process.platform === "win32";
function normalizePath(id) {
  return path.posix.normalize(isWindows ? slash(id) : id);
}
function resolvePath(specifier, importer) {
  if (specifier.startsWith(".")) {
    const absoluteSpecifier = path.resolve(path.dirname(importer), specifier);
    return resolveJsToTs(normalizePath(absoluteSpecifier));
  } else {
    return specifier;
  }
}

const decoder = new TextDecoder();
const toUTF8String = (input, start = 0, end = input.length) => decoder.decode(input.slice(start, end));
const toHexString = (input, start = 0, end = input.length) => input.slice(start, end).reduce((memo, i) => memo + ("0" + i.toString(16)).slice(-2), "");
const readInt16LE = (input, offset = 0) => {
  const val = input[offset] + input[offset + 1] * 2 ** 8;
  return val | (val & 2 ** 15) * 131070;
};
const readUInt16BE = (input, offset = 0) => input[offset] * 2 ** 8 + input[offset + 1];
const readUInt16LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8;
const readUInt24LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16;
const readInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + (input[offset + 3] << 24);
const readUInt32BE = (input, offset = 0) => input[offset] * 2 ** 24 + input[offset + 1] * 2 ** 16 + input[offset + 2] * 2 ** 8 + input[offset + 3];
const readUInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + input[offset + 3] * 2 ** 24;
const methods = {
  readUInt16BE,
  readUInt16LE,
  readUInt32BE,
  readUInt32LE
};
function readUInt(input, bits, offset, isBigEndian) {
  offset = offset || 0;
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = "readUInt" + bits + endian;
  return methods[methodName](input, offset);
}
function readBox(buffer, offset) {
  if (buffer.length - offset < 4) return;
  const boxSize = readUInt32BE(buffer, offset);
  if (buffer.length - offset < boxSize) return;
  return {
    name: toUTF8String(buffer, 4 + offset, 8 + offset),
    offset,
    size: boxSize
  };
}
function findBox(buffer, boxName, offset) {
  while (offset < buffer.length) {
    const box = readBox(buffer, offset);
    if (!box) break;
    if (box.name === boxName) return box;
    offset += box.size;
  }
}

const BMP = {
  validate: (input) => toUTF8String(input, 0, 2) === "BM",
  calculate: (input) => ({
    height: Math.abs(readInt32LE(input, 22)),
    width: readUInt32LE(input, 18)
  })
};

const TYPE_ICON = 1;
const SIZE_HEADER$1 = 2 + 2 + 2;
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(input, offset) {
  const value = input[offset];
  return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
  const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(input, offset + 1),
    width: getSizeFromOffset(input, offset)
  };
}
const ICO = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_ICON;
  },
  calculate(input) {
    const nbImages = readUInt16LE(input, 4);
    const imageSize = getImageSize$1(input, 0);
    if (nbImages === 1) return imageSize;
    const imgs = [imageSize];
    for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
      imgs.push(getImageSize$1(input, imageIndex));
    }
    return {
      height: imageSize.height,
      images: imgs,
      width: imageSize.width
    };
  }
};

const TYPE_CURSOR = 2;
const CUR = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_CURSOR;
  },
  calculate: (input) => ICO.calculate(input)
};

const DDS = {
  validate: (input) => readUInt32LE(input, 0) === 542327876,
  calculate: (input) => ({
    height: readUInt32LE(input, 12),
    width: readUInt32LE(input, 16)
  })
};

const gifRegexp = /^GIF8[79]a/;
const GIF = {
  validate: (input) => gifRegexp.test(toUTF8String(input, 0, 6)),
  calculate: (input) => ({
    height: readUInt16LE(input, 8),
    width: readUInt16LE(input, 6)
  })
};

const brandMap = {
  avif: "avif",
  mif1: "heif",
  msf1: "heif",
  // hief-sequence
  heic: "heic",
  heix: "heic",
  hevc: "heic",
  // heic-sequence
  hevx: "heic"
  // heic-sequence
};
function detectBrands(buffer, start, end) {
  let brandsDetected = {};
  for (let i = start; i <= end; i += 4) {
    const brand = toUTF8String(buffer, i, i + 4);
    if (brand in brandMap) {
      brandsDetected[brand] = 1;
    }
  }
  if ("avif" in brandsDetected) {
    return "avif";
  } else if ("heic" in brandsDetected || "heix" in brandsDetected || "hevc" in brandsDetected || "hevx" in brandsDetected) {
    return "heic";
  } else if ("mif1" in brandsDetected || "msf1" in brandsDetected) {
    return "heif";
  }
}
const HEIF = {
  validate(buffer) {
    const ftype = toUTF8String(buffer, 4, 8);
    const brand = toUTF8String(buffer, 8, 12);
    return "ftyp" === ftype && brand in brandMap;
  },
  calculate(buffer) {
    const metaBox = findBox(buffer, "meta", 0);
    const iprpBox = metaBox && findBox(buffer, "iprp", metaBox.offset + 12);
    const ipcoBox = iprpBox && findBox(buffer, "ipco", iprpBox.offset + 8);
    const ispeBox = ipcoBox && findBox(buffer, "ispe", ipcoBox.offset + 8);
    if (ispeBox) {
      return {
        height: readUInt32BE(buffer, ispeBox.offset + 16),
        width: readUInt32BE(buffer, ispeBox.offset + 12),
        type: detectBrands(buffer, 8, metaBox.offset)
      };
    }
    throw new TypeError("Invalid HEIF, no size found");
  }
};

const SIZE_HEADER = 4 + 4;
const FILE_LENGTH_OFFSET = 4;
const ENTRY_LENGTH_OFFSET = 4;
const ICON_TYPE_SIZE = {
  ICON: 32,
  "ICN#": 32,
  // m => 16 x 16
  "icm#": 16,
  icm4: 16,
  icm8: 16,
  // s => 16 x 16
  "ics#": 16,
  ics4: 16,
  ics8: 16,
  is32: 16,
  s8mk: 16,
  icp4: 16,
  // l => 32 x 32
  icl4: 32,
  icl8: 32,
  il32: 32,
  l8mk: 32,
  icp5: 32,
  ic11: 32,
  // h => 48 x 48
  ich4: 48,
  ich8: 48,
  ih32: 48,
  h8mk: 48,
  // . => 64 x 64
  icp6: 64,
  ic12: 32,
  // t => 128 x 128
  it32: 128,
  t8mk: 128,
  ic07: 128,
  // . => 256 x 256
  ic08: 256,
  ic13: 256,
  // . => 512 x 512
  ic09: 512,
  ic14: 512,
  // . => 1024 x 1024
  ic10: 1024
};
function readImageHeader(input, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    toUTF8String(input, imageOffset, imageLengthOffset),
    readUInt32BE(input, imageLengthOffset)
  ];
}
function getImageSize(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
const ICNS = {
  validate: (input) => toUTF8String(input, 0, 4) === "icns",
  calculate(input) {
    const inputLength = input.length;
    const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
    let imageOffset = SIZE_HEADER;
    let imageHeader = readImageHeader(input, imageOffset);
    let imageSize = getImageSize(imageHeader[0]);
    imageOffset += imageHeader[1];
    if (imageOffset === fileLength) return imageSize;
    const result = {
      height: imageSize.height,
      images: [imageSize],
      width: imageSize.width
    };
    while (imageOffset < fileLength && imageOffset < inputLength) {
      imageHeader = readImageHeader(input, imageOffset);
      imageSize = getImageSize(imageHeader[0]);
      imageOffset += imageHeader[1];
      result.images.push(imageSize);
    }
    return result;
  }
};

const J2C = {
  // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
  validate: (input) => toHexString(input, 0, 4) === "ff4fff51",
  calculate: (input) => ({
    height: readUInt32BE(input, 12),
    width: readUInt32BE(input, 8)
  })
};

const JP2 = {
  validate(input) {
    if (readUInt32BE(input, 4) !== 1783636e3 || readUInt32BE(input, 0) < 1) return false;
    const ftypBox = findBox(input, "ftyp", 0);
    if (!ftypBox) return false;
    return readUInt32BE(input, ftypBox.offset + 4) === 1718909296;
  },
  calculate(input) {
    const jp2hBox = findBox(input, "jp2h", 0);
    const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
    if (ihdrBox) {
      return {
        height: readUInt32BE(input, ihdrBox.offset + 8),
        width: readUInt32BE(input, ihdrBox.offset + 12)
      };
    }
    throw new TypeError("Unsupported JPEG 2000 format");
  }
};

const EXIF_MARKER = "45786966";
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = "4d4d";
const LITTLE_ENDIAN_BYTE_ALIGN = "4949";
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(input) {
  return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
  return {
    height: readUInt16BE(input, index),
    width: readUInt16BE(input, index + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(input, index) {
  const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
  const byteAlign = toHexString(
    exifBlock,
    EXIF_HEADER_BYTES,
    EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES
  );
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateInput(input, index) {
  if (index > input.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
}
const JPG = {
  validate: (input) => toHexString(input, 0, 2) === "ffd8",
  calculate(input) {
    input = input.slice(4);
    let orientation;
    let next;
    while (input.length) {
      const i = readUInt16BE(input, 0);
      if (input[i] !== 255) {
        input = input.slice(i);
        continue;
      }
      if (isEXIF(input)) {
        orientation = validateExifBlock(input, i);
      }
      validateInput(input, i);
      next = input[i + 1];
      if (next === 192 || next === 193 || next === 194) {
        const size = extractSize(input, i + 5);
        if (!orientation) {
          return size;
        }
        return {
          height: size.height,
          orientation,
          width: size.width
        };
      }
      input = input.slice(i + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  }
};

const KTX = {
  validate: (input) => {
    const signature = toUTF8String(input, 1, 7);
    return ["KTX 11", "KTX 20"].includes(signature);
  },
  calculate: (input) => {
    const type = input[5] === 49 ? "ktx" : "ktx2";
    const offset = type === "ktx" ? 36 : 20;
    return {
      height: readUInt32LE(input, offset + 4),
      width: readUInt32LE(input, offset),
      type
    };
  }
};

const pngSignature = "PNG\r\n\n";
const pngImageHeaderChunkName = "IHDR";
const pngFriedChunkName = "CgBI";
const PNG = {
  validate(input) {
    if (pngSignature === toUTF8String(input, 1, 8)) {
      let chunkName = toUTF8String(input, 12, 16);
      if (chunkName === pngFriedChunkName) {
        chunkName = toUTF8String(input, 28, 32);
      }
      if (chunkName !== pngImageHeaderChunkName) {
        throw new TypeError("Invalid PNG");
      }
      return true;
    }
    return false;
  },
  calculate(input) {
    if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
      return {
        height: readUInt32BE(input, 36),
        width: readUInt32BE(input, 32)
      };
    }
    return {
      height: readUInt32BE(input, 20),
      width: readUInt32BE(input, 16)
    };
  }
};

const PNMTypes = {
  P1: "pbm/ascii",
  P2: "pgm/ascii",
  P3: "ppm/ascii",
  P4: "pbm",
  P5: "pgm",
  P6: "ppm",
  P7: "pam",
  PF: "pfm"
};
const handlers = {
  default: (lines) => {
    let dimensions = [];
    while (lines.length > 0) {
      const line = lines.shift();
      if (line[0] === "#") {
        continue;
      }
      dimensions = line.split(" ");
      break;
    }
    if (dimensions.length === 2) {
      return {
        height: parseInt(dimensions[1], 10),
        width: parseInt(dimensions[0], 10)
      };
    } else {
      throw new TypeError("Invalid PNM");
    }
  },
  pam: (lines) => {
    const size = {};
    while (lines.length > 0) {
      const line = lines.shift();
      if (line.length > 16 || line.charCodeAt(0) > 128) {
        continue;
      }
      const [key, value] = line.split(" ");
      if (key && value) {
        size[key.toLowerCase()] = parseInt(value, 10);
      }
      if (size.height && size.width) {
        break;
      }
    }
    if (size.height && size.width) {
      return {
        height: size.height,
        width: size.width
      };
    } else {
      throw new TypeError("Invalid PAM");
    }
  }
};
const PNM = {
  validate: (input) => toUTF8String(input, 0, 2) in PNMTypes,
  calculate(input) {
    const signature = toUTF8String(input, 0, 2);
    const type = PNMTypes[signature];
    const lines = toUTF8String(input, 3).split(/[\r\n]+/);
    const handler = handlers[type] || handlers.default;
    return handler(lines);
  }
};

const PSD = {
  validate: (input) => toUTF8String(input, 0, 4) === "8BPS",
  calculate: (input) => ({
    height: readUInt32BE(input, 14),
    width: readUInt32BE(input, 18)
  })
};

const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
  height: /\sheight=(['"])([^%]+?)\1/,
  root: svgReg,
  viewbox: /\sviewBox=(['"])(.+?)\1/i,
  width: /\swidth=(['"])([^%]+?)\1/
};
const INCH_CM = 2.54;
const units = {
  in: 96,
  cm: 96 / INCH_CM,
  em: 16,
  ex: 8,
  m: 96 / INCH_CM * 100,
  mm: 96 / INCH_CM / 10,
  pc: 96 / 72 / 12,
  pt: 96 / 72,
  px: 1
};
const unitsReg = new RegExp(
  `^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`
);
function parseLength(len) {
  const m = unitsReg.exec(len);
  if (!m) {
    return void 0;
  }
  return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = extractorRegExps.width.exec(root);
  const height = extractorRegExps.height.exec(root);
  const viewbox = extractorRegExps.viewbox.exec(root);
  return {
    height: height && parseLength(height[2]),
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
const SVG = {
  // Scan only the first kilo-byte to speed up the check on larger files
  validate: (input) => svgReg.test(toUTF8String(input, 0, 1e3)),
  calculate(input) {
    const root = extractorRegExps.root.exec(toUTF8String(input));
    if (root) {
      const attrs = parseAttributes(root[0]);
      if (attrs.width && attrs.height) {
        return calculateByDimensions(attrs);
      }
      if (attrs.viewbox) {
        return calculateByViewbox(attrs, attrs.viewbox);
      }
    }
    throw new TypeError("Invalid SVG");
  }
};

const TGA = {
  validate(input) {
    return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
  },
  calculate(input) {
    return {
      height: readUInt16LE(input, 14),
      width: readUInt16LE(input, 12)
    };
  }
};

function readIFD(input, isBigEndian) {
  const ifdOffset = readUInt(input, 32, 4, isBigEndian);
  return input.slice(ifdOffset + 2);
}
function readValue(input, isBigEndian) {
  const low = readUInt(input, 16, 8, isBigEndian);
  const high = readUInt(input, 16, 10, isBigEndian);
  return (high << 16) + low;
}
function nextTag(input) {
  if (input.length > 24) {
    return input.slice(12);
  }
}
function extractTags(input, isBigEndian) {
  const tags = {};
  let temp = input;
  while (temp && temp.length) {
    const code = readUInt(temp, 16, 0, isBigEndian);
    const type = readUInt(temp, 16, 2, isBigEndian);
    const length = readUInt(temp, 32, 4, isBigEndian);
    if (code === 0) {
      break;
    } else {
      if (length === 1 && (type === 3 || type === 4)) {
        tags[code] = readValue(temp, isBigEndian);
      }
      temp = nextTag(temp);
    }
  }
  return tags;
}
function determineEndianness(input) {
  const signature = toUTF8String(input, 0, 2);
  if ("II" === signature) {
    return "LE";
  } else if ("MM" === signature) {
    return "BE";
  }
}
const signatures = [
  // '492049', // currently not supported
  "49492a00",
  // Little endian
  "4d4d002a"
  // Big Endian
  // '4d4d002a', // BigTIFF > 4GB. currently not supported
];
const TIFF = {
  validate: (input) => signatures.includes(toHexString(input, 0, 4)),
  calculate(input) {
    const isBigEndian = determineEndianness(input) === "BE";
    const ifdBuffer = readIFD(input, isBigEndian);
    const tags = extractTags(ifdBuffer, isBigEndian);
    const width = tags[256];
    const height = tags[257];
    if (!width || !height) {
      throw new TypeError("Invalid Tiff. Missing tags");
    }
    return { height, width };
  }
};

function calculateExtended(input) {
  return {
    height: 1 + readUInt24LE(input, 7),
    width: 1 + readUInt24LE(input, 4)
  };
}
function calculateLossless(input) {
  return {
    height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
    width: 1 + ((input[2] & 63) << 8 | input[1])
  };
}
function calculateLossy(input) {
  return {
    height: readInt16LE(input, 8) & 16383,
    width: readInt16LE(input, 6) & 16383
  };
}
const WEBP = {
  validate(input) {
    const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
    const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
    const vp8Header = "VP8" === toUTF8String(input, 12, 15);
    return riffHeader && webpHeader && vp8Header;
  },
  calculate(input) {
    const chunkHeader = toUTF8String(input, 12, 16);
    input = input.slice(20, 30);
    if (chunkHeader === "VP8X") {
      const extendedHeader = input[0];
      const validStart = (extendedHeader & 192) === 0;
      const validEnd = (extendedHeader & 1) === 0;
      if (validStart && validEnd) {
        return calculateExtended(input);
      } else {
        throw new TypeError("Invalid WebP");
      }
    }
    if (chunkHeader === "VP8 " && input[0] !== 47) {
      return calculateLossy(input);
    }
    const signature = toHexString(input, 3, 6);
    if (chunkHeader === "VP8L" && signature !== "9d012a") {
      return calculateLossless(input);
    }
    throw new TypeError("Invalid WebP");
  }
};

const typeHandlers = /* @__PURE__ */ new Map([
  ["bmp", BMP],
  ["cur", CUR],
  ["dds", DDS],
  ["gif", GIF],
  ["heif", HEIF],
  ["icns", ICNS],
  ["ico", ICO],
  ["j2c", J2C],
  ["jp2", JP2],
  ["jpg", JPG],
  ["ktx", KTX],
  ["png", PNG],
  ["pnm", PNM],
  ["psd", PSD],
  ["svg", SVG],
  ["tga", TGA],
  ["tiff", TIFF],
  ["webp", WEBP]
]);
const types = Array.from(typeHandlers.keys());

const entryTypeSchema = z.object({
  id: z.string({
    invalid_type_error: "Content entry `id` must be a string"
    // Default to empty string so we can validate properly in the loader
  }).catch("")
}).catchall(z.unknown());
const collectionConfigParser = z.union([
  z.object({
    type: z.literal("content").optional().default("content"),
    schema: z.any().optional()
  }),
  z.object({
    type: z.literal("data"),
    schema: z.any().optional()
  }),
  z.object({
    type: z.literal(CONTENT_LAYER_TYPE),
    schema: z.any().optional(),
    loader: z.union([
      z.function().returns(
        z.union([
          z.array(entryTypeSchema),
          z.promise(z.array(entryTypeSchema)),
          z.record(
            z.string(),
            z.object({
              id: z.string({
                invalid_type_error: "Content entry `id` must be a string"
              }).optional()
            }).catchall(z.unknown())
          ),
          z.promise(
            z.record(
              z.string(),
              z.object({
                id: z.string({
                  invalid_type_error: "Content entry `id` must be a string"
                }).optional()
              }).catchall(z.unknown())
            )
          )
        ])
      ),
      z.object({
        name: z.string(),
        load: z.function(
          z.tuple(
            [
              z.object({
                collection: z.string(),
                store: z.any(),
                meta: z.any(),
                logger: z.any(),
                config: z.any(),
                entryTypes: z.any(),
                parseData: z.any(),
                generateDigest: z.function(z.tuple([z.any()], z.string())),
                watcher: z.any().optional(),
                refreshContextData: z.record(z.unknown()).optional()
              })
            ],
            z.unknown()
          )
        ),
        schema: z.any().optional(),
        render: z.function(z.tuple([z.any()], z.unknown())).optional()
      })
    ]),
    /** deprecated */
    _legacy: z.boolean().optional()
  })
]);
z.object({
  collections: z.record(collectionConfigParser)
});

const StringSchema = z.object({
  type: z.literal("string"),
  optional: z.boolean().optional(),
  default: z.string().optional(),
  max: z.number().optional(),
  min: z.number().min(0).optional(),
  length: z.number().optional(),
  url: z.boolean().optional(),
  includes: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional()
});
const NumberSchema = z.object({
  type: z.literal("number"),
  optional: z.boolean().optional(),
  default: z.number().optional(),
  gt: z.number().optional(),
  min: z.number().optional(),
  lt: z.number().optional(),
  max: z.number().optional(),
  int: z.boolean().optional()
});
const BooleanSchema = z.object({
  type: z.literal("boolean"),
  optional: z.boolean().optional(),
  default: z.boolean().optional()
});
const EnumSchema = z.object({
  type: z.literal("enum"),
  values: z.array(
    // We use "'" for codegen so it can't be passed here
    z.string().refine((v) => !v.includes("'"), {
      message: `The "'" character can't be used as an enum value`
    })
  ),
  optional: z.boolean().optional(),
  default: z.string().optional()
});
const EnvFieldType = z.union([
  StringSchema,
  NumberSchema,
  BooleanSchema,
  EnumSchema.superRefine((schema, ctx) => {
    if (schema.default) {
      if (!schema.values.includes(schema.default)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `The default value "${schema.default}" must be one of the specified values: ${schema.values.join(", ")}.`
        });
      }
    }
  })
]);
const PublicClientEnvFieldMetadata = z.object({
  context: z.literal("client"),
  access: z.literal("public")
});
const PublicServerEnvFieldMetadata = z.object({
  context: z.literal("server"),
  access: z.literal("public")
});
const SecretServerEnvFieldMetadata = z.object({
  context: z.literal("server"),
  access: z.literal("secret")
});
const EnvFieldMetadata = z.union([
  PublicClientEnvFieldMetadata,
  PublicServerEnvFieldMetadata,
  SecretServerEnvFieldMetadata
]);
const EnvSchemaKey = z.string().min(1).refine(([firstChar]) => isNaN(Number.parseInt(firstChar)), {
  message: "A valid variable name cannot start with a number."
}).refine((str) => /^[A-Z0-9_]+$/.test(str), {
  message: "A valid variable name can only contain uppercase letters, numbers and underscores."
});
const EnvSchema = z.record(EnvSchemaKey, z.intersection(EnvFieldMetadata, EnvFieldType));

const ASTRO_CONFIG_DEFAULTS = {
  root: ".",
  srcDir: "./src",
  publicDir: "./public",
  outDir: "./dist",
  cacheDir: "./node_modules/.astro",
  base: "/",
  trailingSlash: "ignore",
  build: {
    format: "directory",
    client: "./client/",
    server: "./server/",
    assets: "_astro",
    serverEntry: "entry.mjs",
    redirects: true,
    inlineStylesheets: "auto",
    concurrency: 1
  },
  image: {
    endpoint: { entrypoint: void 0, route: "/_image" },
    service: { entrypoint: "astro/assets/services/sharp", config: {} }
  },
  devToolbar: {
    enabled: true
  },
  compressHTML: true,
  server: {
    host: false,
    port: 4321,
    open: false
  },
  integrations: [],
  markdown: markdownConfigDefaults,
  vite: {},
  legacy: {
    collections: false
  },
  redirects: {},
  security: {
    checkOrigin: true
  },
  env: {
    schema: {},
    validateSecrets: false
  },
  experimental: {
    clientPrerender: false,
    contentIntellisense: false,
    responsiveImages: false,
    svg: false
  }
};
z.object({
  root: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.root).transform((val) => new URL(val)),
  srcDir: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.srcDir).transform((val) => new URL(val)),
  publicDir: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.publicDir).transform((val) => new URL(val)),
  outDir: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.outDir).transform((val) => new URL(val)),
  cacheDir: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.cacheDir).transform((val) => new URL(val)),
  site: z.string().url().optional(),
  compressHTML: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.compressHTML),
  base: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.base),
  trailingSlash: z.union([z.literal("always"), z.literal("never"), z.literal("ignore")]).optional().default(ASTRO_CONFIG_DEFAULTS.trailingSlash),
  output: z.union([z.literal("static"), z.literal("server")]).optional().default("static"),
  scopedStyleStrategy: z.union([z.literal("where"), z.literal("class"), z.literal("attribute")]).optional().default("attribute"),
  adapter: z.object({ name: z.string(), hooks: z.object({}).passthrough().default({}) }).optional(),
  integrations: z.preprocess(
    // preprocess
    (val) => Array.isArray(val) ? val.flat(Infinity).filter(Boolean) : val,
    // validate
    z.array(z.object({ name: z.string(), hooks: z.object({}).passthrough().default({}) })).default(ASTRO_CONFIG_DEFAULTS.integrations)
  ),
  build: z.object({
    format: z.union([z.literal("file"), z.literal("directory"), z.literal("preserve")]).optional().default(ASTRO_CONFIG_DEFAULTS.build.format),
    client: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.client).transform((val) => new URL(val)),
    server: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.server).transform((val) => new URL(val)),
    assets: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.assets),
    assetsPrefix: z.string().optional().or(z.object({ fallback: z.string() }).and(z.record(z.string())).optional()).refine(
      (value) => {
        if (value && typeof value !== "string") {
          if (!value.fallback) {
            return false;
          }
        }
        return true;
      },
      {
        message: "The `fallback` is mandatory when defining the option as an object."
      }
    ),
    serverEntry: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.serverEntry),
    redirects: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.build.redirects),
    inlineStylesheets: z.enum(["always", "auto", "never"]).optional().default(ASTRO_CONFIG_DEFAULTS.build.inlineStylesheets),
    concurrency: z.number().min(1).optional().default(ASTRO_CONFIG_DEFAULTS.build.concurrency)
  }).default({}),
  server: z.preprocess(
    // preprocess
    // NOTE: Uses the "error" command here because this is overwritten by the
    // individualized schema parser with the correct command.
    (val) => typeof val === "function" ? val({ command: "error" }) : val,
    // validate
    z.object({
      open: z.union([z.string(), z.boolean()]).optional().default(ASTRO_CONFIG_DEFAULTS.server.open),
      host: z.union([z.string(), z.boolean()]).optional().default(ASTRO_CONFIG_DEFAULTS.server.host),
      port: z.number().optional().default(ASTRO_CONFIG_DEFAULTS.server.port),
      headers: z.custom().optional()
    }).default({})
  ),
  redirects: z.record(
    z.string(),
    z.union([
      z.string(),
      z.object({
        status: z.union([
          z.literal(300),
          z.literal(301),
          z.literal(302),
          z.literal(303),
          z.literal(304),
          z.literal(307),
          z.literal(308)
        ]),
        destination: z.string()
      })
    ])
  ).default(ASTRO_CONFIG_DEFAULTS.redirects),
  prefetch: z.union([
    z.boolean(),
    z.object({
      prefetchAll: z.boolean().optional(),
      defaultStrategy: z.enum(["tap", "hover", "viewport", "load"]).optional()
    })
  ]).optional(),
  image: z.object({
    endpoint: z.object({
      route: z.literal("/_image").or(z.string()).default(ASTRO_CONFIG_DEFAULTS.image.endpoint.route),
      entrypoint: z.string().optional()
    }).default(ASTRO_CONFIG_DEFAULTS.image.endpoint),
    service: z.object({
      entrypoint: z.union([z.literal("astro/assets/services/sharp"), z.string()]).default(ASTRO_CONFIG_DEFAULTS.image.service.entrypoint),
      config: z.record(z.any()).default({})
    }).default(ASTRO_CONFIG_DEFAULTS.image.service),
    domains: z.array(z.string()).default([]),
    remotePatterns: z.array(
      z.object({
        protocol: z.string().optional(),
        hostname: z.string().refine(
          (val) => !val.includes("*") || val.startsWith("*.") || val.startsWith("**."),
          {
            message: "wildcards can only be placed at the beginning of the hostname"
          }
        ).optional(),
        port: z.string().optional(),
        pathname: z.string().refine((val) => !val.includes("*") || val.endsWith("/*") || val.endsWith("/**"), {
          message: "wildcards can only be placed at the end of a pathname"
        }).optional()
      })
    ).default([]),
    experimentalLayout: z.enum(["responsive", "fixed", "full-width", "none"]).optional(),
    experimentalObjectFit: z.string().optional(),
    experimentalObjectPosition: z.string().optional(),
    experimentalBreakpoints: z.array(z.number()).optional()
  }).default(ASTRO_CONFIG_DEFAULTS.image),
  devToolbar: z.object({
    enabled: z.boolean().default(ASTRO_CONFIG_DEFAULTS.devToolbar.enabled)
  }).default(ASTRO_CONFIG_DEFAULTS.devToolbar),
  markdown: z.object({
    syntaxHighlight: z.union([z.literal("shiki"), z.literal("prism"), z.literal(false)]).default(ASTRO_CONFIG_DEFAULTS.markdown.syntaxHighlight),
    shikiConfig: z.object({
      langs: z.custom().array().transform((langs) => {
        for (const lang of langs) {
          if (typeof lang === "object") {
            if (lang.id) {
              lang.name = lang.id;
            }
            if (lang.grammar) {
              Object.assign(lang, lang.grammar);
            }
          }
        }
        return langs;
      }).default([]),
      langAlias: z.record(z.string(), z.string()).optional().default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.langAlias),
      theme: z.enum(Object.keys(bundledThemes)).or(z.custom()).default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.theme),
      themes: z.record(
        z.enum(Object.keys(bundledThemes)).or(z.custom())
      ).default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.themes),
      defaultColor: z.union([z.literal("light"), z.literal("dark"), z.string(), z.literal(false)]).optional(),
      wrap: z.boolean().or(z.null()).default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.wrap),
      transformers: z.custom().array().default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.transformers)
    }).default({}),
    remarkPlugins: z.union([
      z.string(),
      z.tuple([z.string(), z.any()]),
      z.custom((data) => typeof data === "function"),
      z.tuple([z.custom((data) => typeof data === "function"), z.any()])
    ]).array().default(ASTRO_CONFIG_DEFAULTS.markdown.remarkPlugins),
    rehypePlugins: z.union([
      z.string(),
      z.tuple([z.string(), z.any()]),
      z.custom((data) => typeof data === "function"),
      z.tuple([z.custom((data) => typeof data === "function"), z.any()])
    ]).array().default(ASTRO_CONFIG_DEFAULTS.markdown.rehypePlugins),
    remarkRehype: z.custom((data) => data instanceof Object && !Array.isArray(data)).default(ASTRO_CONFIG_DEFAULTS.markdown.remarkRehype),
    gfm: z.boolean().default(ASTRO_CONFIG_DEFAULTS.markdown.gfm),
    smartypants: z.boolean().default(ASTRO_CONFIG_DEFAULTS.markdown.smartypants)
  }).default({}),
  vite: z.custom((data) => data instanceof Object && !Array.isArray(data)).default(ASTRO_CONFIG_DEFAULTS.vite),
  i18n: z.optional(
    z.object({
      defaultLocale: z.string(),
      locales: z.array(
        z.union([
          z.string(),
          z.object({
            path: z.string(),
            codes: z.string().array().nonempty()
          })
        ])
      ),
      domains: z.record(
        z.string(),
        z.string().url(
          "The domain value must be a valid URL, and it has to start with 'https' or 'http'."
        )
      ).optional(),
      fallback: z.record(z.string(), z.string()).optional(),
      routing: z.literal("manual").or(
        z.object({
          prefixDefaultLocale: z.boolean().optional().default(false),
          redirectToDefaultLocale: z.boolean().optional().default(true),
          fallbackType: z.enum(["redirect", "rewrite"]).optional().default("redirect")
        }).refine(
          ({ prefixDefaultLocale, redirectToDefaultLocale }) => {
            return !(prefixDefaultLocale === false && redirectToDefaultLocale === false);
          },
          {
            message: "The option `i18n.redirectToDefaultLocale` is only useful when the `i18n.prefixDefaultLocale` is set to `true`. Remove the option `i18n.redirectToDefaultLocale`, or change its value to `true`."
          }
        )
      ).optional().default({})
    }).optional().superRefine((i18n, ctx) => {
      if (i18n) {
        const { defaultLocale, locales: _locales, fallback, domains } = i18n;
        const locales = _locales.map((locale) => {
          if (typeof locale === "string") {
            return locale;
          } else {
            return locale.path;
          }
        });
        if (!locales.includes(defaultLocale)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `The default locale \`${defaultLocale}\` is not present in the \`i18n.locales\` array.`
          });
        }
        if (fallback) {
          for (const [fallbackFrom, fallbackTo] of Object.entries(fallback)) {
            if (!locales.includes(fallbackFrom)) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: `The locale \`${fallbackFrom}\` key in the \`i18n.fallback\` record doesn't exist in the \`i18n.locales\` array.`
              });
            }
            if (fallbackFrom === defaultLocale) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: `You can't use the default locale as a key. The default locale can only be used as value.`
              });
            }
            if (!locales.includes(fallbackTo)) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: `The locale \`${fallbackTo}\` value in the \`i18n.fallback\` record doesn't exist in the \`i18n.locales\` array.`
              });
            }
          }
        }
        if (domains) {
          const entries = Object.entries(domains);
          const hasDomains = domains ? Object.keys(domains).length > 0 : false;
          if (entries.length > 0 && !hasDomains) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: `When specifying some domains, the property \`i18n.routingStrategy\` must be set to \`"domains"\`.`
            });
          }
          for (const [domainKey, domainValue] of entries) {
            if (!locales.includes(domainKey)) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: `The locale \`${domainKey}\` key in the \`i18n.domains\` record doesn't exist in the \`i18n.locales\` array.`
              });
            }
            if (!domainValue.startsWith("https") && !domainValue.startsWith("http")) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "The domain value must be a valid URL, and it has to start with 'https' or 'http'.",
                path: ["domains"]
              });
            } else {
              try {
                const domainUrl = new URL(domainValue);
                if (domainUrl.pathname !== "/") {
                  ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: `The URL \`${domainValue}\` must contain only the origin. A subsequent pathname isn't allowed here. Remove \`${domainUrl.pathname}\`.`,
                    path: ["domains"]
                  });
                }
              } catch {
              }
            }
          }
        }
      }
    })
  ),
  security: z.object({
    checkOrigin: z.boolean().default(ASTRO_CONFIG_DEFAULTS.security.checkOrigin)
  }).optional().default(ASTRO_CONFIG_DEFAULTS.security),
  env: z.object({
    schema: EnvSchema.optional().default(ASTRO_CONFIG_DEFAULTS.env.schema),
    validateSecrets: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.env.validateSecrets)
  }).strict().optional().default(ASTRO_CONFIG_DEFAULTS.env),
  experimental: z.object({
    clientPrerender: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.clientPrerender),
    contentIntellisense: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.contentIntellisense),
    responsiveImages: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.responsiveImages),
    session: z.object({
      driver: z.string(),
      options: z.record(z.any()).optional(),
      cookie: z.union([
        z.object({
          name: z.string().optional(),
          domain: z.string().optional(),
          path: z.string().optional(),
          maxAge: z.number().optional(),
          sameSite: z.union([z.enum(["strict", "lax", "none"]), z.boolean()]).optional(),
          secure: z.boolean().optional()
        }),
        z.string()
      ]).transform((val) => {
        if (typeof val === "string") {
          return { name: val };
        }
        return val;
      }).optional(),
      ttl: z.number().optional()
    }).optional(),
    svg: z.union([
      z.boolean(),
      z.object({
        mode: z.union([z.literal("inline"), z.literal("sprite")]).optional()
      }).optional()
    ]).optional().default(ASTRO_CONFIG_DEFAULTS.experimental.svg).transform((svgConfig) => {
      if (typeof svgConfig === "boolean") {
        return svgConfig ? {
          mode: "inline"
        } : void 0;
      } else {
        if (!svgConfig.mode) {
          return {
            mode: "inline"
          };
        }
      }
      return svgConfig;
    })
  }).strict(
    `Invalid or outdated experimental feature.
Check for incorrect spelling or outdated Astro version.
See https://docs.astro.build/en/reference/experimental-flags/ for a list of all current experiments.`
  ).default({}),
  legacy: z.object({
    collections: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.legacy.collections)
  }).default({})
});

new AstroTelemetry({
  astroVersion: ASTRO_VERSION,
  viteVersion: version
});

createRequire(import.meta.url);

const debuggers = {};
function debug(type, ...messages) {
  const namespace = `astro:${type}`;
  debuggers[namespace] = debuggers[namespace] || debugPackage(namespace);
  return debuggers[namespace](...messages);
}
globalThis._astroGlobalDebug = debug;

function createDefaultAstroMetadata() {
  return {
    hydratedComponents: [],
    clientOnlyComponents: [],
    serverComponents: [],
    scripts: [],
    propagation: "none",
    containsHead: false,
    pageOptions: {}
  };
}

new AstroError({
  ...UnknownContentCollectionError,
  message: `Unexpected error while parsing content entry IDs and slugs.`
});

createRequire(import.meta.url);

function defineConfig$1(config) {
  return config;
}

async function getPostCssConfig(root, postcssInlineOptions) {
  let postcssConfigResult;
  if (!(typeof postcssInlineOptions === "object" && postcssInlineOptions !== null)) {
    let { default: postcssrc } = await import('postcss-load-config');
    const searchPath = typeof postcssInlineOptions === "string" ? postcssInlineOptions : root;
    try {
      postcssConfigResult = await postcssrc({}, searchPath);
    } catch {
      postcssConfigResult = null;
    }
  }
  return postcssConfigResult;
}
async function getViteConfiguration(tailwindConfigPath, nesting, root, postcssInlineOptions) {
  const postcssConfigResult = await getPostCssConfig(root, postcssInlineOptions);
  const postcssOptions = postcssConfigResult?.options ?? {};
  const postcssPlugins = postcssConfigResult?.plugins?.slice() ?? [];
  postcssPlugins.push(tailwindPlugin(tailwindConfigPath));
  postcssPlugins.push(autoprefixerPlugin());
  return {
    css: {
      postcss: {
        ...postcssOptions,
        plugins: postcssPlugins
      }
    }
  };
}
function tailwindIntegration(options) {
  const customConfigPath = options?.configFile;
  const nesting = false;
  return {
    name: "@astrojs/tailwind",
    hooks: {
      "astro:config:setup": async ({ config, updateConfig, injectScript }) => {
        updateConfig({
          vite: await getViteConfiguration(
            customConfigPath,
            nesting,
            fileURLToPath(config.root),
            config.vite.css?.postcss
          )
        });
        {
          injectScript("page-ssr", `import '@astrojs/tailwind/base.css';`);
        }
      }
    }
  };
}

function appendForwardSlash(path) {
  return path.endsWith("/") ? path : path + "/";
}
function getFileInfo(id, config) {
  const sitePathname = appendForwardSlash(
    config.site ? new URL(config.base, config.site).pathname : config.base
  );
  let url = void 0;
  try {
    url = new URL(`file://${id}`);
  } catch {
  }
  const fileId = id.split("?")[0];
  let fileUrl;
  const isPage = fileId.includes("/pages/");
  if (isPage) {
    fileUrl = fileId.replace(/^.*?\/pages\//, sitePathname).replace(/(?:\/index)?\.mdx$/, "");
  } else if (url?.pathname.startsWith(config.root.pathname)) {
    fileUrl = url.pathname.slice(config.root.pathname.length);
  } else {
    fileUrl = fileId;
  }
  if (fileUrl && config.trailingSlash === "always") {
    fileUrl = appendForwardSlash(fileUrl);
  }
  return { fileId, fileUrl };
}
function safeParseFrontmatter(code, id) {
  try {
    return parseFrontmatter(code, { frontmatter: "empty-with-spaces" });
  } catch (e) {
    if (e.name === "YAMLException") {
      const err = e;
      err.id = id;
      err.loc = { file: e.id, line: e.mark.line + 1, column: e.mark.column };
      err.message = e.reason;
      throw err;
    } else {
      throw e;
    }
  }
}
function jsToTreeNode(jsString, acornOpts = {
  ecmaVersion: "latest",
  sourceType: "module"
}) {
  return {
    type: "mdxjsEsm",
    value: "",
    data: {
      // @ts-expect-error `parse` return types is incompatible but it should work in runtime
      estree: {
        ...parse(jsString, acornOpts),
        type: "Program",
        sourceType: "module"
      }
    }
  };
}
function ignoreStringPlugins(plugins, logger) {
  let validPlugins = [];
  let hasInvalidPlugin = false;
  for (const plugin of plugins) {
    if (typeof plugin === "string") {
      logger.warn(`${bold(plugin)} not applied.`);
      hasInvalidPlugin = true;
    } else if (Array.isArray(plugin) && typeof plugin[0] === "string") {
      logger.warn(`${bold(plugin[0])} not applied.`);
      hasInvalidPlugin = true;
    } else {
      validPlugins.push(plugin);
    }
  }
  if (hasInvalidPlugin) {
    logger.warn(
      `To inherit Markdown plugins in MDX, please use explicit imports in your config instead of "strings." See Markdown docs: https://docs.astro.build/en/guides/markdown-content/#markdown-plugins`
    );
  }
  return validPlugins;
}

const ASTRO_IMAGE_ELEMENT = "astro-image";
const ASTRO_IMAGE_IMPORT = "__AstroImage__";
const USES_ASTRO_IMAGE_FLAG = "__usesAstroImage";
function createArrayAttribute(name, values) {
  return {
    type: "mdxJsxAttribute",
    name,
    value: {
      type: "mdxJsxAttributeValueExpression",
      value: name,
      data: {
        estree: {
          type: "Program",
          body: [
            {
              type: "ExpressionStatement",
              expression: {
                type: "ArrayExpression",
                elements: values.map((value) => ({
                  type: "Literal",
                  value,
                  raw: String(value)
                }))
              }
            }
          ],
          sourceType: "module",
          comments: []
        }
      }
    }
  };
}
function getImageComponentAttributes(props) {
  const attrs = [];
  for (const [prop, value] of Object.entries(props)) {
    if (prop === "src") continue;
    if (prop === "widths" || prop === "densities") {
      attrs.push(createArrayAttribute(prop, String(value).split(" ")));
    } else {
      attrs.push({
        name: prop,
        type: "mdxJsxAttribute",
        value: String(value)
      });
    }
  }
  return attrs;
}
function rehypeImageToComponent() {
  return function(tree, file) {
    if (!file.data.astro?.imagePaths) return;
    const importsStatements = [];
    const importedImages = /* @__PURE__ */ new Map();
    visit(tree, "element", (node, index, parent) => {
      if (!file.data.astro?.imagePaths || node.tagName !== "img" || !node.properties.src) return;
      const src = decodeURI(String(node.properties.src));
      if (!file.data.astro.imagePaths?.includes(src)) return;
      let importName = importedImages.get(src);
      if (!importName) {
        importName = `__${importedImages.size}_${src.replace(/\W/g, "_")}__`;
        importsStatements.push({
          type: "mdxjsEsm",
          value: "",
          data: {
            estree: {
              type: "Program",
              sourceType: "module",
              body: [
                {
                  type: "ImportDeclaration",
                  source: {
                    type: "Literal",
                    value: src,
                    raw: JSON.stringify(src)
                  },
                  specifiers: [
                    {
                      type: "ImportDefaultSpecifier",
                      local: { type: "Identifier", name: importName }
                    }
                  ]
                }
              ]
            }
          }
        });
        importedImages.set(src, importName);
      }
      const componentElement = {
        name: ASTRO_IMAGE_ELEMENT,
        type: "mdxJsxFlowElement",
        attributes: [
          ...getImageComponentAttributes(node.properties),
          {
            name: "src",
            type: "mdxJsxAttribute",
            value: {
              type: "mdxJsxAttributeValueExpression",
              value: importName,
              data: {
                estree: {
                  type: "Program",
                  sourceType: "module",
                  comments: [],
                  body: [
                    {
                      type: "ExpressionStatement",
                      expression: { type: "Identifier", name: importName }
                    }
                  ]
                }
              }
            }
          }
        ],
        children: []
      };
      parent.children.splice(index, 1, componentElement);
    });
    tree.children.unshift(...importsStatements);
    tree.children.unshift(
      jsToTreeNode(`import { Image as ${ASTRO_IMAGE_IMPORT} } from "astro:assets";`)
    );
    tree.children.push(jsToTreeNode(`export const ${USES_ASTRO_IMAGE_FLAG} = true`));
  };
}

const underscoreFragmentImportRegex = /[\s,{]_Fragment[\s,}]/;
const astroTagComponentImportRegex = /[\s,{]__astro_tag_component__[\s,}]/;
function vitePluginMdxPostprocess(astroConfig) {
  return {
    name: "@astrojs/mdx-postprocess",
    transform(code, id, opts) {
      if (!id.endsWith(".mdx")) return;
      const fileInfo = getFileInfo(id, astroConfig);
      const [imports, exports] = parse$1(code);
      code = injectUnderscoreFragmentImport(code, imports);
      code = injectMetadataExports(code, exports, fileInfo);
      code = transformContentExport(code, exports);
      code = annotateContentExport(code, id, !!opts?.ssr, imports);
      return { code, map: null };
    }
  };
}
function injectUnderscoreFragmentImport(code, imports) {
  if (!isSpecifierImported(code, imports, underscoreFragmentImportRegex, "astro/jsx-runtime")) {
    code += `
import { Fragment as _Fragment } from 'astro/jsx-runtime';`;
  }
  return code;
}
function injectMetadataExports(code, exports, fileInfo) {
  if (!exports.some(({ n }) => n === "url")) {
    code += `
export const url = ${JSON.stringify(fileInfo.fileUrl)};`;
  }
  if (!exports.some(({ n }) => n === "file")) {
    code += `
export const file = ${JSON.stringify(fileInfo.fileId)};`;
  }
  return code;
}
function transformContentExport(code, exports) {
  if (exports.find(({ n }) => n === "Content")) return code;
  const hasComponents = exports.find(({ n }) => n === "components");
  const usesAstroImage = exports.find(({ n }) => n === USES_ASTRO_IMAGE_FLAG);
  let componentsCode = `{ Fragment: _Fragment${hasComponents ? ", ...components" : ""}, ...props.components,`;
  if (usesAstroImage) {
    componentsCode += ` ${JSON.stringify(ASTRO_IMAGE_ELEMENT)}: ${hasComponents ? "components.img ?? " : ""} props.components?.img ?? ${ASTRO_IMAGE_IMPORT}`;
  }
  componentsCode += " }";
  code = code.replace("export default function MDXContent", "function MDXContent");
  code += `
export const Content = (props = {}) => MDXContent({
  ...props,
  components: ${componentsCode},
});
export default Content;`;
  return code;
}
function annotateContentExport(code, id, ssr, imports) {
  code += `
Content[Symbol.for('mdx-component')] = true`;
  code += `
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);`;
  code += `
Content.moduleId = ${JSON.stringify(id)};`;
  if (ssr) {
    if (!isSpecifierImported(
      code,
      imports,
      astroTagComponentImportRegex,
      "astro/runtime/server/index.js"
    )) {
      code += `
import { __astro_tag_component__ } from 'astro/runtime/server/index.js';`;
    }
    code += `
__astro_tag_component__(Content, 'astro:jsx');`;
  }
  return code;
}
function isSpecifierImported(code, imports, specifierRegex, source) {
  for (const imp of imports) {
    if (imp.n !== source) continue;
    const importStatement = code.slice(imp.ss, imp.se);
    if (specifierRegex.test(importStatement)) return true;
  }
  return false;
}

const ClientOnlyPlaceholder = "astro-client-only";
const rehypeAnalyzeAstroMetadata = () => {
  return (tree, file) => {
    const metadata = createDefaultAstroMetadata();
    const imports = parseImports(tree.children);
    visit(tree, (node) => {
      if (node.type !== "mdxJsxFlowElement" && node.type !== "mdxJsxTextElement") return;
      const tagName = node.name;
      if (!tagName || !isComponent(tagName) || !hasClientDirective(node)) return;
      const matchedImport = findMatchingImport(tagName, imports);
      if (!matchedImport) {
        throw new AstroError({
          ...NoMatchingImport,
          message: NoMatchingImport.message(node.name)
        });
      }
      if (matchedImport.path.endsWith(".astro")) {
        const clientAttribute = node.attributes.find(
          (attr) => attr.type === "mdxJsxAttribute" && attr.name.startsWith("client:")
        );
        if (clientAttribute) {
          console.warn(
            `You are attempting to render <${node.name} ${clientAttribute.name} />, but ${node.name} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
          );
        }
      }
      const resolvedPath = resolvePath(matchedImport.path, file.path);
      if (hasClientOnlyDirective(node)) {
        metadata.clientOnlyComponents.push({
          exportName: matchedImport.name,
          localName: "",
          specifier: tagName,
          resolvedPath
        });
        addClientOnlyMetadata(node, matchedImport, resolvedPath);
      } else {
        metadata.hydratedComponents.push({
          exportName: "*",
          localName: "",
          specifier: tagName,
          resolvedPath
        });
        addClientMetadata(node, matchedImport, resolvedPath);
      }
    });
    file.data.__astroMetadata = metadata;
  };
};
function getAstroMetadata(file) {
  return file.data.__astroMetadata;
}
function parseImports(children) {
  const imports = /* @__PURE__ */ new Map();
  for (const child of children) {
    if (child.type !== "mdxjsEsm") continue;
    const body = child.data?.estree?.body;
    if (!body) continue;
    for (const ast of body) {
      if (ast.type !== "ImportDeclaration") continue;
      const source = ast.source.value;
      const specs = ast.specifiers.map((spec) => {
        switch (spec.type) {
          case "ImportDefaultSpecifier":
            return { local: spec.local.name, imported: "default" };
          case "ImportNamespaceSpecifier":
            return { local: spec.local.name, imported: "*" };
          case "ImportSpecifier": {
            return {
              local: spec.local.name,
              imported: spec.imported.type === "Identifier" ? spec.imported.name : String(spec.imported.value)
            };
          }
          default:
            throw new Error("Unknown import declaration specifier: " + spec);
        }
      });
      let specSet = imports.get(source);
      if (!specSet) {
        specSet = /* @__PURE__ */ new Set();
        imports.set(source, specSet);
      }
      for (const spec of specs) {
        specSet.add(spec);
      }
    }
  }
  return imports;
}
function isComponent(tagName) {
  return tagName[0] && tagName[0].toLowerCase() !== tagName[0] || tagName.includes(".") || /[^a-zA-Z]/.test(tagName[0]);
}
function hasClientDirective(node) {
  return node.attributes.some(
    (attr) => attr.type === "mdxJsxAttribute" && attr.name.startsWith("client:")
  );
}
function hasClientOnlyDirective(node) {
  return node.attributes.some(
    (attr) => attr.type === "mdxJsxAttribute" && attr.name === "client:only"
  );
}
function findMatchingImport(tagName, imports) {
  const tagSpecifier = tagName.split(".")[0];
  for (const [source, specs] of imports) {
    for (const { imported, local } of specs) {
      if (local === tagSpecifier) {
        if (tagSpecifier !== tagName) {
          switch (imported) {
            case "*": {
              const accessPath = tagName.slice(tagSpecifier.length + 1);
              return { name: accessPath, path: source };
            }
            case "default": {
              const accessPath = tagName.slice(tagSpecifier.length + 1);
              return { name: `default.${accessPath}`, path: source };
            }
            default: {
              return { name: tagName, path: source };
            }
          }
        }
        return { name: imported, path: source };
      }
    }
  }
}
function addClientMetadata(node, meta, resolvedPath) {
  const attributeNames = node.attributes.map((attr) => attr.type === "mdxJsxAttribute" ? attr.name : null).filter(Boolean);
  if (!attributeNames.includes("client:component-path")) {
    node.attributes.push({
      type: "mdxJsxAttribute",
      name: "client:component-path",
      value: resolvedPath
    });
  }
  if (!attributeNames.includes("client:component-export")) {
    if (meta.name === "*") {
      meta.name = node.name.split(".").slice(1).join(".");
    }
    node.attributes.push({
      type: "mdxJsxAttribute",
      name: "client:component-export",
      value: meta.name
    });
  }
  if (!attributeNames.includes("client:component-hydration")) {
    node.attributes.push({
      type: "mdxJsxAttribute",
      name: "client:component-hydration",
      value: null
    });
  }
}
function addClientOnlyMetadata(node, meta, resolvedPath) {
  const attributeNames = node.attributes.map((attr) => attr.type === "mdxJsxAttribute" ? attr.name : null).filter(Boolean);
  if (!attributeNames.includes("client:display-name")) {
    node.attributes.push({
      type: "mdxJsxAttribute",
      name: "client:display-name",
      value: node.name
    });
  }
  if (!attributeNames.includes("client:component-hydpathation")) {
    node.attributes.push({
      type: "mdxJsxAttribute",
      name: "client:component-path",
      value: resolvedPath
    });
  }
  if (!attributeNames.includes("client:component-export")) {
    if (meta.name === "*") {
      meta.name = node.name.split(".").slice(1).join(".");
    }
    node.attributes.push({
      type: "mdxJsxAttribute",
      name: "client:component-export",
      value: meta.name
    });
  }
  if (!attributeNames.includes("client:component-hydration")) {
    node.attributes.push({
      type: "mdxJsxAttribute",
      name: "client:component-hydration",
      value: null
    });
  }
  node.name = ClientOnlyPlaceholder;
}

const exportConstPartialTrueRe = /export\s+const\s+partial\s*=\s*true/;
function rehypeApplyFrontmatterExport() {
  return function(tree, vfile) {
    const frontmatter = vfile.data.astro?.frontmatter;
    if (!frontmatter || !isFrontmatterValid(frontmatter))
      throw new Error(
        // Copied from Astro core `errors-data`
        // TODO: find way to import error data from core
        '[MDX] A remark or rehype plugin attempted to inject invalid frontmatter. Ensure "astro.frontmatter" is set to a valid JSON object that is not `null` or `undefined`.'
      );
    const extraChildren = [
      jsToTreeNode(`export const frontmatter = ${JSON.stringify(frontmatter)};`)
    ];
    if (frontmatter.layout) {
      extraChildren.unshift(
        jsToTreeNode(
          // NOTE: Use `__astro_*` import names to prevent conflicts with user code
          /** @see 'vite-plugin-markdown' for layout props reference */
          `import { jsx as __astro_layout_jsx__ } from 'astro/jsx-runtime';
import __astro_layout_component__ from ${JSON.stringify(frontmatter.layout)};

export default function ({ children }) {
	const { layout, ...content } = frontmatter;
	content.file = file;
	content.url = url;
	return __astro_layout_jsx__(__astro_layout_component__, {
		file,
		url,
		content,
		frontmatter: content,
		headings: getHeadings(),
		'server:root': true,
		children,
	});
};`
        )
      );
    } else if (shouldAddCharset(tree, vfile)) {
      extraChildren.unshift({
        type: "mdxJsxFlowElement",
        name: "meta",
        attributes: [
          {
            type: "mdxJsxAttribute",
            name: "charset",
            value: "utf-8"
          }
        ],
        children: []
      });
    }
    tree.children = extraChildren.concat(tree.children);
  };
}
function shouldAddCharset(tree, vfile) {
  const srcDirUrl = vfile.data.applyFrontmatterExport?.srcDir;
  if (!srcDirUrl) return false;
  const hasConstPartialTrue = tree.children.some(
    (node) => node.type === "mdxjsEsm" && exportConstPartialTrueRe.test(node.value)
  );
  if (hasConstPartialTrue) return false;
  const pagesDir = path.join(fileURLToPath(srcDirUrl), "pages").replace(/\\/g, "/");
  const filePath = vfile.path;
  if (!filePath.startsWith(pagesDir)) return false;
  const hasLeadingUnderscoreInPath = filePath.slice(pagesDir.length).replace(/\\/g, "/").split("/").some((part) => part.startsWith("_"));
  if (hasLeadingUnderscoreInPath) return false;
  for (const child of tree.children) {
    if (child.type === "element") break;
    if (child.type === "mdxJsxFlowElement") {
      if (child.name == null) break;
      if (child.name[0] === child.name[0].toLowerCase()) break;
      return false;
    }
  }
  return true;
}

function rehypeInjectHeadingsExport() {
  return function(tree, file) {
    const headings = file.data.astro?.headings ?? [];
    tree.children.unshift(
      jsToTreeNode(`export function getHeadings() { return ${JSON.stringify(headings)} }`)
    );
  };
}

function rehypeMetaString() {
  return function(tree) {
    visit(tree, (node) => {
      if (node.type === "element" && node.tagName === "code" && node.data?.meta) {
        node.properties ??= {};
        node.properties.metastring = node.data.meta;
      }
    });
  };
}

const exportConstComponentsRe = /export\s+const\s+components\s*=/;
const rehypeOptimizeStatic = (options) => {
  return (tree) => {
    const ignoreElementNames = new Set(options?.ignoreElementNames);
    for (const child of tree.children) {
      if (child.type === "mdxjsEsm" && exportConstComponentsRe.test(child.value)) {
        const keys = getExportConstComponentObjectKeys(child);
        if (keys) {
          for (const key of keys) {
            ignoreElementNames.add(key);
          }
        }
        break;
      }
    }
    const allPossibleElements = /* @__PURE__ */ new Set();
    const elementStack = [];
    const elementMetadatas = /* @__PURE__ */ new WeakMap();
    const isNodeNonStatic = (node) => {
      return node.type.startsWith("mdx") || // @ts-expect-error `node` should never have `type: 'root'`, but in some cases plugins may inject it as children,
      // which MDX will render as a fragment instead (an MDX fragment is a `mdxJsxFlowElement` type).
      node.type === "root" || // @ts-expect-error Access `.tagName` naively for perf
      ignoreElementNames.has(node.tagName);
    };
    visit$1(tree, {
      // @ts-expect-error Force coerce node as hast node
      enter(node, key, index, parents) {
        if (key != null && key !== "children") return SKIP;
        simplifyPlainMdxComponentNode(node, ignoreElementNames);
        if (isNodeNonStatic(node)) {
          for (const el of elementStack) {
            allPossibleElements.delete(el);
          }
          elementStack.length = 0;
        }
        if (node.type === "element" || isMdxComponentNode(node)) {
          elementStack.push(node);
          allPossibleElements.add(node);
          if (index != null && node.type === "element") {
            elementMetadatas.set(node, { parent: parents[parents.length - 1], index });
          }
        }
      },
      // @ts-expect-error Force coerce node as hast node
      leave(node, key, _, parents) {
        if (key != null && key !== "children") return SKIP;
        if (node.type === "element" || isMdxComponentNode(node)) {
          elementStack.pop();
          const parent = parents[parents.length - 1];
          if (allPossibleElements.has(parent)) {
            allPossibleElements.delete(node);
          }
        }
      }
    });
    const elementGroups = findElementGroups(allPossibleElements, elementMetadatas, isNodeNonStatic);
    for (const el of allPossibleElements) {
      if (el.children.length === 0) continue;
      if (isMdxComponentNode(el)) {
        el.attributes.push({
          type: "mdxJsxAttribute",
          name: "set:html",
          value: toHtml(el.children)
        });
      } else {
        el.properties["set:html"] = toHtml(el.children);
      }
      el.children = [];
    }
    for (let i = elementGroups.length - 1; i >= 0; i--) {
      const group = elementGroups[i];
      const fragmentNode = {
        type: "mdxJsxFlowElement",
        name: "Fragment",
        attributes: [
          {
            type: "mdxJsxAttribute",
            name: "set:html",
            value: toHtml(group.children)
          }
        ],
        children: []
      };
      group.parent.children.splice(group.startIndex, group.children.length, fragmentNode);
    }
  };
};
function findElementGroups(allPossibleElements, elementMetadatas, isNodeNonStatic) {
  const elementGroups = [];
  for (const el of allPossibleElements) {
    if (isNodeNonStatic(el)) continue;
    const metadata = elementMetadatas.get(el);
    if (!metadata) {
      throw new Error(
        "Internal MDX error: rehype-optimize-static should have metadata for element node"
      );
    }
    const groupableElements = [el];
    for (let i = metadata.index + 1; i < metadata.parent.children.length; i++) {
      const node = metadata.parent.children[i];
      if (isNodeNonStatic(node)) break;
      if (node.type === "element") {
        const existed = allPossibleElements.delete(node);
        if (!existed) break;
      }
      groupableElements.push(node);
    }
    if (groupableElements.length > 1) {
      elementGroups.push({
        parent: metadata.parent,
        startIndex: metadata.index,
        children: groupableElements
      });
      allPossibleElements.delete(el);
    }
  }
  return elementGroups;
}
function isMdxComponentNode(node) {
  return node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement";
}
function getExportConstComponentObjectKeys(node) {
  const exportNamedDeclaration = node.data?.estree?.body[0];
  if (exportNamedDeclaration?.type !== "ExportNamedDeclaration") return;
  const variableDeclaration = exportNamedDeclaration.declaration;
  if (variableDeclaration?.type !== "VariableDeclaration") return;
  const variableInit = variableDeclaration.declarations[0]?.init;
  if (variableInit?.type !== "ObjectExpression") return;
  const keys = [];
  for (const propertyNode of variableInit.properties) {
    if (propertyNode.type === "Property" && propertyNode.key.type === "Identifier") {
      keys.push(propertyNode.key.name);
    }
  }
  return keys;
}
function simplifyPlainMdxComponentNode(node, ignoreElementNames) {
  if (!isMdxComponentNode(node) || // Attributes could be dynamic, so bail if so.
  node.attributes.length > 0 || // Fragments are also dynamic
  !node.name || // Ignore if the node name is in the ignore list
  ignoreElementNames.has(node.name) || // If the node name has uppercase characters, it's likely an actual MDX component
  node.name.toLowerCase() !== node.name) {
    return;
  }
  const newNode = node;
  newNode.type = "element";
  newNode.tagName = node.name;
  newNode.properties = {};
  node.attributes = void 0;
  node.data = void 0;
}

const isPerformanceBenchmark = Boolean(process.env.ASTRO_PERFORMANCE_BENCHMARK);
function createMdxProcessor(mdxOptions, extraOptions) {
  return createProcessor({
    remarkPlugins: getRemarkPlugins(mdxOptions),
    rehypePlugins: getRehypePlugins(mdxOptions),
    recmaPlugins: mdxOptions.recmaPlugins,
    remarkRehypeOptions: mdxOptions.remarkRehype,
    jsxImportSource: "astro",
    // Note: disable `.md` (and other alternative extensions for markdown files like `.markdown`) support
    format: "mdx",
    mdExtensions: [],
    elementAttributeNameCase: "html",
    SourceMapGenerator: extraOptions.sourcemap ? SourceMapGenerator : void 0
  });
}
function getRemarkPlugins(mdxOptions) {
  let remarkPlugins = [];
  if (!isPerformanceBenchmark) {
    if (mdxOptions.gfm) {
      remarkPlugins.push(remarkGfm);
    }
    if (mdxOptions.smartypants) {
      remarkPlugins.push(remarkSmartypants);
    }
  }
  remarkPlugins.push(...mdxOptions.remarkPlugins, remarkCollectImages);
  return remarkPlugins;
}
function getRehypePlugins(mdxOptions) {
  let rehypePlugins = [
    // ensure `data.meta` is preserved in `properties.metastring` for rehype syntax highlighters
    rehypeMetaString,
    // rehypeRaw allows custom syntax highlighters to work without added config
    [rehypeRaw, { passThrough: nodeTypes }]
  ];
  if (!isPerformanceBenchmark) {
    if (mdxOptions.syntaxHighlight === "shiki") {
      rehypePlugins.push([rehypeShiki, mdxOptions.shikiConfig]);
    } else if (mdxOptions.syntaxHighlight === "prism") {
      rehypePlugins.push(rehypePrism);
    }
  }
  rehypePlugins.push(...mdxOptions.rehypePlugins, rehypeImageToComponent);
  if (!isPerformanceBenchmark) {
    rehypePlugins.push(rehypeHeadingIds, rehypeInjectHeadingsExport);
  }
  rehypePlugins.push(
    // Render info from `vfile.data.astro.frontmatter` as JS
    rehypeApplyFrontmatterExport,
    // Analyze MDX nodes and attach to `vfile.data.__astroMetadata`
    rehypeAnalyzeAstroMetadata
  );
  if (mdxOptions.optimize) {
    const options = mdxOptions.optimize === true ? void 0 : mdxOptions.optimize;
    rehypePlugins.push([rehypeOptimizeStatic, options]);
  }
  return rehypePlugins;
}

function vitePluginMdx(opts) {
  let processor;
  let sourcemapEnabled;
  return {
    name: "@mdx-js/rollup",
    enforce: "pre",
    buildEnd() {
      processor = void 0;
    },
    configResolved(resolved) {
      sourcemapEnabled = !!resolved.build.sourcemap;
      const jsxPluginIndex = resolved.plugins.findIndex((p) => p.name === "astro:jsx");
      if (jsxPluginIndex !== -1) {
        resolved.plugins.splice(jsxPluginIndex, 1);
      }
    },
    async resolveId(source, importer, options) {
      if (importer?.endsWith(".mdx") && source[0] !== "/") {
        let resolved = await this.resolve(source, importer, options);
        if (!resolved) resolved = await this.resolve("./" + source, importer, options);
        return resolved;
      }
    },
    // Override transform to alter code before MDX compilation
    // ex. inject layouts
    async transform(code, id) {
      if (!id.endsWith(".mdx")) return;
      const { frontmatter, content } = safeParseFrontmatter(code, id);
      const vfile = new VFile({
        value: content,
        path: id,
        data: {
          astro: {
            frontmatter
          },
          applyFrontmatterExport: {
            srcDir: opts.srcDir
          }
        }
      });
      if (!processor) {
        processor = createMdxProcessor(opts.mdxOptions, { sourcemap: sourcemapEnabled });
      }
      try {
        const compiled = await processor.process(vfile);
        return {
          code: String(compiled.value),
          map: compiled.map,
          meta: getMdxMeta(vfile)
        };
      } catch (e) {
        const err = e;
        err.name = "MDXError";
        err.loc = { file: id, line: e.line, column: e.column };
        Error.captureStackTrace(err);
        throw err;
      }
    }
  };
}
function getMdxMeta(vfile) {
  const astroMetadata = getAstroMetadata(vfile);
  if (!astroMetadata) {
    throw new Error(
      "Internal MDX error: Astro metadata is not set by rehype-analyze-astro-metadata"
    );
  }
  return {
    astro: astroMetadata,
    vite: {
      // Setting this vite metadata to `ts` causes Vite to resolve .js
      // extensions to .ts files.
      lang: "ts"
    }
  };
}

function mdx(partialMdxOptions = {}) {
  let vitePluginMdxOptions = {};
  return {
    name: "@astrojs/mdx",
    hooks: {
      "astro:config:setup": async (params) => {
        const { updateConfig, config, addPageExtension, addContentEntryType, addRenderer } = params;
        addRenderer({
          name: "astro:jsx",
          serverEntrypoint: new URL("../dist/server.js", import.meta.url)
        });
        addPageExtension(".mdx");
        addContentEntryType({
          extensions: [".mdx"],
          async getEntryInfo({ fileUrl, contents }) {
            const parsed = safeParseFrontmatter(contents, fileURLToPath(fileUrl));
            return {
              data: parsed.frontmatter,
              body: parsed.content.trim(),
              slug: parsed.frontmatter.slug,
              rawData: parsed.rawFrontmatter
            };
          },
          contentModuleTypes: await fs$1.readFile(
            new URL("../template/content-module-types.d.ts", import.meta.url),
            "utf-8"
          ),
          // MDX can import scripts and styles,
          // so wrap all MDX files with script / style propagation checks
          handlePropagation: true
        });
        updateConfig({
          vite: {
            plugins: [vitePluginMdx(vitePluginMdxOptions), vitePluginMdxPostprocess(config)]
          }
        });
      },
      "astro:config:done": ({ config, logger }) => {
        const extendMarkdownConfig = partialMdxOptions.extendMarkdownConfig ?? defaultMdxOptions.extendMarkdownConfig;
        const resolvedMdxOptions = applyDefaultOptions({
          options: partialMdxOptions,
          defaults: markdownConfigToMdxOptions(
            extendMarkdownConfig ? config.markdown : markdownConfigDefaults,
            logger
          )
        });
        Object.assign(vitePluginMdxOptions, {
          mdxOptions: resolvedMdxOptions,
          srcDir: config.srcDir
        });
        vitePluginMdxOptions = {};
      }
    }
  };
}
const defaultMdxOptions = {
  extendMarkdownConfig: true,
  recmaPlugins: [],
  optimize: false
};
function markdownConfigToMdxOptions(markdownConfig, logger) {
  return {
    ...defaultMdxOptions,
    ...markdownConfig,
    remarkPlugins: ignoreStringPlugins(markdownConfig.remarkPlugins, logger),
    rehypePlugins: ignoreStringPlugins(markdownConfig.rehypePlugins, logger),
    remarkRehype: markdownConfig.remarkRehype ?? {}
  };
}
function applyDefaultOptions({
  options,
  defaults
}) {
  return {
    syntaxHighlight: options.syntaxHighlight ?? defaults.syntaxHighlight,
    extendMarkdownConfig: options.extendMarkdownConfig ?? defaults.extendMarkdownConfig,
    recmaPlugins: options.recmaPlugins ?? defaults.recmaPlugins,
    remarkRehype: options.remarkRehype ?? defaults.remarkRehype,
    gfm: options.gfm ?? defaults.gfm,
    smartypants: options.smartypants ?? defaults.smartypants,
    remarkPlugins: options.remarkPlugins ?? defaults.remarkPlugins,
    rehypePlugins: options.rehypePlugins ?? defaults.rehypePlugins,
    shikiConfig: options.shikiConfig ?? defaults.shikiConfig,
    optimize: options.optimize ?? defaults.optimize
  };
}

// @ts-check

// https://astro.build/config
const defineConfig = defineConfig$1({
  integrations: [tailwindIntegration(), mdx()],
  output: 'static',
  i18n: {
    defaultLocale: "de",
    locales: ["de"],
    routing: {
        prefixDefaultLocale: false,
    },
  },
  compressHTML: true,
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    //format: 'preserve'
    //redirects: true,
  },
  site: 'https://vgbs742.github.io/',
});

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang;
  return defaultLang;
}
function getSlugNoLangFromUrl(url) {
  const [, , slug] = url.pathname.split("/");
  if (slug in dict) return slug;
  return slug;
}
async function translatePath(url) {
  const locales = defineConfig.i18n.locales;
  const pathSplitRaw = url.pathname.split("/");
  const pathSplit = pathSplitRaw.filter((path2) => path2 !== "");
  pathSplit[0];
  const sectionRaw = pathSplit[1];
  const contentRaw = pathSplit[2];
  const sections = await getCollection("sections");
  const sectionObject = sections.filter((section) => {
    return section.id === sectionRaw;
  })[0];
  var sectionName = "";
  var sectionAllLangs = [];
  var collection = [];
  var contentObject = [];
  var contentName = "";
  var contentAllLangs = [];
  var paths = [];
  if (pathSplit.length > 1) {
    sectionName = sectionObject.filePath.split("/")[sectionObject.filePath.split("/").length - 1].split(".")[0];
    sectionAllLangs = sections.filter((section) => {
      return section.filePath.split("/")[section.filePath.split("/").length - 1].split(".")[0] === sectionName;
    });
  }
  if (pathSplit.length > 2) {
    collection = await getCollection(sectionName);
    contentObject = collection.filter((content) => {
      return content.id === contentRaw;
    })[0];
    contentName = contentObject.filePath.split("/")[contentObject.filePath.split("/").length - 1].split(".")[0];
    contentAllLangs = collection.filter((content) => {
      return content.filePath.split("/")[content.filePath.split("/").length - 1].split(".")[0] === contentName;
    });
  }
  for (let i = 0; i < locales.length; i++) {
    var path = "";
    path += locales[i];
    if (pathSplit.length > 1) {
      const sectionThisLang = sectionAllLangs.filter((section) => {
        return section.filePath.split("/")[section.filePath.split("/").length - 2] === locales[i];
      })[0];
      if (sectionThisLang) {
        path += "/";
        path += sectionThisLang.data.slug;
      } else {
        path = void 0;
      }
    }
    if (pathSplit.length > 2) {
      const contentThisLang = contentAllLangs.filter((content) => {
        return content.filePath.split("/")[content.filePath.split("/").length - 2] === locales[i];
      })[0];
      if (contentThisLang) {
        path += "/";
        path += contentThisLang.data.slug;
      } else {
        path = void 0;
      }
    }
    path += "/";
    const thisLocale = locales[i];
    paths[i] = { locale: thisLocale, path };
  }
  return paths;
}

const logoLang = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!-- Created with Inkscape (http://www.inkscape.org/) -->\n\n<svg\n   width=\"53.574661mm\"\n   height=\"7.8671951mm\"\n   viewBox=\"0 0 53.574661 7.8671951\"\n   version=\"1.1\"\n   id=\"svg8725\"\n   xml:space=\"preserve\"\n   sodipodi:docname=\"logoLang001.svg\"\n   inkscape:version=\"1.3.2 (091e20e, 2023-11-25)\"\n   xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\n   xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"><sodipodi:namedview\n     id=\"namedview8727\"\n     pagecolor=\"#505050\"\n     bordercolor=\"#eeeeee\"\n     borderopacity=\"1\"\n     inkscape:showpageshadow=\"0\"\n     inkscape:pageopacity=\"0\"\n     inkscape:pagecheckerboard=\"0\"\n     inkscape:deskcolor=\"#505050\"\n     inkscape:document-units=\"mm\"\n     showgrid=\"true\"\n     inkscape:zoom=\"256\"\n     inkscape:cx=\"103.97656\"\n     inkscape:cy=\"-0.080078125\"\n     inkscape:window-width=\"1440\"\n     inkscape:window-height=\"900\"\n     inkscape:window-x=\"0\"\n     inkscape:window-y=\"0\"\n     inkscape:window-maximized=\"0\"\n     inkscape:current-layer=\"layer2\"><inkscape:grid\n       type=\"xygrid\"\n       id=\"grid15514\"\n       spacingx=\"0.5\"\n       spacingy=\"0.5\"\n       originx=\"0\"\n       originy=\"0\"\n       units=\"mm\"\n       visible=\"true\" /></sodipodi:namedview><defs\n     id=\"defs8722\"><linearGradient\n       id=\"linearGradient35131\"\n       inkscape:swatch=\"solid\"><stop\n         style=\"stop-color:#787878;stop-opacity:1;\"\n         offset=\"0\"\n         id=\"stop35129\" /></linearGradient><linearGradient\n       id=\"linearGradient24195\"\n       inkscape:swatch=\"solid\"><stop\n         style=\"stop-color:#000000;stop-opacity:1;\"\n         offset=\"0\"\n         id=\"stop24193\" /></linearGradient><linearGradient\n       id=\"linearGradient24187\"\n       inkscape:swatch=\"solid\"><stop\n         style=\"stop-color:#000000;stop-opacity:1;\"\n         offset=\"0\"\n         id=\"stop24185\" /></linearGradient><linearGradient\n       id=\"linearGradient24179\"\n       inkscape:swatch=\"solid\"><stop\n         style=\"stop-color:#dada39;stop-opacity:1;\"\n         offset=\"0\"\n         id=\"stop24177\" /></linearGradient><linearGradient\n       id=\"linearGradient23445\"\n       inkscape:swatch=\"solid\"><stop\n         style=\"stop-color:#f9f4d7;stop-opacity:1;\"\n         offset=\"0\"\n         id=\"stop23443\" /></linearGradient><linearGradient\n       id=\"linearGradient21831\"\n       inkscape:swatch=\"solid\"><stop\n         style=\"stop-color:#324c78;stop-opacity:1;\"\n         offset=\"0\"\n         id=\"stop21829\" /></linearGradient></defs><g\n     inkscape:groupmode=\"layer\"\n     id=\"layer2\"\n     inkscape:label=\"Layer 4\"\n     transform=\"translate(-144.58159,-117.93359)\"><path\n       style=\"color:#000000;fill-opacity:1;stroke-linecap:square;stroke-miterlimit:3.8;stroke-dashoffset:1.51048;paint-order:markers fill stroke\"\n       d=\"m 160.03179,117.93359 c -0.67943,0 -1.23126,0.31853 -1.65234,0.73633 -0.42109,0.4178 -0.74805,0.97626 -0.74805,1.66406 v 3.06641 c 0,0.68282 0.31945,1.25415 0.74414,1.67383 0.42469,0.41968 0.98669,0.72656 1.65625,0.72656 h 9.90039 v -1.90039 -1 V 121 h -8.36328 -0.90039 v 1.80078 h 0.90039 6.5625 v 0.0996 1 V 124 h -8.09961 c -0.0632,0 -0.25045,-0.0646 -0.39258,-0.20508 -0.14213,-0.14045 -0.20703,-0.31788 -0.20703,-0.39453 v -3.06641 c 0,-0.0449 0.0666,-0.2377 0.2168,-0.38672 0.15019,-0.14902 0.34733,-0.21289 0.38281,-0.21289 h 9 0.90039 v -1.80078 h -0.90039 z\"\n       id=\"path340\"\n       inkscape:export-filename=\"logoLang001.svg\"\n       inkscape:export-xdpi=\"956.73352\"\n       inkscape:export-ydpi=\"956.73352\"\n       sodipodi:nodetypes=\"scssssccccccccccccscsscsccccs\" /><path\n       style=\"color:#000000;fill-opacity:1;stroke-linecap:square;stroke-miterlimit:3.8;stroke-dashoffset:1.51048;paint-order:markers fill stroke\"\n       d=\"m 171.98158,117.93412 0.006,3.96627 v 0.0625 l -0.006,0.77149 h 0.006 v 3 l 9.39844,0.0664 h 0.002 c 1.61,0 2.77539,-1.15039 2.77539,-2.40039 0,-0.56135 -0.29844,-1.07408 -0.70312,-1.5 0.4054,-0.42611 0.70312,-1.00452 0.70312,-1.56641 0,-1.25 -1.16539,-2.40039 -2.77539,-2.40039 z m 1.80078,1.8125 7.60386,-0.0122 h 0.002 c 0.89,0 0.97461,0.34961 0.97461,0.59961 0,0.25 -0.0846,0.66602 -0.97461,0.66602 l -7.59961,-0.0547 z m 0.006,2.99947 7.59375,0.0547 h 0.006 c 0.89,0 0.97461,0.34961 0.97461,0.59961 0,0.25 -0.0846,0.59961 -0.97461,0.59961 l -7.59961,-0.0527 z\"\n       id=\"path342\"\n       sodipodi:nodetypes=\"cccccccsscsccccsscccccssccc\" /><path\n       style=\"color:#000000;fill-opacity:1;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:3.8;stroke-dashoffset:1.51048;-inkscape-stroke:none;paint-order:markers fill stroke\"\n       d=\"m 188.78125,117.93359 c -1.61,0 -2.77539,1.15039 -2.77539,2.40039 0,1.25 1.16539,2.4668 2.77539,2.4668 h 6.59961 c 0.89,0 0.97461,0.34961 0.97461,0.59961 0,0.25 -0.0846,0.59961 -0.97461,0.59961 h -8.4707 -0.90039 v 1.80078 h 0.90039 8.4707 c 1.61,0 2.77539,-1.15039 2.77539,-2.40039 0,-1.25 -1.16539,-2.40039 -2.77539,-2.40039 h -6.59961 c -0.89,0 -0.97461,-0.41602 -0.97461,-0.66602 0,-0.25 0.0846,-0.59961 0.97461,-0.59961 h 8.47266 0.90039 v -1.80078 h -0.90039 z\"\n       id=\"path344\"\n       sodipodi:nodetypes=\"ssssssccccssssssccccs\" /><path\n       id=\"path2486\"\n       style=\"color:#000000;fill-opacity:1;stroke-linecap:square;stroke-miterlimit:3.8;stroke-dashoffset:1.51048;paint-order:markers fill stroke\"\n       d=\"m 144.58159,117.93359 0.25425,0.38705 5.14977,7.47508 h 0.84595 0.84749 l 5.10798,-7.4203 0.29456,-0.44183 h -2.16318 l -4.08324,5.87775 -4.09919,-5.87775 z\"\n       sodipodi:nodetypes=\"ccccccccccc\" /></g></svg>\n";

const $$LogoTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="px-0 2xl:max-w-7xl ml-0 mr-auto pt-0 h-auto max-h-[24vh]" data-aos="fade-up" data-aos-duration="2000"> <svg viewBox="0 0 203 29" xmlns="http://www.w3.org/2000/svg" fill="#274163" stroke="none" class="w-full"> <foreignObject class="title" x="0" y="0" width="100%" height="100%"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(logoLang)}` })} </foreignObject> <!-- <path
        d="M26.9885 77.4387C18.9919 77.4387 12.5809 75.7843 7.75532 72.4753C2.92979 69.1664 0.482553 64.5477 0.413617 58.6191H19.1298C19.4745 63.2379 22.1285 65.5472 27.0919 65.5472C31.5728 65.5472 33.8132 64.0306 33.8132 60.9974C33.8132 59.2051 32.8826 57.9642 31.0213 57.2749C29.16 56.5166 26.3336 55.8617 22.5421 55.3102C21.7838 55.2413 21.2323 55.1723 20.8877 55.1034C18.7506 54.7587 16.9238 54.414 15.4072 54.0694C13.9596 53.7247 12.2706 53.1732 10.3404 52.4149C8.47915 51.5877 6.96255 50.6225 5.79064 49.5196C4.68766 48.3477 3.72255 46.7966 2.89532 44.8664C2.13702 42.9362 1.75787 40.6957 1.75787 38.1451C1.75787 32.906 4.06723 28.8042 8.68596 25.84C13.3047 22.8068 18.9919 21.2902 25.7477 21.2902C33.6753 21.2902 39.7417 22.7034 43.9468 25.5298C48.2209 28.3562 50.5302 32.3889 50.8749 37.6281H32.4689C32.0553 34.457 29.8494 32.8715 25.8511 32.8715C24.2655 32.8715 22.9213 33.2162 21.8183 33.9055C20.7843 34.526 20.2672 35.4566 20.2672 36.6974C20.2672 38.0072 21.0945 38.9379 22.7489 39.4894C24.4723 40.0408 27.2643 40.5923 31.1247 41.1438C33.6064 41.4885 35.6055 41.8332 37.1221 42.1779C38.7077 42.4536 40.6034 43.0396 42.8094 43.9357C45.0843 44.763 46.8421 45.797 48.083 47.0379C49.3928 48.2098 50.5302 49.8642 51.4953 52.0013C52.4604 54.0694 52.943 56.5166 52.943 59.343C52.943 65.3404 50.5302 69.8557 45.7047 72.8889C40.9481 75.9221 34.7094 77.4387 26.9885 77.4387ZM68.742 75.6808L51.8871 22.9447H72.051L77.2212 42.0745L79.7029 52.6217H79.9097C80.8058 48.2787 81.6331 44.6251 82.3914 41.6608L86.9412 22.9447H103.486L108.036 41.6608L110.517 52.8285H110.724C111.758 48.4166 112.62 44.8319 113.309 42.0745L118.376 22.9447H138.126L121.375 75.6808H102.555L97.1782 53.7591L95.0067 43.9357H94.7999C94.0416 47.7962 93.3178 51.0706 92.6284 53.7591L87.2514 75.6808H68.742ZM140.95 75.6808V22.9447H160.494V75.6808H140.95ZM140.95 16.5336V1.7468H160.494V16.5336H140.95ZM190.981 77.4387C182.985 77.4387 176.574 75.7843 171.748 72.4753C166.922 69.1664 164.475 64.5477 164.406 58.6191H183.122C183.467 63.2379 186.121 65.5472 191.085 65.5472C195.565 65.5472 197.806 64.0306 197.806 60.9974C197.806 59.2051 196.875 57.9642 195.014 57.2749C193.153 56.5166 190.326 55.8617 186.535 55.3102C185.777 55.2413 185.225 55.1723 184.88 55.1034C182.743 54.7587 180.917 54.414 179.4 54.0694C177.952 53.7247 176.263 53.1732 174.333 52.4149C172.472 51.5877 170.955 50.6225 169.783 49.5196C168.68 48.3477 167.715 46.7966 166.888 44.8664C166.13 42.9362 165.751 40.6957 165.751 38.1451C165.751 32.906 168.06 28.8042 172.679 25.84C177.297 22.8068 182.985 21.2902 189.74 21.2902C197.668 21.2902 203.734 22.7034 207.94 25.5298C212.214 28.3562 214.523 32.3889 214.868 37.6281H196.462C196.048 34.457 193.842 32.8715 189.844 32.8715C188.258 32.8715 186.914 33.2162 185.811 33.9055C184.777 34.526 184.26 35.4566 184.26 36.6974C184.26 38.0072 185.087 38.9379 186.742 39.4894C188.465 40.0408 191.257 40.5923 195.117 41.1438C197.599 41.4885 199.598 41.8332 201.115 42.1779C202.7 42.4536 204.596 43.0396 206.802 43.9357C209.077 44.763 210.835 45.797 212.076 47.0379C213.385 48.2098 214.523 49.8642 215.488 52.0013C216.453 54.0694 216.936 56.5166 216.936 59.343C216.936 65.3404 214.523 69.8557 209.697 72.8889C204.941 75.9221 198.702 77.4387 190.981 77.4387ZM245.612 77.4387C237.615 77.4387 231.204 75.7843 226.379 72.4753C221.553 69.1664 219.106 64.5477 219.037 58.6191H237.753C238.098 63.2379 240.752 65.5472 245.715 65.5472C250.196 65.5472 252.436 64.0306 252.436 60.9974C252.436 59.2051 251.506 57.9642 249.645 57.2749C247.783 56.5166 244.957 55.8617 241.165 55.3102C240.407 55.2413 239.856 55.1723 239.511 55.1034C237.374 54.7587 235.547 54.414 234.03 54.0694C232.583 53.7247 230.894 53.1732 228.964 52.4149C227.102 51.5877 225.586 50.6225 224.414 49.5196C223.311 48.3477 222.346 46.7966 221.519 44.8664C220.76 42.9362 220.381 40.6957 220.381 38.1451C220.381 32.906 222.69 28.8042 227.309 25.84C231.928 22.8068 237.615 21.2902 244.371 21.2902C252.299 21.2902 258.365 22.7034 262.57 25.5298C266.844 28.3562 269.153 32.3889 269.498 37.6281H251.092C250.679 34.457 248.473 32.8715 244.474 32.8715C242.889 32.8715 241.545 33.2162 240.442 33.9055C239.408 34.526 238.89 35.4566 238.89 36.6974C238.89 38.0072 239.718 38.9379 241.372 39.4894C243.096 40.0408 245.888 40.5923 249.748 41.1438C252.23 41.4885 254.229 41.8332 255.745 42.1779C257.331 42.4536 259.227 43.0396 261.433 43.9357C263.708 44.763 265.465 45.797 266.706 47.0379C268.016 48.2098 269.153 49.8642 270.119 52.0013C271.084 54.0694 271.566 56.5166 271.566 59.343C271.566 65.3404 269.153 69.8557 264.328 72.8889C259.571 75.9221 253.333 77.4387 245.612 77.4387ZM272.968 34.7328V22.9447H279.482V20.0494C279.482 14.0519 280.999 9.60552 284.032 6.7102C288.444 2.5051 296.889 1.05744 309.366 2.36722V15.2928C307.505 15.2928 306.057 15.3272 305.023 15.3962C304.058 15.4651 303.024 15.7064 301.921 16.12C300.887 16.4647 300.129 17.0851 299.646 17.9813C299.233 18.8774 299.026 20.0838 299.026 21.6004V22.9447H309.366V34.7328H299.026V75.6808H279.482V34.7328H272.968ZM360.489 69.4766C355.25 74.7157 348.287 77.3353 339.601 77.3353C330.915 77.3353 323.918 74.7157 318.61 69.4766C313.302 64.2374 310.648 57.5506 310.648 49.4162C310.648 41.2817 313.302 34.5949 318.61 29.3557C323.918 24.0477 330.915 21.3936 339.601 21.3936C348.287 21.3936 355.25 24.0477 360.489 29.3557C365.728 34.5949 368.348 41.2817 368.348 49.4162C368.348 57.5506 365.728 64.2374 360.489 69.4766ZM339.395 64.3064C342.359 64.3064 344.599 62.9621 346.116 60.2736C347.701 57.5851 348.494 53.966 348.494 49.4162C348.494 44.8664 347.701 41.2472 346.116 38.5587C344.599 35.8702 342.359 34.5259 339.395 34.5259C336.499 34.5259 334.293 35.8702 332.777 38.5587C331.26 41.1783 330.502 44.7974 330.502 49.4162C330.502 54.0349 331.26 57.6885 332.777 60.377C334.293 62.9966 336.499 64.3064 339.395 64.3064ZM373.206 75.6808V1.7468H393.267V75.6808H373.206ZM400.269 75.6808V22.9447H419.812V75.6808H400.269ZM400.269 16.5336V1.7468H419.812V16.5336H400.269ZM474.496 69.4766C469.257 74.7157 462.295 77.3353 453.609 77.3353C444.923 77.3353 437.926 74.7157 432.618 69.4766C427.309 64.2374 424.655 57.5506 424.655 49.4162C424.655 41.2817 427.309 34.5949 432.618 29.3557C437.926 24.0477 444.923 21.3936 453.609 21.3936C462.295 21.3936 469.257 24.0477 474.496 29.3557C479.735 34.5949 482.355 41.2817 482.355 49.4162C482.355 57.5506 479.735 64.2374 474.496 69.4766ZM453.402 64.3064C456.366 64.3064 458.607 62.9621 460.123 60.2736C461.709 57.5851 462.501 53.966 462.501 49.4162C462.501 44.8664 461.709 41.2472 460.123 38.5587C458.607 35.8702 456.366 34.5259 453.402 34.5259C450.507 34.5259 448.301 35.8702 446.784 38.5587C445.267 41.1783 444.509 44.7974 444.509 49.4162C444.509 54.0349 445.267 57.6885 446.784 60.377C448.301 62.9966 450.507 64.3064 453.402 64.3064Z"
        fill="#0000ff"></path> --> </svg> </div>`;
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/logo/LogoTop.astro", void 0);

const $$Astro$1 = createAstro("https://vgbs742.github.io/");
const $$Menu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Menu;
  const translationPaths = await translatePath(Astro2.url);
  const lang = getLangFromUrl(Astro2.url);
  const sectionsAllLang = await getCollection("sections");
  const lB = await getCollection("lilBits");
  const tNav = lB.filter((entry) => {
    return entry.id == "nav";
  })[0].data;
  Astro2.props;
  const sectionsThisLang = sectionsAllLang.filter((section) => {
    const sectionFilePath = section.filePath.split("/");
    const sectionLang = sectionFilePath[sectionFilePath.length - 2];
    return sectionLang == lang;
  });
  const sectionsInclude = sectionsThisLang.filter((section) => section.data.menu_include == true);
  const sectionsOrdered = sortSmallFirst(sectionsInclude, "menu_order");
  var frag4Large = "<span><a href='/" + lang + "/'>" + tNav.ind[lang] + "</a></span>";
  for (let i = 0; i < sectionsOrdered.length; i++) {
    frag4Large += "<span>";
    frag4Large += "&nbsp;&nbsp;&nbsp;\u2022&nbsp;&nbsp;&nbsp;";
    frag4Large += "</span>";
    frag4Large += "<span>";
    frag4Large += '<a href="/' + lang + "/" + sectionsOrdered[i].data.slug + '">';
    frag4Large += sectionsOrdered[i].data.title;
    frag4Large += "</a>";
    frag4Large += "</span>";
  }
  var lang4Large = "";
  for (let i = 0; i < translationPaths.length; i++) {
    if (i != 0) {
      lang4Large += "<span>";
      lang4Large += "&nbsp;&nbsp;&nbsp;\u2022&nbsp;&nbsp;&nbsp;";
      lang4Large += "</span>";
    }
    lang4Large += "<span>";
    lang4Large += '<a href="/' + translationPaths[i].path + '">';
    lang4Large += translationPaths[i].locale;
    lang4Large += "</a>";
    lang4Large += "</span>";
  }
  var frag4Small = "<div class='w-fit'>";
  frag4Small += "&nbsp;&nbsp;&nbsp;\u2022&nbsp;&nbsp;&nbsp;";
  frag4Small += "<span><a href='/" + lang + "/'>" + tNav.ind[lang] + "</a></span>";
  frag4Small += "&nbsp;&nbsp;&nbsp;\u2022&nbsp;&nbsp;&nbsp;";
  frag4Small += "</div>";
  for (let i = 0; i < sectionsOrdered.length; i++) {
    frag4Small += "<div class'w-fit'>";
    frag4Small += "<span>";
    frag4Small += "&nbsp;&nbsp;&nbsp;\u2022&nbsp;&nbsp;&nbsp;";
    frag4Small += "</span>";
    frag4Small += "<span>";
    frag4Small += '<a href="/' + lang + "/" + sectionsOrdered[i].data.slug + '">';
    frag4Small += sectionsOrdered[i].data.title;
    frag4Small += "</a>";
    frag4Small += "</span>";
    frag4Small += "<span>";
    frag4Small += "&nbsp;&nbsp;&nbsp;\u2022&nbsp;&nbsp;&nbsp;";
    frag4Small += "</span>";
    frag4Small += "</div>";
  }
  var lang4Small = "";
  for (let i = 0; i < translationPaths.length; i++) {
    lang4Small += "<div class'w-fit'>";
    lang4Small += "<span>";
    lang4Small += "&nbsp;&nbsp;&nbsp;\u2022&nbsp;&nbsp;&nbsp;";
    lang4Small += "</span>";
    lang4Small += "<span>";
    lang4Small += '<a href="/' + translationPaths[i].path + '">';
    lang4Small += translationPaths[i].locale;
    lang4Small += "</a>";
    lang4Small += "</span>";
    lang4Small += "<span>";
    lang4Small += "&nbsp;&nbsp;&nbsp;\u2022&nbsp;&nbsp;&nbsp;";
    lang4Small += "</span>";
    lang4Small += "</div>";
  }
  return renderTemplate`${maybeRenderHead()}<div class="hidden h-fit"></div> <div class="w-full hidden md:flex flex-row justify-between"> <div class="max-h-24 h-auto"> <a${addAttribute("/" + lang + "/", "href")}>${renderComponent($$result, "LogoTop", $$LogoTop, {})}</a> </div> <div class="flex-grow-1"></div> <div class="mx-0 w-fit flex flex-row"> <span class="flex flex-row items-center  flex-grow-1"> <!-- <Fragment set:html={frag4Large} />--> </span> <span class="flex flex-row items-center"> <!-- &nbsp;&nbsp;&nbsp;• --> <span class="wantLang cursor-pointer flex flex-row  transition-all max-w-36 overflow-hidden">
&nbsp;&nbsp;&nbsp;
<a class="border-b-[1px] border-transparent hover:border-secondary"> <!-- <Fragment set:html={languageIcon} /> --> </a> </span> <span class="chooseLang max-w-0 flex flex-row overflow-hidden  transition-all" style="fill: blue;">
&nbsp;&nbsp;&nbsp;
${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(lang4Large)}` })} </span> </span> </div> </div> <div class="w-full flex flex-col md:hidden justify-between"> <div class="w-full flex flex-col"> <div class="max-h-24 h-auto"> <a${addAttribute("/" + lang + "/", "href")}>${renderComponent($$result, "LogoTop", $$LogoTop, {})}</a> </div> <div class="h-0.2"></div> <!-- <div
			class="h-0.5 bg-secondary w-full"
			data-aos="fade-up"
			data-aos-duration="2000">
		</div>--> <div class="flex-grow-1"></div> <div class="mx-auto my-0 w-fit flex flex-row items-center "> <!-- my was 1.5 --> <!-- <span>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</span>
			<a class="cursor-pointer flex-grow-1" id="mobileMenuButton">
				{tNav.menu[lang]}
			</a>--> <!--<span>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</span>
			<a class="cursor-pointer border-b-[1px] border-transparent hover:border-secondary" id="mobileLangButton">
				<Fragment set:html={languageIcon} />
			</a>--> <!-- <span>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</span>--> </div> </div> <div class="h-1.5 bg-secondary w-full" data-aos="fade-up" data-aos-duration="2000"></div> <div class="w-full flex flex-col"> <div id="mobileMenuContent" class="mx-auto items-center transition-all w-fit flex flex-col overflow-hidden h-0 items-center space-y-4 my-0"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(frag4Small)}` })} </div> </div> <div class="w-full flex flex-col"> <div id="mobileLangContent" class="mx-auto transition-all w-fit flex flex-col overflow-hidden h-0 items-center space-y-4 my-0"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(lang4Small)}` })} </div> </div> <div class="h-1.5 bg-secondary w-full -mt-1.5" data-aos="fade-up" data-aos-duration="2000"></div> </div> ${renderScript($$result, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/navigation/Menu.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/navigation/Menu.astro", void 0);

const $$Astro = createAstro("https://vgbs742.github.io/");
const $$TopArea = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TopArea;
  const { lang } = Astro2.props;
  return renderTemplate`<!------
  /------------------
// Big SVG hero Name
//-------------------
//
// If you want to change your name you will have to recreate it
// in Figma or any other way you can export text as SVG
// After you have exported it, you have to remove the size atributes from the SVG
// this will allow the SVG become fill width and full heigh. It will also be responsive.
--- -->${maybeRenderHead()}<section class=""> <div class=""> <!-- <LogoTop /> --> </div> <div class="px-8 2xl:max-w-7xl mx-0 pb-0"> <div class="space-y-0"> <div class="h-0 bg-secondary" data-aos="fade-up" data-aos-duration="1000"></div> <div class="flex flex-col sm:flex-row gap-3 justify-between items-center" data-aos="fade-up" data-aos-duration="1500"> ${renderComponent($$result, "Menu", $$Menu, { "lang": lang })} </div> <div class="h-1.5 bg-secondary hidden w-full md:flex" data-aos="fade-up" data-aos-duration="2000"></div> </div> </div> </section>`;
}, "/Users/johann/Documents/code/webdev/Astro/VGBS/vgbs742.github.io/src/components/general/TopArea.astro", void 0);

export { $$BaseLayout as $, DEFAULT_HASH_PROPS as D, VALID_SUPPORTED_FORMATS as V, getOneLang as a, getTranslations as b, getEntry as c, $$TopArea as d, getPageUrl as e, formatDate as f, getCollection as g, getItemLang as h, getSection as i, types as j, DEFAULT_OUTPUT_FORMAT as k, getLangFromUrl as l, getSlugNoLangFromUrl as m, renderEntry as r, sortBigFirst as s, typeHandlers as t };
