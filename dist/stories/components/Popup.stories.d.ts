declare const meta: {
    title: string;
    component: import("react").FC<import("../../components").PopupProps>;
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    tags: string[];
    argTypes: {
        isOpen: {
            control: string;
            description: string;
        };
        title: {
            control: string;
            description: string;
        };
        description: {
            control: string;
            description: string;
        };
        primaryButton: {
            description: string;
        };
        secondaryButton: {
            description: string;
        };
    };
};
export default meta;
export declare const SingleButtonWithDescription: any;
export declare const SingleButtonWithoutDescription: any;
export declare const TwoButtonsWithDescription: any;
export declare const TwoButtonsWithoutDescription: any;
export declare const CustomButtonProps: any;
