# React-Bootstrap-Button

This is a quick save for anyone looking to add a loading button for bootstrap in React.

**Note: You must install peer dependency [bootstrap](https://www.npmjs.com/package/bootstrap) and import the bootstrap stylesheet**

## Installation

Install the package

```bash
npm install react-bootstrap-button
```

If you have not already done so, inject bootstrap styles with guides from the [official bootstrap documentation](https://getbootstrap.com/docs/5.1/getting-started/introduction/).

Using npm:

```bash
npm install bootstrap
```

In your App.js:

```javascript
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
```

## Usage

```javascript
import { BootstrapButton } from 'react-bootstrap-button';

const Component = () => {
	// other code above...

	<BootstrapButton>Click me</BootstrapButton>;

	// other code below...
};
```

## API

Properties for `<BootstrapButton>`

```typescript
	buttonProps?: Omit<ButtonProps, 'children'>;
	isLoading?: boolean;
	isDisabled?: boolean;
	loaderPosition?: 'left' | 'right';
	loaderProps?: SpinnerProps;
	loadingMessage?: string;
	icon?: ReactElement;
```

- [Button Props API](https://react-bootstrap.github.io/components/buttons/#button-props)
- [Loader Props API](https://react-bootstrap.github.io/components/spinners/#spinner-props)
