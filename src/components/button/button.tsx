import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "fz-button",
  styleUrl: "button.css",
  shadow: true
})
export class Button {
  @Prop()
  public upper = false;

  private get buttonStyle() {
    const textTransform = this.upper ? "uppercase" : "initial";

    return {
      textTransform
    };
  }

  public;
  render() {
    return (
      <button style={this.buttonStyle}>
        <slot></slot>
      </button>
    );
  }
}
