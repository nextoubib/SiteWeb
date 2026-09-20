// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders a button with its label", () => {
    render(<Button>Demander une démo</Button>);
    expect(screen.getByRole("button", { name: "Demander une démo" })).toBeInTheDocument();
  });

  it("renders the child element when asChild is set", () => {
    render(
      <Button asChild variant="secondary">
        <a href="/demo">Démo</a>
      </Button>,
    );
    const link = screen.getByRole("link", { name: "Démo" });
    expect(link).toHaveAttribute("href", "/demo");
    expect(link.className).toContain("border");
  });
});
