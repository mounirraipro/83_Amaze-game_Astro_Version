export type ContentSection = {
  heading: string;
  body?: string;
  items?: string[];
};

export type ContentPage = {
  title: string;
  description: string;
  seoTitle?: string;
  keywords?: string[];
  schemaType?: "AboutPage" | "Article" | "Blog" | "ContactPage" | "FAQPage" | "HowTo" | "PrivacyPolicy" | "TermsOfService" | "WebPage";
  eyebrow?: string;
  updated?: string;
  intro: string;
  sections: ContentSection[];
};

export const pageContent = {
  "about": {
    "title": "About Amaze Game",
    "seoTitle": "About Amaze Game - Free Online Maze Fill Puzzle",
    "description": "Learn about Amaze Game, the free browser puzzle where players slide through maze grids and fill every tile.",
    "keywords": [
      "about Amaze Game",
      "Amaze Game online",
      "free maze puzzle"
    ],
    "schemaType": "AboutPage",
    "intro": "A clean no-download puzzle site built around route planning, tile filling, and quick browser play.",
    "sections": [
      {
        "heading": "Our Focus",
        "body": "Amaze Game is built for players who enjoy simple rules with real depth. Slide through the maze, color every tile, and use each restart to understand the route better."
      },
      {
        "heading": "Why Amaze Game",
        "body": "The site uses the split name Amaze Game across titles, headings, metadata, and guides so search engines and players can clearly understand the topic beyond the domain name."
      },
      {
        "heading": "Key Features",
        "items": [
          "Instant browser play with no download or account.",
          "A maze-fill puzzle goal that is easy to learn and satisfying to master.",
          "Strategy guides for route planning, dead ends, and harder levels.",
          "Related logic games selected for players who enjoy path and grid puzzles."
        ]
      }
    ]
  },
  "accessibility": {
    "title": "Accessibility Statement",
    "seoTitle": "Accessibility Statement | Amaze Game",
    "description": "Read the Amaze Game accessibility statement and our efforts to keep the puzzle site usable across devices.",
    "keywords": [
      "Amaze Game accessibility",
      "accessible maze game",
      "browser game accessibility"
    ],
    "updated": "June 22, 2026",
    "intro": "Our goal is a clear, readable, keyboard-friendly website around the embedded Amaze Game experience.",
    "sections": [
      {
        "heading": "Website Accessibility",
        "items": [
          "Semantic HTML for navigation, headings, and article structure.",
          "Responsive layouts that support desktop, tablet, and mobile screens.",
          "Readable contrast using a blue-first palette with restrained accent colors.",
          "Descriptive links and metadata for important pages."
        ]
      },
      {
        "heading": "Game Accessibility",
        "body": "The embedded game may depend on third-party controls. We keep supporting content, rules, and strategy guidance accessible so players can understand the game before opening the iframe."
      },
      {
        "heading": "Feedback",
        "body": "If you find an accessibility issue, contact contact@amaze-game.com with the page URL, device, browser, and a short description of the problem."
      }
    ]
  },
  "blog": {
    "title": "Amaze Game Blog",
    "seoTitle": "Amaze Game Blog - Guides, Tips, and Maze Puzzle Strategy",
    "description": "Read Amaze Game guides, strategy articles, focus tips, family play notes, and reviews for free online maze puzzle fans.",
    "keywords": [
      "Amaze Game blog",
      "Amaze Game tips",
      "maze puzzle strategy"
    ],
    "schemaType": "Blog",
    "eyebrow": "Guides",
    "intro": "Strategy, route planning, and puzzle-focus articles for Amaze Game players.",
    "sections": [
      {
        "heading": "What We Cover",
        "items": [
          "How to play Amaze Game.",
          "Tips for harder maze-fill levels.",
          "Focus and spatial thinking benefits.",
          "Safe family puzzle play."
        ]
      }
    ]
  },
  "contact": {
    "title": "Contact Amaze Game",
    "seoTitle": "Contact Amaze Game Support",
    "description": "Contact the Amaze Game team for support, feedback, privacy questions, or advertising and partnership notes.",
    "keywords": [
      "contact Amaze Game",
      "Amaze Game support",
      "maze game feedback"
    ],
    "schemaType": "ContactPage",
    "intro": "Send questions, bug reports, accessibility notes, and partnership messages.",
    "sections": [
      {
        "heading": "Email",
        "items": [
          "Email: contact@amaze-game.com",
          "Response time: usually within 48 hours.",
          "Include your device, browser, and page URL for technical issues."
        ]
      },
      {
        "heading": "Useful Details",
        "body": "For game loading problems, mention whether the issue happens on the home page, play page, or the direct /game/index.html embed."
      }
    ]
  },
  "cookie-policy": {
    "title": "Cookie Policy",
    "seoTitle": "Amaze Game Cookie Policy",
    "description": "Learn how Amaze Game uses cookies, local storage, advertising tools, and browser preferences.",
    "keywords": [
      "Amaze Game cookies",
      "cookie policy",
      "browser game privacy"
    ],
    "updated": "June 22, 2026",
    "intro": "This Cookie Policy explains how cookies and similar technologies may be used on Amaze Game.",
    "sections": [
      {
        "heading": "Essential Storage",
        "body": "The website may use basic browser storage to keep pages working and remember simple preferences."
      },
      {
        "heading": "Third-Party Embeds",
        "body": "The game iframe is provided by a third-party game host and may use its own cookies or storage according to its policies."
      },
      {
        "heading": "Advertising and Analytics",
        "body": "If advertising or analytics scripts are enabled through environment variables, those providers may use cookies to measure performance or serve ads."
      },
      {
        "heading": "Your Choices",
        "body": "Most browsers let you block, delete, or manage cookies through settings. Blocking cookies may affect embedded game behavior."
      }
    ]
  },
  "disclaimer": {
    "title": "Disclaimer",
    "seoTitle": "Amaze Game Disclaimer",
    "description": "Read the Amaze Game disclaimer for gameplay information, third-party embeds, and external links.",
    "keywords": [
      "Amaze Game disclaimer",
      "game embed disclaimer",
      "free game website"
    ],
    "updated": "June 22, 2026",
    "intro": "Amaze Game is offered as a free browser entertainment and information website.",
    "sections": [
      {
        "heading": "Gameplay Information",
        "body": "Guides and strategy content are educational and may not describe every level or third-party update."
      },
      {
        "heading": "Third-Party Game Host",
        "body": "The embedded game may be hosted by an external provider. We do not control all technical behavior inside that iframe."
      },
      {
        "heading": "External Links",
        "body": "Links to related games or references are provided for convenience and may change outside our control."
      }
    ]
  },
  "faq": {
    "title": "Amaze Game FAQ",
    "seoTitle": "Amaze Game FAQ - Free Online Maze Puzzle Questions",
    "description": "Answers to common Amaze Game questions about controls, mobile play, safety, progress, and the no-download browser experience.",
    "keywords": [
      "Amaze Game FAQ",
      "Amaze Game questions",
      "play Amaze Game online"
    ],
    "schemaType": "FAQPage",
    "intro": "Quick answers for players who want to understand Amaze Game before jumping into the puzzle.",
    "sections": [
      {
        "heading": "Frequently Asked Questions",
        "items": [
          "What is Amaze Game? A free online maze-fill puzzle where you slide through a grid and color every tile.",
          "Is Amaze Game free? Yes, the browser version is free to open and play.",
          "Does Amaze Game work on mobile? Yes, the embedded game is designed for touch and browser play.",
          "Do I need an account? No account is required to open the game page.",
          "What is the goal? Fill 100 percent of the maze grid without leaving tiles behind."
        ]
      }
    ]
  },
  "how-to-play": {
    "title": "How to Play Amaze Game",
    "seoTitle": "How to Play Amaze Game - Rules, Controls, and Strategy",
    "description": "Learn how to play Amaze Game online with simple controls, route planning tips, and a clear explanation of the fill-every-tile goal.",
    "keywords": [
      "how to play Amaze Game",
      "Amaze Game rules",
      "Amaze Game controls"
    ],
    "schemaType": "HowTo",
    "intro": "Amaze Game has one clear objective: slide through the grid and fill every tile.",
    "sections": [
      {
        "heading": "Move in Straight Lines",
        "body": "Swipe or use arrow keys to move. Your piece slides until it reaches a wall, edge, or blocked path."
      },
      {
        "heading": "Fill Every Tile",
        "body": "Every tile your route covers becomes filled. The level is complete only when the board reaches 100 percent."
      },
      {
        "heading": "Plan Around Dead Ends",
        "body": "Corners and narrow corridors are easy to strand. Read them before your first move and decide whether they belong early or late in the route."
      },
      {
        "heading": "Restart Cleanly",
        "body": "If the route gets stuck, restart and change one important decision instead of repeating the same opening."
      }
    ]
  },
  "parents": {
    "title": "Amaze Game for Parents",
    "seoTitle": "Amaze Game for Kids and Parents - Safe Online Puzzle Play",
    "description": "A parent guide to Amaze Game covering safety, educational value, screen time, and family-friendly puzzle play.",
    "keywords": [
      "Amaze Game for kids",
      "safe maze puzzle",
      "educational browser game"
    ],
    "intro": "Amaze Game is a simple route-planning puzzle that can fit short, active screen-time sessions.",
    "sections": [
      {
        "heading": "Content",
        "body": "The game is nonviolent and focused on spatial puzzle solving. There is no chat or social feed on this Astro site."
      },
      {
        "heading": "Skills",
        "body": "Players practice planning, attention, spatial reasoning, patience, and learning from failed attempts."
      },
      {
        "heading": "Healthy Play",
        "body": "Use short sessions, discuss tricky levels together, and encourage children to explain why a route worked or failed."
      }
    ]
  },
  "strategy": {
    "title": "Amaze Game Strategy",
    "seoTitle": "Amaze Game Strategy - Solve Maze Fill Levels Faster",
    "description": "Improve your Amaze Game strategy with practical route-planning advice for corners, corridors, dead ends, and hard levels.",
    "keywords": [
      "Amaze Game strategy",
      "Amaze Game tips",
      "maze fill strategy"
    ],
    "schemaType": "Article",
    "intro": "Better Amaze Game solves come from reading the board before moving.",
    "sections": [
      {
        "heading": "Scan Constraints",
        "body": "Find corners, one-way pockets, and narrow branches before the first slide."
      },
      {
        "heading": "Work Backward",
        "body": "When a section has only one entrance, decide whether it should be the finish and plan backward from there."
      },
      {
        "heading": "Protect Access",
        "body": "Avoid moves that color a long section but block the only path to a remaining tile."
      }
    ]
  },
  "difficulty-guide": {
    "title": "Amaze Game Difficulty Guide",
    "seoTitle": "Amaze Game Difficulty Guide - Beginner to Master Maze Levels",
    "description": "Understand Amaze Game difficulty levels from beginner route puzzles to master maze-fill challenges.",
    "keywords": [
      "Amaze Game difficulty",
      "Amaze Game levels",
      "maze puzzle levels"
    ],
    "schemaType": "Article",
    "intro": "Amaze Game difficulty increases through board size, irregular layouts, and tighter route constraints.",
    "sections": [
      {
        "heading": "Beginner",
        "body": "Small boards teach the rule that your piece slides until it stops."
      },
      {
        "heading": "Intermediate",
        "body": "Balanced boards add longer routes and simple dead ends."
      },
      {
        "heading": "Advanced",
        "body": "Irregular boards require you to protect access to narrow areas."
      },
      {
        "heading": "Expert and Master",
        "body": "Harder boards ask for full-route planning before the opening move."
      }
    ]
  },
  "game-mechanics": {
    "title": "Amaze Game Mechanics",
    "seoTitle": "Amaze Game Mechanics - Sliding, Filling, and Route Logic",
    "description": "Explore the core Amaze Game mechanics behind straight-line movement, tile filling, route planning, and dead-end avoidance.",
    "keywords": [
      "Amaze Game mechanics",
      "maze fill mechanic",
      "sliding puzzle rules"
    ],
    "schemaType": "Article",
    "intro": "Amaze Game turns a simple slide control into a route-planning puzzle.",
    "sections": [
      {
        "heading": "Sliding Movement",
        "body": "The piece travels in one direction until the board stops it. You cannot stop halfway, so each input has a predictable endpoint."
      },
      {
        "heading": "Tile Filling",
        "body": "Every crossed tile becomes part of the route. Empty leftover tiles show where the plan broke."
      },
      {
        "heading": "Route Logic",
        "body": "Each level asks for a continuous path that covers the useful grid without isolating sections."
      }
    ]
  },
  "privacy-policy": {
    "title": "Privacy Policy",
    "seoTitle": "Amaze Game Privacy Policy",
    "description": "Read the Amaze Game Privacy Policy for information about data, cookies, embedded games, analytics, and contact messages.",
    "keywords": [
      "Amaze Game privacy policy",
      "browser game privacy",
      "maze game privacy"
    ],
    "updated": "June 22, 2026",
    "intro": "This Privacy Policy explains how Amaze Game handles information on the website.",
    "sections": [
      {
        "heading": "Information We Receive",
        "body": "You can play without creating an account. If you contact us, we receive the information you choose to send."
      },
      {
        "heading": "Embedded Game",
        "body": "The playable iframe may be delivered by a third-party host. That provider may process technical data according to its own policies."
      },
      {
        "heading": "Analytics and Ads",
        "body": "Analytics or advertising scripts may be enabled through deployment environment variables. These providers can collect technical and usage data."
      },
      {
        "heading": "Contact",
        "body": "Privacy questions can be sent to contact@amaze-game.com."
      }
    ]
  },
  "terms": {
    "title": "Terms of Service",
    "seoTitle": "Amaze Game Terms of Service",
    "description": "Read the Amaze Game Terms of Service for rules around using the free online maze puzzle site.",
    "keywords": [
      "Amaze Game terms",
      "terms of service",
      "maze game terms"
    ],
    "updated": "June 22, 2026",
    "intro": "By using Amaze Game, you agree to these Terms of Service.",
    "sections": [
      {
        "heading": "Service",
        "body": "Amaze Game provides a free browser game page, guides, related game pages, and supporting content."
      },
      {
        "heading": "Acceptable Use",
        "items": [
          "Do not attack or disrupt the website.",
          "Do not misuse the iframe or related game links.",
          "Do not copy site content for unauthorized redistribution."
        ]
      },
      {
        "heading": "Third-Party Content",
        "body": "The embedded game and related external games may be provided by third parties. Their behavior may be governed by their own terms."
      },
      {
        "heading": "Changes",
        "body": "We may update these terms as the site changes. Continued use means you accept the updated terms."
      }
    ]
  }
} satisfies Record<string, ContentPage>;

export type PageKey = keyof typeof pageContent;
