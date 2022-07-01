import { Meta, Story } from '@storybook/react';
import { SimpleToggle, SimpleToggleProps } from '../../../src';

const meta: Meta = {
  title: 'forms/Toggles/Simple Toggle',
  component: SimpleToggle,
  argTypes: {
    onClick: { action: 'clicked' },
    enabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SimpleToggleProps> = args => <SimpleToggle {...args} />;

export const Default = Template.bind({});

Default.args = {
  enabled: false,
};
