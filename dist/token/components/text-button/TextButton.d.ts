import { IconType } from '../icon/Icon';
export interface TextButtonProps {
    size?: 'm' | 's' | 'xs';
    disabled?: boolean;
    underline?: boolean;
    leftIcon?: IconType;
    rightIcon?: IconType;
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    width?: string | number;
    height?: string | number;
    chevron?: boolean;
    color?: string;
}
export declare const TextButton: React.FC<TextButtonProps>;
