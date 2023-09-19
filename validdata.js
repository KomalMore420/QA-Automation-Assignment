import { Selector } from 'testcafe';

fixture`Login Tests`
  .page`https://dev.deepthought.education/login`;

// Test successful login with valid credentials
test('Successful Login', async t => {
  const usernameInput = Selector('#username');
  const passwordInput = Selector('#password');
  const loginButton = Selector('button[type="submit"]');


  // Enter valid credentials
  await t
    .typeText(usernameInput, 'student123')
    .typeText(passwordInput, 'admin123')
    .click(loginButton);

 
});