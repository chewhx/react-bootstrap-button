import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReactBootstrapButton from './BootstrapButton';
import { FaCheckCircle } from 'react-icons/fa';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Buttons/Button',
	component: ReactBootstrapButton,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
		loaderPosition: { control: 'select', options: ['left', 'right'] },
		variant: {
			control: 'select',
			options: [
				'primary',
				'secondary',
				'success',
				'warning',
				'danger',
				'info',
				'light',
				'dark',
				'link',
			],
		},
	},
} as ComponentMeta<typeof ReactBootstrapButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ReactBootstrapButton> = (args) => (
	<ReactBootstrapButton {...args} icon={<FaCheckCircle />} />
);

export const Basic = Template.bind({});
Basic.args = {
	children: 'Basic Button',
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const SpinLoading = Template.bind({});
SpinLoading.args = {
	isLoading: true,
	children: 'Loading Button',
	loadingMessage: 'Loading something...',
};

export const GrowLoading = Template.bind({});
GrowLoading.args = {
	isLoading: true,
	children: 'Loading Button',
	loadingMessage: 'Loading something...',
	loaderProps: { variant: 'light', animation: 'grow' },
};
