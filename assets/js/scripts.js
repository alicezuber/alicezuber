// Language configurations
const translations = {
    zh: {
        typedStrings2: [
                        "我是台灣人。我是程式開發者",
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
        updatesTitle: "近況",
        updates: {
            currentStatus: ["目前狀態", "正在積極尋找前端開發工作機會，同時持續學習新技術。"],
            learning: ["學習進度", "最近在研究 React 和 TypeScript，並製作個人作品集網站。"],
            futurePlan: ["未來計畫", "計劃接觸更多全端開發技術，並參與開源專案貢獻。"],
            teamBuilding: ["團隊招募", "正在組建開發團隊，目前需要一位美術夥伴加入。有興趣的朋友歡迎聯繫！"]
        },
        whatAmIDoingLatelyTitle: "最近在做什麼",
        whatAmIDoingLatelyDesc1: "我目前正在開發一個個人微服務平台，圍繞 ZITADEL-based SSO 進行身份和訪問管理。",
        whatAmIDoingLatelyDesc2: "該系統利用 Web Push（PWA 風格的通知）來交付實時 VPS 狀態和系統事件，直接到我的 iPhone，延遲最小。",
        whatAmIDoingLatelyDesc3: "同時，我正在整合一個 Discord 機器人與 Ollama 驅動的 LLM 代理，允許我通過自然語言對話查詢 VPS 狀態和基礎設施信息。",
        whatAmIDoingLatelyDesc4: "這個項目專注於基礎設施可觀測性、安全訪問控制和 AI 輔助系統交互。",
        aboutMeTitle: "關於我",
        aboutMeDesc1: "我來自 <a href=\"https://zh.wikipedia.org/zh-tw/%E8%87%BA%E7%81%A3\">台灣</a>，目前主修 <strong>資訊管理（Information Management）</strong>，專注於 <strong>Infrastructure / Backend / Security</strong> 相關領域。",
        aboutMeDesc2: "在技術之外，我長期參與 <strong>遊戲、MOD 與插件的在地化與翻譯工作</strong>，培養了良好的 <strong>跨語言溝通能力、細節敏感度，以及對使用者體驗的重視</strong>。",
        mottoTitle: "My Motto",
        mottoQuote: "任何足夠先進的技術都與魔法無異。",
        mottoCredit: "--- Arthur C. Clarke",
        technicalSkillsTitle: "技術技能",
        infraDevOpsTitle: "基礎設施與維運",
        infraContainerTitle: "容器化",
        infraContainerDesc: "Docker, Docker Compose (熟悉撰寫 Dockerfile 與 Multi-stage builds)",
        infraOrchTitle: "編排工具",
        infraOrchDesc: "Kubernetes (K8s), Helm Charts (具備 Homelab 架設與管理經驗)",
        infraOsTitle: "作業系統",
        infraOsDesc: "Linux (Ubuntu/CentOS), WSL2 開發環境調校, Shell Scripting",
        infraCicdTitle: "CI/CD",
        infraCicdDesc: "Git, GitHub Actions (基礎自動化流程)",
        backendSecurityTitle: "後端與資安",
        backendLangTitle: "程式語言",
        backendLangDesc: "Python (主力), Node.js, PHP",
        backendFrameworkTitle: "框架",
        backendFrameworkDesc: "FastAPI, Flask, Express.js",
        backendDbTitle: "資料庫與 ORM",
        backendDbDesc: "MySQL, Redis, SQLite, Prisma ORM",
        backendSecTitle: "安全協定",
        backendSecDesc: "OIDC (OpenID Connect), OAuth 2.0, SSO (Single Sign-On) 實作經驗",
        clientToolsTitle: "客戶端與工具",
        clientDesktopTitle: "桌面應用/遊戲",
        clientDesktopDesc: "Electron, Tauri, Godot 4 (GDScript)",
        clientToolsListTitle: "開發工具",
        clientToolsListDesc: "Postman, VS Code, Nginx (Reverse Proxy 設定)",
        selectedProjectsTitle: "專案經驗",
        project1Title: "區塊鏈與 LSTM 碳權交易平台 (畢業專題)",
        project1Tech: "技術棧: Node.js (Express), Prisma ORM, MySQL, Blockchain (Ganache), LSTM Model",
        project1Desc1: "系統架構設計: 設計分層架構 (Service Layer Pattern)，整合 API 層、資料庫 (MySQL/Prisma) 與區塊鏈合約 (Ganache)，確保交易資料的不可篡改性與一致性。",
        project1Desc2: "後端核心開發: 使用 Express.js 搭配 Prisma ORM 進行型別安全的資料庫操作，管理用戶、訂單、碳權庫存等完整生命週期。",
        project1Desc3: "交易安全機制: 整合 LSTM (長短期記憶模型) 進行訂單異常檢測，在搓合交易前識別異常值並自動觸發凍結機制，提升平台安全性。",
        project2Title: "自建 SSO 身份驗證系統",
        project2Tech: "技術棧: Python, OIDC, OAuth 2.0, Docker",
        project2Desc1: "為了深入理解資安協定，不依賴第三方服務 (如 Auth0)，從零實作符合 OpenID Connect 標準的中央驗證系統。",
        project2Desc2: "實作完整的 OAuth2 授權流程 (Authorization Code Flow)，包含 Access Token 與 Refresh Token 的簽發與驗證機制。",
        project2Desc3: "解決了跨服務 (Cross-service) 的身份單一登入問題，並將服務容器化部署。",
        project3Title: "居家實驗室基礎設施",
        project3Tech: "技術棧: Kubernetes (K8s), Linux, Docker Compose",
        project3Desc1: "建置並維護個人的微服務實驗室，實踐 Infrastructure as Code (IaC) 概念。",
        project3Desc2: "使用 K8s 管理多個服務節點，配置 Nginx Ingress 處理流量路由。",
        project3Desc3: "透過 Grafana/Prometheus (概念驗證階段) 監控系統資源，確保服務穩定性。",
        project4Title: "Minato Shigure Discord Bot (AI 整合專案)",
        project4Tech: "技術棧: Python, Discord.py, LLM Integration",
        project4Desc1: "開發具備社群管理功能的 Discord 機器人。",
        project4Desc2: "目前正在整合 Generative AI (LLM) 與 ComfyUI API，目標是讓機器人具備自動生成圖文內容的能力，優化社群互動體驗。",
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
        updatesTitle: "Recent Updates",
        updates: {
            currentStatus: ["Current Status", "Actively seeking frontend development opportunities while continuing to learn new technologies."],
            learning: ["Learning Progress", "Currently studying React and TypeScript, while building a personal portfolio website."],
            futurePlan: ["Future Plans", "Planning to explore more full-stack development technologies and contribute to open source projects."],
            teamBuilding: ["Team Recruitment", "Building a development team and currently looking for an artist to join. If interested, please get in touch!"]
        },
        whatAmIDoingLatelyTitle: "What am I Doing Lately",
        whatAmIDoingLatelyDesc1: "I am currently developing a personal microservice platform built around ZITADEL-based SSO for identity and access management.",
        whatAmIDoingLatelyDesc2: "The system leverages Web Push (PWA-style notifications) to deliver real-time VPS status and system events directly to my iPhone with minimal latency.",
        whatAmIDoingLatelyDesc3: "In parallel, I am integrating a Discord bot with an Ollama-powered LLM agent, allowing me to query VPS status and infrastructure information through natural language conversations.",
        whatAmIDoingLatelyDesc4: "This project focuses on infrastructure observability, secure access control, and AI-assisted system interaction.",
        aboutMeTitle: "About Me",
        aboutMeDesc1: "I am from <a href=\"https://en.wikipedia.org/wiki/Taiwan\">Taiwan</a>. I major in <strong>Information Management</strong>, with a strong focus on <strong>Infrastructure, backend systems, and security-oriented development</strong>.",
        aboutMeDesc2: "In addition to engineering, I actively contribute to <strong>game, mod, and plugin localization projects</strong>, which strengthens my communication skills and attention to detail.",
        mottoTitle: "My Motto",
        mottoQuote: "Any sufficiently advanced technology is indistinguishable from magic.",
        mottoCredit: "--- Arthur C. Clarke",
        technicalSkillsTitle: "Technical Skills",
        infraDevOpsTitle: "Infrastructure & DevOps",
        infraContainerTitle: "Containerization",
        infraContainerDesc: "Docker, Docker Compose (Dockerfile & Multi-stage builds)",
        infraOrchTitle: "Orchestration",
        infraOrchDesc: "Kubernetes (K8s), Helm Charts (Homelab experience)",
        infraOsTitle: "OS",
        infraOsDesc: "Linux (Ubuntu/CentOS), WSL2, Shell Scripting",
        infraCicdTitle: "CI/CD",
        infraCicdDesc: "Git, GitHub Actions",
        backendSecurityTitle: "Backend & Security",
        backendLangTitle: "Languages",
        backendLangDesc: "Python, Node.js, PHP",
        backendFrameworkTitle: "Frameworks",
        backendFrameworkDesc: "FastAPI, Flask, Express.js",
        backendDbTitle: "Database & ORM",
        backendDbDesc: "MySQL, Redis, SQLite, Prisma ORM",
        backendSecTitle: "Security Protocols",
        backendSecDesc: "OIDC, OAuth 2.0, SSO implementation",
        clientToolsTitle: "Client & Tools",
        clientDesktopTitle: "Desktop/Game",
        clientDesktopDesc: "Electron, Tauri, Godot 4 (GDScript)",
        clientToolsListTitle: "Tools",
        clientToolsListDesc: "Postman, VS Code, Nginx (Reverse Proxy)",
        selectedProjectsTitle: "Selected Projects",
        project1Title: "Blockchain & LSTM Carbon Trading Platform (Graduation Project)",
        project1Tech: "Tech Stack: Node.js (Express), Prisma ORM, MySQL, Blockchain (Ganache), LSTM Model",
        project1Desc1: "System Architecture Design: Designed layered architecture (Service Layer Pattern), integrating API layer, database (MySQL/Prisma), and blockchain contracts (Ganache).",
        project1Desc2: "Backend Core Development: Used Express.js with Prisma ORM for type-safe database operations, managing users, orders, and carbon credit inventory lifecycle.",
        project1Desc3: "Transaction Security: Integrated LSTM model for anomaly detection in orders, automatically triggering freeze mechanisms before matching transactions.",
        project2Title: "Custom SSO Identity Provider",
        project2Tech: "Tech Stack: Python, OIDC, OAuth 2.0, Docker",
        project2Desc1: "Built OpenID Connect-compliant authentication system from scratch without third-party services (like Auth0).",
        project2Desc2: "Implemented full OAuth2 Authorization Code Flow with Access Token and Refresh Token issuance and validation.",
        project2Desc3: "Solved cross-service single sign-on challenges and containerized deployment.",
        project3Title: "Homelab Infrastructure",
        project3Tech: "Tech Stack: Kubernetes (K8s), Linux, Docker Compose",
        project3Desc1: "Built and maintained personal microservices lab, practicing Infrastructure as Code (IaC) concepts.",
        project3Desc2: "Used K8s to manage multiple service nodes, configured Nginx Ingress for traffic routing.",
        project3Desc3: "Monitored system resources with Grafana/Prometheus (PoC stage) to ensure service stability.",
        project4Title: "Minato Shigure Discord Bot (AI Integration Project)",
        project4Tech: "Tech Stack: Python, Discord.py, LLM Integration",
        project4Desc1: "Developed Discord bot with community management features.",
        project4Desc2: "Currently integrating Generative AI (LLM) and ComfyUI API for automated content generation to enhance community interaction.",
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
            live2d: ["Live2D Cubism（学習中）", "モデリングに興味あり"]
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
        updatesTitle: "最近の状況",
        updates: {
            currentStatus: ["現在の状態", "フロントエンド開発の仕事を積極的に探しながら、新しい技術を学び続けています。"],
            learning: ["学習の進捗", "現在ReactとTypeScriptを勉強しながら、ポートフォリオサイトを作成中です。"],
            futurePlan: ["今後の計画", "フルスタック開発技術を学び、オープンソースプロジェクトに貢献する予定です。"],
            teamBuilding: ["チーム募集", "開発チームを結成中で、現在アーティストを募集しています。興味のある方はご連絡ください！"]
        },
        whatAmIDoingLatelyTitle: "最近何をしているか",
        whatAmIDoingLatelyDesc1: "現在、ZITADELベースのSSOを中心とした個人マイクロサービスプラットフォームを開発しています。",
        whatAmIDoingLatelyDesc2: "このシステムは、Web Push（PWAスタイルの通知）を活用して、リアルタイムのVPSステータスとシステムイベントを最小遅延で私のiPhoneに直接配信します。",
        whatAmIDoingLatelyDesc3: "並行して、DiscordボットとOllama駆動のLLMエージェントを統合し、自然言語会話を通じてVPSステータスとインフラ情報をクエリできるようにしています。",
        whatAmIDoingLatelyDesc4: "このプロジェクトは、インフラの可観測性、安全なアクセス制御、AI支援のシステムインタラクションに焦点を当てています。",
        aboutMeTitle: "私について",
        aboutMeDesc1: "私は <a href=\"https://ja.wikipedia.org/wiki/%E5%8F%B0%E6%B9%BE\">台湾</a> 出身です。 <strong>情報管理（Information Management）</strong> を専攻し、 <strong>インフラ・バックエンド・セキュリティ分野</strong> に注力しています。",
        aboutMeDesc2: "また、ゲーム・MOD・プラグインの翻訳・ローカライズにも携わっており、技術とユーザー体験の両立を大切にしています。",
        mottoTitle: "My Motto",
        mottoQuote: "十分に発達した科学技術は、魔法と見分けがつかない。",
        mottoCredit: "--- Arthur C. Clarke",
        technicalSkillsTitle: "技術スキル",
        infraDevOpsTitle: "インフラとDevOps",
        infraContainerTitle: "コンテナ化",
        infraContainerDesc: "Docker, Docker Compose (Dockerfile & Multi-stage builds)",
        infraOrchTitle: "オーケストレーション",
        infraOrchDesc: "Kubernetes (K8s), Helm Charts (Homelab経験あり)",
        infraOsTitle: "OS",
        infraOsDesc: "Linux (Ubuntu/CentOS), WSL2, Shell Scripting",
        infraCicdTitle: "CI/CD",
        infraCicdDesc: "Git, GitHub Actions",
        backendSecurityTitle: "バックエンドとセキュリティ",
        backendLangTitle: "プログラミング言語",
        backendLangDesc: "Python, Node.js, PHP",
        backendFrameworkTitle: "フレームワーク",
        backendFrameworkDesc: "FastAPI, Flask, Express.js",
        backendDbTitle: "データベースとORM",
        backendDbDesc: "MySQL, Redis, SQLite, Prisma ORM",
        backendSecTitle: "セキュリティプロトコル",
        backendSecDesc: "OIDC, OAuth 2.0, SSO実装経験",
        clientToolsTitle: "クライアントとツール",
        clientDesktopTitle: "デスクトップ/ゲーム",
        clientDesktopDesc: "Electron, Tauri, Godot 4 (GDScript)",
        clientToolsListTitle: "ツール",
        clientToolsListDesc: "Postman, VS Code, Nginx (Reverse Proxy)",
        selectedProjectsTitle: "主なプロジェクト",
        project1Title: "ブロックチェーン&LSTM炭素取引プラットフォーム（卒業研究）",
        project1Tech: "技術スタック: Node.js (Express), Prisma ORM, MySQL, Blockchain (Ganache), LSTM Model",
        project1Desc1: "システムアーキテクチャ設計：階層アーキテクチャ（Service Layer Pattern）を設計し、APIレイヤー、データベース（MySQL/Prisma）、ブロックチェーン契約（Ganache）を統合。",
        project1Desc2: "バックエンドコア開発：Express.jsとPrisma ORMを使用し、型安全なデータベース操作を実現し、ユーザー、注文、炭素クレジット在庫のライフサイクルを管理。",
        project1Desc3: "取引セキュリティ：LSTMモデルを統合し、注文の異常検出を行い、取引マッチング前に異常値を識別し、自動的に凍結メカニズムをトリガー。",
        project2Title: "カスタムSSO認証システム",
        project2Tech: "技術スタック: Python, OIDC, OAuth 2.0, Docker",
        project2Desc1: "サードパーティサービス（Auth0など）に依存せず、OpenID Connect標準に準拠した認証システムをゼロから構築。",
        project2Desc2: "完全なOAuth2認可コードフローを実装し、アクセストークンとリフレッシュトークンの発行と検証メカニズムを含む。",
        project2Desc3: "クロスサービスのシングルサインオン課題を解決し、コンテナ化されたデプロイメントを実現。",
        project3Title: "ホームラボインフラストラクチャ",
        project3Tech: "技術スタック: Kubernetes (K8s), Linux, Docker Compose",
        project3Desc1: "個人のマイクロサービスラボを構築・維持し、Infrastructure as Code（IaC）の概念を実践。",
        project3Desc2: "K8sを使用して複数のサービスノードを管理し、Nginx Ingressでトラフィックルーティングを設定。",
        project3Desc3: "Grafana/Prometheus（PoC段階）でシステムリソースを監視し、サービスの安定性を確保。",
        project4Title: "Minato Shigure Discord Bot（AI統合プロジェクト）",
        project4Tech: "技術スタック: Python, Discord.py, LLM Integration",
        project4Desc1: "コミュニティ管理機能を備えたDiscordボットを開発。",
        project4Desc2: "現在、Generative AI（LLM）とComfyUI APIを統合し、自動コンテンツ生成機能を実現してコミュニティインタラクションを最適化中。",
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
    
    // Update updates section
    document.querySelector('[data-i18n-updates="title"]').textContent = translations[lang].updatesTitle;
    document.querySelectorAll('[data-i18n-updates="currentStatus"]').forEach((element, index) => {
        element.textContent = translations[lang].updates.currentStatus[index];
    });
    document.querySelectorAll('[data-i18n-updates="learning"]').forEach((element, index) => {
        element.textContent = translations[lang].updates.learning[index];
    });
    document.querySelectorAll('[data-i18n-updates="futurePlan"]').forEach((element, index) => {
        element.textContent = translations[lang].updates.futurePlan[index];
    });
    document.querySelectorAll('[data-i18n-updates="teamBuilding"]').forEach((element, index) => {
        element.textContent = translations[lang].updates.teamBuilding[index];
    });
    
    // Update what am I doing lately section
    document.querySelector('[data-i18n="whatAmIDoingLatelyTitle"]').textContent = translations[lang].whatAmIDoingLatelyTitle;
    document.querySelector('[data-i18n="whatAmIDoingLatelyDesc1"]').textContent = translations[lang].whatAmIDoingLatelyDesc1;
    document.querySelector('[data-i18n="whatAmIDoingLatelyDesc2"]').textContent = translations[lang].whatAmIDoingLatelyDesc2;
    document.querySelector('[data-i18n="whatAmIDoingLatelyDesc3"]').textContent = translations[lang].whatAmIDoingLatelyDesc3;
    document.querySelector('[data-i18n="whatAmIDoingLatelyDesc4"]').textContent = translations[lang].whatAmIDoingLatelyDesc4;
    
    // Update about me section
    document.querySelector('[data-i18n="aboutMeTitle"]').textContent = translations[lang].aboutMeTitle;
    document.querySelector('[data-i18n="aboutMeDesc1"]').innerHTML = translations[lang].aboutMeDesc1;
    document.querySelector('[data-i18n="aboutMeDesc2"]').innerHTML = translations[lang].aboutMeDesc2;
    
    // Update motto section
    document.querySelector('[data-i18n="mottoTitle"]').textContent = translations[lang].mottoTitle;
    document.querySelector('[data-i18n="mottoQuote"]').textContent = translations[lang].mottoQuote;
    document.querySelector('[data-i18n="mottoCredit"]').textContent = translations[lang].mottoCredit;
    
    // Update technical skills section
    if (document.querySelector('[data-i18n="technicalSkillsTitle"]')) {
        document.querySelector('[data-i18n="technicalSkillsTitle"]').textContent = translations[lang].technicalSkillsTitle;
        document.querySelector('[data-i18n="infraDevOpsTitle"]').textContent = translations[lang].infraDevOpsTitle;
        document.querySelector('[data-i18n="infraContainerTitle"]').textContent = translations[lang].infraContainerTitle;
        document.querySelector('[data-i18n="infraContainerDesc"]').textContent = translations[lang].infraContainerDesc;
        document.querySelector('[data-i18n="infraOrchTitle"]').textContent = translations[lang].infraOrchTitle;
        document.querySelector('[data-i18n="infraOrchDesc"]').textContent = translations[lang].infraOrchDesc;
        document.querySelector('[data-i18n="infraOsTitle"]').textContent = translations[lang].infraOsTitle;
        document.querySelector('[data-i18n="infraOsDesc"]').textContent = translations[lang].infraOsDesc;
        document.querySelector('[data-i18n="infraCicdTitle"]').textContent = translations[lang].infraCicdTitle;
        document.querySelector('[data-i18n="infraCicdDesc"]').textContent = translations[lang].infraCicdDesc;
        document.querySelector('[data-i18n="backendSecurityTitle"]').textContent = translations[lang].backendSecurityTitle;
        document.querySelector('[data-i18n="backendLangTitle"]').textContent = translations[lang].backendLangTitle;
        document.querySelector('[data-i18n="backendLangDesc"]').textContent = translations[lang].backendLangDesc;
        document.querySelector('[data-i18n="backendFrameworkTitle"]').textContent = translations[lang].backendFrameworkTitle;
        document.querySelector('[data-i18n="backendFrameworkDesc"]').textContent = translations[lang].backendFrameworkDesc;
        document.querySelector('[data-i18n="backendDbTitle"]').textContent = translations[lang].backendDbTitle;
        document.querySelector('[data-i18n="backendDbDesc"]').textContent = translations[lang].backendDbDesc;
        document.querySelector('[data-i18n="backendSecTitle"]').textContent = translations[lang].backendSecTitle;
        document.querySelector('[data-i18n="backendSecDesc"]').textContent = translations[lang].backendSecDesc;
        document.querySelector('[data-i18n="clientToolsTitle"]').textContent = translations[lang].clientToolsTitle;
        document.querySelector('[data-i18n="clientDesktopTitle"]').textContent = translations[lang].clientDesktopTitle;
        document.querySelector('[data-i18n="clientDesktopDesc"]').textContent = translations[lang].clientDesktopDesc;
        document.querySelector('[data-i18n="clientToolsListTitle"]').textContent = translations[lang].clientToolsListTitle;
        document.querySelector('[data-i18n="clientToolsListDesc"]').textContent = translations[lang].clientToolsListDesc;
    }
    
    // Update selected projects section
    if (document.querySelector('[data-i18n="selectedProjectsTitle"]')) {
        document.querySelector('[data-i18n="selectedProjectsTitle"]').textContent = translations[lang].selectedProjectsTitle;
        document.querySelector('[data-i18n="project1Title"]').textContent = translations[lang].project1Title;
        document.querySelector('[data-i18n="project1Tech"]').textContent = translations[lang].project1Tech;
        document.querySelector('[data-i18n="project1Desc1"]').textContent = translations[lang].project1Desc1;
        document.querySelector('[data-i18n="project1Desc2"]').textContent = translations[lang].project1Desc2;
        document.querySelector('[data-i18n="project1Desc3"]').textContent = translations[lang].project1Desc3;
        document.querySelector('[data-i18n="project2Title"]').textContent = translations[lang].project2Title;
        document.querySelector('[data-i18n="project2Tech"]').textContent = translations[lang].project2Tech;
        document.querySelector('[data-i18n="project2Desc1"]').textContent = translations[lang].project2Desc1;
        document.querySelector('[data-i18n="project2Desc2"]').textContent = translations[lang].project2Desc2;
        document.querySelector('[data-i18n="project2Desc3"]').textContent = translations[lang].project2Desc3;
        document.querySelector('[data-i18n="project3Title"]').textContent = translations[lang].project3Title;
        document.querySelector('[data-i18n="project3Tech"]').textContent = translations[lang].project3Tech;
        document.querySelector('[data-i18n="project3Desc1"]').textContent = translations[lang].project3Desc1;
        document.querySelector('[data-i18n="project3Desc2"]').textContent = translations[lang].project3Desc2;
        document.querySelector('[data-i18n="project3Desc3"]').textContent = translations[lang].project3Desc3;
        document.querySelector('[data-i18n="project4Title"]').textContent = translations[lang].project4Title;
        document.querySelector('[data-i18n="project4Tech"]').textContent = translations[lang].project4Tech;
        document.querySelector('[data-i18n="project4Desc1"]').textContent = translations[lang].project4Desc1;
        document.querySelector('[data-i18n="project4Desc2"]').textContent = translations[lang].project4Desc2;
    }
    
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
const generateCodeCards = () => {
    const container = document.querySelector('.code-examples-section');
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
  