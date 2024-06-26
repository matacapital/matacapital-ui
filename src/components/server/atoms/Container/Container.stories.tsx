import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Container } from './Container';
import { ContainerPropsType } from './types/types';

export default {
  title: 'Atoms/Container',
  component: Container,
  argTypes: {
    element: {
      control: {
        type: 'select',
        options: [
          'header',
          'main',
          'nav',
          'section',
          'article',
          'aside',
          'footer',
          'details',
          'summary',
          'span',
          'label',
          'ul',
          'ol',
          'li',
          'div',
        ],
      },
    },
    background: { control: 'object' },
    content: { control: 'object' },
    border: { control: 'object' },
    className: { control: 'text' },
    style: { control: 'object' },
  },
} as Meta<typeof Container>;

const Template: StoryFn<typeof Container> = (args: any) => (
  <Container {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'This is a container',
  element: 'div',
};

export const WithBackground = Template.bind({});
WithBackground.args = {
  children: 'This is a container with background',
  element: 'section',
  background: {
    variant: 'primary',
  },
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  children: 'This is a container with border',
  element: 'article',
  border: {
    size: 'l',
    variant: 'primary',
  },
};

export const WithContent = Template.bind({});
WithContent.args = {
  children: 'This is a container with content',
  element: 'main',
  content: {
    variant: 'primary',
  },
};

export const Combined = Template.bind({});
Combined.args = {
  children: (
    <p>
      This is a container with background variant "primary", border size "md"
      and variant "secondary", and content variant "highlight".
    </p>
  ),
  element: 'section',
  background: {
    variant: 'primary',
  },
  border: {
    size: 'l',
    variant: 'secondary',
  },
  content: {
    variant: 'primary',
  },
};
