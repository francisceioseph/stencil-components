import { Component, h, Prop, EventEmitter, Event } from "@stencil/core";

@Component({
  tag: "fz-button",
  styleUrl: "button.css",
  shadow: true
})
export class Button {
  @Prop()
  public upper = false;

  @Prop()
  public disabled = false;

  @Event({
    eventName: "clickButton",
    bubbles: false
  })
  public clickButton: EventEmitter;

  render() {
    return (
      <button
        onClick={this.clickButtonHandler}
        style={this.buttonStyle}
        disabled={this.disabled}
      >
        <slot></slot>
      </button>
    );
  }

  private clickButtonHandler = (event: MouseEvent) => {
    this.clickButton.emit(event);
  };

  private get buttonStyle() {
    return {
      textTransform: this.upper ? "uppercase" : "initial"
    };
  }
}
