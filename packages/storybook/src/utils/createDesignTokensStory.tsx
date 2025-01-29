import { LuxDocument } from '@lux-design-system/components-react';
// @ts-expect-error no definition file
import { ComponentTokensSection } from '@nl-design-system-unstable/theme-toolkit';
import type { StoryObj } from '@storybook/react';

type DesignToken = {
  comment?: string;
  name?: string;
  path?: string;
  value: string | number;
};

type Props = {
  component: string;
  definition: DesignTokenTree;
  tokens: string | number;
};

interface DesignTokenTree {
  [index: string]: DesignToken | DesignTokenTree;
}

export const createDesignTokensStory = (meta: any): StoryObj => {
  const designTokenStory: StoryObj<Props> = {
    args: {
      tokens: meta.parameters.tokens,
      definition: meta.parameters.tokensDefinition,
      component: meta.parameters.tokensPrefix,
    },
    parameters: {
      chromatic: {
        disableSnapShot: true,
      },
      docs: {
        source: {
          code: '',
        },
      },
      withDocument: true,
    },
    render: (({ tokens, definition, component }: Props) => {
      return (
        <LuxDocument>
          <ComponentTokensSection tokens={tokens} definition={definition} component={component} />
        </LuxDocument>
      );
    }) as any,
  };

  return designTokenStory;
};
