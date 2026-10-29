/* KLI Cube content. Edit text here; the pages render from this file. */
window.KLI = {
  knowledge: [
    { id: "factual", letter: "F", name: "Factual", ask: "What is it?", color: "#4F6BFF",
      sub: { junior: "terms, notation, rules", senior: "notation, rules, command terms" } },
    { id: "conceptual", letter: "C", name: "Conceptual", ask: "Why does it work?", color: "#8B5CF6",
      sub: { junior: "meanings, relationships", senior: "meanings, relationships" } },
    { id: "procedural", letter: "P", name: "Procedural", ask: "How do I do it?", color: "#0E9F8E",
      sub: { junior: "steps, methods", senior: "steps, by hand and with CAS" } },
    { id: "conditional", letter: "M", name: "Conditional", ask: "When and why this method?", color: "#EA7D1F",
      sub: { junior: "choosing, checking", senior: "choosing, checking" } }
  ],

  stages: [
    { id: "acquisition", step: "01", name: "Acquisition",
      ask: { junior: "Can they do it at all?", senior: "Can they do it at all?" } },
    { id: "fluency", step: "02", name: "Fluency",
      ask: { junior: "Accurately and efficiently?", senior: "Accurately and quickly, under time?" } },
    { id: "generalisation", step: "03", name: "Generalisation",
      ask: { junior: "When the surface changes?", senior: "When the question looks different?" } },
    { id: "adaptation", step: "04", name: "Adaptation",
      ask: { junior: "In a genuinely new problem?", senior: "In an unfamiliar, extended problem?" } }
  ],

  /* Two questions that locate a difficulty on the matrix. */
  diagnose: {
    knowledge: {
      question: "What is the most immediate difficulty?",
      options: [
        { id: "factual", short: "Can't recall it", long: "They cannot retain a term, rule, symbol or basic fact." },
        { id: "conceptual", short: "Can't explain why", long: "They cannot explain the meaning, relationship or reason." },
        { id: "procedural", short: "Steps go wrong", long: "They know the content, but the steps are inaccurate or unstable." },
        { id: "conditional", short: "Picks the wrong method", long: "They know the methods but not when or why to use each one." }
      ]
    },
    stage: {
      question: "On a familiar task, with support, what can they do?",
      options: [
        { id: "acquisition", short: "Needs modelling", long: "They still need modelling or heavy prompting, and accuracy is low." },
        { id: "fluency", short: "Slow or cue-dependent", long: "They can be correct, but slowly, unreliably or only with cues." },
        { id: "generalisation", short: "Fails when it looks different", long: "Familiar tasks are secure; a change of look or context causes failure." },
        { id: "adaptation", short: "Stalls on new problems", long: "Common variations are secure; a genuinely unfamiliar problem defeats them." }
      ]
    }
  },

  /* Shared detail for each cell (both year bands). */
  cellDetail: {
    "factual.acquisition": {
      see: "Can state a term, rule or symbol after explanation or prompting, but recall is unstable and similar facts are easily confused.",
      success: ["Recognises the fact in a familiar form", "Recalls it accurately with a light prompt", "Tells it apart from a similar term or rule"],
      avoid: "Treating one correct repetition or a copied example as evidence of retention.",
      refs: ["anderson2001", "rosenshine2012", "sweller2019"] },
    "factual.fluency": {
      see: "Usually recalls it, but slowly, only with cues, or not after a delay.",
      success: ["Retrieves accurately within a few seconds", "Still knows it after a delay", "Uses it without spending working memory needed for the reasoning"],
      avoid: "Substituting re-reading or copying for genuine retrieval.",
      refs: ["roediger2006", "cepeda2006", "dunlosky2013"] },
    "factual.generalisation": {
      see: "Recalls the fact in a standard question but seems not to know it when notation, wording, diagram or context changes.",
      success: ["Recognises the fact under different wording", "Matches terms with diagrams, symbols and contexts", "Rejects a similar but inapplicable fact"],
      avoid: "Changing every feature at once, so the invariant becomes impossible to see.",
      refs: ["marton2015", "gick1983", "barnett2002"] },
    "factual.adaptation": {
      see: "Individual facts are fluent, but the learner can't tell which ones matter or how to combine them in an unfamiliar problem.",
      success: ["Selects the relevant facts from a wider base", "Combines facts to reach a new conclusion", "Notices when known facts are not enough"],
      avoid: "Treating adaptation as memorising a larger collection of isolated facts.",
      refs: ["schoenfeld1992", "kilpatrick2001", "hatano1986"] },
    "conceptual.acquisition": {
      see: "Can repeat a definition but cannot explain why it holds, or sorts examples by surface features.",
      success: ["Explains the central relationship in their own words", "Says why an example qualifies and a non-example doesn't", "Connects at least two representations"],
      avoid: "Explaining an unformed concept with more unfamiliar terminology.",
      refs: ["hiebert1986", "alfieri2013", "ainsworth2006"] },
    "conceptual.fluency": {
      see: "Understanding has to be rebuilt from scratch each time, or only works through the teacher's original explanation.",
      success: ["States the key relationship promptly", "Keeps the explanation coherent across tasks", "Spots an obvious conceptual contradiction"],
      avoid: "Equating conceptual fluency with the speed of an algorithm.",
      refs: ["rittlejohnson2001", "dunlosky2013", "roediger2006"] },
    "conceptual.generalisation": {
      see: "The concept makes sense in one diagram or example, but falls apart when expressed verbally, algebraically, numerically or in context.",
      success: ["Recognises the same relationship in a new representation", "Explains what changed and what stayed the same", "Uses the concept to explain something new"],
      avoid: "Showing several representations without explicitly mapping their features.",
      refs: ["ainsworth2006", "marton2015", "gick1983"] },
    "conceptual.adaptation": {
      see: "Can explain taught examples but not yet use the concept with counter-intuitive cases, counterexamples or generalisations.",
      success: ["Makes a defensible prediction from the concept", "Builds a counterexample or limiting case", "Folds the concept into a more general explanation"],
      avoid: "Launching open inquiry before the prerequisite concepts are secure.",
      refs: ["kapur2016", "schoenfeld1992", "kirschner2006"] },
    "procedural.acquisition": {
      see: "Needs step-by-step prompting, omits or reorders steps, or copies visible actions without the decisions behind them.",
      success: ["Completes every step with support", "States the purpose of each major step", "Is more accurate on simple problems with the same structure"],
      avoid: "Expecting novices to discover an algorithm before they have a usable schema.",
      refs: ["sweller1985", "renkl2003", "kirschner2006"] },
    "procedural.fluency": {
      see: "The method is correct but slow, easily derailed, or still tied to a prompt card.",
      success: ["Completes the procedure independently in reasonable time", "Stays accurate across repeated attempts", "Compresses familiar steps without losing clear working"],
      avoid: "Adding time pressure before accuracy and understanding are secure.",
      refs: ["ericsson1993", "binder1996", "kalyuga2003"] },
    "procedural.generalisation": {
      see: "Succeeds with blocked textbook exercises but stops when the numbers, layout, representation or context change.",
      success: ["Carries out the procedure under varied surface forms", "Transfers it across diagrams, tables, symbols and contexts", "Separates similar problems that need different procedures"],
      avoid: "Creating an illusion of fluency with ten consecutive problems from one template.",
      refs: ["rohrer2007", "rohrer2015", "barnett2002"] },
    "procedural.adaptation": {
      see: "Knows several algorithms but cannot proceed when information is incomplete, the order isn't given or methods must be combined.",
      success: ["Combines two or more procedures", "Modifies steps to meet constraints", "Compares methods and justifies trade-offs"],
      avoid: "Turning an open problem into guessing the teacher's preferred method.",
      refs: ["rittlejohnson2007", "star2005", "hatano1986"] },
    "conditional.acquisition": {
      see: "Knows several methods but treats keywords as triggers, or waits for the teacher to name the method.",
      success: ["States a condition for using a method", "Identifies clear cases where it does and doesn't apply", "Makes a reasoned choice from a small set of options"],
      avoid: "Teaching how to do a method without the conditions that make it appropriate.",
      refs: ["paris1983", "schraw1995", "rittlejohnson2007"] },
    "conditional.fluency": {
      see: "Chooses correctly when asked 'which method fits?', but without that prompt starts with whatever comes to mind first.",
      success: ["Names the cue that triggers a method within seconds", "Chooses correctly without a 'which method?' prompt", "Says why a tempting alternative doesn't apply"],
      avoid: "Mistaking keyword spotting ('total' means add) for reliable method selection.",
      refs: ["paris1983", "rohrer2015", "roediger2006"] },
    "conditional.generalisation": {
      see: "Strong when a unit heading names the method; mixed or contextual problems trigger the most familiar strategy.",
      success: ["Chooses an appropriate method in mixed practice", "Explains which structural cue triggered the choice", "Notices when a method's conditions aren't met and switches"],
      avoid: "Treating a list of keywords as conditional knowledge.",
      refs: ["rohrer2015", "rohrer2007", "alfieri2013"] },
    "conditional.adaptation": {
      see: "A genuinely new problem produces fixation on one familiar method or random trial; the learner can't tell which methods could apply, or why.",
      success: ["Identifies which known methods could apply, and why", "Checks a method's conditions before committing", "Justifies the chosen approach against an alternative"],
      avoid: "Rewarding only the final answer and ignoring the quality of the method choice.",
      refs: ["schoenfeld1992", "eef2025meta", "hatano1986"] }
  },

  versions: {
    junior: {
      label: "Years 9–10",
      tag: "Victorian Curriculum 2.0",
      coreIdea: "Assessment data doesn't tell me what to teach next until I diagnose it. I locate each difficulty on two axes: what kind of knowledge it is, and how far learning has progressed. Then I choose the response that fits that cell. The same wrong answer can sit in different cells, so it needs different teaching.",
      evidence: "Evidence I use: diagnostic quizzes, mini-whiteboards, exit tickets, topic tests. Sort errors by cell, not by question.",
      emphasis: [
        "Model, worked examples, correct straight away",
        "Retrieval, spacing, deliberate practice",
        "Variation, mixed practice, transfer checks",
        "Open problems, justify and compare methods"
      ],
      link: null,
      cells: {
        "factual.acquisition": ["Clear first memory", "Few new items at a time; precise definitions with examples and non-examples; check recall at once."],
        "factual.fluency": ["Fast, low-effort recall", "Short, frequent, low-cue retrieval spaced across lessons, not re-reading or copying."],
        "factual.generalisation": ["Same fact, new surface", "Vary notation, wording or diagram one feature at a time; ask what stays the same."],
        "factual.adaptation": ["Facts as raw material", "Open problems where students select, combine and justify the facts they use."],
        "conceptual.acquisition": ["Build the meaning", "Link prerequisites; contrast examples and non-examples; map between two or three representations."],
        "conceptual.fluency": ["Make it stable", "Short explanations, sorting and because–therefore statements, rebuilt often."],
        "conceptual.generalisation": ["Keep the invariant", "Translate between graph, table, symbols and context; name what changed and what stayed."],
        "conceptual.adaptation": ["Predict and extend", "Boundary cases, counterexamples and open predictions; revise a model and justify it."],
        "procedural.acquisition": ["Accurate steps", "Model while explaining each decision; full then part-completed examples; check every key step."],
        "procedural.fluency": ["Efficient execution", "Deliberate practice on the weak step; fade prompts; track accuracy and time."],
        "procedural.generalisation": ["Right procedure, new look", "Controlled variation, then mixed practice; remove method headings; name the cue."],
        "procedural.adaptation": ["Modify and combine", "Multi-path problems with constraints; compare approaches and justify trade-offs."],
        "conditional.acquisition": ["Teach when, and when not", "State when, why and when not to use a method; contrast problems that need different methods."],
        "conditional.fluency": ["Quick, reliable choice", "Frequent ‘name the method and the cue’ items before any calculation; fade the prompt."],
        "conditional.generalisation": ["Choose without labels", "Interleave similar problems; justify the method first; analyse selection errors."],
        "conditional.adaptation": ["Judge with no cue", "Non-routine tasks with several methods; test each method’s conditions; compare options."]
      },
      hero: { wrong: "x³ + x⁵ = x⁸", caption: "Year 9 · Index laws", cells: ["factual.fluency", "conceptual.acquisition", "procedural.fluency", "conditional.generalisation"] },
      principles: [],
      cases: [
        {
          id: "index-laws",
          tag: "Year 9 · Index laws",
          wrong: "x³ + x⁵ = x⁸",
          lead: "One wrong answer, four different learning needs. Don't jump to “more index-law practice”. First find the knowledge type, then the stage.",
          paths: [
            { cell: "factual.fluency", see: "Can't state the product rule, or forgets it by the next lesson.",
              ask: "Without notes, write the rule for multiplying powers with the same base.",
              move: "Brief, uncued retrieval spaced across lessons, checked straight away." },
            { cell: "conceptual.acquisition", see: "Recites ‘add the indices’ but can't explain why the rule doesn't apply to addition.",
              ask: "Expand x³ · x² as repeated multiplication, then compare it with x³ + x².",
              move: "Examples and non-examples, the expanded form, and naming the condition that decides it." },
            { cell: "procedural.fluency", see: "Knows the rule but is slow, or drops steps, once coefficients and negative indices appear.",
              ask: "Watch accuracy, time and the step where errors appear across a short sequence that gets harder.",
              move: "Faded worked examples and deliberate practice on the weak step." },
            { cell: "conditional.generalisation", see: "Right when each law is practised alone, wrong in mixed work.",
              ask: "Mix x³x⁵, x³ + x⁵ and (x³)⁵. Name the rule and the reason before calculating.",
              move: "Interleaved practice, method labels removed, feedback on the choice." }
          ]
        },
        {
          id: "perfect-square",
          tag: "Year 10 · Expanding and solving quadratics",
          wrong: "(x + 3)² = x² + 9",
          lead: "A classic error with four possible roots. Each one calls for a different next lesson.",
          paths: [
            { cell: "factual.fluency", see: "Has met the perfect-square pattern but can't produce it without re-deriving it slowly.",
              ask: "Without notes, write the expansion of (a + b)² and of (a − b)².",
              move: "Short, spaced, low-cue retrieval of the identity, checked straight away." },
            { cell: "conceptual.acquisition", see: "Believes squaring “distributes” over addition and can't say why x² + 9 is wrong.",
              ask: "Draw (x + 3)² as the area of a square with side x + 3. Then test both sides with x = 1.",
              move: "Area model, substitution counterexample, and (x + 3)² compared with x² + 3²." },
            { cell: "procedural.fluency", see: "Writes (x + 3)(x + 3) correctly but loses the middle term or a sign with (2x − 5)² or (3 − x)².",
              ask: "Time a short sequence: (x + 3)², (x − 4)², (2x − 5)², (3 − x)². Note where accuracy drops.",
              move: "Deliberate practice on the middle-term step; fade the grid or box method." },
            { cell: "conditional.generalisation", see: "Expands well in an ‘Expand’ exercise, but to solve (x + 3)² = 16 expands everything instead of taking square roots.",
              ask: "Mix ‘Expand (x + 3)²’, ‘Solve (x + 3)² = 16’ and ‘Factorise x² + 6x + 9’. Name the move and why before working.",
              move: "Interleave expand, factorise and solve; justify the method first; analyse selection errors." }
          ]
        }
      ]
    },

    senior: {
      label: "Years 11–12",
      tag: "VCE Mathematics",
      coreIdea: "VCE data (SAC item analysis, practice exams, examiners’ reports) doesn't tell me what to teach next until I diagnose it. I locate each lost mark on two axes: what kind of knowledge it is, and how far learning has progressed. Then I choose the response that fits that cell. The same lost mark can sit in different cells, so it needs different teaching.",
      evidence: "Evidence I use: diagnostics, exit tickets, SAC item analysis, practice exams, examiners’ reports. Sort lost marks by cell, not by question; students can tag their own errors by cell.",
      emphasis: [
        "Model, worked examples, correct at once",
        "Retrieval, spacing, timed practice",
        "Variation, mixed practice, transfer checks",
        "Open problems, modelling, comparison"
      ],
      link: {
        label: "VCE link",
        sub: "Methods 3–4",
        items: [
          "Outcome 1: concepts, routines, procedures",
          "Outcome 1 at speed: Exam 1, tech-free",
          "Outcome 2: non-routine contexts",
          "Outcomes 2–3: modelling and problem solving with technology"
        ]
      },
      cells: {
        "factual.acquisition": ["Precise notation first", "A few new symbols or command terms at a time (f′(x), dy/dx, ‘exact’, ‘hence’); correct vs incorrect working; check recall at once."],
        "factual.fluency": ["Fast, low-effort recall", "Short, spaced, low-cue retrieval of exact values, standard derivatives and log laws; recall before reaching for notes."],
        "factual.generalisation": ["Same fact, new wording", "Vary notation and command terms (f′(x), dy/dx, ‘rate of change’, ‘gradient of the tangent’); ask what stays the same."],
        "factual.adaptation": ["Facts as raw material", "Extended problems where students select, combine and justify the facts they use, and write with correct notation."],
        "conceptual.acquisition": ["Build the meaning", "Link prerequisites; contrast examples and non-examples; connect graph, rule and context (derivative as gradient and rate)."],
        "conceptual.fluency": ["Make it stable", "Short ‘explain why’ prompts and because–therefore statements in warm-ups; students rebuild key ideas without notes."],
        "conceptual.generalisation": ["Keep the invariant", "Translate between graph, rule, CAS output and context; name what changed and what stayed the same."],
        "conceptual.adaptation": ["Predict and extend", "Boundary cases, counterexamples and ‘what if’ questions; revise a model and justify it, as in modelling tasks."],
        "procedural.acquisition": ["Accurate steps", "Model while explaining each decision; full then part-completed worked examples; by hand before CAS; check every key step."],
        "procedural.fluency": ["Efficient execution", "Timed technology-free practice on the weak step; fade prompts; track accuracy and time against Exam 1 pace."],
        "procedural.generalisation": ["Right procedure, new look", "Controlled variation, then mixed past-exam items; remove method headings; name the cue."],
        "procedural.adaptation": ["Modify and combine", "Multi-step extended problems; combine procedures; compare by-hand and CAS approaches and justify trade-offs."],
        "conditional.acquisition": ["Teach when, and when not", "State when and when not to use a method; contrast problems needing different methods; read ‘hence’ vs ‘otherwise’."],
        "conditional.fluency": ["Quick, reliable choice", "‘Name the method and the cue’ before any working; read the command term and marks first; fade the prompt."],
        "conditional.generalisation": ["Choose without labels", "Interleave similar problems out of topic order; justify the method first; analyse selection errors in SAC data."],
        "conditional.adaptation": ["Judge with no cue", "Non-routine problems with several methods; choose by hand or CAS; check domain and reasonableness."]
      },
      hero: { wrong: "d/dx (2x + 1)³ = 3(2x + 1)²", caption: "Year 12 · Chain rule", foot: "Same lost mark, four different next moves.", cells: ["factual.fluency", "conceptual.acquisition", "procedural.fluency", "conditional.generalisation"] },
      principles: [{ title: "CAS supports reasoning", text: "Technology should extend students' reasoning, not replace it. Build by hand first, then compare with CAS." }],
      cases: [
        {
          id: "chain-rule",
          tag: "Year 12 · Chain rule",
          wrong: "d/dx (2x + 1)³ = 3(2x + 1)²",
          foot: "Same lost mark, four different next moves.",
          lead: "Same lost mark, four different next moves. The SAC score alone can't tell you which.",
          paths: [
            { cell: "factual.fluency", see: "Can't state the chain rule without notes by the next lesson.",
              ask: "Without notes, write the chain rule in both function and Leibniz notation.",
              move: "Spaced, low-cue retrieval at the start of lessons." },
            { cell: "conceptual.acquisition", see: "Says ‘bring the power down’ but can't say why the inner derivative matters.",
              ask: "Expand (2x + 1)³, differentiate term by term, and compare with your answer.",
              move: "The comparison gives 6(2x + 1)², not 3(2x + 1)²; then name the inner rate of change." },
            { cell: "procedural.fluency", see: "Knows the rule but slips with nested forms such as √(x² + 1) or sin²(3x) in tech-free work.",
              ask: "A short timed set of nested functions; record where the inner function is misidentified.",
              move: "Timed tech-free practice on finding the inner function; fade the ‘let u =’ prompt." },
            { cell: "conditional.generalisation", see: "Right in a chain rule exercise, wrong in mixed work: uses it alone on x²(2x + 1)³.",
              ask: "Mix (2x + 1)³, x²(2x + 1)³ and (2x + 1)³ / x. Name the rule(s) and the cue before differentiating.",
              move: "Interleave product, quotient and chain rule items; justify the method first." }
          ]
        },
        {
          id: "derivative",
          tag: "Years 11–12 · The derivative",
          wrong: "“I can differentiate it, but what does f′(2) = 9 mean?”",
          quote: true,
          foot: "Same topic, four different gaps, four different next moves.",
          lead: "A student who can differentiate algebraically may not yet understand the derivative. Graphical, motion, numerical and symbolic probes show whether the idea has generalised.",
          paths: [
            { cell: "factual.fluency", see: "Confuses f′(a), dy/dx and the language of ‘gradient of the tangent’.",
              ask: "Quickly match notation, verbal descriptions and graph annotations.",
              move: "Retrieval, multiple exposures and precise corrective feedback." },
            { cell: "conceptual.generalisation", see: "Finds a gradient on a graph but doesn't see rate of change in a velocity or filling-vessel context.",
              ask: "Link one instant across a tangent on a graph, a difference quotient and its meaning in context.",
              move: "Multiple representations, a dynamic model and predict–observe–explain." },
            { cell: "procedural.acquisition", see: "Leaves out the limit or the algebraic simplification when using first principles.",
              ask: "Complete the derivation while explaining the purpose of each line.",
              move: "Worked example, chunking and completion problems." },
            { cell: "conditional.adaptation", see: "Differentiates when told to, but in an unfamiliar optimisation problem misses that the optimum may sit at an endpoint of the restricted domain.",
              ask: "Two contextual problems, one optimum at a stationary point and one at an endpoint. Which method does each need, and why, before any calculation?",
              move: "Contrasting cases, a rubric that credits the method choice, and feedback on the choice." }
          ]
        }
      ]
    }
  },

  principles: [
    { title: "Diagnose before intervening", text: "The same wrong answer can come from different knowledge types and stages. Don't choose a strategy from the topic name or the score alone." },
    { title: "A stage describes the learning, not the learner", text: "A student can be fluent with the facts of a topic while still acquiring when to use its methods." },
    { title: "Fluency is not understanding", text: "Speed and accuracy matter, but explanation, transfer and method choice need their own evidence." },
    { title: "Transfer has to be designed", text: "Vary surface features on purpose and remove method cues over time. Don't assume knowledge will travel." },
    { title: "The matrix is the differentiation", text: "Students working on the same topic can sit in different cells, so they get different teaching. Within a cell, adjust access and challenge without diluting the core goal." },
    { title: "Evidence drives the next move", text: "Diagnose, teach, check, and move right as the evidence allows, including when to withdraw support." }
  ],

  /* Reference groups, in display order. */
  refGroups: [
    { id: "rows", title: "Knowledge types", part: "The rows", text: "Why difficulties are sorted into factual, conceptual, procedural and conditional knowledge, and why conceptual and procedural knowledge must both be taught." },
    { id: "columns", title: "Stages of learning", part: "The columns", text: "Why a skill moves from acquisition to fluency, generalisation and adaptation, and why each stage needs a different instructional priority." },
    { id: "acquisition", title: "Acquisition responses", part: "Column 01", text: "Explicit modelling, worked examples and managing cognitive load for novices." },
    { id: "fluency", title: "Fluency responses", part: "Column 02", text: "Retrieval practice, spacing and deliberate practice to make knowledge fast and durable." },
    { id: "generalisation", title: "Generalisation responses", part: "Column 03", text: "Interleaving, variation, comparison and multiple representations to make knowledge transfer." },
    { id: "adaptation", title: "Adaptation responses", part: "Column 04", text: "Comparing methods, productive struggle and problem solving for genuinely new problems." },
    { id: "diagnosis", title: "Diagnosis, feedback and support", part: "The method", text: "Formative assessment, feedback and fading support: the loop that moves learning across the matrix." },
    { id: "context", title: "Victorian and Australian context", part: "Where it fits", text: "The system frameworks and curricula this tool is designed to work inside." }
  ],

  references: [
    // Rows
    { id: "anderson2001", group: "rows", apa: "Anderson, L. W., & Krathwohl, D. R. (Eds.). (2001). <i>A taxonomy for learning, teaching, and assessing: A revision of Bloom’s taxonomy of educational objectives</i>. Longman.", url: "", supports: "Source of the knowledge dimension: factual, conceptual, procedural and metacognitive. My rows adapt it, with conditional knowledge in the metacognitive row." },
    { id: "krathwohl2002", group: "rows", apa: "Krathwohl, D. R. (2002). A revision of Bloom’s taxonomy: An overview. <i>Theory Into Practice, 41</i>(4), 212–218.", url: "https://doi.org/10.1207/s15430421tip4104_2", supports: "Short summary of why knowledge type is a separate dimension from cognitive process." },
    { id: "hiebert1986", group: "rows", apa: "Hiebert, J., & Lefevre, P. (1986). Conceptual and procedural knowledge in mathematics: An introductory analysis. In J. Hiebert (Ed.), <i>Conceptual and procedural knowledge: The case of mathematics</i> (pp. 1–27). Lawrence Erlbaum.", url: "https://doi.org/10.4324/9780203063538", supports: "The classic distinction between conceptual and procedural knowledge in mathematics." },
    { id: "rittlejohnson2001", group: "rows", apa: "Rittle-Johnson, B., Siegler, R. S., & Alibali, M. W. (2001). Developing conceptual understanding and procedural skill in mathematics: An iterative process. <i>Journal of Educational Psychology, 93</i>(2), 346–362.", url: "https://doi.org/10.1037/0022-0663.93.2.346", supports: "Conceptual and procedural knowledge develop iteratively, so both rows need deliberate teaching." },
    { id: "rittlejohnson2015", group: "rows", apa: "Rittle-Johnson, B., Schneider, M., & Star, J. R. (2015). Not a one-way street: Bidirectional relations between procedural and conceptual knowledge of mathematics. <i>Educational Psychology Review, 27</i>(4), 587–597.", url: "https://doi.org/10.1007/s10648-015-9302-x", supports: "Each knowledge type supports the other; neither should wait for the other to be complete." },
    { id: "star2005", group: "rows", apa: "Star, J. R. (2005). Reconceptualizing procedural knowledge. <i>Journal for Research in Mathematics Education, 36</i>(5), 404–411.", url: "https://www.nctm.org/Publications/journal-for-research-in-mathematics-education/2005/Vol36/Issue5/Research-Commentary_-Reconceptualizing-Procedural-Knowledge/", supports: "Procedural knowledge can be deep and flexible, which is why the procedural row extends to adaptation." },
    { id: "paris1983", group: "rows", apa: "Paris, S. G., Lipson, M. Y., & Wixson, K. K. (1983). Becoming a strategic reader. <i>Contemporary Educational Psychology, 8</i>(3), 293–316.", url: "https://doi.org/10.1016/0361-476X(83)90018-8", supports: "Defines conditional knowledge: knowing when and why to use a strategy. This is my fourth row." },
    { id: "schraw1995", group: "rows", apa: "Schraw, G., & Moshman, D. (1995). Metacognitive theories. <i>Educational Psychology Review, 7</i>(4), 351–371.", url: "https://doi.org/10.1007/BF02212307", supports: "Places conditional knowledge inside metacognitive knowledge, alongside declarative and procedural knowledge." },
    { id: "flavell1979", group: "rows", apa: "Flavell, J. H. (1979). Metacognition and cognitive monitoring: A new area of cognitive–developmental inquiry. <i>American Psychologist, 34</i>(10), 906–911.", url: "https://doi.org/10.1037/0003-066X.34.10.906", supports: "The founding account of metacognition and self-monitoring." },
    { id: "kilpatrick2001", group: "rows", apa: "Kilpatrick, J., Swafford, J., & Findell, B. (Eds.). (2001). <i>Adding it up: Helping children learn mathematics</i>. National Academy Press.", url: "https://doi.org/10.17226/9822", supports: "Five intertwined strands of mathematical proficiency, including conceptual understanding, procedural fluency and strategic competence." },
    // Columns
    { id: "haring1978", group: "columns", apa: "Haring, N. G., & Eaton, M. D. (1978). Systematic instructional procedures: An instructional hierarchy. In N. G. Haring, T. C. Lovitt, M. D. Eaton, & C. L. Hansen (Eds.), <i>The fourth R: Research in the classroom</i> (pp. 23–40). Charles E. Merrill.", url: "", supports: "The instructional hierarchy: acquisition, fluency, generalisation, adaptation. These are my columns." },
    { id: "daly1996", group: "columns", apa: "Daly, E. J., III, Lentz, F. E., & Boyer, J. (1996). The instructional hierarchy: A conceptual model for understanding the effective components of reading interventions. <i>School Psychology Quarterly, 11</i>(4), 369–386.", url: "https://doi.org/10.1037/h0088941", supports: "Links each stage of the hierarchy to the instructional components that work at that stage." },
    { id: "ardoin2007", group: "columns", apa: "Ardoin, S. P., & Daly, E. J., III. (2007). Introduction to the special series: Close encounters of the instructional kind—How the instructional hierarchy is shaping instructional research 30 years later. <i>Journal of Behavioral Education, 16</i>(1), 1–6.", url: "https://doi.org/10.1007/s10864-006-9027-5", supports: "Reviews three decades of research built on the instructional hierarchy." },
    { id: "burns2010", group: "columns", apa: "Burns, M. K., Codding, R. S., Boice, C. H., & Lukito, G. (2010). Meta-analysis of acquisition and fluency math interventions with instructional and frustration level skills: Evidence for a skill-by-treatment interaction. <i>School Psychology Review, 39</i>(1), 69–83.", url: "https://doi.org/10.1080/02796015.2010.12087791", supports: "In mathematics, interventions work best when matched to the learner's stage. This is the core logic of the matrix." },
    { id: "burns2021", group: "columns", apa: "Burns, M. K. (2021). Intensifying reading interventions through a skill-by-treatment interaction: What to do when nothing else worked. <i>Communiqué, 50</i>(4), 1, 30–32.", url: "https://arc.educationapps.vic.gov.au/2042.efm", supports: "A practitioner account of matching intervention to the learning-hierarchy stage, shared on the Victorian Department of Education's Arc platform." },
    { id: "binder1996", group: "columns", apa: "Binder, C. (1996). Behavioral fluency: Evolution of a new paradigm. <i>The Behavior Analyst, 19</i>(2), 163–197.", url: "https://doi.org/10.1007/BF03393163", supports: "Accuracy alone is not mastery; fluent performance is more durable and transfers better." },
    { id: "barnett2002", group: "columns", apa: "Barnett, S. M., & Ceci, S. J. (2002). When and where do we apply what we learn? A taxonomy for far transfer. <i>Psychological Bulletin, 128</i>(4), 612–637.", url: "https://doi.org/10.1037/0033-2909.128.4.612", supports: "Transfer varies by how far the new context is from the original, which is why generalisation is its own stage." },
    { id: "hatano1986", group: "columns", apa: "Hatano, G., & Inagaki, K. (1986). Two courses of expertise. In H. Stevenson, H. Azuma, & K. Hakuta (Eds.), <i>Child development and education in Japan</i> (pp. 262–272). W. H. Freeman.", url: "", supports: "Distinguishes routine from adaptive expertise: the difference between fluency and adaptation." },
    // Acquisition
    { id: "rosenshine2012", group: "acquisition", apa: "Rosenshine, B. (2012). Principles of instruction: Research-based strategies that all teachers should know. <i>American Educator, 36</i>(1), 12–19, 39.", url: "https://www.aft.org/sites/default/files/periodicals/Rosenshine.pdf", supports: "Small steps, modelling, guided practice and checking for understanding." },
    { id: "sweller1985", group: "acquisition", apa: "Sweller, J., & Cooper, G. A. (1985). The use of worked examples as a substitute for problem solving in learning algebra. <i>Cognition and Instruction, 2</i>(1), 59–89.", url: "https://doi.org/10.1207/s1532690xci0201_3", supports: "Worked examples help novices in algebra more than unguided problem solving." },
    { id: "sweller2019", group: "acquisition", apa: "Sweller, J., van Merriënboer, J. J. G., & Paas, F. (2019). Cognitive architecture and instructional design: 20 years later. <i>Educational Psychology Review, 31</i>(2), 261–292.", url: "https://doi.org/10.1007/s10648-019-09465-5", supports: "Cognitive load theory: limit new elements and manage load for novices." },
    { id: "kirschner2006", group: "acquisition", apa: "Kirschner, P. A., Sweller, J., & Clark, R. E. (2006). Why minimal guidance during instruction does not work: An analysis of the failure of constructivist, discovery, problem-based, experiential, and inquiry-based teaching. <i>Educational Psychologist, 41</i>(2), 75–86.", url: "https://doi.org/10.1207/s15326985ep4102_1", supports: "Novices need guidance. Open inquiry belongs later, once the basics are secure." },
    { id: "renkl2003", group: "acquisition", apa: "Renkl, A., & Atkinson, R. K. (2003). Structuring the transition from example study to problem solving in cognitive skill acquisition: A cognitive load perspective. <i>Educational Psychologist, 38</i>(1), 15–22.", url: "https://doi.org/10.1207/S15326985EP3801_3", supports: "Fading: full worked examples, then part-completed ones, then independent problems." },
    // Fluency
    { id: "roediger2006", group: "fluency", apa: "Roediger, H. L., III, & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. <i>Psychological Science, 17</i>(3), 249–255.", url: "https://doi.org/10.1111/j.1467-9280.2006.01693.x", supports: "Retrieval practice beats re-study for long-term retention." },
    { id: "cepeda2006", group: "fluency", apa: "Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks: A review and quantitative synthesis. <i>Psychological Bulletin, 132</i>(3), 354–380.", url: "https://doi.org/10.1037/0033-2909.132.3.354", supports: "Spacing practice over time improves retention." },
    { id: "dunlosky2013", group: "fluency", apa: "Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students’ learning with effective learning techniques: Promising directions from cognitive and educational psychology. <i>Psychological Science in the Public Interest, 14</i>(1), 4–58.", url: "https://doi.org/10.1177/1529100612453266", supports: "Rates practice testing and distributed practice highly; re-reading and highlighting low." },
    { id: "ericsson1993", group: "fluency", apa: "Ericsson, K. A., Krampe, R. T., & Tesch-Römer, C. (1993). The role of deliberate practice in the acquisition of expert performance. <i>Psychological Review, 100</i>(3), 363–406.", url: "https://doi.org/10.1037/0033-295X.100.3.363", supports: "Deliberate practice targets specific weaknesses with feedback, as in ‘practise the weak step’." },
    // Generalisation
    { id: "rohrer2007", group: "generalisation", apa: "Rohrer, D., & Taylor, K. (2007). The shuffling of mathematics problems improves learning. <i>Instructional Science, 35</i>(6), 481–498.", url: "https://doi.org/10.1007/s11251-007-9015-8", supports: "Mixed (shuffled) maths practice improves delayed test performance over blocked practice." },
    { id: "rohrer2015", group: "generalisation", apa: "Rohrer, D., Dedrick, R. F., & Stershic, S. (2015). Interleaved practice improves mathematics learning. <i>Journal of Educational Psychology, 107</i>(3), 900–908.", url: "https://doi.org/10.1037/edu0000001", supports: "Classroom evidence that interleaving helps students choose the right strategy." },
    { id: "gick1983", group: "generalisation", apa: "Gick, M. L., & Holyoak, K. J. (1983). Schema induction and analogical transfer. <i>Cognitive Psychology, 15</i>(1), 1–38.", url: "https://doi.org/10.1016/0010-0285(83)90002-6", supports: "Comparing two examples builds a schema that transfers better than one example." },
    { id: "alfieri2013", group: "generalisation", apa: "Alfieri, L., Nokes-Malach, T. J., & Schunn, C. D. (2013). Learning through case comparisons: A meta-analytic review. <i>Educational Psychologist, 48</i>(2), 87–113.", url: "https://doi.org/10.1080/00461520.2013.775712", supports: "Comparing cases reliably improves learning, especially when the key features are made explicit." },
    { id: "ainsworth2006", group: "generalisation", apa: "Ainsworth, S. (2006). DeFT: A conceptual framework for considering learning with multiple representations. <i>Learning and Instruction, 16</i>(3), 183–198.", url: "https://doi.org/10.1016/j.learninstruc.2006.03.001", supports: "Multiple representations help only when students are taught to translate between them." },
    { id: "marton2015", group: "generalisation", apa: "Marton, F. (2015). <i>Necessary conditions of learning</i>. Routledge.", url: "https://doi.org/10.4324/9781315816876", supports: "Variation theory: vary one feature while keeping others constant, so the critical feature becomes visible." },
    // Adaptation
    { id: "rittlejohnson2007", group: "adaptation", apa: "Rittle-Johnson, B., & Star, J. R. (2007). Does comparing solution methods facilitate conceptual and procedural knowledge? An experimental study on learning to solve equations. <i>Journal of Educational Psychology, 99</i>(3), 561–574.", url: "https://doi.org/10.1037/0022-0663.99.3.561", supports: "Comparing solution methods improves procedural flexibility and conceptual knowledge." },
    { id: "kapur2016", group: "adaptation", apa: "Kapur, M. (2016). Examining productive failure, productive success, unproductive failure, and unproductive success in learning. <i>Educational Psychologist, 51</i>(2), 289–299.", url: "https://doi.org/10.1080/00461520.2016.1155457", supports: "When struggle is productive, and why it needs structure and follow-up teaching." },
    { id: "schoenfeld1992", group: "adaptation", apa: "Schoenfeld, A. H. (1992). Learning to think mathematically: Problem solving, metacognition, and sense making in mathematics. In D. A. Grouws (Ed.), <i>Handbook of research on mathematics teaching and learning</i> (pp. 334–370). Macmillan.", url: "", supports: "Problem solving depends on resources, heuristics, control (monitoring) and beliefs, not knowledge alone." },
    // Diagnosis
    { id: "black1998", group: "diagnosis", apa: "Black, P., & Wiliam, D. (1998). Assessment and classroom learning. <i>Assessment in Education: Principles, Policy & Practice, 5</i>(1), 7–74.", url: "https://doi.org/10.1080/0969595980050102", supports: "Formative assessment improves learning when evidence is used to adapt teaching." },
    { id: "wiliam2011", group: "diagnosis", apa: "Wiliam, D. (2011). <i>Embedded formative assessment</i>. Solution Tree Press.", url: "", supports: "Practical techniques for eliciting evidence, such as hinge questions and exit tickets." },
    { id: "hattie2007", group: "diagnosis", apa: "Hattie, J., & Timperley, H. (2007). The power of feedback. <i>Review of Educational Research, 77</i>(1), 81–112.", url: "https://doi.org/10.3102/003465430298487", supports: "Feedback at task, process and self-regulation levels, matched to where the learner is." },
    { id: "wood1976", group: "diagnosis", apa: "Wood, D., Bruner, J. S., & Ross, G. (1976). The role of tutoring in problem solving. <i>Journal of Child Psychology and Psychiatry, 17</i>(2), 89–100.", url: "https://doi.org/10.1111/j.1469-7610.1976.tb00381.x", supports: "The original account of scaffolding: support that is adjusted and withdrawn." },
    { id: "kalyuga2003", group: "diagnosis", apa: "Kalyuga, S., Ayres, P., Chandler, P., & Sweller, J. (2003). The expertise reversal effect. <i>Educational Psychologist, 38</i>(1), 23–31.", url: "https://doi.org/10.1207/S15326985EP3801_4", supports: "Support that helps novices can hinder more expert learners, so it must fade as learning moves right." },
    { id: "eef2025meta", group: "diagnosis", apa: "Education Endowment Foundation. (2025). <i>Metacognition and self-regulated learning: Guidance report</i> (2nd ed.).", url: "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/metacognition", supports: "Explicitly teaching planning, monitoring and evaluation of strategies." },
    { id: "eef2021cog", group: "diagnosis", apa: "Education Endowment Foundation. (2021). <i>Cognitive science approaches in the classroom: A review of the evidence</i>.", url: "https://educationendowmentfoundation.org.uk/education-evidence/evidence-reviews/cognitive-science-approaches-in-the-classroom", supports: "Reviews classroom evidence on spacing, interleaving, retrieval and cognitive load, with cautions about transfer." },
    { id: "cast2024", group: "diagnosis", apa: "CAST. (2024). <i>Universal Design for Learning Guidelines</i> (Version 3.0).", url: "https://udlguidelines.cast.org", supports: "Differentiating access and expression without lowering the goal." },
    // Context
    { id: "dethits", group: "context", apa: "Department of Education and Training. (2020). <i>High impact teaching strategies: Excellence in teaching and learning</i> (Rev. ed.). State of Victoria.", url: "https://www.education.vic.gov.au/school/teachers/teachingresources/practice/improve/Pages/hits.aspx", supports: "First published in 2017 and revised in 2020. Its ten strategies (e.g. explicit teaching, worked examples, feedback, differentiated teaching) appear throughout the cells." },
    { id: "vtlm2", group: "context", apa: "Department of Education. (2024). <i>Victorian Teaching and Learning Model 2.0</i>. State of Victoria.", url: "https://www2.education.vic.gov.au/pal/victorian-teaching-learning-model", supports: "Victoria's current model, implemented from 2025. It describes knowledge as factual, conceptual and procedural, and calls for varied, spaced practice as students move to mastery: the same logic as the rows and the fluency column." },
    { id: "vcaaVCE", group: "context", apa: "Victorian Curriculum and Assessment Authority. (2022). <i>VCE mathematics study design</i> (Version 1.1). VCAA.", url: "https://vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/mathematical-methods/vce-mathematical-methods", supports: "Accredited 2023–2027. Mathematical Methods Units 3–4 Outcomes 1–3 (concepts and procedures; non-routine contexts; computational thinking and technology) are the source of the VCE link row." },
    { id: "vcaaVC2", group: "context", apa: "Victorian Curriculum and Assessment Authority. (2023). <i>Victorian Curriculum F–10 Version 2.0: Mathematics</i>. VCAA.", url: "https://victoriancurriculum.vcaa.vic.edu.au/mathematics/mathematics-version-2-0", supports: "The Years 9–10 curriculum. Its proficiencies (Understanding, Fluency, Reasoning, Problem-solving) are embedded in every strand, much as the columns run through every topic." },
    { id: "aitsl2011", group: "context", apa: "Australian Institute for Teaching and School Leadership. (2011). <i>Australian professional standards for teachers</i>. AITSL.", url: "https://www.aitsl.edu.au/standards", supports: "First published 2011, revised 2018. Standards 1.5 (differentiate), 3 (plan and implement) and 5 (assess and use data) describe what this tool helps me do." },
    { id: "cese2017", group: "context", apa: "Centre for Education Statistics and Evaluation. (2017). <i>Cognitive load theory: Research that teachers really need to understand</i>. NSW Department of Education.", url: "https://education.nsw.gov.au/about-us/education-data-and-research/cese/publications/literature-reviews/cognitive-load-theory.html", supports: "An Australian summary of cognitive load theory for classroom teachers." }
  ]
};
