'use client';

import { useState } from 'react';

export default function DailyReportForm() {
    const [date, setDate] = useState('');
    const [mood, setMood] = useState('3');
    const [health, setHealth] = useState('');
    const [report, setReport] = useState('');
    const [visibility, setVisibility] = useState('public');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Implementation placeholder
    };

    return (
        <div className="w-full max-w-2xl mx-auto my-8 bg-white p-6 rounded-lg shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-2">日報作成/編集</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* 基本情報 */}
                <section className="flex flex-col gap-4">
                    <h3 className="text-xl font-semibold text-secondary border-b pb-1">基本情報</h3>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="date" className="font-semibold text-sm">日付</label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            className="p-2 border border-border rounded-md"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="mood" className="font-semibold text-sm">気分</label>
                        <select
                            id="mood"
                            value={mood}
                            onChange={(e) => setMood(e.target.value)}
                            required
                            className="p-2 border border-border rounded-md bg-white"
                        >
                            <option value="1">1 - 悪い</option>
                            <option value="2">2 - やや悪い</option>
                            <option value="3">3 - 普通</option>
                            <option value="4">4 - やや良い</option>
                            <option value="5">5 - 良い</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="health" className="font-semibold text-sm">体調</label>
                        <textarea
                            id="health"
                            rows={3}
                            value={health}
                            onChange={(e) => setHealth(e.target.value)}
                            className="p-2 border border-border rounded-md resize-y"
                        />
                    </div>
                </section>

                {/* 業務報告 */}
                <section className="flex flex-col gap-4 bg-success/20 p-4 rounded-md">
                    <h3 className="text-xl font-semibold text-secondary border-b pb-1">業務報告</h3>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="report" className="font-semibold text-sm">本文</label>
                        <textarea
                            id="report"
                            rows={5}
                            value={report}
                            onChange={(e) => setReport(e.target.value)}
                            required
                            className="p-2 border border-border rounded-md resize-y"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="attachments" className="font-semibold text-sm">添付ファイル</label>
                        <input
                            type="file"
                            id="attachments"
                            multiple
                            className="p-2 border border-border rounded-md bg-white text-sm"
                        />
                    </div>
                </section>

                {/* 公開設定 */}
                <section className="flex flex-col gap-4">
                    <h3 className="text-xl font-semibold text-secondary border-b pb-1">公開設定</h3>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="visibility" className="font-semibold text-sm">公開範囲</label>
                        <select
                            id="visibility"
                            value={visibility}
                            onChange={(e) => setVisibility(e.target.value)}
                            className="p-2 border border-border rounded-md bg-white"
                        >
                            <option value="public">全体</option>
                            <option value="group">グループ</option>
                            <option value="private">非公開</option>
                        </select>
                    </div>
                </section>

                {/* アクションボタン */}
                <div className="flex gap-4 justify-end mt-4">
                    <button type="button" className="px-6 py-2 bg-secondary text-white font-bold rounded-md hover:bg-secondary-hover transition-colors">
                        キャンセル
                    </button>
                    <button type="submit" className="px-6 py-2 bg-primary text-white font-bold rounded-md hover:bg-primary-hover transition-colors">
                        保存
                    </button>
                </div>
            </form>
        </div>
    );
}
