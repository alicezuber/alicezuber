// Language configurations
const translations = {
    zh: {
        about: `我來自台灣。我是`,
        typedStrings: ["你好!", "歡迎來到我的個人網站", "我是 Minato Baiyun"],
        typedStrings2: ["我來自台灣。我是程式開發者 ", "我來自台灣。我是行銷企劃", "我來自台灣。我是遊戲翻譯者","我來自台灣。我是同人文作者"],
        disclaimer: "此個人資料中展示的遊戲圖片屬於其各自版權持有者。這些圖片僅用於個人非商業用途，以展示我的興趣和愛好。如果對這些圖片的使用有任何疑慮，請隨時與我聯繫，我會盡快處理相關問題。",
        title1:"作品集",
        title2:"My Motto",
        vikala:"--- 畢卡拉(十二神将)",
        // Add more translations as needed
    },
    en: {
        about: "I am a student of Information Management from Taiwan.",
        typedStrings: ["Hello!", "Welcome to my personal website", "I'm Minato Baiyun"],
        typedStrings2: ["I am from Taiwan. I am a program developer", "I am from Taiwan. I am a marketing planner", "I am from Taiwan. I am a game translator", "I am from Taiwan. I am a fanfiction author"] ,
        disclaimer: "The images used in this profile to showcase the games I play are the property of their respective copyright holders. These images are used solely for personal, non-commercial purposes to demonstrate my hobbies and interests. If there are any concerns regarding the use of these images, please feel free to contact me, and I will address the issue promptly.",
        title1:"Portfolio",
        title2:"My Motto",
        vikala:"--- Vikala(十二神将)",
        // Add more translations as needed
    },
    ja: {
        about: "情報管理を専攻している台湾出身の学生です。",
        typedStrings: ["こんにちは!", "私の個人サイトへようこそ", "Minato Baiyunです"],
        typedStrings2: ["私は台湾出身です。私はプログラム開発者です。", "私は台湾出身です。私はマーケティングプランナーです。", "私は台湾出身です。私はゲーム翻訳者です。", "私は台湾出身です。私はファンフィクション作家"],
        disclaimer: "このプロフィールで使用されているゲーム画像は、それぞれの著作権者に帰属します。これらの画像は、私の趣味や興味を示すために、個人的かつ非商業的な目的でのみ使用されています。画像の使用に関して問題がある場合は、お気軽にご連絡ください。速やかに対応いたします。",
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
        code: 'print("Hello, World!")\n\n\n\n\n'
    },
    {
        language: 'JavaScript',
        code: 'console.log("Hello, World!");\n\n\n\n\n'
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
    }
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
const generateCodeCards = () => {
    const container = document.querySelector('.grid');
    codeExamples.forEach(example => {
        const card = document.createElement('div');
        card.className = 'code-card';
        card.innerHTML = `
            <h3 class="text-xl font-bold mb-2 gradient-text1">${example.language}</h3>
            <pre><code class="language-${example.language.toLowerCase()}">${example.code}</code></pre>
        `;
        container.appendChild(card);
    });
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