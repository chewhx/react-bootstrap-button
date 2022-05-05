import React from 'react';
import { fireEvent, render, within } from '@testing-library/react';
import sinon from 'sinon';

import BootstrapButton from '../src/components/BootstrapButton';

describe('<BootstrapButton>', () => {
	it('Should output a button', () => {
		const { getByRole } = render(<BootstrapButton>Button</BootstrapButton>);
		expect(getByRole('button')).toBeDefined();
	});

	it('Should have type=button by default', () => {
		const { getByRole } = render(<BootstrapButton>Button</BootstrapButton>);
		expect(getByRole('button')).toHaveAttribute('type');
		expect(getByRole('button').getAttribute('type')).toBe('button');
	});

	it('Should show the type if passed one', () => {
		const { getByRole } = render(
			<BootstrapButton type="submit">Button</BootstrapButton>
		);
		expect(getByRole('button')).toHaveAttribute('type');
		expect(getByRole('button').getAttribute('type')).toBe('submit');
	});

	it('Should show the type if explicitly passed in when "as" is used', () => {
		const { getByTestId } = render(
			<BootstrapButton as="div" type="submit" data-testid="test">
				Title
			</BootstrapButton>
		);
		expect(getByTestId('test').getAttribute('type')).toBe('submit');
	});

	it('Should not have default type=button when "as" is used', () => {
		const { getByTestId } = render(
			<BootstrapButton as="div" data-testid="test">
				Title
			</BootstrapButton>
		);

		expect(getByTestId('test').getAttribute('type')).toBe(null);
	});

	it('Should forward refs to the button', () => {
		const ref = React.createRef<HTMLButtonElement>();
		render(
			<div>
				<BootstrapButton ref={ref}>Yo</BootstrapButton>
			</div>
		);

		expect(ref.current?.tagName).toBe('BUTTON');

		render(
			<div>
				<BootstrapButton ref={ref} href="a">
					Yo
				</BootstrapButton>
			</div>
		);

		expect(ref.current?.tagName).toBe('A');
	});

	it('Should output an anchor if called with a href', () => {
		const href = '/url';

		const { getByRole } = render(
			<BootstrapButton href={href}>Title</BootstrapButton>
		);

		expect(getByRole('button').getAttribute('href')).toBe(href);
	});

	it('Should call onClick callback', () => {
		const onClick = sinon.spy();

		const { getByRole } = render(
			<BootstrapButton onClick={onClick}>Title</BootstrapButton>
		);

		fireEvent.click(getByRole('button'));

		expect(onClick.calledOnce).toBe(true);
	});

	it('Should be disabled', () => {
		const { getByRole } = render(
			<BootstrapButton disabled>Title</BootstrapButton>
		);

		expect(getByRole('button').hasAttribute('disabled')).toBe(true);
	});

	it('Should not be disabled', () => {
		const { getByRole } = render(<BootstrapButton>Title</BootstrapButton>);

		expect(getByRole('button').hasAttribute('disabled')).toBe(false);
	});

	it('Should be disabled link', () => {
		const { getByRole } = render(
			<BootstrapButton disabled href="#">
				Title
			</BootstrapButton>
		);

		expect(getByRole('button').classList.contains('disabled')).toBe(true);
	});

	it('Should apply variant class', () => {
		const { getByRole } = render(
			<BootstrapButton variant="danger">Title</BootstrapButton>
		);

		expect(getByRole('button').classList.contains('btn-danger')).toBe(true);
	});

	it('Should have size class', () => {
		const { getByRole } = render(
			<BootstrapButton size="lg">Title</BootstrapButton>
		);

		expect(getByRole('button').classList.contains('btn-lg')).toBe(true);
	});

	it('Should honour additional classes passed in, adding not overriding', () => {
		const { getByRole } = render(
			<BootstrapButton className="ken" variant="danger">
				Title
			</BootstrapButton>
		);

		const button = getByRole('button');
		expect(button.classList.contains('ken')).toBe(true);
		expect(button.classList.contains('btn-danger')).toBe(true);
	});

	it('Should default to variant="primary"', () => {
		const { getByRole } = render(<BootstrapButton>Title</BootstrapButton>);

		expect(getByRole('button').classList.contains('btn-primary')).toBe(true);
	});

	it('Should remove default variant', () => {
		const { getByRole } = render(
			<BootstrapButton variant={null as any}>Title</BootstrapButton>
		);

		expect(getByRole('button').classList.contains('btn-primary')).toBe(false);
	});

	it('Should not output null variant', () => {
		const { getByRole } = render(
			<BootstrapButton variant="">Title</BootstrapButton>
		);

		expect(getByRole('button').classList.contains('btn-null')).toBe(false);
	});

	it('Should not output empty variant', () => {
		const { getByRole } = render(
			<BootstrapButton variant="">Title</BootstrapButton>
		);

		expect(getByRole('button').classList.contains('btn-')).toBe(false);
	});

	it('Should be active', () => {
		const { getByRole } = render(
			<BootstrapButton active>Title</BootstrapButton>
		);

		expect(getByRole('button').classList.contains('active')).toBe(true);
	});

	it('Should allow a custom prefix', () => {
		const { getByRole } = render(
			<BootstrapButton bsPrefix="my-btn" variant="danger">
				Title
			</BootstrapButton>
		);

		const button = getByRole('button');
		expect(button.classList.contains('my-btn')).toBe(true);
		expect(button.classList.contains('my-btn-danger')).toBe(true);
	});

	it('Should be disabled when isLoading is true', () => {
		const { getByRole } = render(
			<BootstrapButton isLoading>Title</BootstrapButton>
		);
		expect(getByRole('button').hasAttribute('disabled')).toBe(true);
	});

	it('Should show given loadingMessage when isLoading is true', () => {
		const { getByRole } = render(
			<BootstrapButton isLoading loadingMessage="This can be anything...">
				Title
			</BootstrapButton>
		);

		expect(getByRole('button').textContent).toBe('This can be anything...');
	});

	it('Should show a spinner when isLoading is true', () => {
		const { getByRole } = render(
			<BootstrapButton isLoading loadingMessage="This can be anything...">
				Title
			</BootstrapButton>
		);

		const button = getByRole('button');
		const spinner = within(button).getByTestId('left-spinner');

		expect(spinner).toBeDefined();
	});

	it('Should show a spinner on right side', () => {
		const { getByRole } = render(
			<BootstrapButton
				isLoading
				spinnerPosition="right"
				loadingMessage="This can be anything..."
			>
				Title
			</BootstrapButton>
		);

		const button = getByRole('button');
		const spinner = within(button).getByTestId('right-spinner');

		expect(spinner).toBeDefined();
	});
});
