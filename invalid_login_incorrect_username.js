import { Selector } from 'testcafe';

fixture`Login Error Messages`
  .page`https://dev.deepthought.education/login`;

test('Invalid Login Attempt - Incorrect Username', async t => {
  const usernameInput = Selector('#username');
  const passwordInput = Selector('#password');
  const loginButton = Selector('button[type="submit"]');
 

  // Enter invalid username and valid password
  await t
    .typeText(usernameInput, 'student')
    .typeText(passwordInput, 'admin123')
    .click(loginButton);

 
});

