/**
 *
 * @param { String } domain api 域名
 * @returns { String } 修改后的api 域名
 */
export async function updateDomain(domain) {
  let newDomain = domain;
  if (domain?.slice(domain?.length - 1) === '/') {
    newDomain = domain?.substring(domain?.length - 1, 0);
  }
  return newDomain;
}
