import type { Lang } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const first = url.pathname.split("/").filter(Boolean)[0];
  return first === "en" ? "en" : "es";
}

/** Devuelve la ruta correspondiente a `lang` para la misma página. */
export function localizedPath(path: string, lang: Lang): string {
  const stripped = path.replace(/^\/en(?=\/|$)/, "");
  const suffix = lang === "es" ? "" : "/en";
  const rest = stripped === "" || stripped === "/" ? "/" : stripped;
  return `${suffix}${rest}`.replace(/\/{2,}/g, "/");
}

/** Prefijo base para listados y enlaces internos según idioma. */
export function langPrefix(lang: Lang): string {
  return lang === "es" ? "" : "/en";
}

/** Slug "normalizado" para usar como URL: quita el sufijo del idioma si existe. */
export function normalizedSlug(id: string): string {
  return id.replace(/-en$/, "");
}

/** Troceo de la ruta sin slash final para comparar /es/ y /en/. */
export function pathWithoutLang(path: string): string {
  return path.replace(/^\/en(?=\/|$)/, "").replace(/\/+$/, "");
}
