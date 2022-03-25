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
	<ReactBootstrapButton {...args} leftIcon={<FaCheckCircle />} />
);

export const Basic = () => {
	return (
		<>
			<p>You can use it like a normal bootstrap button</p>
			{[
				'primary',
				'secondary',
				'success',
				'warning',
				'danger',
				'info',
				'light',
				'dark',
				'link',
			].map((e, i) => (
				<ReactBootstrapButton variant={e} key={i} className="m-3">
					{e} button
				</ReactBootstrapButton>
			))}
		</>
	);
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const SpinLoading = () => {
	return (
		<>
			<p>
				You can add an <code>isLoading</code> prop{' '}
			</p>
			{[
				'primary',
				'secondary',
				'success',
				'warning',
				'danger',
				'info',
				'light',
				'dark',
				'link',
			].map((e, i) => (
				<ReactBootstrapButton isLoading variant={e} key={i} className="m-3">
					{e} loading...
				</ReactBootstrapButton>
			))}
		</>
	);
};

export const GrowLoading = () => {
	return (
		<>
			<p>
				You can pass <code>spinnerProps</code> to customize the spinner. It is
				straight out of the box from react-bootstrap
			</p>

			<ReactBootstrapButton
				isLoading
				spinnerProps={{
					animation: 'grow',
				}}
			>
				growing spinner...
			</ReactBootstrapButton>
		</>
	);
};

export const LoaderPosition = () => {
	return (
		<>
			<p>
				<code>spinnerPositions</code> lets you define the spinners on left or
				right side of the buttom
			</p>
			<ReactBootstrapButton isLoading spinnerPosition="left" className="m-3">
				left spinner
			</ReactBootstrapButton>
			<ReactBootstrapButton isLoading spinnerPosition="right" className="m-3">
				right spinner
			</ReactBootstrapButton>
		</>
	);
};

export const ButtonAsDiv = () => {
	return <ReactBootstrapButton as="div">Div Button</ReactBootstrapButton>;
};

export const EmptyButton = () => {
	return <ReactBootstrapButton></ReactBootstrapButton>;
};

export const EmptyLoadingButton = () => {
	return <ReactBootstrapButton isLoading></ReactBootstrapButton>;
};
