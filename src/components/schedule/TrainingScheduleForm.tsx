'use client';

import { useState } from 'react';

export default function TrainingScheduleForm() {
    const [training, setTraining] = useState('training1');
    const [scheduledDate, setScheduledDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Implementation placeholder
    };

    return (
        <div className="w-full max-w-lg mx-auto my-8 bg-white p-6 rounded-lg shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-2">研修スケジュール作成</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="training" className="font-semibold text-sm">研修を選択:</label>
                    <select
                        id="training"
                        name="training"
                        value={training}
                        onChange={(e) => setTraining(e.target.value)}
                        className="p-2 border border-border rounded-md bg-white"
                    >
                        <option value="training1">研修1 (講師: 山田)</option>
                        <option value="training2">研修2 (講師: 佐藤)</option>
                        <option value="training3">研修3</option>
                    </select>
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="scheduled_date" className="font-semibold text-sm">予定日:</label>
                    <input
                        type="date"
                        id="scheduled_date"
                        name="scheduled_date"
                        value={scheduledDate}
                        onChange={(e) => setScheduledDate(e.target.value)}
                        required
                        className="p-2 border border-border rounded-md"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="start_time" className="font-semibold text-sm">開始時間:</label>
                    <input
                        type="time"
                        id="start_time"
                        name="start_time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        required
                        className="p-2 border border-border rounded-md"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="end_time" className="font-semibold text-sm">終了時間:</label>
                    <input
                        type="time"
                        id="end_time"
                        name="end_time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        required
                        className="p-2 border border-border rounded-md"
                    />
                </div>

                <button type="submit" className="mt-4 px-6 py-2 bg-primary text-white font-bold rounded-md hover:bg-primary-hover transition-colors">
                    スケジュール作成
                </button>
            </form>
        </div>
    );
}
