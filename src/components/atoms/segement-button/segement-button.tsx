import { Component, h, Prop, EventEmitter, Event } from "@stencil/core";

@Component({
  tag: "fz-segement-button",
  styleUrl: "segement-button.css",
  shadow: true
})
export class SegementButton {
  @Prop()
  public disabled: boolean = false;

  @Prop()
  public activeIndex: number = 0;

  @Event()
  public activeIndexChange: EventEmitter;

  private ref?: HTMLElement;
  private buttons: Element[] = [];

  componentDidLoad() {
    this.buttons = this.ref.querySelector("slot").assignedElements();
    this.setActiveButton();
  }

  render() {
    return (
      <div ref={this.onRefCreated} onClick={this.handleButtonClick}>
        <slot></slot>
      </div>
    );
  }

  private onRefCreated = ref => (this.ref = ref as HTMLLIElement);

  private handleButtonClick = (event: MouseEvent) => {
    const { target } = event;
    const index = this.buttons.findIndex(btn => btn === target);

    if (this.disabled || index < 0) {
      event.stopImmediatePropagation();
    } else {
      this.activeIndex = index;
      this.setActiveButton();
      this.activeIndexChange.emit(index);
    }
  };

  private setActiveButton() {
    this.buttons.forEach((button, index) => {
      if (index === this.activeIndex) {
        button.setAttribute("active", "true");
      } else {
        button.removeAttribute("active");
      }
    });
  }
}
