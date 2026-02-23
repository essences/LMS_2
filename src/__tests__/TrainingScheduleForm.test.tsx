import { render, screen } from '@testing-library/react';
import TrainingScheduleForm from '@/components/schedule/TrainingScheduleForm';

describe('TrainingScheduleForm', () => {
    it('should render scheduling fields', () => {
        render(<TrainingScheduleForm />);

        expect(screen.getByLabelText(/研修を選択/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/予定日/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/開始時間/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/終了時間/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /スケジュール作成/i })).toBeInTheDocument();
    });
});
