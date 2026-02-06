import { BlogPost, Tag, Author } from './types';

export const AUTHORS: Record<string, Author> = {
  nakamura: {
    name: '中村 甲一',
    role: 'プロジェクトマネージャー',
    avatar: 'https://ui-avatars.com/api/?name=Koichi+Nakamura&background=0D8ABC&color=fff'
  },
  ryusin: {
    name: 'リュウシン',
    role: 'エンジニア',
    avatar: 'https://ui-avatars.com/api/?name=Ryusin&background=random'
  },
  generic: {
    name: 'Nakamura',
    avatar: 'https://ui-avatars.com/api/?name=Nakamura&background=333&color=fff'
  }
};

export const TAGS: Tag[] = [
  { name: 'DX', count: 5 },
  { name: 'Google BigQuery', count: 3 },
  { name: 'Google Cloud Functions', count: 2 },
  { name: 'Google Studio', count: 1 },
  { name: 'Google Analytics', count: 1 },
  { name: 'Google Cloud', count: 2 },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'vibe-coding-guide',
    title: 'アイデアから公開まで：Vibe Coding（Stitch + AI Studio + Antigravity）完全ガイド',
    subtitle: 'Exploring the intersection of atmosphere, intuition, and code.',
    excerpt: 'アイデアがあるけれど、コードが詳しくないから諦めていませんか？今、AIツールを駆使して、デザインからデプロイまでを驚くべきスピードで実現する「Vibe Coding」という手法が注目されています。',
    content: `
      <p>アイデアがあるけれど、コードが詳しくないから諦めていませんか？</p>
      
      <p>
        今、AIツールを駆使して、デザインからデプロイまでを驚くべきスピードで実現する「Vibe Coding」という手法が注目されています。この記事では、Googleの最新ツール群（Stitch, AI Studio）とAntigravityを組み合わせ、ほとんど無料で、しかもコードを一行も手書きせずにWebアプリを公開するまでの全5ステップを徹底解説します。
      </p>

      <!-- TIP -->
      <div class="bg-cyan-50 border-cyan-200 text-gray-800 border-l-4 p-4 my-8 rounded-r-md text-sm md:text-base">
        <div class="flex items-start">
          <span class="font-bold mr-2 mt-0.5">TIP:</span>
          <div>
            開発・導入の相談 AIツールを使った開発支援について、プロに相談したい方は
            <a href="https://www.jeki-ddl.co.jp/contact/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800 font-medium">こちら</a>
            からお問い合わせください。
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-black">ステップ1：Stitchを使用した詳細なUIデザインと修正</h2>
      <h3 class="text-lg font-medium text-gray-500 mb-4 italic">Stitch UI Design Interface</h3>
      
      <p>
        最初のステップは、Googleの「Stitch」を使って、アプリの見た目（UI）を作成することから始まります。もうFigmaでゼロから四角形を描く必要はありません。
      </p>

      <h4 class="text-lg font-bold mt-6 mb-2 text-black">直感的なデザイン生成</h4>
      <p>
        まずは「モバイルアプリ」か「PCウェブアプリ」を選択し、作りたいアプリのイメージ（例：「Sakura Zen Clinic（和風モダンなクリニック予約サイト）」）をテキストで入力するだけです。GoogleのImage 2.5やImage 3モデルが、あなたの言葉を瞬時にデザインへと変換します。
      </p>
      <p>
        さらにRedesign機能を使えば、参考にしたい既存のWebサイトやスクリーンショットを読み込ませて、「これと同じような雰囲気で」と指示することも可能です。
      </p>

      <h4 class="text-lg font-bold mt-6 mb-2 text-black">こだわりの詳細編集</h4>
      <p>生成されたデザインは、驚くほど細かく編集できます。</p>
      <ul class="list-disc pl-6 mb-6 text-black space-y-3">
        <li><strong class="text-black">AIチャット編集 (Add to chat):</strong> ページ全体に対して、「テキストをすべて日本語に変更して」「フォントをSource Han Sansにして」といった指示を一括で適用できます。</li>
        <li><strong class="text-black">注釈による精密修正 (Annotate):</strong> ここがStitchの凄いところです。修正したい箇所を四角く囲んで（バウンディングボックス）、「診療科目から『歯科』を削除」「地図の表示範囲をクリニック周辺にズーム」といったピンポイントな指示が出せます。</li>
        <li><strong class="text-black">テーマ編集 (Edit Theme):</strong> ダークモード/ライトモードの切り替えや、ブランドカラーの変更もワンクリックで完了。ヒートマップ予測機能を使えば、ユーザーがどこに注目するかをAIが分析してくれるので、UXの改善にも役立ちます。</li>
      </ul>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-black">ステップ2：AI Studioを使用したフロントエンドの統合</h2>
      <h3 class="text-lg font-medium text-gray-500 mb-4 italic">AI Studio Coding Interface</h3>
      
      <p>
        Stitchで作ったページは、まだ「絵」の状態です。これを実際にクリックして動くアプリに変えるのが「AI Studio」です。
      </p>

      <h4 class="text-lg font-bold mt-6 mb-2 text-black">バラバラのページを一つに</h4>
      <p>
        Stitchで作成したすべてのページ（ウェルカム画面、一覧、詳細、マイページなど）を選択し、「Export to AI Studio」を実行します。これだけで、デザインがコードとしてAI Studioに渡されます。
      </p>

      <h4 class="text-lg font-bold mt-6 mb-2 text-black">アプリとしての命を吹き込む</h4>
      <p>
        AI Studio上でモデルを実行すると、各ページが相互にリンクされ、クリック操作が可能な一つのアプリとして統合されます。
      </p>
      <ul class="list-disc pl-6 mb-6 text-black space-y-3">
        <li><strong class="text-black">動作の修正:</strong> プレビュー画面で実際に操作してみましょう。「予約ボタンを押しても反応しない」といった不具合があれば、AIにチャットで指示するだけで、画面遷移や通知機能を追加してくれます。</li>
      </ul>
      <p>この段階ではまだデータは保存されませんが、アプリの「ガワ」と「動き」は完全に出来上がります。</p>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-black">ステップ3：Antigravityによるバックエンドとデータベースの構築</h2>
      <h3 class="text-lg font-medium text-gray-500 mb-4 italic">Server and Database Architecture</h3>
      
      <p>
        ここからが本番です。フロントエンドのコードをもとに、「Antigravity」が裏側のロジックとデータベースを自動生成します。
      </p>

      <h4 class="text-lg font-bold mt-6 mb-2 text-black">全自動の実行計画</h4>
      <p>
        フロントエンドのコードをAntigravityにインポートするだけで、AIが必要なバックエンドAPI、データ構造、そしてSupabaseとの連携を含む「実行計画」を提示してくれます。
      </p>

      <h4 class="text-lg font-bold mt-6 mb-2 text-black">Supabaseのセットアップ</h4>
      <p>面倒なデータベース設定も、以下の3ステップで完了です。</p>
      <ol class="list-decimal pl-6 mb-6 text-black space-y-3">
        <li><strong class="text-black">プロジェクト作成:</strong> Supabaseで新規プロジェクトを作り、URLとAPIキーを取得。</li>
        <li><strong class="text-black">環境変数設定:</strong> Antigravityが用意した .env ファイルに、先ほどのURLとキーを貼り付け。</li>
        <li><strong class="text-black">テーブル一括作成:</strong> 生成された init.sql をSupabaseのSQLエディタに貼り付けて実行。これだけで、「予約履歴」「患者カルテ」「診療メニュー」といった必要なテーブルがすべて作成されます。</li>
      </ol>
      <p>最後に <code>npm run dev</code> コマンドを実行すれば、ユーザー登録、ログイン、予約データの保存まで、完全に機能するアプリがローカル環境で動き出します。</p>

      <!-- NOTE -->
      <div class="bg-gray-100 border-gray-300 text-gray-800 border-l-4 p-5 my-8 rounded-r-md text-sm md:text-base">
        <div class="flex items-start">
          <span class="font-bold mr-2 mt-0.5">NOTE:</span>
          <div class="flex-1">
             <div class="font-bold mb-2">Pro Tip: エンジニアリソースにお困りですか？</div>
             <p class="mb-3">
               「Vibe Coding」で、MVP開発を劇的に加速させる。 AIツールは強力ですが、実際のビジネス要件に合わせたデータベース設計やセキュリティ対策には専門知識が不可欠です。 Jeki Data-Driven Labなら、貴社のアイデアを最短2週間で実用レベルのプロダクトに仕上げます。
             </p>
             <a href="https://www.jeki-ddl.co.jp/contact/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-blue-700 font-bold hover:underline">
               👉 Vibe Coding導入支援について相談する
             </a>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-black">ステップ4：GitHubへのコードホスティング</h2>
      <p>ローカルで動いたアプリを、インターネットの世界に公開する準備をしましょう。</p>

      <h4 class="text-lg font-bold mt-6 mb-2 text-black">AIがGit操作もサポート</h4>
      <p>
        「Gitコマンドなんて分からない」という方も安心してください。AIに指示すれば、リポジトリの初期化からコミット、プッシュまでのコマンド（<code>git init, git add, git commit</code>）を教えてくれます。
      </p>
      <p>
        GitHubで新しいリポジトリを「Public」で作成し、そこにコードをアップロード（プッシュ）します。これがクラウド公開への切符となります。
      </p>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-black">ステップ5：Vercelを使用したクラウドデプロイ</h2>
      <p>いよいよ公開の時です。今回は「Vercel」を使用して、世界中の人がアクセスできるようにします。</p>

      <h4 class="text-lg font-bold mt-6 mb-2 text-black">Vercel連携とビルド設定</h4>
      <p>VercelにGitHubアカウントでログインし、ステップ4で作成したリポジトリをインポートします。設定は以下の通りです。</p>
      <ul class="list-disc pl-6 mb-6 text-black space-y-2">
        <li><strong class="text-black">Build Command:</strong> <code>npm run build</code></li>
        <li><strong class="text-black">Output Directory:</strong> <code>dist</code></li>
        <li><strong class="text-black">Install Command:</strong> <code>npm install</code></li>
      </ul>

      <h4 class="text-lg font-bold mt-6 mb-2 text-black">環境変数の設定</h4>
      <p>
        忘れてはいけないのが「環境変数」です。ローカルでも使用したSupabaseのURLとAPIキーを、Vercelの設定画面にも入力します。
      </p>
      <p>
        設定完了後、「Deploy」ボタンを押せばビルドが始まります。数分後、あなただけのWebアプリの公開URLが発行されます！
      </p>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-black">ボーナス：管理画面（Admin Panel）も爆速で</h2>
      <p>ユーザー向けのアプリだけでなく、運営用の管理画面も同じプロセスで作れてしまいます。</p>
      <ul class="list-disc pl-6 mb-6 text-black space-y-2">
        <li>ダッシュボードでの来院数統計確認</li>
        <li>新しい診療メニューの登録（画像のアップロード）</li>
        <li>患者様からの予約リクエストの承認・日時変更</li>
      </ul>
      <p>
        これらを行う管理画面も、同じSupabaseデータベースに接続することで、ユーザーアプリとリアルタイムに連動します。管理画面で「承認」ボタンを押せば、即座にユーザーへ「予約確定」メールが送信される、といった本格的なシステム運用が可能になります。
      </p>

      <h2 class="text-2xl font-bold mt-10 mb-4 text-black">まとめ</h2>
      <p>
        これまでの開発プロセスでは、デザイン、フロントエンド、バックエンド、インフラ構築と、それぞれの専門知識が必要でした。しかし「Vibe Coding」のアプローチなら、作りたいもののイメージとAIツールさえあれば、誰でも高品質なアプリを公開できます。
      </p>
      <p class="mb-8 text-black font-bold text-lg">
        さあ、あなたのアイデアを形にする旅に出かけましょう！
      </p>

      <div class="mt-12 mb-8 bg-slate-50 p-8 rounded-xl border border-slate-100">
        <h3 class="text-xl font-bold mb-4 text-black">あなたのアイデアを、最速で現実に。</h3>
        <p>
          「社内に開発リソースがない」「AIツールを使ったDX研修をしてほしい」 そんな課題をお持ちの方は、ぜひ私たちにご相談ください。 最新のAI開発プロセスで、御社のビジネスを加速させます。
        </p>
        
        <!-- IMPORTANT -->
        <div class="bg-red-50 border-red-200 text-gray-800 border-l-4 p-5 rounded-r-md text-sm md:text-base">
          <div class="flex items-start">
            <span class="font-bold mr-2 mt-0.5 text-red-800">IMPORTANT:</span>
            <div class="flex-1">
              <div class="mb-2">無料相談・見積もりを依頼する <span class="text-xs text-gray-500 ml-1">※ 初回ヒアリングは無料です</span></div>
              <a href="https://www.jeki-ddl.co.jp/contact/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-blue-700 font-bold hover:underline">
                👉 お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    `,
    author: AUTHORS.ryusin,
    date: '2024.10.15',
    imageUrl: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1000&auto=format&fit=crop',
    tags: ['DX', 'Google BigQuery', 'Google Cloud Functions'],
    readTime: '8 min read'
  },
  {
    id: 'google-analytics-4',
    title: '今更だから考える、Google Analytics 4を導入する必要性',
    excerpt: 'UAの終了に伴い、GA4への移行が必須となりましたが、単なる移行ではなく、データ活用を見直すチャンスです。',
    content: 'Google Analytics 4 (GA4) offers a new way to track users across devices...',
    author: AUTHORS.nakamura,
    date: '2024.10.15',
    imageUrl: 'https://picsum.photos/seed/office/800/450',
    tags: ['Google Analytics', 'DX'],
    readTime: '5 min read'
  },
  {
    id: 'next-gen-cloud',
    title: '次世代クラウドアーキテクチャの展望',
    excerpt: 'サーバーレスからエッジコンピューティングまで、最新のトレンドを解説します。',
    content: 'Exploring the future of cloud computing...',
    author: AUTHORS.ryusin,
    date: '2026.02.07',
    imageUrl: 'https://picsum.photos/seed/cloud/800/450',
    tags: ['Google Cloud', 'Google Cloud Functions'],
    readTime: '5 min read'
  }
];
