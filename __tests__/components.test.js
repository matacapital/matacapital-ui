import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Button, Container, Input } from "../src/components/mod";

// All needed
const variants = [
  "base1",
  "base2",
  "base3",
  "base4",
  "danger",
  "info",
  "primary",
  "accent",
  "secondary",
  "neutral",
  "success",
  "warning",
  "chart1",
  "chart2",
  "chart3",
  "chart4",
  "chart5",
  "chart6",
  "chart7",
  "chart8",
  "chart9",
  "chartothers",
  "disabled",
];

const elements = [
  "header",
  "main",
  "nav",
  "section",
  "article",
  "aside",
  "footer",
  "details",
  "summary",
  "span",
  "label",
  "div",
];

//=======================| Button |=======================//

describe("<Button /> properties", () => {
  const types = ["button", "submit", "reset"];

  for (const type of types) {
    it(`button has type "${type}"`, () => {
      const { queryByRole } = render(<Button type={type} />);

      expect(queryByRole("button")).toHaveAttribute("type", type);
    });
  }

  for (const variant of variants) {
    it(`button has variant "${variant}" in className`, () => {
      const { queryByRole } = render(<Button variant={variant} />);

      expect(queryByRole("button")).toHaveClass(`bg-${variant}-default`);
    });

    it(`button text content is "${variant}"`, () => {
      const { queryByRole } = render(<Button>${variant}</Button>);

      expect(queryByRole("button")).toHaveTextContent(variant);
    });
  }
});

//=======================| Container |=======================//

describe("<Container /> properties", () => {
  for (const element of elements) {
    for (const variant of variants) {
      it(`container is a "${element}" html element and has "${variant}" as background entry`, () => {
        const { queryByText } = render(
          <Container
            element={element}
            background={{ variant }}
          >
            {element}
          </Container>,
        );

        const elToCompare = document.createElement(element);
        elToCompare.textContent = element;
        elToCompare.classList.add(`bg-${variant}-default`);
        elToCompare.classList.add(`text-${variant}-content`);

        expect(queryByText(element)).toStrictEqual(elToCompare);
      });
    }
  }
});

//=======================| Input |=======================//

describe("<Input /> properties", () => {
  for (const variant of variants) {
    it(`label has class ${variant} & input has name ${variant} `, () => {
      const { baseElement } = render(
        <Input
          name={variant}
          className={variant}
        />,
      );

      const label = baseElement.querySelector("label");
      const input = label.querySelector("input");

      expect(label).toHaveClass(variant);
      expect(input).toHaveAttribute("name", variant);
    });
  }
});
