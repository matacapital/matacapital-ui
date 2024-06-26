import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import { FontFamilyType, FontStyleType, TextElementType } from './text.module';

const meta: Meta<typeof Text> = {
  title: 'Components/server/Atoms/Text',
  tags: ['autodocs'],
  component: Text,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const fontCombinations: {
  fontFamily: FontFamilyType;
  fontStyle: FontStyleType;
}[] = [
  { fontFamily: 'primary', fontStyle: 'light' },
  { fontFamily: 'primary', fontStyle: 'regular' },
  { fontFamily: 'primary', fontStyle: 'bold' },
  { fontFamily: 'secondary', fontStyle: 'light' },
  { fontFamily: 'secondary', fontStyle: 'regular' },
  { fontFamily: 'secondary', fontStyle: 'bold' },
  // Add more combinations as needed
];

// Helper function to create a story
const createTextStory = (
  element: TextElementType,
  children: string,
  fontFamily?: FontFamilyType,
  fontStyle?: FontStyleType,
): Story => ({
  args: {
    element,
    children,
    fontFamily,
    fontStyle,
  },
});

// Define individual stories
export const TextHeading1: Story = createTextStory('h1', 'See more');
export const TextHeading2: Story = createTextStory('h2', 'See more');
export const TextHeading3: Story = createTextStory('h3', 'See more');
export const TextHeading4: Story = createTextStory('h4', 'See more');

export const TextPrimaryLight: Story = createTextStory(
  'p',
  'See more',
  'primary',
  'light',
);
export const TextPrimaryRegular: Story = createTextStory(
  'p',
  'See more',
  'primary',
  'regular',
);
export const TextPrimaryBold: Story = createTextStory(
  'p',
  'See more',
  'primary',
  'bold',
);
export const TextSecondaryLight: Story = createTextStory(
  'p',
  'See more',
  'secondary',
  'light',
);
export const TextSecondaryRegular: Story = createTextStory(
  'p',
  'See more',
  'secondary',
  'regular',
);
export const TextSecondaryBold: Story = createTextStory(
  'p',
  'See more',
  'secondary',
  'bold',
);
