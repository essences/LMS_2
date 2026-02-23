import { render, screen } from '@testing-library/react';
import RepresentativeDashboard from '@/components/dashboard/RepresentativeDashboard';

describe('RepresentativeDashboard', () => {
    it('should render main sections', () => {
        render(<RepresentativeDashboard />);

        expect(screen.getByRole('heading', { name: /自社参加者の状況/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /日報の返信/i })).toBeInTheDocument();
    });
});
