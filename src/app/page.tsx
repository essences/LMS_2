'use client';

import { useState } from 'react';
import LearnerDashboard from '@/components/dashboard/LearnerDashboard';
import RepresentativeDashboard from '@/components/dashboard/RepresentativeDashboard';
import AdminDashboard from '@/components/dashboard/AdminDashboard';
import InstructorDashboard from '@/components/dashboard/InstructorDashboard';

type Role = 'learner' | 'representative' | 'admin' | 'instructor';

export default function Home() {
  const [role, setRole] = useState<Role>('learner');

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white p-4 rounded-lg shadow-sm border border-border flex items-center justify-between">
        <span className="font-semibold text-primary">デバッグ用ロール切替:</span>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as Role)}
          className="p-2 border border-border rounded-md bg-white text-sm"
        >
          <option value="learner">学習者 (Learner)</option>
          <option value="representative">担当者 (Representative)</option>
          <option value="admin">管理者 (Admin)</option>
          <option value="instructor">講師 (Instructor)</option>
        </select>
      </div>

      {role === 'learner' && <LearnerDashboard />}
      {role === 'representative' && <RepresentativeDashboard />}
      {role === 'admin' && <AdminDashboard />}
      {role === 'instructor' && <InstructorDashboard />}
    </div>
  );
}
