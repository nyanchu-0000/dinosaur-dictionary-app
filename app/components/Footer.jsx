import { useState } from 'react';

const Footer = () => {
    // 検索フォームの表示状態を管理するstate
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    // 検索クエリを管理するstate
    const [searchQuery, setSearchQuery] = useState('');

    // 「サイト内検索」リンクがクリックされたときの処理
    const handleSearchLinkClick = (e) => {
        e.preventDefault(); // ページのトップへの遷移を防ぐ
        setIsSearchVisible(!isSearchVisible); // 表示・非表示を切り替える
    };

    // フォームが送信されたときの処理（Enterキーまたは検索ボタン押下）
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // 検索クエリが空でなければ、ブラウザのページ内検索を実行
        if (searchQuery.trim()) {
            window.find(searchQuery);
        }
    };

    // ✨「恐竜図鑑」リンクがクリックされたときの処理を追加
    const handleDinoGuideClick = (e) => {
        e.preventDefault(); // href="#"のデフォルトの動作をキャンセル
        // ページの上から100pxの位置へスムーズにスクロール
        window.scrollTo({
            top: 710,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="w-full bg-slate-900 text-slate-400 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center space-x-8">
                {/* ✨onClickイベントを追加 */}
                <a href="#" onClick={handleDinoGuideClick} className="hover:text-amber-400 transition-colors duration-300">恐竜図鑑</a>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300">ホーム</a>
                <a href="#" onClick={handleSearchLinkClick} className="hover:text-amber-400 transition-colors duration-300">サイト内検索</a>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300">お問合せ</a>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300">利用規約</a>
            </div>

            {isSearchVisible && (
                <div className="max-w-7xl mx-auto mt-4 px-4 sm:px-6 lg:px-8 flex justify-center">
                    <form onSubmit={handleSearchSubmit} className="relative w-full max-w-xs">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="ページ内を検索..."
                            className="w-full bg-slate-800 border border-slate-600 text-slate-300 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-amber-400"
                            autoFocus
                        />
                        <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 hover:text-amber-400">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </form>
                </div>
            )}

            <div className="max-w-7xl mx-auto mt-4 px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
                &copy; 2025 DinoVerse. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;