# My boilerplate with React Native

# Prerequisites

- Node.js v18.x or higher (preferably installed via NVM)
- Yarn

## Tech stack

- React Native
- React Hook Form
- Redux saga
- Redux-toolkit
- ...

## Project stucture

```sh
$PROJECT_ROOT
|__ App.tsx                # Entry point
|__ src
    |__ components         # Reusable UI components
    |__ screens            # Screen components
    |__ utils              # Helper functions and utilities
    |__ hooks              # Custom hooks
    |__ assets             # Image and font files
    |__ redux              # State management
    |__ locales            # Localization files
    |__ themes             # Theme-related files
    |__ services           # Service layer for interacting with external services
    |__ apis               # API interaction layer
    |__ constants          # Constants and configurations
    |__ types              # Contains types in project
    |__ navigations        # Navigation configuration
```

## Getting started

1. Clone this repository:

```sh
git clone https://github.com/vansu99/react-native-my-boilerplate.git <your project name>
```

2. Navigate to the project's root directory:

```sh
cd <your project name>
```

3. Remove the `.git` folder:

```sh
rm -rf .git
```

4. Rename the project using `React Native Rename`:

```sh
$ npx react-native-rename <newName>
```

5. Install dependencies:

```sh
yarn install
```
