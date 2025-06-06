import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '../../components/text-input';
declare const meta: Meta<typeof TextInput>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithValue: Story;
export declare const Focused: Story;
export declare const Error: Story;
export declare const Disabled: Story;
export declare const Sizes: Story;
export declare const AllStates: Story;
export declare const Types: Story;
