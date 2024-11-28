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
  <svg
    style={{
      width: 'var(--lux-alert-icon-size)',
      height: 'var(--lux-alert-icon-size)',
    }}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="lux-icon"
      d="M22.04 3.78C21.88 2.83 21.16 2.11 20.21 1.95C17.48 1.5 12.91 1.5 12 1.5C11.09 1.5 6.52 1.5 3.78 1.96C2.84 2.11 2.11 2.84 1.96 3.78C1.5 6.52 1.5 11.09 1.5 12C1.5 12.91 1.5 17.48 1.96 20.22C2.12 21.17 2.84 21.89 3.79 22.05C6.53 22.51 11.09 22.51 12.01 22.51C12.92 22.51 17.49 22.51 20.23 22.05C21.18 21.89 21.9 21.17 22.06 20.22C22.52 17.48 22.52 12.92 22.52 12C22.5 9.26 22.5 6.52 22.04 3.78Z"
      style={{ fill: 'var(--lux-icon-primary-color, #007BC7)' }}
    />
    <path
      className="lux-icon"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.04 6.05C10.82 6.3 10.71 6.59 10.71 6.93C10.71 7.28 10.82 7.57 11.04 7.81C11.27 8.04 11.58 8.16 11.99 8.16C12.39 8.16 12.71 8.04 12.93 7.79C13.15 7.54 13.26 7.25 13.26 6.93C13.26 6.57 13.15 6.27 12.93 6.03C12.71 5.79 12.4 5.67 11.99 5.67C11.58 5.67 11.26 5.8 11.04 6.05ZM13.11 18.28V9.32L10.9 9.41V18.28H13.11Z"
      style={{ fill: 'var(--lux-icon-secondary-color, white)' }}
    />
  </svg>
);
const SuccessIcon = () => (
  <svg
    style={{
      width: 'var(--lux-alert-icon-size)',
      height: 'var(--lux-alert-icon-size)',
    }}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="lux-icon"
      d="M22.04 3.78C21.88 2.83 21.16 2.11 20.21 1.95C17.48 1.5 12.91 1.5 12 1.5C11.09 1.5 6.52 1.5 3.78 1.96C2.83 2.11 2.11 2.83 1.96 3.78C1.5 6.52 1.5 11.09 1.5 12C1.5 12.91 1.5 17.48 1.96 20.22C2.12 21.17 2.84 21.89 3.79 22.05C6.53 22.51 11.09 22.51 12.01 22.51C12.92 22.51 17.49 22.51 20.23 22.05C21.18 21.89 21.9 21.17 22.06 20.22C22.52 17.48 22.52 12.92 22.52 12C22.5 9.26 22.5 6.52 22.04 3.78Z"
      style={{ fill: 'var(--lux-icon-primary-color, #39870C)' }}
    />
    <path
      className="lux-icon"
      d="M16.5 7.35C16.19 7.12 15.75 7.16 15.49 7.45L11.09 12.4L8.44002 10.1C8.16002 9.86 7.75002 9.86 7.47002 10.1C7.19002 10.34 7.12002 10.75 7.31002 11.07L10.51 16.45C10.65 16.68 10.89 16.82 11.15 16.82C11.41 16.82 11.66 16.68 11.79 16.46L16.68 8.37C16.89 8.02 16.81 7.59 16.5 7.35Z"
      style={{ fill: 'var(--lux-icon-secondary-color, white)' }}
    />
  </svg>
);
const WarningIcon = () => (
  <svg
    style={{
      width: 'var(--lux-alert-icon-size)',
      height: 'var(--lux-alert-icon-size)',
    }}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.38 19.64L13.67 2.47C12.94 1.17 11.07 1.17 10.33 2.47L0.620021 19.64C-0.0999792 20.92 0.820021 22.5 2.29002 22.5H21.72C23.18 22.5 24.1 20.92 23.38 19.64Z"
      style={{ fill: 'var(--lux-icon-primary-color, #FFB612)' }}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.33 6.98L10.85 7.18H10.84V15.17L13.11 15.12V12.49L13.33 6.98ZM10.9 16.33C10.66 16.63 10.54 17.01 10.54 17.45C10.54 17.96 10.67 18.34 10.92 18.59C11.17 18.85 11.54 18.98 12.02 18.98C12.51 18.98 12.87 18.83 13.11 18.54C13.35 18.25 13.47 17.88 13.47 17.45C13.47 16.93 13.34 16.54 13.09 16.27C12.84 16.01 12.47 15.87 11.99 15.87C11.5 15.87 11.14 16.02 10.9 16.33Z"
      style={{ fill: 'var(--lux-icon-secondary-color, black)' }}
    />
  </svg>
);
const ErrorIcon = () => (
  <svg
    style={{
      width: 'var(--lux-alert-icon-size)',
      height: 'var(--lux-alert-icon-size)',
    }}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10.5" style={{ fill: 'var(--_lux-icon-primary-color, #D52B1E)' }} />
    <path
      d="M15.12 7.71L12 10.48L8.88 7.71C8.55 7.42 8.05 7.43 7.73 7.73C7.43 8.05 7.42 8.54 7.71 8.87L10.48 12L7.71 15.12C7.42 15.45 7.42 15.95 7.73 16.26C8.05 16.56 8.54 16.57 8.87 16.28L12 13.52L15.12 16.29C15.45 16.58 15.95 16.57 16.26 16.27C16.56 15.95 16.57 15.46 16.28 15.13L13.52 12L16.29 8.88C16.58 8.55 16.58 8.05 16.27 7.74C15.95 7.43 15.45 7.42 15.12 7.71Z"
      style={{ fill: 'var(--lux-icon-secondary-color, white)' }}
    />
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
