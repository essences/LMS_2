import { render, screen } from '@testing-library/react';
import AdminDashboard from '@/components/dashboard/AdminDashboard';

describe('AdminDashboard', () => {
    it('should render main sections', () => {
        render(<AdminDashboard />);

        expect(screen.getByRole('heading', { name: /システム運用状況/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /クイックアクセス/i })).toBeInTheDocument();
        expect(screen.getByText(/ユーザー管理/i)).toBeInTheDocument();
        expect(screen.getByText(/コース管理/i)).toBeInTheDocument();
    });
});
