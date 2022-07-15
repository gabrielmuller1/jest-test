# Config Jest e Testing Library

- npm i jest -D
- npx jest --init
- npm i ts-node -D
- npm i @types/jest
- npm i @swc/core @swc/jest -D
- npm i @testing-library/react
- npm i@testing-library/jest-dom 
- npm i@testing-library/user-event -D

## Config jest.config

 transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
            decorators: true,
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: "automatic",
            },
          },
        },
        module: {
          type: "es6",
          noInterop: false,
        },
      },
    ],
  },