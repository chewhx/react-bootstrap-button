# React-Bootstrap-Button

This is a quick save for anyone looking to add a loading button for Bootstrap in React.

**Note: You must install peer dependency [bootstrap](https://www.npmjs.com/package/bootstrap) and import the bootstrap stylesheet**

# v1.0.0

### Breaking Changes

- Removed `buttonProps`, you can now passed the props on the `<ReactBootstrapButton>` itself
- Renamed `loaderPosition` to `spinnerPosition`
- Renamed `spinnerProps` to `spinnerProps`
- Added ability to forward `ref`
- Renamed `icon` to `leftIcon` (prepare for the possibility of adding a right icon)

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

	const [clicked, setClicked] = useState(false);
	const handleClick = () => setClicked(true);

	return (
		<BootstrapButton
			variant="danger"
			className="m-4"
			isLoading={clicked}
			loadingMessage="This button is loading..."
			onClick={handleClick}
		>
			Click me
		</BootstrapButton>
	);

	// other code below...
};
```

## API

Properties for `<BootstrapButton>` includes those from React-Bootstrap Button and the following:

```typescript
isLoading?: boolean;
isDisabled?: boolean;
spinnerPosition?: 'left' | 'right';
spinnerProps?: SpinnerProps; // see React Spinner Props Api
loadingMessage?: string;
leftIcon?: ReactElement;
```

- [React-Bootstrap Button Props](https://react-bootstrap.github.io/components/buttons/#button-props)
- [React-Bootstrap Spinner Props](https://react-bootstrap.github.io/components/spinners/#spinner-props)

## License

MIT Licence

## Links

- 🐙 [GitHub](https://github.com/chewhx)
- 🖥️ [Website](https://www.chewhx.com)
- 📦 [NPM](https://www.npmjs.com/package/react-bootstrap-button)
- 🗄️ [Repo](https://github.com/chewhx/react-bootstrap-button)

## References

- https://github.com/mantinedev/mantine/
- https://github.com/react-bootstrap/react-bootstrap
- https://javascript.plainenglish.io/the-practical-guide-to-start-react-testing-library-with-typescript-d386804a018
