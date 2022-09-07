import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Components', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button>Click Me</Button>);
    expect(baseElement).toBeTruthy();
  });
});
