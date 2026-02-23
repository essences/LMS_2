'use client';

import { useState } from 'react';

export default function LoginForm() {
  const [role, setRole] = useState('learner');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementation placeholder
  };

  return (
    <div className="flex justify-center items-center w-full my-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-lg shadow-md border border-border">
        <h2 className="text-xl font-bold text-center text-primary mb-2">ログイン</h2>
        
        <div className="flex flex-col gap-1">
          <label htmlFor="role" className="font-semibold text-sm">ロールを選択:</label>
          <select 
            id="role" 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
            className="p-2 border border-border rounded-md bg-white"
          >
            <option value="learner">学習者</option>
            <option value="admin">管理者</option>
            <option value="staff">担当者</option>
            <option value="instructor">講師</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-semibold text-sm">メールアドレス:</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 border border-border rounded-md"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-semibold text-sm">パスワード:</label>
          <input 
            type="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2 border border-border rounded-md"
          />
        </div>

        <button type="submit" className="mt-4 p-2 bg-primary text-white font-bold rounded-md hover:bg-primary-hover transition-colors">
          ログイン
        </button>
      </form>
    </div>
  );
}
