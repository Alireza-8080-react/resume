export const isExternalUrl = (url: string) => {
  return location.hostname == new URL(url).hostname;
};
