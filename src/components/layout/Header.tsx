import Link from "next/link";

export function Header() {
    return (
        <header className="bg-primary text-white p-[15px] flex items-center justify-between">
            <div className="font-bold text-lg">
                <Link href="/">LMS Logo</Link>
            </div>
            <nav className="flex items-center">
                <Link href="/" className="text-white mx-[10px] no-underline font-bold hover:underline">
                    ホーム
                </Link>
                <Link href="/courses" className="text-white mx-[10px] no-underline font-bold hover:underline">
                    研修コース
                </Link>
                <Link href="/reports" className="text-white mx-[10px] no-underline font-bold hover:underline">
                    日報
                </Link>
                <Link href="/materials" className="text-white mx-[10px] no-underline font-bold hover:underline">
                    教材ライブラリ
                </Link>
                <Link href="/mypage" className="text-white mx-[10px] no-underline font-bold hover:underline">
                    マイページ
                </Link>
            </nav>
            <div className="flex items-center gap-4">
                {/* 通知アイコンは後で実装 */}
                <span>🔔</span>
                <div className="flex gap-2 text-sm">
                    <Link href="/profile" className="hover:underline">プロフィール設定</Link>
                    <span>|</span>
                    <button className="hover:underline">ログアウト</button>
                </div>
            </div>
        </header>
    );
}
