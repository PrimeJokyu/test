'use client';

import { useEffect, useRef, useState } from 'react';

const ROW = 20;
const COL = 10;
const SQ = 20;

const COLORS = [
  null,
  'rgba(0, 255, 255, 1)',    // cyan
  'rgba(0, 0, 255, 1)',      // blue
  'rgba(255, 165, 0, 1)',    // orange
  'rgba(255, 255, 0, 1)',    // yellow
  'rgba(0, 255, 0, 1)',      // green
  'rgba(128, 0, 128, 1)',    // purple
  'rgba(255, 0, 0, 1)',      // red
];

const SHAPES = [
  [],
  [[1,1,1,1]],
  [[2,0,0],[2,2,2]],
  [[0,0,3],[3,3,3]],
  [[4,4],[4,4]],
  [[0,5,5],[5,5,0]],
  [[0,6,0],[6,6,6]],
  [[7,7,0],[0,7,7]]
];

export default function TetrisGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nextCanvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [running, setRunning] = useState(true);

  const board = useRef<number[][]>(Array.from({ length: ROW }, () => Array(COL).fill(0)));
  const current = useRef<any>(null);
  const nextPiece = useRef<any>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const nextCanvas = nextCanvasRef.current!;
    const nextCtx = nextCanvas.getContext('2d')!;

    function drawSquare(ctx: CanvasRenderingContext2D, x: number, y: number, color: string) {
      ctx.fillStyle = color;
      ctx.fillRect(x * SQ, y * SQ, SQ, SQ);
      ctx.strokeStyle = '#111';
      ctx.lineWidth = 1;
      ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
    }

    function drawBoard() {
      for (let r = 0; r < ROW; ++r) {
        for (let c = 0; c < COL; ++c) {
          drawSquare(ctx, c, r, COLORS[board.current[r][c]] || '#000');
        }
      }
    }

    function drawNext() {
      nextCtx.clearRect(0, 0, nextCanvas.width, nextCanvas.height);
      if (!nextPiece.current || !nextPiece.current.shape) return;

      nextPiece.current.shape.forEach((row: number[], y: number) => {
        row.forEach((val: number, x: number) => {
          if (val) drawSquare(nextCtx, x, y, COLORS[nextPiece.current.colorIndex]!);
        });
      });
    }

    class Piece {
      shape: number[][];
      colorIndex: number;
      x: number;
      y: number;

      constructor(shape: number[][], colorIndex: number) {
        this.shape = shape;
        this.colorIndex = colorIndex;
        this.x = Math.floor(COL / 2) - Math.ceil(shape[0].length / 2);
        this.y = 0;
      }

      draw() {
        this.shape.forEach((row, dy) => {
          row.forEach((val, dx) => {
            if (val && this.y + dy >= 0) {
              drawSquare(ctx, this.x + dx, this.y + dy, COLORS[this.colorIndex]!);
            }
          });
        });
      }

      drawGhost() {
        let dropY = this.y;
        while (!this._collision(this.x, dropY + 1, this.shape)) {
          dropY++;
        }

        const color = COLORS[this.colorIndex];
        const ghostColor = color.replace(/rgba\((.+),\s*1\)/, 'rgba($1, 0.3)');

        this.shape.forEach((row, dy) => {
          row.forEach((val, dx) => {
            if (val && dropY + dy >= 0) {
              ctx.fillStyle = ghostColor;
              ctx.fillRect((this.x + dx) * SQ, (dropY + dy) * SQ, SQ, SQ);
              ctx.strokeStyle = '#444';
              ctx.lineWidth = 1;
              ctx.strokeRect((this.x + dx) * SQ, (dropY + dy) * SQ, SQ, SQ);
            }
          });
        });
      }

      move(dir: number) {
        if (!this._collision(this.x + dir, this.y, this.shape)) {
          this.x += dir;
        }
      }

      drop() {
        if (!this._collision(this.x, this.y + 1, this.shape)) {
          this.y++;
          return true;
        } else {
          this._lock();
          removeLines();
          spawnPiece();
          return false;
        }
      }

      hardDrop() {
        while (!this._collision(this.x, this.y + 1, this.shape)) {
          this.y++;
        }
        this._lock();
        removeLines();
        spawnPiece();
      }

      rotate() {
        const newShape = this.shape[0].map((_, i) =>
          this.shape.map(row => row[i]).reverse()
        );

        const kicks = [
          [0, 0],
          [-1, 0],
          [1, 0],
          [-2, 0],
          [2, 0],
          [0, -1],
          [0, 1],
        ];

        for (const [dx, dy] of kicks) {
          if (!this._collision(this.x + dx, this.y + dy, newShape)) {
            this.x += dx;
            this.y += dy;
            this.shape = newShape;
            return;
          }
        }
      }

      _collision(nx: number, ny: number, shape: number[][]) {
        for (let r = 0; r < shape.length; ++r)
          for (let c = 0; c < shape[r].length; ++c) {
            if (shape[r][c]) {
              if (ny + r < 0) continue;
              if (
                nx + c < 0 || nx + c >= COL || ny + r >= ROW ||
                board.current[ny + r][nx + c] !== 0
              ) return true;
            }
          }
        return false;
      }

      _lock() {
        this.shape.forEach((row, dy) => {
          row.forEach((val, dx) => {
            if (val && this.y + dy >= 0) {
              board.current[this.y + dy][this.x + dx] = this.colorIndex;
            }
          });
        });
      }
    }

    function removeLines() {
      let lines = 0;
      for (let r = ROW - 1; r >= 0; r--) {
        if (board.current[r].every(cell => cell !== 0)) {
          board.current.splice(r, 1);
          board.current.unshift(Array(COL).fill(0));
          lines++;
          r++;
        }
      }
      if (lines > 0) {
        setScore(prev => {
          const newScore = prev + lines * 100;
          setLevel(Math.floor(newScore / 500) + 1);
          return newScore;
        });
      }
    }

    function spawnPiece() {
      current.current = nextPiece.current || randomPiece();
      nextPiece.current = randomPiece();
      drawNext();

      if (current.current._collision(current.current.x, current.current.y, current.current.shape)) {
        alert(`ゲームオーバー！スコア: ${score}`);
        setRunning(false);
        board.current = Array.from({ length: ROW }, () => Array(COL).fill(0));
        setScore(0);
        setLevel(1);
      }

      drawBoard();
      current.current.drawGhost();
      current.current.draw();
    }

    function randomPiece() {
      const id = Math.floor(Math.random() * 7) + 1;
      return new Piece(SHAPES[id], id);
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (!current.current || !running) return;
      if (e.key === 'ArrowLeft') current.current.move(-1);
      else if (e.key === 'ArrowRight') current.current.move(1);
      else if (e.key === 'ArrowDown') current.current.drop();
      else if (e.key === ' ') {
        e.preventDefault();
        current.current.hardDrop();
      }
      else if (e.key === 'ArrowUp') current.current.rotate();

      drawBoard();
      current.current.drawGhost();
      current.current.draw();

      e.preventDefault();
    }

    window.addEventListener('keydown', handleKeyDown);

    spawnPiece();
    drawBoard();

    const interval = setInterval(() => {
      if (!running) return;
      if (current.current) {
        const dropped = current.current.drop();
        drawBoard();
        current.current.drawGhost();
        current.current.draw();
      }
    }, Math.max(100, 800 - level * 40));

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [running, level]);

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      padding: '1rem',
      background: '#111',
      color: '#fff',
      maxWidth: '100vw',
      maxHeight: '100vh',
      justifyContent: 'center',
      alignItems: 'flex-start',
      fontFamily: 'sans-serif',
    }}>
      <canvas
        ref={canvasRef}
        width={COL * SQ}
        height={ROW * SQ}
        style={{
          border: '2px solid #666',
          width: `${COL * SQ}px`,
          height: `${ROW * SQ}px`,
          backgroundColor: '#000',
          display: 'block',
        }}
      />
      <div style={{ minWidth: '150px' }}>
        <h2>Next</h2>
        <canvas
          ref={nextCanvasRef}
          width={150}
          height={150}
          style={{ background: '#222', display: 'block', marginBottom: '1rem' }}
        />
        <p>Score: {score}</p>
        <p>Level: {level}</p>
        <p>操作方法:</p>
        <ul>
          <li>← →：移動</li>
          <li>↑：回転</li>
          <li>↓：落下</li>
          <li>スペース：ハードドロップ</li>
        </ul>
      </div>
    </div>
  );
}
