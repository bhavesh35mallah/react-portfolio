import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, X, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";

type Cell = "X" | "O" | null;

const lines = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6],
];

const calcWinner = (b: Cell[]) => {
  for (const [a,b1,c] of lines) if (b[a] && b[a] === b[b1] && b[a] === b[c]) return { winner: b[a], line: [a,b1,c] };
  return null;
};

const bestMove = (board: Cell[]): number => {
  const minimax = (b: Cell[], isMax: boolean): number => {
    const w = calcWinner(b);
    if (w?.winner === "O") return 1;
    if (w?.winner === "X") return -1;
    if (b.every(Boolean)) return 0;
    let best = isMax ? -Infinity : Infinity;
    for (let i = 0; i < 9; i++) {
      if (!b[i]) {
        b[i] = isMax ? "O" : "X";
        const score = minimax(b, !isMax);
        b[i] = null;
        best = isMax ? Math.max(best, score) : Math.min(best, score);
      }
    }
    return best;
  };
  let move = -1, best = -Infinity;
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      board[i] = "O";
      const s = minimax(board, false);
      board[i] = null;
      if (s > best) { best = s; move = i; }
    }
  }
  return move;
};

const TicTacToe = () => {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));
  const [score, setScore] = useState({ you: 0, ai: 0, draw: 0 });
  const win = calcWinner(board);
  const isDraw = !win && board.every(Boolean);

  const play = (i: number) => {
    if (board[i] || win) return;
    const next = [...board];
    next[i] = "X";
    const w1 = calcWinner(next);
    if (w1) { setBoard(next); setScore(s => ({ ...s, you: s.you + 1 })); return; }
    if (next.every(Boolean)) { setBoard(next); setScore(s => ({ ...s, draw: s.draw + 1 })); return; }
    const aiIdx = bestMove([...next]);
    if (aiIdx >= 0) next[aiIdx] = "O";
    const w2 = calcWinner(next);
    if (w2) setScore(s => ({ ...s, ai: s.ai + 1 }));
    else if (next.every(Boolean)) setScore(s => ({ ...s, draw: s.draw + 1 }));
    setBoard(next);
  };

  const reset = () => setBoard(Array(9).fill(null));

  const status = win ? (win.winner === "X" ? "You win! 🎉" : "AI wins 🤖") : isDraw ? "Draw 🤝" : "Your turn (X)";

  return (
    <div className="card-elegant p-8 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="font-mono text-xs text-primary uppercase tracking-widest mb-1">mini game</div>
          <h3 className="font-display text-2xl font-bold">Tic Tac Toe</h3>
        </div>
        <Button size="sm" variant="outline" onClick={reset} className="border-border/80 hover:border-primary">
          <RotateCcw className="w-4 h-4 mr-2" /> Reset
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        {board.map((c, i) => {
          const isWinCell = win?.line.includes(i);
          return (
            <motion.button
              key={i}
              whileTap={{ scale: 0.92 }}
              onClick={() => play(i)}
              className={`aspect-square rounded-xl border flex items-center justify-center transition-all ${
                isWinCell
                  ? "border-primary bg-primary/20 glow"
                  : "border-border/60 bg-secondary/40 hover:border-primary/60 hover:bg-secondary/70"
              }`}
            >
              {c === "X" && <X className="w-10 h-10 text-primary" strokeWidth={3} />}
              {c === "O" && <Circle className="w-9 h-9 text-accent" strokeWidth={3} />}
            </motion.button>
          );
        })}
      </div>

      <div className="text-center font-mono text-sm text-muted-foreground mb-4">{status}</div>

      <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
        <div className="rounded-lg bg-secondary/40 py-2"><div className="text-primary text-lg font-bold">{score.you}</div>You</div>
        <div className="rounded-lg bg-secondary/40 py-2"><div className="text-muted-foreground text-lg font-bold">{score.draw}</div>Draw</div>
        <div className="rounded-lg bg-secondary/40 py-2"><div className="text-accent text-lg font-bold">{score.ai}</div>AI</div>
      </div>
    </div>
  );
};

export default TicTacToe;
