interface TextButtonProps {
    size?: 'm' | 's' | 'xs';
    disabled?: boolean;
    underline?: boolean;
    icon?: {
        left?: React.ReactNode;
        right?: React.ReactNode;
    };
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    width?: string | number;
    height?: string | number;
    chevron?: boolean;
    color?: string;
}
declare const TextButton: React.FC<TextButtonProps>;

export { TextButton, type TextButtonProps };
