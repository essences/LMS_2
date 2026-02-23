export default function AdminDashboard() {
    return (
        <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl font-bold text-primary border-b pb-2">管理者ダッシュボード</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="bg-white p-6 rounded-lg shadow-sm border border-border">
                    <h3 className="text-xl font-semibold mb-4 text-primary">クイックアクセス</h3>
                    <ul className="list-disc pl-5 text-sm space-y-2 text-secondary">
                        <li>ユーザー管理（作成・編集・削除）</li>
                        <li>コース管理（作成・編集・削除）</li>
                        <li>教材ライブラリ管理</li>
                        <li>レポート・分析</li>
                    </ul>
                </section>

                <section className="bg-white p-6 rounded-lg shadow-sm border border-border">
                    <h3 className="text-xl font-semibold mb-4 text-primary">システム運用状況</h3>
                    <ul className="list-disc pl-5 text-sm space-y-2 text-secondary">
                        <li>アクティブユーザー: --名</li>
                        <li>進行中のコース: --件</li>
                        <li>リソース状態: 正常</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
