const svgResources = new Map()
const imageResources = new Map()

function loadIcons() {
  let modules = import.meta.glob("@/assets/images/icons/**/*.svg", {
    as: "raw",
    eager: true,
  });
  for (const fileName in modules) {
    const name = fileName.substring(fileName.lastIndexOf("/") + 1, fileName.length - 4)
    svgResources.set(name, modules[fileName])
  }

  modules = import.meta.glob("@/assets/images/**/*.png", {
    as: "url",
    eager: true,
  });
  for (const fileName in modules) {
    const name = fileName.substring(fileName.lastIndexOf("/") + 1, fileName.length - 4)
    imageResources.set(name, modules[fileName])
  }
}

loadIcons()

function getSvgIcon(name: string) {
  return svgResources.get(name)
}

function getImageUrl(name: string) {
  return imageResources.get(name)
}

export { getSvgIcon, getImageUrl, svgResources }