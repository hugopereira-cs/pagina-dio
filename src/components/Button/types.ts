export interface IButton {
  title: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}