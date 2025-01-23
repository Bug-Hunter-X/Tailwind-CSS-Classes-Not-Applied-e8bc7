# Tailwind CSS Classes Not Applied Bug

This repository demonstrates a common bug encountered when working with Tailwind CSS: the failure to apply styles despite correctly using Tailwind classes.  The issue stems from a mismatch between the Tailwind configuration and the project setup.

## Setup

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run build` (if needed, depending on your setup). 
4. Open `index.html` in your browser.

## Problem

Observe that the `<div>` element does not have the expected red background and padding despite having the `p-4 bg-red-500` classes. This happens because the Tailwind configuration may not be correctly linked or set up for your project.

## Solution

The solution involves ensuring that the `tailwind.config.js` correctly points to your project's source files and that your build process correctly incorporates Tailwind's CSS output.   The corrected code is shown in `bugSolution.js` and the solution is in `solution.html`

