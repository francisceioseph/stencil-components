import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "fz-link",
  styleUrl: "link.css",
  shadow: true
})
export class Link {
  @Prop() href: string = "#";
  @Prop() target: string = "";

  render() {
    return (
      <a href={this.href} target={this.target}>
        <slot></slot>
      </a>
    );
  }
}
