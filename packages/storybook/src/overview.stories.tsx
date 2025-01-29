import {
  LuxAlert,
  LuxButton,
  LuxDocument,
  LuxFormFieldLabel,
  LuxHeading3,
  LuxSelect,
  LuxSelectOption,
} from '@lux-design-system/components-react';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof meta>;

const ComponentOverview = () => (
  <LuxDocument style={{ backgroundColor: 'var(--lux-color-background-default)', padding: '1rem' }}>
    <LuxHeading3>Stonks</LuxHeading3>
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <LuxButton appearance="primary-action-button">Buy</LuxButton>
      <LuxButton appearance="secondary-action-button">Sell</LuxButton>
      <LuxButton appearance="subtle-button">Reset</LuxButton>
    </div>
    <LuxHeading3 style={{ paddingBlockStart: '1rem' }}>Notice me, Senpai</LuxHeading3>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <LuxAlert type="success">Success is a mindset</LuxAlert>
      <LuxAlert type="info">Information is knowledge, knowledge is power</LuxAlert>
      <LuxAlert type="warning">I wouldn&apos;t do that if I were you</LuxAlert>
      <LuxAlert type="error">Uh uh uh! You didn&apos;t say the magic word!</LuxAlert>
    </div>
    <LuxFormFieldLabel htmlFor="team">
      <LuxHeading3 style={{ paddingBlockStart: '1rem' }}>Best iO Consultancy Team</LuxHeading3>
    </LuxFormFieldLabel>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <LuxSelect name="team" id="team">
        <LuxSelectOption value="">-- Pick one</LuxSelectOption>
        <LuxSelectOption value="front-x">Front-X</LuxSelectOption>
        <LuxSelectOption value="codezilla">CODEZILLA</LuxSelectOption>
        <LuxSelectOption value="classics">Classics</LuxSelectOption>
        <LuxSelectOption value="new-fronteers">New Fronteers</LuxSelectOption>
        <LuxSelectOption value="mngmnt">MT</LuxSelectOption>
      </LuxSelect>
    </div>
  </LuxDocument>
);

const meta = {
  title: 'Components/Overview',
  component: ComponentOverview,
  tags: ['!autodocs'],
} satisfies Meta<typeof ComponentOverview>;

export default meta;

export const Overview: Story = {};
