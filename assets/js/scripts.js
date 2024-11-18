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
        code: '#include <iostream>\n\nint main() {\n    std::cout << "Hello World" << std::endl;\n    return 0;\n}'
    },
    {
        language: 'C',
        code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World\n");\n    return 0;\n}'
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
            if (emptyState) emptyState.style.display = 'none';

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
  