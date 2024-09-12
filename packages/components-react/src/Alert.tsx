import {
  Alert as UtrechtAlert,
  AlertProps as UtrechtAlertProps,
  AlertType as UtrechtAlertType,
  Icon as UtrechtIcon,
} from '@utrecht/component-library-react/dist/css-module';
import { PropsWithChildren, ReactNode, useState } from 'react';
import { CrossIcon, ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from './icons';
import './Alert.css';

type AlertType = Exclude<UtrechtAlertType, 'ok'> | 'success';

interface LuxAlertProps extends Omit<UtrechtAlertProps, 'type'> {
  type?: AlertType;
  closed?: boolean;
  closable?: boolean;
}

export const LuxAlert = ({
  children,
  type = 'info',
  closable = false,
  closed = false,
  ...props
}: PropsWithChildren<LuxAlertProps>): ReactNode => {
  const [_closed, setClosed] = useState(closed);
  const utrechtAlertType: UtrechtAlertType = type === 'success' ? 'ok' : type;

  const icon =
    type === 'info' ? (
      <InfoIcon />
    ) : type === 'success' ? (
      <SuccessIcon />
    ) : type === 'warning' ? (
      <WarningIcon />
    ) : type === 'error' ? (
      <ErrorIcon />
    ) : (
      <></>
    );
  return (
    !_closed && (
      <UtrechtAlert icon={<></>} type={utrechtAlertType} {...props}>
        <div className="lux-alert">
          <UtrechtIcon className="lux-alert-type-icon">{icon}</UtrechtIcon>
          {children}
          {closable && (
            <UtrechtIcon
              className="lux-alert-cross-icon"
              onClick={() => {
                setClosed(true);
              }}
            >
              {CrossIcon()}
            </UtrechtIcon>
          )}
        </div>
      </UtrechtAlert>
    )
  );
};
