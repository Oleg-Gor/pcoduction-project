import { fireEvent, render, screen } from '@testing-library/react';
import { componentRender } from 'shared/config/test/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Sidebar text', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Sidebar toggle', () => {
        componentRender(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
