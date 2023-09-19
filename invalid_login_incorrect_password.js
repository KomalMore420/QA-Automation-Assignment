import { Selector } from 'testcafe';

fixture`Login Error Messages`
  .page`https://dev.deepthought.education/login`;


test('Invalid Login Attempt - Incorrect Password , correct Username', async t => {
  const usernameInput = Selector('#username');
  const passwordInput = Selector('#password');
  const loginButton = Selector('button[type="submit"]');
  

  // Enter valid username and invalid password
  await t
    .typeText(usernameInput, 'student123')
    .typeText(passwordInput, 'admin')
    .click(loginButton);

  
});
