import { render, screen } from '@testing-library/react';
import DailyReportForm from '@/components/reports/DailyReportForm';

describe('DailyReportForm', () => {
    it('should render all input fields', () => {
        render(<DailyReportForm />);

        // 基本情報 (Basic Info)
        expect(screen.getByLabelText(/日付/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/気分/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/体調/i)).toBeInTheDocument();

        // 業務報告 (Report Content)
        expect(screen.getByLabelText(/本文/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/添付ファイル/i)).toBeInTheDocument();

        // 公開設定 (Visibility)
        expect(screen.getByLabelText(/公開範囲/i)).toBeInTheDocument();

        // Buttons
        expect(screen.getByRole('button', { name: /保存/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /キャンセル/i })).toBeInTheDocument();
    });
});
