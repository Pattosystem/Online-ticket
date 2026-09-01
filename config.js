// ============================================================
// ここだけ書き換えれば動きます
// ============================================================
window.SAIL_CONFIG = {
  // Supabase の Project Settings > API からコピー
  SUPABASE_URL: 'https://pftleuvumwrokvovkqxi.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmdGxldXZ1bXdyb2t2b3ZrcXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgyNDgyOTAsImV4cCI6MjEwMzgyNDI5MH0.Qx9_ewfzdd1-l5EQfFiUdkKzuUvzLINFQa4jQ-Zq6gA',

  // 展示会ごとに変える。過去の分と混ざらないようにするための識別子
  CAMPAIGN: 'tohoku-2026',

  // ---- 表示する文言 ----------------------------------------
  EXPO_NAME: 'オートアフターマーケット東北2026',
  BOOTH: 'セイルシステム ブース',
  LEAD: '集客も、診断も、部品仕入れも。',

  OFFER_TITLE: 'ブース限定・特別特典',

  GIFTS: [
    {
      tag: 'GIFT 01',
      title: '5万円分の広告費をプレゼント',
      note: 'Web集客のスタート費用に充当いただけます。',
    },
    {
      tag: 'GIFT 02',
      title: 'セイルシステムの入会金 全額or半額免除',
      note: '新規ご入会が対象。免除額はプランにより異なります。',
    },
    {
      tag: 'GIFT 03',
      title: 'AI技術サポートの無料トライアル付き',
      note: '正式リリースまで無料でお試しいただけます。',
    },
  ],

  STEPS: [
    { title: 'ブースでヒアリング', note: '現在の集客状況・車種構成・人員体制をお聞かせください。' },
    { title: '課題の整理とご提案', note: '狙うべき車種・作業と、単価を上げる打ち手を整理してご提示。' },
    { title: '仕組みの導入',       note: 'Web集客・050通話可視化・技術／部品サポートをまとめて開始。' },
  ],

  EXPIRES: '2026年10月13日（火）まで',

  // ticket.html の公開URL。管理画面がメール文面のリンクを組み立てるのに使います
  TICKET_URL: 'https://pattosystem.github.io/Online-ticket/ticket.html',

  // 主催2社
  ORGS: [
    { name: 'セイルシステム株式会社', role: 'マイスターネットワーク運営',
      tel: '06-4703-0021', mail: 'helpdesk@sail-system.com' },
    { name: '株式会社GRACE', role: '車屋さん専門の集客屋（創業14年）／自社輸入車修理工場を運営',
      tel: '', mail: '' },                // ★GRACEさんの連絡先が決まったら記入
  ],
};
