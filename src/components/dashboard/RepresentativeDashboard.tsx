export default function RepresentativeDashboard() {
    return (
        <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl font-bold text-primary border-b pb-2">担当者ダッシュボード</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="bg-white p-6 rounded-lg shadow-sm border border-border">
                    <h3 className="text-xl font-semibold mb-4 text-primary">自社参加者の状況</h3>
                    <p className="text-sm text-secondary">参加者リストや進捗状況を表示する予定です。</p>
                </section>

                <section className="bg-white p-6 rounded-lg shadow-sm border border-border">
                    <h3 className="text-xl font-semibold mb-4 text-primary">日報の返信</h3>
                    <p className="text-sm text-secondary">日報の確認と返信を行う機能を表示する予定です。</p>
                </section>
            </div>
        </div>
    );
}
