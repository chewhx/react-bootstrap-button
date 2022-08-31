# React-Bootstrap-Button

This is a quick save for anyone looking to add a loading button for Bootstrap in React.

**Note: You must install peer dependency [bootstrap](https://www.npmjs.com/package/bootstrap) and import the bootstrap stylesheet**

## Links

- [Demo](https://chewhx.github.io/react-bootstrap-button)
- 📦 [NPM](https://www.npmjs.com/package/react-bootstrap-button)
- 🗄️ [Repo](https://github.com/chewhx/react-bootstrap-button)
- 🐙 [GitHub](https://github.com/chewhx)
- 🖥️ [Website](https://www.chewhx.com)

## Installation

1. Install the package and bootstrap

```bash
npm install react-bootstrap-button bootstrap
```

For other installation methods of bootstrap styles, refer to guides from the [official bootstrap documentation](https://getbootstrap.com/docs/5.1/getting-started/introduction/).

2. Import bootstrap stylesheet in your App.js:

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
      // You may include all react-bootstrap button props
			className="m-4".
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
type BootstrapButton = {
	isLoading?: boolean;
	isDisabled?: boolean;
	spinnerPosition?: 'left' | 'right';
	spinnerProps?: SpinnerProps; // see React Spinner Props Api
	loadingMessage?: string;
	leftIcon?: ReactElement;
};
```

- [React-Bootstrap Button Props](https://react-bootstrap.github.io/components/buttons/#button-props)
- [React-Bootstrap Spinner Props](https://react-bootstrap.github.io/components/spinners/#spinner-props)

## License

MIT Licence

## References

- https://github.com/mantinedev/mantine/
- https://github.com/react-bootstrap/react-bootstrap
- https://javascript.plainenglish.io/the-practical-guide-to-start-react-testing-library-with-typescript-d386804a018
