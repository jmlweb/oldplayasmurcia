import { render, screen } from '@testing-library/react';

import getLayout from '@/layouts/CommonLayout';
import IndexPage from '@/pages';

const mockProps = {
  accesibleBeaches: [],
  featuredBeaches: [],
  beachesWithPromenade: [],
  nudistBeaches: [],
};

describe('IndexPage', () => {
  test('should render the home scene wrapped with the common layout', async () => {
    render(getLayout(<IndexPage {...mockProps} />));

    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();

    expect(screen.getByText('Playas destacadas')).toBeInTheDocument();
    expect(screen.getByText('Playas accesibles')).toBeInTheDocument();
    expect(screen.getByText('Playas nudistas')).toBeInTheDocument();
    expect(screen.getByText('Playas para pasear')).toBeInTheDocument();
  });
});
