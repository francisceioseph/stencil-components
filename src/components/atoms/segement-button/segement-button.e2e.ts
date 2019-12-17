import { newE2EPage } from '@stencil/core/testing';

describe('fz-segement-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fz-segement-button></fz-segement-button>');

    const element = await page.find('fz-segement-button');
    expect(element).toHaveClass('hydrated');
  });
});
