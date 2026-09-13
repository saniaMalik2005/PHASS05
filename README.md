# Dev Stack

A modern web application for discovering technologies and building custom tech stacks.

## Features
- **Interactive Tech Stack Builder:** Select, manage, and prevent duplicate technology additions.
- **Responsive Layout:** Dynamic UI optimized for mobile, tablet, and desktop views.
- **Toast Notifications:** Instant feedback for user actions using React-Toastify.

## Technologies Used
- React.js (Vite)
- Tailwind CSS & DaisyUI
- React-Toastify
- JSON Data Source

---

## Technical Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows writing HTML-like structure directly inside JavaScript files. It makes writing and reading component layout dynamic structures intuitive.

### 2. What is the difference between props and state?
- **Props (Properties):** Read-only data passed down from parent to child components.
- **State:** Dynamic, mutable internal data managed within a component that triggers UI re-renders on update.

### 3. What does the useState hook do, and where did you use it in this project?
The `useState` hook manages dynamic internal state in functional components. In this project, it tracks technology data arrays, active user stack selections, and UI loading indicators.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` handles side-effects in functional components. It was used to asynchronously fetch the technology dataset from the local JSON file when the component first mounts.

### 5. Why does every item in a .map() list need a unique key prop?
React uses the unique `key` prop to identify and track dynamic list items during DOM reconciliation, optimizing re-rendering performance.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering displays dynamic UI elements based on specific conditions. It was used to toggle between an empty stack message and the selected stack items view:

```jsx
{stack.length === 0 ? (
  <p>Your stack is currently empty.</p>
) : (
  <StackList items="{stack}"/>
)}

7. How do you pass data from parent to child and child back to parent?
Parent to Child: Passed directly using props.

Child to Parent: The child invokes callback function props sent down by the parent.