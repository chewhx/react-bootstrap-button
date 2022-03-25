import React from 'react';
import { fireEvent, render, within } from '@testing-library/react';
import sinon from 'sinon';

import BootstopButton from '../src/components/BootstrapButton';

describe('<BootstopButton>', () => {
	it('Should output a button', () => {
		const { getByRole } = render(<BootstopButton>Button</BootstopButton>);
		expect(getByRole('button')).toBeDefined();
	});

	it('Should have type=button by default', () => {
		const { getByRole } = render(<BootstopButton>Button</BootstopButton>);
		expect(getByRole('button')).toHaveAttribute('type');
		expect(getByRole('button').getAttribute('type')).toBe('button');
	});

	it('Should show the type if passed one', () => {
		const { getByRole } = render(
			<BootstopButton type="submit">Button</BootstopButton>
		);
		expect(getByRole('button')).toHaveAttribute('type');
		expect(getByRole('button').getAttribute('type')).toBe('submit');
	});

	it('Should show the type if explicitly passed in when "as" is used', () => {
		const { getByTestId } = render(
			<BootstopButton as="div" type="submit" data-testid="test">
				Title
			</BootstopButton>
		);
		expect(getByTestId('test').getAttribute('type')).toBe('submit');
	});

	it('Should not have default type=button when "as" is used', () => {
		const { getByTestId } = render(
			<BootstopButton as="div" data-testid="test">
				Title
			</BootstopButton>
		);

		expect(getByTestId('test').getAttribute('type')).toBe(null);
	});

	it('Should forward refs to the button', () => {
		const ref = React.createRef<HTMLButtonElement>();
		render(
			<div>
				<BootstopButton ref={ref}>Yo</BootstopButton>
			</div>
		);

		expect(ref.current?.tagName).toBe('BUTTON');

		render(
			<div>
				<BootstopButton ref={ref} href="a">
					Yo
				</BootstopButton>
			</div>
		);

		expect(ref.current?.tagName).toBe('A');
	});

	it('Should output an anchor if called with a href', () => {
		const href = '/url';

		const { getByRole } = render(
			<BootstopButton href={href}>Title</BootstopButton>
		);

		expect(getByRole('button').getAttribute('href')).toBe(href);
	});

	it('Should call onClick callback', () => {
		const onClick = sinon.spy();

		const { getByRole } = render(
			<BootstopButton onClick={onClick}>Title</BootstopButton>
		);

		fireEvent.click(getByRole('button'));

		expect(onClick.calledOnce).toBe(true);
	});

	it('Should be disabled', () => {
		const { getByRole } = render(
			<BootstopButton disabled>Title</BootstopButton>
		);

		expect(getByRole('button').hasAttribute('disabled')).toBe(true);
	});

	it('Should not be disabled', () => {
		const { getByRole } = render(<BootstopButton>Title</BootstopButton>);

		expect(getByRole('button').hasAttribute('disabled')).toBe(false);
	});

	it('Should be disabled link', () => {
		const { getByRole } = render(
			<BootstopButton disabled href="#">
				Title
			</BootstopButton>
		);

		expect(getByRole('button').classList.contains('disabled')).toBe(true);
	});

	it('Should apply variant class', () => {
		const { getByRole } = render(
			<BootstopButton variant="danger">Title</BootstopButton>
		);

		expect(getByRole('button').classList.contains('btn-danger')).toBe(true);
	});

	it('Should have size class', () => {
		const { getByRole } = render(
			<BootstopButton size="lg">Title</BootstopButton>
		);

		expect(getByRole('button').classList.contains('btn-lg')).toBe(true);
	});

	it('Should honour additional classes passed in, adding not overriding', () => {
		const { getByRole } = render(
			<BootstopButton className="ken" variant="danger">
				Title
			</BootstopButton>
		);

		const button = getByRole('button');
		expect(button.classList.contains('ken')).toBe(true);
		expect(button.classList.contains('btn-danger')).toBe(true);
	});

	it('Should default to variant="primary"', () => {
		const { getByRole } = render(<BootstopButton>Title</BootstopButton>);

		expect(getByRole('button').classList.contains('btn-primary')).toBe(true);
	});

	it('Should remove default variant', () => {
		const { getByRole } = render(
			<BootstopButton variant={null as any}>Title</BootstopButton>
		);

		expect(getByRole('button').classList.contains('btn-primary')).toBe(false);
	});

	it('Should not output null variant', () => {
		const { getByRole } = render(
			<BootstopButton variant="">Title</BootstopButton>
		);

		expect(getByRole('button').classList.contains('btn-null')).toBe(false);
	});

	it('Should not output empty variant', () => {
		const { getByRole } = render(
			<BootstopButton variant="">Title</BootstopButton>
		);

		expect(getByRole('button').classList.contains('btn-')).toBe(false);
	});

	it('Should be active', () => {
		const { getByRole } = render(<BootstopButton active>Title</BootstopButton>);

		expect(getByRole('button').classList.contains('active')).toBe(true);
	});

	it('Should allow a custom prefix', () => {
		const { getByRole } = render(
			<BootstopButton bsPrefix="my-btn" variant="danger">
				Title
			</BootstopButton>
		);

		const button = getByRole('button');
		expect(button.classList.contains('my-btn')).toBe(true);
		expect(button.classList.contains('my-btn-danger')).toBe(true);
	});

	it('Should be disabled when isLoading is true', () => {
		const { getByRole } = render(
			<BootstopButton isLoading>Title</BootstopButton>
		);
		expect(getByRole('button').hasAttribute('disabled')).toBe(true);
	});

	it('Should show given loadingMessage when isLoading is true', () => {
		const { getByRole } = render(
			<BootstopButton isLoading loadingMessage="This can be anything...">
				Title
			</BootstopButton>
		);

		expect(getByRole('button').textContent).toBe('This can be anything...');
	});

	it('Should show a spinner when isLoading is true', () => {
		const { getByRole } = render(
			<BootstopButton isLoading loadingMessage="This can be anything...">
				Title
			</BootstopButton>
		);

		const button = getByRole('button');
		const spinner = within(button).getByTestId('left-spinner');

		expect(spinner).toBeDefined();
	});

	it('Should show a spinner on right side', () => {
		const { getByRole } = render(
			<BootstopButton
				isLoading
				spinnerPosition="right"
				loadingMessage="This can be anything..."
			>
				Title
			</BootstopButton>
		);

		const button = getByRole('button');
		const spinner = within(button).getByTestId('right-spinner');

		expect(spinner).toBeDefined();
	});
});
