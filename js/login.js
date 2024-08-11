document.getElementById("root").innerHTML = `
  <h1>Login Page</h1>
  <form id="loginForm">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required><br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required><br>
    <button type="submit">Login</button>
  </form>
`;
