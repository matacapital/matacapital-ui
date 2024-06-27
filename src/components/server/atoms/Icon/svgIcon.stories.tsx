// SvgIcon.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SvgIcon } from './svgIcon';
import { iconPathsMap } from './utils/iconPathsMap';

export default {
  title: 'Components/server/Atoms/Icon',
  tags: ['autodocs'],
  component: SvgIcon,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: Object.keys(iconPathsMap),
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 's', 'm', 'l'],
      },
    },
    variant: {
      control: {
        type: 'text',
      },
    },
    className: {
      control: 'text',
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof SvgIcon>;

const Template: StoryFn<typeof SvgIcon> = (args) => <SvgIcon {...args} />;

export const ArrowRight = Template.bind({});
ArrowRight.args = {
  icon: 'arrowRight',
  size: 'm',
  variant: 'primary',
  className: 'text-primary',
};

export const Calendar = Template.bind({});
Calendar.args = {
  icon: 'calendar',
  size: 'm',
  variant: 'secondary',
  className: 'text-secondary',
};

export const ChevronDown = Template.bind({});
ChevronDown.args = {
  icon: 'chevronDown',
  size: 'm',
  variant: 'secondary',
  className: 'text-primary',
};

export const CircleExclamation = Template.bind({});
CircleExclamation.args = {
  icon: 'circleExclamation',
  size: 'm',
  variant: 'secondary',
  className: 'text-primary',
};

export const CircleInfo = Template.bind({});
CircleInfo.args = {
  icon: 'circleInfo',
  size: 'm',
  variant: 'secondary',
  className: 'text-primary',
};

export const CornerLB = Template.bind({});
CornerLB.args = {
  icon: 'cornerLB',
  size: 'm',
  variant: 'secondary',
  className: 'text-primary',
};

export const CornerLT = Template.bind({});
CornerLT.args = {
  icon: 'cornerLT',
  size: 'm',
  variant: 'secondary',
  className: 'text-primary',
};

export const CornerRB = Template.bind({});
CornerRB.args = {
  icon: 'cornerRB',
  size: 'm',
  variant: 'secondary',
  className: 'text-primary',
};

export const CornerRT = Template.bind({});
CornerRT.args = {
  icon: 'cornerRT',
  size: 'm',
  variant: 'secondary',
  className: 'text-primary',
};

export const Enveloppe = Template.bind({});
Enveloppe.args = {
  icon: 'enveloppe',
  size: 'm',
  variant: 'secondary',
  className: 'text-primary',
};

export const FloppyDisk = Template.bind({});
FloppyDisk.args = {
  icon: 'floppyDisk',
  size: 'm',
  variant: 'secondary',
  className: 'text-primary',
};

export const SizedPenL = Template.bind({});
SizedPenL.args = {
  icon: 'sizedPenL',
  size: 'm',
  variant: 'secondary',
  className: 'text-primary',
};

export const SizedPenM = Template.bind({});
SizedPenM.args = {
  icon: 'sizedPenM',
  size: 'm',
  variant: 'secondary',
  className: 'text-primary',
};

export const SizedPenS = Template.bind({});
SizedPenS.args = {
  icon: 'sizedPenS',
  size: 'm',
  variant: 'secondary',
  className: 'text-primary',
};

export const Play = Template.bind({});
Play.args = {
  icon: 'play',
  size: 'm',
  variant: 'secondary',
  className: 'text-primary',
};

export const Spacer = Template.bind({});
Spacer.args = {
  icon: 'spacer',
  size: 'm',
  variant: 'secondary',
  className: 'text-primary',
};

export const SyncAlt = Template.bind({});
SyncAlt.args = {
  icon: 'syncAlt',
  size: 'm',
  variant: 'secondary',
  className: 'text-primary',
};

export const TriangleExclamation = Template.bind({});
TriangleExclamation.args = {
  icon: 'triangleExclamation',
  size: 'm',
  variant: 'secondary',
  className: 'text-primary',
};
