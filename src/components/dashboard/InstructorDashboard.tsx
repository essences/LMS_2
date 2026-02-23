export default function InstructorDashboard() {
    return (
        <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl font-bold text-primary border-b pb-2">講師ダッシュボード</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="bg-white p-6 rounded-lg shadow-sm border border-border">
                    <h3 className="text-xl font-semibold mb-4 text-primary">担当コースの状況</h3>
                    <p className="text-sm text-secondary">担当している研修コースの受講者進捗状況を表示します。</p>
                </section>

                <section className="bg-white p-6 rounded-lg shadow-sm border border-border">
                    <h3 className="text-xl font-semibold mb-4 text-primary">未返信の日報</h3>
                    <p className="text-sm text-secondary">受講者からの日報のうち、未返信のものを優先して表示します。</p>
                </section>
            </div>
        </div>
    );
}
