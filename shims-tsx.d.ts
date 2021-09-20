import Vue, { VNode } from 'vue'

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace JSX {
    // tslint:disable no-empty-interface
    // eslint-disable-next-line no-unused-vars
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    // eslint-disable-next-line no-unused-vars
    interface ElementClass extends Vue {}
    // eslint-disable-next-line no-unused-vars
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
