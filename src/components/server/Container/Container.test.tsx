import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'



import { Container } from "./mod.ts";

const states = ["focus", "content", "default"];
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
];

const corners = [
  "top",
  "bottom",
  "right",
  "left",
];

const sizes = [
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "full",
];

const positions = [
  ...corners,
  "vertical",
  "horizontal",
];

const spaces = [
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "2xl",
  "3xl",
  "4xl",
];

/*describe("Container component", () => {
  describe("border", () => {
    describe("variant", () => {
      for (const variant of variants) {
        describe(variant, () => {
          const content = render(
            <Container
              border={{ variant: variant as any }}
            />,
          );
          const dom = new DOMParser().parseFromString(
            content,
            "text/html",
          )!;
          const div = dom.querySelector("div")!;

          const className = `border-${variant}-default`;

          assertEquals(
            div.classList.contains(className),
            true,
          );
        });
      }
    });
  });

  describe("radius", () => {
    it("is full", () => {
      const content = render(<Container radius={"full"} />);

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const div = dom.querySelector("div")!;
      assertEquals(div.classList.contains("rounded-full"), true);
    });

    for (const size of sizes) {
      for (const corner of corners) {
        if (corner === "top") {
          it(`set ${corner}-${size}`, () => {
            const content = render(<Container radius={{ top: size as any }} />);
            const dom = new DOMParser().parseFromString(content, "text/html")!;
            const div = dom.querySelector("div")!;
            assertEquals(div.classList.contains("rounded-t-" + size), true);
          });
        }

        if (corner === "right") {
          it(`set ${corner}-${size}`, () => {
            const content = render(
              <Container radius={{ right: size as any }} />,
            );

            const dom = new DOMParser().parseFromString(content, "text/html")!;
            const div = dom.querySelector("div")!;
            assertEquals(div.classList.contains("rounded-r-" + size), true);
          });
        }

        if (corner === "bottom") {
          it(`set ${corner}-${size}`, () => {
            const content = render(
              <Container radius={{ bottom: size as any }} />,
            );

            const dom = new DOMParser().parseFromString(content, "text/html")!;
            const div = dom.querySelector("div")!;
            assertEquals(div.classList.contains("rounded-b-" + size), true);
          });
        }

        if (corner === "left") {
          it(`set ${corner}-${size}`, () => {
            const content = render(
              <Container radius={{ left: size as any }} />,
            );
            const dom = new DOMParser().parseFromString(content, "text/html")!;
            const div = dom.querySelector("div")!;
            assertEquals(div.classList.contains("rounded-l-" + size), true);
          });
        }
      }
    }
  });

  describe("spacing", () => {
    for (const space of spaces) {
      for (const position of positions) {
        if (position === "left") {
          it(`set ${position}-${space}`, () => {
            const content = render(
              <Container spacing={{ left: space as any }} />,
            );

            const dom = new DOMParser().parseFromString(content, "text/html")!;
            const div = dom.querySelector("div")!;
            assertEquals(div.classList.contains("pl-" + space), true);
          });
        }

        if (position === "right") {
          it(`set ${position}-${space}`, () => {
            const content = render(
              <Container spacing={{ right: space as any }} />,
            );
            const dom = new DOMParser().parseFromString(content, "text/html")!;
            const div = dom.querySelector("div")!;
            assertEquals(div.classList.contains("pr-" + space), true);
          });
        }

        if (position === "top") {
          it(`set ${position}-${space}`, () => {
            const content = render(
              <Container spacing={{ top: space as any }} />,
            );
            const dom = new DOMParser().parseFromString(content, "text/html")!;
            const div = dom.querySelector("div")!;
            assertEquals(div.classList.contains("pt-" + space), true);
          });
        }

        if (position === "bottom") {
          it(`set ${position}-${space}`, () => {
            const content = render(
              <Container spacing={{ bottom: space as any }} />,
            );
            const dom = new DOMParser().parseFromString(content, "text/html")!;
            const div = dom.querySelector("div")!;
            assertEquals(div.classList.contains("pb-" + space), true);
          });
        }

        if (position === "vertical") {
          it(`set ${position}-${space}`, () => {
            const content = render(
              <Container spacing={{ vertical: space as any }} />,
            );
            const dom = new DOMParser().parseFromString(content, "text/html")!;
            const div = dom.querySelector("div")!;
            assertEquals(div.classList.contains("py-" + space), true);
          });
        }

        if (position === "horizontal") {
          it(`set ${position}-${space}`, () => {
            const content = render(
              <Container spacing={{ horizontal: space as any }} />,
            );
            const dom = new DOMParser().parseFromString(content, "text/html")!;
            const div = dom.querySelector("div")!;
            assertEquals(div.classList.contains("px-" + space), true);
          });
        }
      }
    }
  });

  describe("background", () => {
    for (const variant of variants) {
      describe(`${variant}`, () => {
        const content = render(
          <Container
            background={{
              variant: variant as any,
            }}
          />,
        );
        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const div = dom.querySelector("div")!;
        const className = `bg-${variant}-default`;
        assertEquals(div.classList.contains(className), true);
      });
    }
  });

  it("className", () => {
    const content = render(
      <Container className={"hover:bg-secondary"} />,
    );
    const dom = new DOMParser().parseFromString(content, "text/html")!;
    const div = dom.querySelector("div")!;
    assertEquals(div.classList.contains("hover:bg-secondary"), true);
  });

  it("style", () => {
    const content = render(
      <Container style={{"width": "10%"}} />,
    );
    const dom = new DOMParser().parseFromString(content, "text/html")!;
    const div = dom.querySelector("div")!;
    assertEquals(div.getAttribute("style"), "width: 10%");
  });

  describe("element", () => {
    for (
      const el of [
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
        "div",
        "ul",
        "ol",
        "li",
      ]
    ) {
      it(el, () => {
        const content = render(
          <Container element={el as any} />,
        );
        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector(el)!;
        assert(p);
      });
    }
  });
});*/
