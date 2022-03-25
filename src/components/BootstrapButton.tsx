import React, { DOMAttributes, FC, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonProps, Spinner, SpinnerProps } from 'react-bootstrap';

export type ReactBootstrapButtonProps = DOMAttributes<HTMLButtonElement> &
	HTMLAttributes<HTMLButtonElement> &
	Omit<ButtonProps, 'children'> & {
		isLoading?: boolean;
		isDisabled?: boolean;
		spinnerPosition?: 'left' | 'right';
		spinnerProps?: SpinnerProps;
		loadingMessage?: string;
		leftIcon?: React.ReactNode;
		ref?: React.Ref<HTMLButtonElement>;
	};

const defaultProps: Partial<ReactBootstrapButtonProps> = {
	spinnerPosition: 'left',
};

const propTypes = {
	children: PropTypes.any,
};

const BootstrapButton: FC<ReactBootstrapButtonProps> = React.forwardRef<
	HTMLButtonElement,
	ReactBootstrapButtonProps
>(
	(
		{
			isLoading,
			isDisabled,
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
			<Button disabled={isLoading || isDisabled} {...rest} ref={ref}>
				<div className="d-flex justify-content-between align-items-center mx-2">
					{isLoading && spinnerPosition === 'left' && (
						<Spinner
							data-testid="left-spinner"
							animation="border"
							size="sm"
							{...spinnerProps}
						/>
					)}
					{!isLoading && leftIcon}
					{children && (
						<div className="mx-2">
							{isLoading && loadingMessage ? loadingMessage : children}
						</div>
					)}
					{isLoading && spinnerPosition === 'right' && (
						<Spinner
							data-testid="right-spinner"
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
