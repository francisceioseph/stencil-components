import { newE2EPage } from '@stencil/core/testing';

describe('fz-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fz-button></fz-button>');

    const element = await page.find('fz-button');
    expect(element).toHaveClass('hydrated');
  });
});
