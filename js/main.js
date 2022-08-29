const preloader = document.querySelector('.preloader');
window.addEventListener('load', function () {
    preloader.classList.add('hide');
})






const closePopup = document.querySelector('.video-popup i');
const popUp = document.querySelector('.video-popup')
const openPopup = document.querySelector('.video-play-btn');

openPopup.addEventListener('click', () => {
    popUp.style.display = 'grid';
})
closePopup.addEventListener('click', () => {
    popUp.style.display = 'none';
})

const nav = document.querySelector('nav');
const bttBtn = document.querySelector('.back_to_top')
const tooltipContainer = document.querySelector('.tooltip-container');
document.addEventListener('scroll', () => {
    if (window.pageYOffset > 20) {
        nav.classList.add('shrinked');
    } else {
        nav.classList.remove('shrinked');
    }
    if (window.pageYOffset > 300) {
        bttBtn.classList.add('active');
        tooltipContainer.classList.add('active');
    } else {
        bttBtn.classList.remove('active');
    }
})

const sections = document.querySelectorAll('.navSection');
const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const secName = entry.target.id;
        const activeNav = document.querySelector(`[data-id=${secName}]`);
        activeNav.classList.toggle('active', entry.isIntersecting);
    }, {
        rootMargin: '10vh',
        threshold: 1,
    })
})
sections.forEach(section => {
    navObserver.observe(section);
})


features = [
    {
        'icon': '<i class="fas fa-code mb-4"></i>',
        'title': '仕事整理をらくらく',
        'desc': 'Pixel で生産性を高める鍵は、あらゆる仕事をトピックごとに整理できるチャンネルというスペースです。関連するメンバー、メッセージ、ファイルをすべて 1 か所にまとめることで、仕事のスピードが劇的に上がります。'
    },
    {
        'icon': '<i class="fas fa-edit mb-4"></i>',
        'title': 'チームワークをシンプルに',
        'desc': '社内外問わずやり取りの効率を高めましょう。あらゆるコミュニケーションを 1 か所にまとめ、チャンネルごとに会話の論点を整理して、絵文字や音声メッセージで素早く反応すれば、どんな相手とも生産的に連携できます。'
    },
    {
        'icon': '<i class="fas fa-paint-brush mb-4"></i>',
        'title': 'ベストな時間に集中',
        'desc': 'Pixel なら、自分にとってベストな時間、場所、方法で仕事を進められます。通知を管理し、リアルタイムまたは都合のよいタイミングでコラボレーションできるほか、わからないことがあれば全社の会話を検索して答えを見つけるのも簡単です。'
    },
    {
        'icon': '<i class="fa-solid fa-lock mb-4"></i>',
        'title': 'データを安全に守り',
        'desc': 'Pixel では、すべてのユーザー企業の皆さまの保存データと送信中データをデフォルトで暗号化します。さらに、特定の業界における規制や、また国際的なセキュリティおよびデータプライバシー基準も満たしています。'
    },
    {
        'icon': '<i class="fa-solid fa-hand-holding-dollar mb-4"></i>',
        'title': '自社に適した料金プラン',
        'desc': '手軽に試せる無料プランから生産性を高め、ビジネスとともに拡張できるエンタープライズプランまで選べる！企業のニーズに応え、生産性とコラボレーションを加速させよう。もちろん、どのプランでもカスタマーサポート充実で安心！'
    },
    {
        'icon': '<i class="fa-solid fa-plug-circle-plus mb-4"></i>',
        'title': 'プラグインでさらに拡張',
        'desc': 'Pixel マーケットプレースには2,000以上のアプリをご用意。Pixel との連携で生産環境を 1 か所に簡単にまとめることができます。その結果、ツールの切り替えが減り、貴重な時間を節約、生産性を上がります。当然、追加のコストはかかりません。'
    },
]
const featuresContainer = document.querySelector('.features-carousel');
for (let i = 0; i < features.length; i++) {
    featuresContainer.innerHTML += `<div class="feature-item p-4 m-3 rounded" data-aos="fade-up">
    ${features[i].icon}
    <h3 class="mb-3">${features[i].title}</h3>
    <p>${features[i].desc}</p>
  </div>`
}


downloads = [
    {
        'icon': '<i class="fa-brands fa-google-play mb-4"></i>',
        'store': 'Google Play',
    },
    {
        'icon': '<i class="fa-brands fa-apple mb-4"></i>',
        'store': 'Apple',
    },
    {
        'icon': '<i class="fa-brands fa-windows mb-4"></i>',
        'store': 'Windows',
    },
]


const downloadsContainer = document.querySelector('.downloads-carousel');
for (let i = 0; i < downloads.length; i++) {
    downloadsContainer.innerHTML += `<div class="download-item p-4 m-3 rounded" data-aos="fade-right">
    ${downloads[i].icon}
    <h4 class="mb-3">${downloads[i].store} ストア</h4>
    <button class="btn btn-1 mb-3">今すぐダウンロード</button>
  </div>`
}


reviews = [
    {
        'text': '"実際、Pixel はなくてはならないツールです。規模の拡張が簡単にできるうえ、遠くのオフィスメンバーやチームともつながっていられるからです。"',
        'name': 'A 様',
        'company': '株式会社XXX'
    },
    {
        'text': '"Pixel は全社的に安全なコラボレーションを推進し、つながりを築くためのバックボーンとなっています。メールの利用が大幅に減り、チームは以前よりも効果的にコミュニケーションできるようになりました。"',
        'name': 'B 様',
        'company': '株式会社XXX'
    },
    {
        'text': '"Pixel なしの状態に戻ることなんて、想像できません。社内のメンバーにいつでも質問してすぐに回答が得られるプラットフォームがあることで、いろいろな意見や視点を取り入れられるようになりました。"',
        'name': 'C 様',
        'company': '株式会社XXX'
    }
]
const reviewsContainer = document.querySelector('.reviews-carousel');
for (let i = 0; i < reviews.length; i++) {
    reviewsContainer.innerHTML += ` <div class="d-flex card m-2 px-5 align-items-center justify-content-center" data-aos="zoom-in-left">
    <span class="maintxt justify-content-center mb-5">${reviews[i].text}</span>
    <div class="d-flex justify-content-between align-items-center w-100">
      <img src="img/avatar.png" alt="avatar">
      <div>
        <p>名前：${reviews[i].name}</p>
        <p class="mb-0">会社：${reviews[i].company}</p>
      </div>
    </div>
    <div>
    <a href="#1">続きを読む<i class="fa-solid fa-arrow-right-long"></i></a></div>
  </div>`
}

logos = [
    {
        'img': 'img/logo/amazon.png',
    },
    {
        'img': 'img/logo/docomo.png',
    },
    {
        'img': 'img/logo/panasonic.png',
    },
    {
        'img': 'img/logo/google.png',
    },
    {
        'img': 'img/logo/softbank.png',
    },
    {
        'img': 'img/logo/recruit.png',
    },
    {
        'img': 'img/logo/slack.png',
    },
    {
        'img': 'img/logo/mericari.png',
    },
    {
        'img': 'img/logo/line.png',
    },
    {
        'img': 'img/logo/amazon.png',
    },
    {
        'img': 'img/logo/docomo.png',
    },
    {
        'img': 'img/logo/panasonic.png',
    },
    {
        'img': 'img/logo/google.png',
    },
    {
        'img': 'img/logo/softbank.png',
    },
    {
        'img': 'img/logo/recruit.png',
    },
    {
        'img': 'img/logo/slack.png',
    }, {
        'img': 'img/logo/mericari.png',
    },
    {
        'img': 'img/logo/line.png',
    }
]

const sliderTracker = document.querySelector('.slider-tracker');
for (let i = 0; i < logos.length; i++) {
    sliderTracker.innerHTML += `<img src="${logos[i].img}" class="py-3" alt="">`
}




faqs = [
    {
        'no': 'One',
        'question': '自社でPixelで使う方が良いのはなぜですか。',
        'answer': 'Pixel は、企業全体でコミュニケーションを行うための新しいツールです。 Pixel があればメールを使わずにすみ、スピーディーかつ安全にやり取りし、会話を整理できます。 '
    },
    {
        'no': 'Two',
        'question': 'Pixel を効果的に使うにはどうすればよいですか？',
        'answer': 'Pixel を上手に使うカギはチャンネルにあります。 プロジェクト、チーム、オフィス、部門など、すべての業務用にチャンネルを作成することで、会話をすべて 1 か所に集めることができます。 '
    },
    {
        'no': 'Three',
        'question': 'Pixel は安全ですか？',
        'answer': 'はい。機密情報も Pixel 上で安全にやり取りすることができます。Pixel では、情報や会話、ファイルを安全に保つために複数の方法を用意しています。また Pixel は SOC 2、SOC 3、ISO/IEC 27001 といった複数のコンプライアンス認定に準拠しており、エンタープライズ級のセキュリティをあらゆる層で提供しています。'
    },
    {
        'no': 'Four',
        'question': 'Pixel はメールよりも安全ですか？',
        'answer': 'はい！データ侵害の要因の 90% を占めるのはスパムやフィッシングですが、メールとは違って Pixel ではその心配がほぼありません。そもそも Pixel のハンドル名を広告主に販売したり、メーリングリストに登録したりすることはできません。'
    },
    {
        'no': 'Five',
        'question': 'クレジットカードや請求書払いなど、どのような支払い方法が利用できますか？',
        'answer': 'クレジットカードはどのプランのお支払いにも使えます。支払い手続きを始めるにはヘルプセンターで詳細を確認するか、Pixel にお問い合わせください。'
    },
    {
        'no': 'Six',
        'question': 'チームの契約を解除したいです。キャンセル方法は？',
        'answer': 'オーナーはチームの契約レベルを変更することができます。有料プランから無料プランへのダウングレードにもでくきます。詳しくは Pixel 料金請求ガイド をご確認ください。'
    },
]

const accordionContainer = document.querySelector('.accordion');
for (let i = 0; i < faqs.length; i++) {
    accordionContainer.innerHTML += `<div class="accordion-item" data-aos="fade-up">
    <h2 class="accordion-header" id="heading${faqs[i].no}">
<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${faqs[i].no}"
aria-expanded="false" aria-controls="collapse${faqs[i].no}">
${faqs[i].question}
</button>
</h2>
<div id="collapse${faqs[i].no}" class="accordion-collapse collapse" aria-labelledby="heading${faqs[i].no}"
data-bs-parent="#accordionExample">
<div class="accordion-body">${faqs[i].answer}</div></div></div>`;
}

// footer get year
const date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear();