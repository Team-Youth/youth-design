import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("../../components").ToastProps>;
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
        status: {
            control: string;
            options: string[];
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
        showLeadingIcon: {
            control: string;
            description: string;
        };
        showCloseButton: {
            control: string;
            description: string;
        };
    };
    args: {
        title: string;
        showLeadingIcon: true;
        showCloseButton: false;
        onClose: () => void;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Success: Story;
export declare const Error: Story;
export declare const Warning: Story;
export declare const Info: Story;
export declare const SuccessWithDescription: Story;
export declare const ErrorWithDescription: Story;
export declare const WarningWithDescription: Story;
export declare const InfoWithDescription: Story;
export declare const WithCloseButton: Story;
export declare const WithoutIcon: Story;
export declare const FullFeatured: Story;
export declare const MultipleToasts: Story;
