import {
  Alert as UtrechtAlert,
  AlertProps as UtrechtAlertProps,
  AlertType as UtrechtAlertType,
} from '@utrecht/component-library-react/dist/css-module';
import './Alert.css';

export interface LuxAlertProps extends Omit<UtrechtAlertProps, 'type'> {
  type: AlertType;
}
//TODO replace icons in #308
const InfoIcon = () => (
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg">
    <circle r="7" cx="8" cy="8" fill="transparent" stroke="blue" />
  </svg>
);
const SuccessIcon = () => (
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg">
    <circle r="7" cx="8" cy="8" fill="transparent" stroke="green" />
  </svg>
);
const WarningIcon = () => (
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg">
    <circle r="7" cx="8" cy="8" fill="transparent" stroke="#FFB612" />
  </svg>
);
const ErrorIcon = () => (
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg">
    <circle r="7" cx="8" cy="8" fill="transparent" stroke="red" />
  </svg>
);

type AlertType = Exclude<UtrechtAlertType, 'ok'> | 'success';

export const LuxAlert = (props: LuxAlertProps) => {
  const { children, type, className, ...otherProps } = props;
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
    <UtrechtAlert
      type={utrechtAlertType}
      className={`lux-alert ${className !== undefined ? className : ''}`}
      icon={icon}
      {...otherProps}
    >
      {children}
    </UtrechtAlert>
  );
};
