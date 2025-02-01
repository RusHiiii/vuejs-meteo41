import type {RouteLocation} from "vue-router";

export async function registerLayout(route: RouteLocation) {
  const layout = route.meta.layout

  const layoutComponent = await import(`@/components/common/layout/${layout}.vue`)
  route.meta.layoutComponent = layoutComponent.default
}
