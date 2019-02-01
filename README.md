# Inkblot UI Component Library 

## Development with storybook
`npm run storybook`  
## Creating new components
1. Generate codes: `npm run generate`
2. Add the component to `index.tsx`
```
export { default as Button } from "./components/Button";
export { default as Dropdown } from "./components/Dropdown";
```
## Publish onto Github
1. Build: `npm run build`
2. Push a branch and merge it into master on Github
## How to use on projects
1. Install UI Library: `npm install inkblot-therapy/inkblot-ui`
2. Add fonts to a css file
```
@import url('https://fonts.googleapis.com/css?family=Barlow:400,500,600,700,800');
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700');
```
3. Sample codes
```
import { InkblotTheme, Button, Dropdown } from 'inkblot-ui';

...

<InkblotTheme>
  <Button label="Hello" primary />
  <Dropdown ... />
</InkblotTheme>
```
4. Update UI Library: `npm update inkblot-ui`
5. Install Developing UI Library: `npm install inkblot-therapy/inkblot-ui#branch-name`

<br/>
<br/>
<br/>
<br/>
## Features

- [Typescript](https://www.typescriptlang.org)
- Components generators
- Development Environment: [Storybook](https://storybook.js.org/)
- Styles: [Styled Components](https://www.styled-components.com/) with theming configuration
- Lint: [TSLint](https://palantir.github.io/tslint/)
- Tests: [Jest](https://jestjs.io/)

## Quick start

Make sure that you have Node v8 or above installed.

1. Clone this repo using `git clone  git@github.com:leandrooriente/react-ui-kit-boilerplate.git`
2. Move to the appropriate directory: `cd react-ui-kit-boilerplate`.
3. Run `npm ci` in order to install dependencies.
4. At this point you can run `npm run storybook` to see the example Storybook at [http://localhost:6006](http://localhost:6006).

## Creating new components

To add a new component, just run `npm run generate`. This command will generate all the component (Stateless or not) files for you.

## Testing

To test your components run `npm test`.
By default we run tests and lint before any push.

## Deploying storybook

To deploy storybook to Github Pages run `npm run deploy-storybook`.

## License

MIT
