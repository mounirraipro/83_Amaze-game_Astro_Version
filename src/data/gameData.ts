export type GameLevel = {
  id: number;
  title: string;
  gridSize: string;
  difficulty: string;
  image: string;
  thumbnail: string;
};

export type GameCategory = {
  slug: string;
  name: string;
  color: string;
  description: string;
  longDescription: string;
  levels: GameLevel[];
};

export const categories = [
  {
    "slug": "beginner",
    "name": "Beginner",
    "color": "#10b981",
    "description": "Start with friendly Amaze Game levels that teach sliding movement, corners, short corridors, and the habit of filling every tile before moving on.",
    "longDescription": "Beginner Amaze Game routes are built for quick learning. The grids are compact, the paths are readable, and each failed route teaches how sliding in straight lines changes the board.",
    "levels": [
      {
        "id": 1,
        "title": "Beginner First Route",
        "gridSize": "4x4",
        "difficulty": "Easy",
        "image": "/amaze/categories/beginner.svg",
        "thumbnail": "/amaze/categories/beginner.svg"
      },
      {
        "id": 2,
        "title": "Beginner Corner Sweep",
        "gridSize": "4x5",
        "difficulty": "Easy",
        "image": "/amaze/categories/beginner.svg",
        "thumbnail": "/amaze/categories/beginner.svg"
      },
      {
        "id": 3,
        "title": "Beginner Long Slide",
        "gridSize": "4x6",
        "difficulty": "Medium",
        "image": "/amaze/categories/beginner.svg",
        "thumbnail": "/amaze/categories/beginner.svg"
      },
      {
        "id": 4,
        "title": "Beginner Tight Turn",
        "gridSize": "4x7",
        "difficulty": "Medium",
        "image": "/amaze/categories/beginner.svg",
        "thumbnail": "/amaze/categories/beginner.svg"
      },
      {
        "id": 5,
        "title": "Beginner Full Grid",
        "gridSize": "4x7",
        "difficulty": "Hard",
        "image": "/amaze/categories/beginner.svg",
        "thumbnail": "/amaze/categories/beginner.svg"
      }
    ]
  },
  {
    "slug": "intermediate",
    "name": "Intermediate",
    "color": "#2563eb",
    "description": "Play balanced Amaze Game boards where longer routes, tighter turns, and small dead ends make every swipe more deliberate.",
    "longDescription": "Intermediate Amaze Game levels are the core training ground. They stay approachable while asking you to read the whole maze before committing to the first direction.",
    "levels": [
      {
        "id": 6,
        "title": "Intermediate First Route",
        "gridSize": "5x4",
        "difficulty": "Medium",
        "image": "/amaze/categories/intermediate.svg",
        "thumbnail": "/amaze/categories/intermediate.svg"
      },
      {
        "id": 7,
        "title": "Intermediate Corner Sweep",
        "gridSize": "5x5",
        "difficulty": "Medium",
        "image": "/amaze/categories/intermediate.svg",
        "thumbnail": "/amaze/categories/intermediate.svg"
      },
      {
        "id": 8,
        "title": "Intermediate Long Slide",
        "gridSize": "5x6",
        "difficulty": "Hard",
        "image": "/amaze/categories/intermediate.svg",
        "thumbnail": "/amaze/categories/intermediate.svg"
      },
      {
        "id": 9,
        "title": "Intermediate Tight Turn",
        "gridSize": "5x7",
        "difficulty": "Hard",
        "image": "/amaze/categories/intermediate.svg",
        "thumbnail": "/amaze/categories/intermediate.svg"
      },
      {
        "id": 10,
        "title": "Intermediate Full Grid",
        "gridSize": "5x7",
        "difficulty": "Expert",
        "image": "/amaze/categories/intermediate.svg",
        "thumbnail": "/amaze/categories/intermediate.svg"
      }
    ]
  },
  {
    "slug": "advanced",
    "name": "Advanced",
    "color": "#7c3aed",
    "description": "Solve advanced Amaze Game puzzles with irregular layouts, narrow branches, and route choices that punish careless opening moves.",
    "longDescription": "Advanced Amaze Game levels reward players who can identify constrained areas early and build a route that enters each corridor from the right side.",
    "levels": [
      {
        "id": 11,
        "title": "Advanced First Route",
        "gridSize": "6x4",
        "difficulty": "Hard",
        "image": "/amaze/categories/advanced.svg",
        "thumbnail": "/amaze/categories/advanced.svg"
      },
      {
        "id": 12,
        "title": "Advanced Corner Sweep",
        "gridSize": "6x5",
        "difficulty": "Hard",
        "image": "/amaze/categories/advanced.svg",
        "thumbnail": "/amaze/categories/advanced.svg"
      },
      {
        "id": 13,
        "title": "Advanced Long Slide",
        "gridSize": "6x6",
        "difficulty": "Expert",
        "image": "/amaze/categories/advanced.svg",
        "thumbnail": "/amaze/categories/advanced.svg"
      },
      {
        "id": 14,
        "title": "Advanced Tight Turn",
        "gridSize": "6x7",
        "difficulty": "Expert",
        "image": "/amaze/categories/advanced.svg",
        "thumbnail": "/amaze/categories/advanced.svg"
      },
      {
        "id": 15,
        "title": "Advanced Full Grid",
        "gridSize": "6x7",
        "difficulty": "Master",
        "image": "/amaze/categories/advanced.svg",
        "thumbnail": "/amaze/categories/advanced.svg"
      }
    ]
  },
  {
    "slug": "expert",
    "name": "Expert",
    "color": "#f59e0b",
    "description": "Challenge yourself with expert Amaze Game grids where every tile must be accounted for before the first slide.",
    "longDescription": "Expert Amaze Game levels are designed for focused sessions. The boards are less forgiving, and a good solution usually starts by working backward from the tightest end point.",
    "levels": [
      {
        "id": 16,
        "title": "Expert First Route",
        "gridSize": "7x4",
        "difficulty": "Expert",
        "image": "/amaze/categories/expert.svg",
        "thumbnail": "/amaze/categories/expert.svg"
      },
      {
        "id": 17,
        "title": "Expert Corner Sweep",
        "gridSize": "7x5",
        "difficulty": "Expert",
        "image": "/amaze/categories/expert.svg",
        "thumbnail": "/amaze/categories/expert.svg"
      },
      {
        "id": 18,
        "title": "Expert Long Slide",
        "gridSize": "7x6",
        "difficulty": "Master",
        "image": "/amaze/categories/expert.svg",
        "thumbnail": "/amaze/categories/expert.svg"
      },
      {
        "id": 19,
        "title": "Expert Tight Turn",
        "gridSize": "7x7",
        "difficulty": "Master",
        "image": "/amaze/categories/expert.svg",
        "thumbnail": "/amaze/categories/expert.svg"
      },
      {
        "id": 20,
        "title": "Expert Full Grid",
        "gridSize": "7x7",
        "difficulty": "Master",
        "image": "/amaze/categories/expert.svg",
        "thumbnail": "/amaze/categories/expert.svg"
      }
    ]
  },
  {
    "slug": "master",
    "name": "Master",
    "color": "#ef4444",
    "description": "Play the toughest Amaze Game route-planning boards, built for players who enjoy precise path logic and repeated refinement.",
    "longDescription": "Master Amaze Game levels collect the most demanding maze-fill patterns. Expect asymmetric boards, branching traps, and solutions that require calm planning.",
    "levels": [
      {
        "id": 21,
        "title": "Master First Route",
        "gridSize": "7x4",
        "difficulty": "Master",
        "image": "/amaze/categories/master.svg",
        "thumbnail": "/amaze/categories/master.svg"
      },
      {
        "id": 22,
        "title": "Master Corner Sweep",
        "gridSize": "7x5",
        "difficulty": "Master",
        "image": "/amaze/categories/master.svg",
        "thumbnail": "/amaze/categories/master.svg"
      },
      {
        "id": 23,
        "title": "Master Long Slide",
        "gridSize": "7x6",
        "difficulty": "Master",
        "image": "/amaze/categories/master.svg",
        "thumbnail": "/amaze/categories/master.svg"
      },
      {
        "id": 24,
        "title": "Master Tight Turn",
        "gridSize": "7x7",
        "difficulty": "Master",
        "image": "/amaze/categories/master.svg",
        "thumbnail": "/amaze/categories/master.svg"
      },
      {
        "id": 25,
        "title": "Master Full Grid",
        "gridSize": "7x7",
        "difficulty": "Master",
        "image": "/amaze/categories/master.svg",
        "thumbnail": "/amaze/categories/master.svg"
      }
    ]
  }
] satisfies GameCategory[];

export const allLevels = categories.flatMap((category) => category.levels.map((level) => ({ category, level })));
export const getCategoryBySlug = (slug: string) => categories.find((category) => category.slug === slug);
