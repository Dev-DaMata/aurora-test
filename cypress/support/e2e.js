import './commands';
//import './commands/user';  colocar os commands criados na pasta acima aqui
//import './commands/seller';
import './commands/test'

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
Cypress.on('uncaught:exception', (err) => {
  /* returning false here prevents Cypress from failing the test */
  if (resizeObserverLoopErrRe.test(err.message)) {
    return false;
  }
});
