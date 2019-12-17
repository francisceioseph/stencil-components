import { Link } from "./link";

describe("osf-link", () => {
  it("builds", () => {
    expect(new Link()).toBeTruthy();
  });
});
