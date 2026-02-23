import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '@/components/auth/LoginForm';

describe('LoginForm', () => {
    it('should render role select, email, password inputs and a submit button', () => {
        render(<LoginForm />);

        expect(screen.getByLabelText(/ロールを選択/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/メールアドレス/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/パスワード/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /ログイン/i })).toBeInTheDocument();
    });

    it('should have correct role options', () => {
        render(<LoginForm />);
        const roleSelect = screen.getByLabelText(/ロールを選択/i);

        expect(roleSelect).toHaveTextContent('管理者');
        expect(roleSelect).toHaveTextContent('担当者');
        expect(roleSelect).toHaveTextContent('講師');
        // Also including '学習者' as per the user stories
        expect(roleSelect).toHaveTextContent('学習者');
    });
});
