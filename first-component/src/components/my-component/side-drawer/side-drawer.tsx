import { Component, h, Prop } from '@stencil/core'


@Component({
  tag: 'uc-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true
})

export class SideDrawer {
  @Prop({ reflect: true }) title: string;
  @Prop() open: boolean = true;

  render() {
    let content = null;

    if (this.open) {
      content = (
        <aside>
          <header><h1>{this.title}</h1></header>
          <main>
            <slot></slot>
          </main>
        </aside>
      );
    } else {
      content = null;
    }
    return content;
  }
}