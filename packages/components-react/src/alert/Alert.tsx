import {
  Alert as UtrechtAlert,
  AlertProps as UtrechtAlertProps,
  AlertType as UtrechtAlertType,
} from '@utrecht/component-library-react/dist/css-module';
import './Alert.css';

type AlertType = Exclude<UtrechtAlertType, 'ok'> | 'success';

export interface LuxAlertProps extends Omit<UtrechtAlertProps, 'type'> {
  type: AlertType;
}

//TODO replace icons in #308
const InfoIcon = () => (
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg">
    <circle r="7" cx="8" cy="8" fill="transparent" stroke="var(--utrecht-alert-icon-info-color)" />
  </svg>
);
const SuccessIcon = () => (
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg">
    <circle r="7" cx="8" cy="8" fill="transparent" stroke="var(--utrecht-alert-icon-ok-color)" />
  </svg>
);
const WarningIcon = () => (
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg">
    <circle r="7" cx="8" cy="8" fill="transparent" stroke="var(--utrecht-alert-icon-warning-color)" />
  </svg>
);
const ErrorIcon = () => (
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg">
    <circle r="7" cx="8" cy="8" fill="transparent" stroke="var(--utrecht-alert-icon-error-color)" />
  </svg>
);

export const LuxAlert = (props: LuxAlertProps) => {
  const { children, type, className, ...otherProps } = props;
  const utrechtAlertType: UtrechtAlertType = type === 'success' ? 'ok' : type;

  const icons = {
    info: InfoIcon,
    success: SuccessIcon,
    warning: WarningIcon,
    error: ErrorIcon,
  };

  const Icon = icons[type];
  const icon = Icon ? <Icon /> : <></>;

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