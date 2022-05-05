import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonProps, Spinner, SpinnerProps } from 'react-bootstrap';

type SpinnerPosition = 'left' | 'right';

export type ReactBootstrapButtonProps = React.DOMAttributes<HTMLButtonElement> &
	React.HTMLAttributes<HTMLButtonElement> &
	Omit<ButtonProps, 'children'> & {
		/**
		 * Set button to loading state
		 */
		isLoading?: boolean;
		/**
		 * Set spinner position
		 */
		spinnerPosition?: SpinnerPosition;
		/**
		 * Set spinner props
		 */
		spinnerProps?: SpinnerProps;
		/**
		 * Show message when button in loading state
		 */
		loadingMessage?: string;
		/**
		 * Display an icon for button
		 */
		leftIcon?: React.ReactNode;
		/**
		 * Ref for button
		 */
		ref?: React.Ref<HTMLButtonElement>;
	};

const defaultProps: Partial<ReactBootstrapButtonProps> = {
	spinnerPosition: 'left' as SpinnerPosition,
	loadingMessage: 'Loading...',
};

const propTypes = {
	children: PropTypes.any,
	disabled: PropTypes.bool,
	isLoading: PropTypes.bool,
	spinnerPosition: PropTypes.oneOf<SpinnerPosition>([]),
	spinnerProps: PropTypes.oneOf<SpinnerProps>([]),
	loadingMessage: PropTypes.string,
	leftIcon: PropTypes.node,
};

const BootstrapButton: React.FC<ReactBootstrapButtonProps> = React.forwardRef<
	HTMLButtonElement,
	ReactBootstrapButtonProps
>(
	(
		{
			disabled,
			isLoading,
			spinnerPosition,
			spinnerProps,
			loadingMessage,
			leftIcon,
			children,
			...rest
		},
		ref
	) => {
		return (
			<Button disabled={isLoading || disabled} {...rest} ref={ref}>
				<div className="d-flex justify-content-between align-items-center">
					{isLoading && spinnerPosition === 'left' && (
						<Spinner
							data-testid="left-spinner"
							className="me-2"
							animation="border"
							size="sm"
							{...spinnerProps}
						/>
					)}
					{!isLoading && leftIcon && (
						<div className="d-flex me-2">{leftIcon}</div>
					)}
					{<div>{isLoading && loadingMessage ? loadingMessage : children}</div>}
					{isLoading && spinnerPosition === 'right' && (
						<Spinner
							data-testid="right-spinner"
							className="ms-2"
							animation="border"
							size="sm"
							{...spinnerProps}
						/>
					)}
				</div>
			</Button>
		);
	}
);

BootstrapButton.displayName = 'BootstrapButton';
BootstrapButton.defaultProps = defaultProps;
BootstrapButton.propTypes = propTypes;
export default BootstrapButton;
