export default function LearnerDashboard() {
    return (
        <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl font-bold text-primary border-b pb-2">ダッシュボード</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="bg-white p-6 rounded-lg shadow-sm border border-border">
                    <h3 className="text-xl font-semibold mb-4 text-primary">進行中のコース</h3>
                    <ul className="list-disc pl-5 text-sm space-y-2">
                        <li>コース名1 - 進捗率: 70% (講師: 山田)</li>
                        <li>コース名2 - 進捗率: 50% (講師: 佐藤)</li>
                        <li>コース名3 - 進捗率: 20%</li>
                    </ul>
                </section>

                <section className="bg-white p-6 rounded-lg shadow-sm border border-border">
                    <h3 className="text-xl font-semibold mb-4 text-primary">お知らせ</h3>
                    <ul className="list-disc pl-5 text-sm space-y-2">
                        <li>お知らせ1 - 日付: 2023/10/01 - 重要度: 高 - 状態: 未読</li>
                        <li>お知らせ2 - 日付: 2023/10/02 - 重要度: 中 - 状態: 既読</li>
                        <li>お知らせ3 - 日付: 2023/10/03</li>
                    </ul>
                </section>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <section className="bg-white p-6 rounded-lg shadow-sm border border-border">
                    <h3 className="text-xl font-semibold mb-4 text-primary">本日のタスク</h3>
                    <ul className="list-disc pl-5 text-sm space-y-2">
                        <li>タスク1 - 締切: 12:00</li>
                        <li>タスク2 - 締切: 15:00</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
