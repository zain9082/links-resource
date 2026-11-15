// These defaults keep preview and local builds private until content is approved.
export const siteNoindex = process.env.SITE_NOINDEX !== "false";
export const showDrafts = process.env.SHOW_DRAFTS !== "false";
