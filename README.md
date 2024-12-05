# Unhandled Error in Express.js Route Parameter

This repository demonstrates a common error in Express.js applications where a route parameter is not properly validated, leading to potential errors and crashes.

The `bug.js` file showcases the problematic code.  The `/users/:id` route lacks error handling for invalid `id` values. This could result in unexpected behavior or server crashes if an invalid ID is passed.

The solution, provided in `bugSolution.js`, addresses this by adding validation and error handling using a `try...catch` block.  If the ID is invalid, an appropriate error response is sent to the client.