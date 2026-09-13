# Dev Stack

A dynamic web app for exploring modern tech stacks and creating personalized tech lists.

## Features
- **Interactive Stack Builder:** Add or remove tech items with duplicate protection.
- **Toast Alerts:** Interactive feedback using React-Toastify.
- **Responsive Layout:** Optimized for mobile, tablet, and desktop viewports.

## Technologies Used
- React.js (Vite)
- Tailwind CSS & DaisyUI
- React-Toastify
- JSON Data Source

---

## Technical Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It lets developers write HTML-like markup inside JavaScript files, making component structures clean and easy to read.

### 2. What is the difference between props and state?
- **Props:** Read-only data passed down from parent to child components.
- **State:** Internal dynamic data managed inside a component that triggers UI updates when changed.

### 3. What does the useState hook do, and where did you use it in this project?
`useState` tracks internal dynamic data inside components. In this project, it manages the technology list, current user stack selections, and UI loading states.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` handles side-effects. It runs code automatically after rendering, which was used to fetch technology data from the local JSON file.

### 5. Why does every item in a .map() list need a unique key prop?
React uses the `key` prop to identify dynamic array nodes during updates, preventing unnecessary UI re-renders.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering displays specific elements based on dynamic evaluation. It was used to display the empty stack message versus the selected items grid:

```jsx
{stack.length === 0 ? (
  <p>Your stack is currently empty.</p>
) : (
  <StackList items="{stack}"/>
)}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Parent to Child: Data flows downward directly through props.

Child to Parent: The child component calls a callback function passed down as a prop from the parent.