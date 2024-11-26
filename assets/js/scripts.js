// Language configurations
const translations = {
    zh: {
        typedStrings2: [
                        "我是台灣人。我是程式開發者 ",
                        "我是台灣人。我做過行銷企劃",
                        "我是台灣人。我做過遊戲翻譯者",
                        "我是台灣人。我也是同人文作者",
                        "我是台灣人。我還是Cygames的遊戲愛好者"
                        ],
        about: `我是台灣人。我是`,
        typedStrings: ["你好!", "歡迎來到我的個人網站", "我是 Minato Baiyun"],
        disclaimer: "此個人資料中展示的遊戲圖片屬於其各自版權持有者。這些圖片僅用於個人非商業用途，以展示我的興趣和愛好。如果對這些圖片的使用有任何疑慮，請隨時與我聯繫，我會盡快處理相關問題。",
        moreabout: "了解更多",
        title1:"作品集",
        title2:"My Motto",
        vikala:"--- 畢卡拉(十二神将)",
        skillsTitle: "語言能力與創作",
        programmingTitle: "程式語言與工具",
        designTitle: "設計與視覺工具",
        skills: {
            japanese: ["日文", "聽讀略懂，寫作與口語無法"],
            english: ["英文", "聽讀可以，寫作與口語略懂"],
            chinese: ["中文", "聽讀、寫作與口語皆精通"],
            doujin: ["同人文創作", "目前沒有公開"],
            general: ["一般創作", "都是寫給朋友的，有規劃寫公開的"],
            gameTranslation: ["遊戲翻譯與模組開發", "比較常翻譯麥塊"],
            marketing: ["行銷與文案撰寫", "略懂"]
        },
        programming: {
            c: ["C", "基礎，但不常寫"],
            cpp: ["C++", "基礎，但不常寫"],
            csharp: ["C#  (學習中)", "為了unity學習"],
            htmlcss: ["HTML / CSS", "本頁面，就算作品吧?"],
            php: ["PHP", "建立過後台管理系統"],
            python: ["Python", "多項程式皆使用此撰寫"],
            javascript: ["JavaScript", "本頁面，就算作品吧?"],
            vscode: ["Visual Studio Code", "一般習慣使用vscode來寫程式"]
        },
        design: {
            aftereffects: ["Adobe After Effects", "曾經做過一隻幹片(作業)是我和同學拿光劍(雨傘)互打"],
            photoshop: ["Adobe Photoshop", "某次參加活動，學會使用基礎，進階程度不高"],
            premiere: ["Adobe Premiere", "為了Ae學習的，不是很熟練"],
            davinci: ["DaVinci Resolve", "因為有免費版，當初就有認真學過"],
            audacity: ["Audacity", "偶爾修修朋友的音檔"],
            live2d: ["Live2D Cubism（學習中）", "也想建模"]
        },
        portfolio: {
            project1: {
                title: "測試中1",
                description: "細節放置",
                tech: ["使用語言", "使用語言", "使用語言"]
            },
            project2: {
                title: "測試中2",
                description: "細節放置",
                tech: ["使用語言", "使用語言", "使用語言"]
            },
            project3: {
                title: "測試中3",
                description: "細節放置",
                tech: ["使用語言", "使用語言", "使用語言"]
            },
            project4: {
                title: "測試中4",
                description: "細節放置",
                tech: ["使用語言", "使用語言", "使用語言"]
            }
        },
        // Add more translations as needed
    },
    en: {
        typedStrings2: [
                        "I am from Taiwan. I am a software developer.",
                        "I am from Taiwan. I have worked as a marketing planner.",
                        "I am from Taiwan. I have worked as a game translator.",
                        "I am from Taiwan. I am also a doujin writer.",
                        "I am from Taiwan. I am also a Cygames game enthusiast."
                        ],
        about: "I am a student of Information Management from Taiwan.",
        typedStrings: ["Hello!", "Welcome to my personal website", "I'm Minato Baiyun"],
        disclaimer: "The images used in this profile to showcase the games I play are the property of their respective copyright holders. These images are used solely for personal, non-commercial purposes to demonstrate my hobbies and interests. If there are any concerns regarding the use of these images, please feel free to contact me, and I will address the issue promptly.",
        moreabout: "About me",
        title1:"Portfolio",
        title2:"My Motto",
        vikala:"--- Vikala(十二神将)",
        skillsTitle: "Language Skills & Creative Works",
        programmingTitle: "Programming Languages & Tools",
        designTitle: "Design & Visual Tools",
        skills: {
            japanese: ["Japanese", "Can read and listen, limited writing and speaking"],
            english: ["English", "Good at reading and listening, basic writing and speaking"],
            chinese: ["Chinese", "Native proficiency in all aspects"],
            doujin: ["Doujin Writing", "Currently not public"],
            general: ["General Writing", "Written for friends, planning public works"],
            gameTranslation: ["Game Translation & Mod Dev", "Mainly Minecraft translations"],
            marketing: ["Marketing & Copywriting", "Basic knowledge"]
        },
        programming: {
            c: ["C", "Basic knowledge, rarely used"],
            cpp: ["C++", "Basic knowledge, rarely used"],
            csharp: ["C# (Learning)", "Learning for Unity"],
            htmlcss: ["HTML / CSS", "This website is one of my works"],
            php: ["PHP", "Built backend management systems"],
            python: ["Python", "Used in multiple projects"],
            javascript: ["JavaScript", "This website is one of my works"],
            vscode: ["Visual Studio Code", "My preferred IDE for coding"]
        },
        design: {
            aftereffects: ["Adobe After Effects", "Made a lightsaber (umbrella) fight video with classmates"],
            photoshop: ["Adobe Photoshop", "Learned basics from an event, intermediate level"],
            premiere: ["Adobe Premiere", "Learned for AE, not very proficient"],
            davinci: ["DaVinci Resolve", "Studied seriously due to free version"],
            audacity: ["Audacity", "Occasionally edit friends' audio files"],
            live2d: ["Live2D Cubism (Learning)", "Interested in modeling"]
        },
        portfolio: {
            project1: {
                title: "Project 1",
                description: "Details to be added",
                tech: ["Language", "Language", "Language"]
            },
            project2: {
                title: "Project 2",
                description: "Details to be added",
                tech: ["Language", "Language", "Language"]
            },
            project3: {
                title: "Project 3",
                description: "Details to be added",
                tech: ["Language", "Language", "Language"]
            },
            project4: {
                title: "Project 4",
                description: "Details to be added",
                tech: ["Language", "Language", "Language"]
            }
        },
        // Add more translations as needed
    },
    ja: {
        typedStrings2: [
                        "私は台湾人です。私はプログラム開発者です。",
                        "私は台湾人です。私はマーケティングプランナーとして働いていました。",
                        "私は台湾人です。私はゲーム翻訳者として働いていました。",
                        "私は台湾人です。私は同人作家でもあります。",
                        "私は台湾人です。私はCygamesのゲーム愛好者でもあります。"
                        ],
        about: "情報管理を専攻している台湾出身の学生です。",
        typedStrings: ["こんにちは!", "私の個人サイトへようこそ", "Minato Baiyunです"],
        disclaimer: "このプロフィールで使用されているゲーム画像は、それぞれの著作権者に帰属します。これらの画像は、私の趣味や興味を示すために、個人的かつ非商業的な目的でのみ使用されています。画像の使用に関して問題がある場合は、お気軽にご連絡ください。速やかに対応いたします。",
        moreabout: "もっと詳しく知る",
        title1:"さくひんしゅう",
        title2:"My Motto",
        vikala:"--- ビカラ(十二神将)",
        skillsTitle: "言語能力と創作活動",
        programmingTitle: "プログラミング言語とツール",
        designTitle: "デザインとビジュアルツール",
        skills: {
            japanese: ["日本語", "読み書きは少し、会話は限定的"],
            english: ["英語", "読み書きは可能、会話は基本的"],
            chinese: ["中国語", "ネイティブレベル"],
            doujin: ["同人創作", "現在非公開"],
            general: ["一般創作", "友人向けの作品、公開作品を計画中"],
            gameTranslation: ["ゲーム翻訳とMod開発", "主にマインクラフトの翻訳"],
            marketing: ["マーケティングとコピーライティング", "基礎知識あり"]
        },
        programming: {
            c: ["C", "基礎知識あり、あまり使用しない"],
            cpp: ["C++", "基礎知識あり、あまり使用しない"],
            csharp: ["C# (学習中)", "Unity用に学習中"],
            htmlcss: ["HTML / CSS", "このウェブサイトが作品です"],
            php: ["PHP", "バックエンド管理システムの開発経験あり"],
            python: ["Python", "複数のプロジェクトで使用"],
            javascript: ["JavaScript", "このウェブサイトが作品です"],
            vscode: ["Visual Studio Code", "普段使用しているIDE"]
        },
        design: {
            aftereffects: ["Adobe After Effects", "クラスメートとライトセーバー(傘)バトルの動画を作成"],
            photoshop: ["Adobe Photoshop", "イベントで基礎を学習、中級レベル"],
            premiere: ["Adobe Premiere", "AE用に学習、まだ習熟度は低い"],
            davinci: ["DaVinci Resolve", "無料版があるため、真剣に学習"],
            audacity: ["Audacity", "友人の音声ファイルを時々編集"],
            live2d: ["Live2D Cubism (学習中)", "モデリングに興味あり"]
        },
        portfolio: {
            project1: {
                title: "プロジェクト1",
                description: "詳細準備中",
                tech: ["使用言語", "使用言語", "使用言語"]
            },
            project2: {
                title: "プロジェクト2",
                description: "詳細準備中",
                tech: ["使用言語", "使用言語", "使用言語"]
            },
            project3: {
                title: "プロジェクト3",
                description: "詳細準備中",
                tech: ["使用言語", "使用言語", "使用言語"]
            },
            project4: {
                title: "プロジェクト4",
                description: "詳細準備中",
                tech: ["使用言語", "使用言語", "使用言語"]
            }
        },
        // Add more translations as needed
    }
};

// Code examples for different languages
const codeExamples = [
    {
        language: 'Python',
        code: 'print("Hello, World!")'
    },
    {
        language: 'JavaScript',
        code: 'console.log("Hello, World!");'
    },
    {
        language: 'Java',
        code: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}'
    },
    {
        language: 'C#',
        code: 'using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello World");\n    }'
    },
    {
        language: 'C++',
        code: '#include &lt;iostream&gt;\n\nint main() {\n    std::cout << "Hello World" << std::endl;\n    return 0;\n}'
    },
    {
        language: 'C',
        code: '#include &lt;stdio.h&gt;\n\nint main() {\n    printf("Hello World\n");\n    return 0;\n}'
    },
    // {
    //     language: 'Python',
    //     code: 'print("Hello, World!")'
    // },
    // {
    //     language: 'JavaScript',
    //     code: 'console.log("Hello, World!");'
    // },
    // {
    //     language: 'Java',
    //     code: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}'
    // },
    // {
    //     language: 'C#',
    //     code: 'using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello World");\n    }'
    // },
    // {
    //     language: 'C++',
    //     code: '#include <iostream>\n\nint main() {\n    std::cout << "Hello World" << std::endl;\n    return 0;\n}'
    // },
    // {
    //     language: 'C',
    //     code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World\n");\n    return 0;\n}'
    // }
];

// 主題切換功能
const initTheme = () => {
    const themeToggleBtn = document.getElementById('themeToggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // 基於用戶喜好或LocalStorage設置初始主題
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDark)) {
        document.documentElement.classList.add('dark');
    }

    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // 根據當前主題更新按鈕文本
        const moonIcon = themeToggleBtn.querySelector('.fa-moon');
        const sunIcon = themeToggleBtn.querySelector('.fa-sun');
        moonIcon.classList.toggle('hidden');
        sunIcon.classList.toggle('hidden');
    });
};

// Language switch functionality
const initLanguage = () => {
    const languageSelect = document.getElementById('languageSelect');
    
    const userLanguage = navigator.language || navigator.userLanguage; // 獲取用戶語言
    const langCode = userLanguage.split('-')[0]; // 取出語言代碼，例如 "zh" 或 "ja"
    
    // 判斷使用者語言
    if (langCode === 'zh') {
        currentLang = localStorage.getItem('language') || 'zh'; // 中文
    } else if (langCode === 'ja') {
        currentLang = localStorage.getItem('language') || 'ja'; // 日文
    } else {
        currentLang = localStorage.getItem('language') || 'en'; // 其他語言
    }
    
    languageSelect.value = currentLang;
    updateContent(currentLang);

    languageSelect.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        localStorage.setItem('language', selectedLang);
        updateContent(selectedLang);
        
        // Restart typing animation with new language
        initTyped(selectedLang);
    });
};

// Update content based on selected language
const updateContent = (lang) => {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update skills section
    document.querySelector('[data-i18n="skillsTitle"]').textContent = translations[lang].skillsTitle;
    document.querySelector('[data-i18n="programmingTitle"]').textContent = translations[lang].programmingTitle;
    document.querySelector('[data-i18n="designTitle"]').textContent = translations[lang].designTitle;
    
    // Update all skill cards
    document.querySelectorAll('[data-i18n-skill]').forEach(element => {
        const skillKey = element.getAttribute('data-i18n-skill');
        element.textContent = translations[lang].skills[skillKey][0];
    });
    
    document.querySelectorAll('[data-i18n-skill-desc]').forEach(element => {
        const skillKey = element.getAttribute('data-i18n-skill-desc');
        element.textContent = translations[lang].skills[skillKey][1];
    });

    document.querySelectorAll('[data-i18n-programming]').forEach(element => {
        const programmingKey = element.getAttribute('data-i18n-programming');
        element.textContent = translations[lang].programming[programmingKey][0];
    });

    document.querySelectorAll('[data-i18n-programming-desc]').forEach(element => {
        const programmingKey = element.getAttribute('data-i18n-programming-desc');
        element.textContent = translations[lang].programming[programmingKey][1];
    });

    document.querySelectorAll('[data-i18n-design]').forEach(element => {
        const designKey = element.getAttribute('data-i18n-design');
        element.textContent = translations[lang].design[designKey][0];
    });

    document.querySelectorAll('[data-i18n-design-desc]').forEach(element => {
        const designKey = element.getAttribute('data-i18n-design-desc');
        element.textContent = translations[lang].design[designKey][1];
    });

    // Update portfolio content
    document.querySelectorAll('.swiper-slide').forEach(slide => {
        const projectKey = slide.getAttribute('data-project');
        const project = translations[lang].portfolio[projectKey];
        if (project) {
            slide.querySelector('[data-i18n-portfolio="title"]').textContent = project.title;
            slide.querySelector('[data-i18n-portfolio="description"]').textContent = project.description;
            slide.querySelectorAll('.tech-tag').forEach((tag, i) => tag.textContent = project.tech[i]);
        }
    });
};

// Initialize Typed.js
const initTyped = (lang) => {
    const typedOutput1 = document.getElementById('typed-output');
    const typedOutput2 = document.getElementById('typed-output2');

    // 清除第一個實例
    if (typedOutput1._typed) {
        typedOutput1._typed.destroy();
    }

    // 初始化第一個實例
    typedOutput1._typed = new Typed('#typed-output', {
        strings: translations[lang].typedStrings,
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 2000,
    });
    
    // 清除第二個實例
    if (typedOutput2._typed) {
        typedOutput2._typed.destroy();
    }

    // 初始化第二個實例
    typedOutput2._typed = new Typed('#typed-output2', {
        strings: translations[lang].typedStrings2, // 假設你有第二組翻譯字符串
        typeSpeed: 70,  // 可以自定義速度
        backSpeed: 40,
        loop: true,
        backDelay: 2500,
    });
};



// Initialize Swiper
const initSwiper = () => {
    new Swiper('.project-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
};

// Generate code example cards
// Generate code example cards
const generateCodeCards = () => {
    // 獲取或創建容器
    const container = document.querySelector('.grid');
    container.className = 'code-section';

    // 創建卡片網格容器
    const gridContainer = document.createElement('div');
    gridContainer.className = 'code-grid';
    
    // 創建預覽容器
    const previewContainer = document.createElement('div');
    previewContainer.className = 'code-preview-container';
    previewContainer.innerHTML = `
        <div class="preview-empty-state">
            <h1 class="text-9xl font-boldtext-center gradient-text">Hello, World! &nbsp</h1>

        </div>
    `;

    // 添加卡片
    codeExamples.forEach(example => {
        // 創建卡片
        const card = document.createElement('div');
        card.className = 'code-card';
        card.innerHTML = `
            <h3 class="text-xl font-bold gradient-text1">${example.language}</h3>
            <div class="text-center mt-2">
                <i class="fas fa-code text-2xl"></i>
            </div>
        `;

        // 創建對應的預覽內容
        const previewContent = document.createElement('div');
        previewContent.className = 'code-preview-content';
        previewContent.id = `preview-${example.language.toLowerCase()}`;
        previewContent.innerHTML = `
            <pre><code class="language-${example.language.toLowerCase()}">${example.code}</code></pre>
        `;
        previewContainer.appendChild(previewContent);

        // 添加hover事件
        card.addEventListener('mouseenter', () => {
            // 隱藏空白狀態
            const emptyState = previewContainer.querySelector('.preview-empty-state');
            if (emptyState) emptyState.style.display = 'none'

            // 移除其他卡片的active狀態
            document.querySelectorAll('.code-card').forEach(c => c.classList.remove('active'));
            // 添加當前卡片的active狀態
            card.classList.add('active');

            // 隱藏所有預覽內容
            document.querySelectorAll('.code-preview-content').forEach(content => {
                content.classList.remove('active');
            });

            // 顯示對應的預覽內容
            const preview = document.getElementById(`preview-${example.language.toLowerCase()}`);
            preview.classList.add('active');
        });

        // 將卡片添加到網格容器
        gridContainer.appendChild(card);
    });

    // 處理鼠標離開整個網格區域的情況
    gridContainer.addEventListener('mouseleave', () => {
        // 移除所有卡片的active狀態
        document.querySelectorAll('.code-card').classList.remove('active');
        
        // 隱藏所有預覽內容
        document.querySelectorAll('.code-preview-content').forEach(content => {
            content.classList.remove('active');
        });

        // 顯示空白狀態
        const emptyState = previewContainer.querySelector('.preview-empty-state');
        if (emptyState) emptyState.style.display = 'block';
    });

    // 將網格容器和預覽容器添加到主容器
    container.appendChild(gridContainer);
    container.appendChild(previewContainer);

    // 初始化代碼高亮（如果使用 Prism.js 或類似庫）
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
};








// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initTyped(localStorage.getItem('language') || 'zh');
    initSwiper();
    generateCodeCards();

    // Add scroll animation
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate__animated');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('animate__fadeIn');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('.tab-trigger');
    const contents = document.querySelectorAll('.tab-content');
  
    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        // 移除所有的 active 樣式
        triggers.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
  
        // 啟用當前的 tab
        trigger.classList.add('active');
        document.getElementById(trigger.dataset.tab).classList.add('active');
      });
    });
  });
  