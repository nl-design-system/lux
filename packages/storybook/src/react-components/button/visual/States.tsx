import { LuxButton } from '@lux-design-system/components-react';
import { Fragment } from 'react';

const appearances = ['primary-action', 'secondary-action', 'subtle'];

export const InteractiveStates = () => (
  <>
    {appearances.map((appearance) => (
      <Fragment key={appearance}>
        <LuxButton appearance={`${appearance}-button`} className="utrecht-button--active" key={`active-${appearance}`}>
          Active Button ({appearance})
        </LuxButton>
        <LuxButton
          appearance={`${appearance}-button`}
          className="utrecht-button--focus utrecht-button--focus-visible"
          key={`focus-${appearance}`}
        >
          Focus Button ({appearance})
        </LuxButton>
        <LuxButton appearance={`${appearance}-button`} className="utrecht-button--hover" key={`hover-${appearance}`}>
          Hover Button ({appearance})
        </LuxButton>
      </Fragment>
    ))}
  </>
);

export const PropertyStates = () => (
  <>
    {appearances.map((appearance) => (
      <Fragment key={appearance}>
        <LuxButton appearance={`${appearance}-button`} disabled key={`disabled-${appearance}`}>
          Disabled Button ({appearance})
        </LuxButton>
        <LuxButton appearance={`${appearance}-button`} busy key={`busy-${appearance}`}>
          Busy Button ({appearance})
        </LuxButton>
        <LuxButton appearance={`${appearance}-button`} pressed key={`pressed-${appearance}`}>
          Pressed Button ({appearance})
        </LuxButton>
      </Fragment>
    ))}
  </>
);
