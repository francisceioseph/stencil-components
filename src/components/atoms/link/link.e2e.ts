import { newE2EPage } from '@stencil/core/testing';

describe('osf-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<osf-link></osf-link>');

    const element = await page.find('osf-link');
    expect(element).toHaveClass('hydrated');
  });
});
