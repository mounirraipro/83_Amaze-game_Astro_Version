export type ExternalGame = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  seoOverview: string;
  howToPlay: string;
  strategyGuide: string;
  playerTips: string[];
  category: string;
  thumbnail: string;
  iframeUrl: string;
  accent: string;
  accentClass: string;
};

export const externalGames = [
  {
    "slug": "brain-line-connect",
    "title": "Brain Line Connect",
    "shortTitle": "Line Connect",
    "description": "Play Brain Line Connect online, a one-line route puzzle for players who like planning continuous paths.",
    "seoOverview": "Brain Line Connect is a natural companion for Amaze Game because both games reward seeing a route before acting. Instead of sliding through a fill grid, you draw one continuous line through required points while avoiding blocked spaces. The pace is quiet, the rules are readable, and the challenge comes from route order rather than reflexes.",
    "howToPlay": "Start on a dot, drag through every required point, and keep the line continuous until the route is complete. Avoid obstacles and blocked lines. If the route misses a point or crosses a forbidden area, restart and test a cleaner sequence.",
    "strategyGuide": "Look for endpoints, chokepoints, and areas with only one valid entrance. Solve tight corridors first in your plan, then connect them through open areas. If a line fails near the end, reverse your starting point and see whether the path becomes easier.",
    "playerTips": [
      "Plan before drawing.",
      "Solve chokepoints early.",
      "Reverse the route when stuck.",
      "Use obstacles as route boundaries."
    ],
    "category": "Route Logic",
    "thumbnail": "/game-thumbs/playgama/brain-line-connect.webp",
    "iframeUrl": "https://playgama.com/export/game/brain-line-connect?clid=p_eb5ee739-3023-44bb-875d-81fe60b91666",
    "accent": "#2563eb",
    "accentClass": "accent-blue"
  },
  {
    "slug": "block-puzzle",
    "title": "Block Puzzle",
    "shortTitle": "Blocks",
    "description": "Play Block Puzzle online, a spatial logic game where smart placement keeps the board open.",
    "seoOverview": "Block Puzzle fits the Amaze Game audience because it asks the same broad question: how will this move affect the future board? Instead of filling a maze path, you place shapes, clear lines, and protect useful space. Good play is patient, visual, and forward-looking.",
    "howToPlay": "Drag each available block shape onto the grid. Complete rows or columns to clear them and create new space. The game ends when the current shapes no longer fit, so every placement should preserve future options.",
    "strategyGuide": "Keep one large flexible area open instead of breaking the board into small gaps. Place awkward shapes while the board still has room, and choose clears that improve the shape of the remaining space.",
    "playerTips": [
      "Avoid isolated holes.",
      "Keep the center flexible.",
      "Clear lines with future pieces in mind.",
      "Place awkward shapes early."
    ],
    "category": "Spatial Puzzle",
    "thumbnail": "/game-thumbs/playgama/block-puzzle.webp",
    "iframeUrl": "https://playgama.com/export/game/block-blast-master?clid=p_eb5ee739-3023-44bb-875d-81fe60b91666",
    "accent": "#0ea5e9",
    "accentClass": "accent-sky"
  },
  {
    "slug": "sudoku-block-puzzle",
    "title": "Sudoku Block Puzzle",
    "shortTitle": "Sudoku Blocks",
    "description": "Play Sudoku Block Puzzle online, a grid-clearing puzzle that mixes block placement with 3x3 box logic.",
    "seoOverview": "Sudoku Block Puzzle combines block placement with the familiar structure of a sudoku board. Amaze Game players who enjoy reading a grid several turns ahead will recognize the same planning rhythm: protect space, avoid traps, and choose moves that make the next decision easier.",
    "howToPlay": "Place block shapes on a 9 by 9 board. Complete a row, column, or 3 by 3 box to clear it. Continue as long as the available pieces fit.",
    "strategyGuide": "Treat the board as nine small zones. Try to create clears that open more than one area at once, and avoid filling isolated pockets unless the move immediately clears them.",
    "playerTips": [
      "Watch 3x3 boxes.",
      "Preserve room for large shapes.",
      "Clear lines and boxes together.",
      "Do not split the board too early."
    ],
    "category": "Grid Logic",
    "thumbnail": "/game-thumbs/playgama/sudoku-block-puzzle.webp",
    "iframeUrl": "https://playgama.com/export/game/sudoku-block-puzzle?clid=p_eb5ee739-3023-44bb-875d-81fe60b91666",
    "accent": "#7c3aed",
    "accentClass": "accent-violet"
  },
  {
    "slug": "2048-merge-blocks",
    "title": "2048 Merge Blocks",
    "shortTitle": "2048",
    "description": "Play 2048 Merge Blocks online, a number puzzle about grouping values and preserving board space.",
    "seoOverview": "2048 Merge Blocks is a strong related game for Amaze Game players because it rewards delayed gratification. The best move is not always the first visible merge. It is the move that keeps future combinations close together and prevents the board from becoming trapped.",
    "howToPlay": "Merge matching number tiles into higher values. Keep combining until you reach the target or run out of useful space. Larger groups create stronger outcomes when the version supports group merging.",
    "strategyGuide": "Build around one area of the board so important values stay close. Avoid scattering key numbers across opposite sides, and choose merges that create a cleaner next board.",
    "playerTips": [
      "Keep high values together.",
      "Merge the largest useful group.",
      "Protect open space.",
      "Avoid splitting important numbers."
    ],
    "category": "Number Puzzle",
    "thumbnail": "/game-thumbs/playgama/2048-merge-blocks.webp",
    "iframeUrl": "https://playgama.com/export/game/2048-merge-blocks?clid=p_eb5ee739-3023-44bb-875d-81fe60b91666",
    "accent": "#f59e0b",
    "accentClass": "accent-gold"
  },
  {
    "slug": "mahjong-connect",
    "title": "Mahjong Connect",
    "shortTitle": "Mahjong",
    "description": "Play Mahjong Connect online, a tile-matching logic game where clear paths matter.",
    "seoOverview": "Mahjong Connect is about matching identical tiles only when a legal path connects them. That makes it a good fit beside Amaze Game: both games ask players to see pathways, manage blocked areas, and clear the board in an order that opens future moves.",
    "howToPlay": "Find two matching tiles that can be connected by a clear route, usually with a limited number of turns. Remove pairs until the board is empty.",
    "strategyGuide": "Start from edges and pairs that open blocked corridors. When several matches are available, choose the one that creates the most new paths instead of the one that is merely easiest to see.",
    "playerTips": [
      "Scan borders first.",
      "Open blocked rows.",
      "Rescan after every clear.",
      "Save obvious pairs if another pair frees more space."
    ],
    "category": "Tile Logic",
    "thumbnail": "/game-thumbs/playgama/mahjong-connect.webp",
    "iframeUrl": "https://playgama.com/export/game/mahjong-lines?clid=p_eb5ee739-3023-44bb-875d-81fe60b91666",
    "accent": "#10b981",
    "accentClass": "accent-green"
  },
  {
    "slug": "sudoku",
    "title": "Sudoku",
    "shortTitle": "Sudoku",
    "description": "Play Sudoku online, a classic number logic puzzle for calm deduction.",
    "seoOverview": "Sudoku is a pure deduction game for players who enjoy the slower side of Amaze Game. There is no sliding piece, but the same discipline applies: read the whole grid, avoid guessing, and make moves that reveal future certainty.",
    "howToPlay": "Fill the 9 by 9 grid so every row, column, and 3 by 3 box contains numbers 1 through 9 exactly once. Use the given numbers to eliminate impossible choices.",
    "strategyGuide": "Start with the most complete rows, columns, or boxes. Find singles first, then hidden singles. If notes are available, use them to avoid guesses and keep the logic clean.",
    "playerTips": [
      "Scan complete boxes first.",
      "Use notes.",
      "Check row, column, and box.",
      "Avoid guessing when elimination is available."
    ],
    "category": "Logic",
    "thumbnail": "/game-thumbs/playgama/sudoku.webp",
    "iframeUrl": "https://playgama.com/export/game/sudoku?clid=p_eb5ee739-3023-44bb-875d-81fe60b91666",
    "accent": "#334155",
    "accentClass": "accent-blue"
  }
] satisfies ExternalGame[];

export const getExternalGameBySlug = (slug: string) => externalGames.find((game) => game.slug === slug);
