import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-primary text-white p-[15px] text-center mt-auto">
            <div className="flex justify-center gap-4 text-sm mb-2">
                <Link href="/company" className="hover:underline">会社情報</Link>
                <Link href="/terms" className="hover:underline">利用規約</Link>
                <Link href="/privacy" className="hover:underline">プライバシーポリシー</Link>
                <Link href="/contact" className="hover:underline">お問い合わせ</Link>
            </div>
            <div className="text-xs">
                &copy; {new Date().getFullYear()} LMS Company. All rights reserved.
            </div>
        </footer>
    );
}
