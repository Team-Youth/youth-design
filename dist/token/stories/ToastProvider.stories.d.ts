import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const TopLeft: Story;
export declare const BottomRight: Story;
export declare const TopCenter: Story;
export declare const LongDuration: Story;
