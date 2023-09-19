import { Selector } from 'testcafe';

fixture`Login and Dashboard`
  .page`https://dev.deepthought.education/login`;

test('Successful Login - Redirect to Dashboard', async t => {
  const usernameInput = Selector('#username');
  const passwordInput = Selector('#password');
  const loginButton = Selector('button[type="submit"]');
  const dashboardScreen = Selector('.dashboard'); // Assuming this class represents the dashboard screen

  // Enter valid username and password
  await t
    .typeText(usernameInput, 'student123')
    .typeText(passwordInput, 'admin123')
    .click(loginButton);

  // Check if the user is redirected to the dashboard screen
  await t.expect(dashboardScreen.exists).ok();
});