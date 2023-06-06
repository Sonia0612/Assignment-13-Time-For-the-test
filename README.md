# Assignment13-Time for the test
## Theory
(https://blog.logrocket.com/testing-react-components-react-testing-library-vs-enzyme/#:~:text=Enzyme%20is%20a%20popular%20testing,implementation%20details%20of%20your%20components.)


Qn1.Different types of testing?

- 1. Manual testing
- 2. Automation testing
- 3. Unit testing
- 4. Integration Testing
- 5. End to End testing 

Qn2.What is Enzyme?

- Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. 
- You can also manipulate, traverse, and in some ways simulate runtime given the output.
- Older way of writing test cases.

Qn3. Enzyme vs React testing Library?

- Enzyme is intended for unit/integration testing. Its API was designed to test the implementation. 
- It offers custom renderer that doesn't require DOM (for shallow rendering), behaves differently from React renderer and allows things that are important for unit testing but aren't possible or straightforward with default renderer, like synchronous state updates, shallow rendering, disabling lifecycle methods, etc.

- react-testing-library is intended for blackbox integration/e2e tests. 
- It uses React renderer and ReactTestUtils internally, requires real DOM because it's component's output that is asserted in tests, not internals. It doesn't provide facilities for isolated unit tests but it's possible to do this by mocking modules that contain component that need to be spied, mocked or stubbed by other means, notably jest.mock.



Qn4.WHat is Jest and why do we use it?

- Jest is a JavaScript testing framework that allows developers to run tests on JavaScript and TypeScript code and can be easily integrated with React JS
- React testing library uses Jest behind the scenes.
- It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly. 
- Jest is well-documented, requires little configuration and can be extended to match your requirements.


