import { render, screen } from '@testing-library/react';
import InstructorDashboard from '@/components/dashboard/InstructorDashboard';

describe('InstructorDashboard', () => {
    it('should render main sections', () => {
        render(<InstructorDashboard />);

        expect(screen.getByRole('heading', { name: /担当コースの状況/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /未返信の日報/i })).toBeInTheDocument();
    });
});
