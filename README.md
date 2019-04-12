# android-app-preview

Advanced app creator for FastCast4u's clients. It allows them to customize app apperance and preview it in same time. It supports playing radio from ShoutCast/IceCast servers and live streams.

## Installation

Use the [node.js](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/lang/en/) package manager to compile it.

In the project directory, firstly you can install dependencies:

```bash
yarn install
```
Next install global gulp:

```bash
npm install -g gulp-cli
```
And add gulp to depenecies:

```bash
yarn add gulp --dev
```

## Usage

After instalations, you can run the app in the development mode.
```bash
gulp watch
```

The page will reload if you make edits. All files Builds the app for production to the `dist` folder.

## License

This project is licensed under the GNU General Public License v3.0 License - see the [LICENSE](LICENSE) file for details
