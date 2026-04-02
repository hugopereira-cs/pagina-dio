export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  leftIcon?: React.ReactNode; // Pode ser um componente React
  name: string;
  control: any;
  errorMessage?: string;
}