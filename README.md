# KLI Cube · Diagnose before you teach

A one-page decision tool for secondary mathematics. It locates a learning difficulty on two axes, **knowledge type** (factual, conceptual, procedural, conditional) and **learning stage** (acquisition, fluency, generalisation, adaptation), then points to the teaching response that fits that cell.

- **Matrix**: the 4×4 matrix, a two-question finder, and the detail for each cell. A lens bar adds the third axis: view every cell through Pedagogy, HITS, Practice design, Differentiation & UDL, Assessment, Scaffolding & load, Representation or Feedback
- **Strategies**: the 8 lenses and 39 strategies, the 10 Victorian HITS located on the matrix, and where each strategy is the right move
- **Cases**: worked examples where the same wrong answer sits in four different cells
- **References**: the research behind the rows, the columns and each response

Two versions, switchable at the top of every page: **Years 9–10** and **Years 11–12 (VCE Mathematics)**.

## Editing

All text lives in [`assets/data.js`](assets/data.js) (matrix, cases, references) and [`assets/strategies.js`](assets/strategies.js) (lenses, strategies, HITS tags, and the strategies chosen for each cell). The pages render from it, so there is no build step. Open `index.html` locally or serve the folder with any static server.

## Note

The matrix is my own practical synthesis for planning and reading assessment data. Its components are well established in research; the combination has not been validated as a model.

Clark Cao (Yuchen Cao)
