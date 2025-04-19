export function getActiveTabFromPath(pathname) {
  return pathname.split('/').at(-1);
}
