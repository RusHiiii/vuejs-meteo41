export async function registerLayout(route) {
  try {
    const layout = route.meta.layout

    const layoutComponent = await import(`@/components/common/layout/${layout}.vue`)
    route.meta.layoutComponent = layoutComponent.default
  } catch (e) {
    const layoutComponent = await import(`@/components/common/layout/DefaultLayout.vue`)
    route.meta.layoutComponent = layoutComponent.default
  }
}
