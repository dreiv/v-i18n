import { nextTick } from "vue";
import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";

const i18n: any = createI18n({ locale: "en", messages: { en } });
loadLocaleMessages("ro");

export async function loadLocaleMessages(locale: string) {
  if (i18n.locale === locale) {
    return Promise.resolve(locale);
  }

  if (locale === "zu") {
    (window as any)._jipt = [["project", "v-i18n"]];
    const i18nEditor = document.createElement("script");
    i18nEditor.setAttribute("src", "//cdn.crowdin.com/jipt/jipt.js");
    document.head.appendChild(i18nEditor);
  }

  // load locale messages with dynamic import
  const messages = await import(
    /* webpackChunkName: "locale-[request]" */
    `./locales/${locale}.json`
  );

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default);
  i18n.global.locale = locale;

  return nextTick();
}

export default i18n;
