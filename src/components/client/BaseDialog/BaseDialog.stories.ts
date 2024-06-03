import type { Meta, StoryObj } from "@storybook/react";
import { BaseDialog } from "./BaseDialog";
// import { fireEvent, userEvent, within } from "@storybook/test";

const meta = {
  title: "Components/client/Dialog",
  tags: ["autodocs"],
  component: BaseDialog,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BaseDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

const closeDialog = () => {
  if (document && document.querySelector("dialog")) {
    setTimeout(() => {
      const dialog = document.querySelector("dialog");
      dialog?.close();
    }, 0);
  }
};

export const BaseDialogBasicStyle: Story = {
  args: {
    close: closeDialog,
    title: "Dialog title",
    buttonsContent: { text: "cancel" },
    className: "",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in. Elementum sagittis vitae et leo duis ut diam quam.",
    footerClassName: "border-t border-neutral-default",
  },
};

// On click on document, open dialog.
(() => {
  if (document) {
    const root = document.querySelector("#storybook-root");

    setTimeout(() => {
      if (root) {
        document.addEventListener("click", () => {
          root.querySelector("dialog")?.showModal();
        });
      }
    }, 0);
  }
})();
