import {
  LuxBreadcrumbLink,
  LuxBreadcrumbNav,
  LuxBreadcrumbSeparator,
  LuxIcon,
} from '@lux-design-system/components-react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LuxBreadcrumbNav> = {
  title: 'React Components/Breadcrumbs',
  component: LuxBreadcrumbNav,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const ChevronRightIcon = () => (
  <LuxIcon
    icon={
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -40 320 512" height="16" width="16">
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
      </svg>
    }
  />
);
export default meta;
type Story = StoryObj<typeof LuxBreadcrumbNav>;

export const Default: Story = {
  args: {},
  render: () => (
    <LuxBreadcrumbNav>
      <LuxBreadcrumbLink href="/">Home</LuxBreadcrumbLink>
      <LuxBreadcrumbSeparator>
        <ChevronRightIcon />
      </LuxBreadcrumbSeparator>
      <LuxBreadcrumbLink href="/section">Section</LuxBreadcrumbLink>
      <LuxBreadcrumbSeparator>
        <ChevronRightIcon />
      </LuxBreadcrumbSeparator>
      <LuxBreadcrumbLink href="/section/page">Page</LuxBreadcrumbLink>
    </LuxBreadcrumbNav>
  ),
};
