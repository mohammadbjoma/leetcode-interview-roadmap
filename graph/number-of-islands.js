var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    const uf = new UnionFind(rows * cols);

    let landCount = 0;

    const index = (r, c) => r * cols + c;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                landCount++;

            
                if (c + 1 < cols && grid[r][c + 1] === '1') {
                    uf.union(index(r, c), index(r, c + 1));
                }

            
                if (r + 1 < rows && grid[r + 1][c] === '1') {
                    uf.union(index(r, c), index(r + 1, c));
                }
            }
        }
    }

    return uf.countSets(grid, rows, cols);
};


class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = Array(n).fill(0);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        let px = this.find(x);
        let py = this.find(y);
        if (px === py) return;

        if (this.rank[px] < this.rank[py]) {
            this.parent[px] = py;
        } else if (this.rank[px] > this.rank[py]) {
            this.parent[py] = px;
        } else {
            this.parent[py] = px;
            this.rank[px]++;
        }
    }

    countSets(grid, rows, cols) {
        const roots = new Set();
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === '1') {
                    roots.add(this.find(r * cols + c));
                }
            }
        }
        return roots.size;
    }
}
