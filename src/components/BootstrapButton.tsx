import React, {
	ComponentPropsWithoutRef,
	ComponentType,
	DOMAttributes,
	FC,
	HTMLProps,
	ReactElement,
} from 'react';
import { Button, ButtonProps, Spinner, SpinnerProps } from 'react-bootstrap';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export type ReactBootstrapButtonProps = {
	buttonProps?: Omit<ButtonProps, 'children'>;
	isLoading?: boolean;
	isDisabled?: boolean;
	loaderPosition?: 'left' | 'right';
	loaderProps?: SpinnerProps;
	loadingMessage?: string;
	icon?: ReactElement;
};

const BootstrapButton: FC<
	ReactBootstrapButtonProps & DOMAttributes<HTMLButtonElement>
> = ({
	buttonProps,
	isLoading,
	isDisabled,
	loaderPosition,
	loaderProps,
	loadingMessage,
	icon,
	children,
	...rest
}) => {
	return (
		<Button disabled={isLoading || isDisabled} {...buttonProps} {...rest}>
			<div className="d-flex justify-content-between align-items-center mx-2">
				{isLoading && loaderPosition === 'left' && (
					<Spinner animation="border" size="sm" {...loaderProps} />
				)}
				{!isLoading && icon}
				<div className="mx-2">
					{isLoading && loadingMessage ? loadingMessage : children || 'Button'}
				</div>
				{isLoading && loaderPosition === 'right' && (
					<Spinner animation="border" size="sm" />
				)}
			</div>
		</Button>
	);
};

export default BootstrapButton;
BootstrapButton.defaultProps = {
	loaderPosition: 'left',
};
