export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded' | 'square';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}