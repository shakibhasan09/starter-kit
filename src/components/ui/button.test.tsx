import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Button } from "./button";

describe("Button", () => {
    test("renders", () => {
        render(<Button>Button</Button>);
        expect(screen.getByText("Button")).toBeDefined();
    });
});
