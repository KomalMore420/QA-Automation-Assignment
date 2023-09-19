import { Selector } from 'testcafe';

fixture`Login Tests`
  .page`https://dev.deepthought.education/login`;


// Test unsuccessful login attempts with invalid credentials
test('Unsuccessful Login - Invalid Credentials', async t => {
  const usernameInput = Selector('#username');
  const passwordInput = Selector('#password');
  const loginButton = Selector('button[type="submit"]');
  

  // Enter invalid credentials
  await t
    .typeText(usernameInput, 'invalidabc')
    .typeText(passwordInput, 'in123')
    .click(loginButton);

  
});