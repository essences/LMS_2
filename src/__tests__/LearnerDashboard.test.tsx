import { render, screen } from '@testing-library/react';
import LearnerDashboard from '@/components/dashboard/LearnerDashboard';

describe('LearnerDashboard', () => {
    it('should render main sections', () => {
        render(<LearnerDashboard />);

        expect(screen.getByRole('heading', { name: /進行中のコース/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /本日のタスク/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /お知らせ/i })).toBeInTheDocument();
    });
});
