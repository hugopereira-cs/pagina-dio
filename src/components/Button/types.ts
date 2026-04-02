export type ButtonProps = {
  title: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: string;
}

export type ButtonContainerStyles = {
  $variant?: 'primary' | 'secondary';
}
