/* Third axis: instructional response. Lenses, strategy bank, Victorian HITS tags, and the strategies chosen for each cell. */
Object.assign(window.KLI, {
 "lenses": [
  {
   "id": "pedagogy",
   "icon": "↗",
   "name": "Pedagogy",
   "question": "How should the overall learning pathway be organised?"
  },
  {
   "id": "hits",
   "icon": "✦",
   "name": "HITS",
   "question": "Which Victorian High Impact Teaching Strategies fit this need? This view gathers every HITS-tagged strategy chosen for the cell, across all lenses."
  },
  {
   "id": "practice",
   "icon": "∞",
   "name": "Practice design",
   "question": "What should students practise, and how should variation and spacing be organised?"
  },
  {
   "id": "differentiation",
   "icon": "≋",
   "name": "Differentiation & UDL",
   "question": "How should access, support and challenge be adjusted?"
  },
  {
   "id": "assessment",
   "icon": "◎",
   "name": "Assessment evidence",
   "question": "How will the teacher know where learning currently sits?"
  },
  {
   "id": "scaffolding",
   "icon": "△",
   "name": "Scaffolding & load",
   "question": "How much support is needed, and when should it be withdrawn?"
  },
  {
   "id": "representation",
   "icon": "◇",
   "name": "Representation",
   "question": "Which forms should be used, compared and connected?"
  },
  {
   "id": "feedback",
   "icon": "↻",
   "name": "Feedback",
   "question": "Should feedback correct, accelerate, transfer or deepen reflection?"
  }
 ],
 "hits": [
  {
   "n": 1,
   "name": "Setting goals"
  },
  {
   "n": 2,
   "name": "Structuring lessons"
  },
  {
   "n": 3,
   "name": "Explicit teaching"
  },
  {
   "n": 4,
   "name": "Worked examples"
  },
  {
   "n": 5,
   "name": "Collaborative learning"
  },
  {
   "n": 6,
   "name": "Multiple exposures"
  },
  {
   "n": 7,
   "name": "Questioning"
  },
  {
   "n": 8,
   "name": "Feedback"
  },
  {
   "n": 9,
   "name": "Metacognitive strategies"
  },
  {
   "n": 10,
   "name": "Differentiated teaching"
  }
 ],
 "strategies": {
  "explicit_instruction": {
   "name": "Explicit instruction",
   "lens": "pedagogy",
   "desc": "State the goal, explain or model in manageable steps, check understanding, and progressively transfer responsibility.",
   "hits": [
    3
   ],
   "refs": [
    "rosenshine2012",
    "kirschner2006"
   ]
  },
  "guided_inquiry": {
   "name": "Guided inquiry",
   "lens": "pedagogy",
   "desc": "Use designed questions, materials and boundaries so students can discover relationships with purposeful teacher guidance.",
   "hits": [],
   "refs": [
    "alfieri2013",
    "kirschner2006"
   ]
  },
  "dialogic": {
   "name": "Dialogic teaching",
   "lens": "pedagogy",
   "desc": "Make thinking visible through reasons, probing questions, comparisons, revoicing and disciplined discussion.",
   "hits": [],
   "refs": [
    "rittlejohnson2007"
   ]
  },
  "problem_based": {
   "name": "Problem-based learning",
   "lens": "pedagogy",
   "desc": "Organise knowledge use, collaboration and iteration around an authentic or non-routine problem.",
   "hits": [],
   "refs": [
    "schoenfeld1992",
    "kapur2016"
   ]
  },
  "goal_structure": {
   "name": "Goals + lesson structure",
   "lens": "hits",
   "desc": "Clarify success criteria and sequence the opening, modelling, practice, checks and closure around the learning goal.",
   "hits": [
    1,
    2
   ],
   "refs": [
    "dethits",
    "rosenshine2012"
   ]
  },
  "worked_examples": {
   "name": "Worked examples",
   "lens": "hits",
   "desc": "Use complete and progressively faded examples to expose key decisions and reduce unproductive search for novices.",
   "hits": [
    4
   ],
   "refs": [
    "sweller1985",
    "renkl2003"
   ]
  },
  "questioning": {
   "name": "Questioning",
   "lens": "hits",
   "desc": "Use all-student response, reasoning prompts, hinge questions and wait time to collect actionable evidence.",
   "hits": [
    7
   ],
   "refs": [
    "rosenshine2012",
    "wiliam2011"
   ]
  },
  "multiple_exposures": {
   "name": "Multiple exposures",
   "lens": "hits",
   "desc": "Deliberately revisit core knowledge across time and forms rather than treating one presentation as sufficient.",
   "hits": [
    6
   ],
   "refs": [
    "cepeda2006",
    "dethits"
   ]
  },
  "collaborative": {
   "name": "Collaborative learning",
   "lens": "hits",
   "desc": "Set roles, a shared product and individual accountability so interaction serves the learning goal.",
   "hits": [
    5
   ],
   "refs": [
    "dethits"
   ]
  },
  "metacognitive": {
   "name": "Metacognitive strategies",
   "lens": "hits",
   "desc": "Prompt students to plan, monitor, justify choices and evaluate the effectiveness of their approaches.",
   "hits": [
    9
   ],
   "refs": [
    "eef2025meta",
    "schraw1995"
   ]
  },
  "retrieval": {
   "name": "Retrieval practice",
   "lens": "practice",
   "desc": "Ask learners to retrieve from memory with minimal prompting, followed by checking or feedback.",
   "hits": [],
   "refs": [
    "roediger2006",
    "dunlosky2013"
   ]
  },
  "spacing": {
   "name": "Spacing + cumulative review",
   "lens": "practice",
   "desc": "Revisit prior knowledge across lessons so retention is deliberately designed into the curriculum.",
   "hits": [],
   "refs": [
    "cepeda2006",
    "dunlosky2013"
   ]
  },
  "deliberate": {
   "name": "Deliberate practice",
   "lens": "practice",
   "desc": "Target a defined weakness through short cycles of attempt, feedback, correction and another attempt.",
   "hits": [],
   "refs": [
    "ericsson1993"
   ]
  },
  "variation": {
   "name": "Variation",
   "lens": "practice",
   "desc": "Change one feature at a time to reveal invariants, boundaries and conditions for use.",
   "hits": [],
   "refs": [
    "marton2015"
   ]
  },
  "interleaving": {
   "name": "Interleaving",
   "lens": "practice",
   "desc": "Mix problems requiring different methods so students must first identify and select an approach.",
   "hits": [],
   "refs": [
    "rohrer2015",
    "rohrer2007"
   ]
  },
  "open_problem": {
   "name": "Open / non-routine tasks",
   "lens": "practice",
   "desc": "Use tasks with multiple pathways, incomplete information or modelling demands once prerequisite knowledge is secure.",
   "hits": [],
   "refs": [
    "schoenfeld1992"
   ]
  },
  "readiness": {
   "name": "Readiness grouping",
   "lens": "differentiation",
   "desc": "Use current evidence to adjust support, peer structure and task entry temporarily, without creating fixed labels.",
   "hits": [
    10
   ],
   "refs": [
    "dethits",
    "kalyuga2003"
   ]
  },
  "tiered": {
   "name": "Tiered task",
   "lens": "differentiation",
   "desc": "Keep the same core goal while varying complexity, abstraction, scaffold or response demand.",
   "hits": [
    10
   ],
   "refs": [
    "dethits",
    "cast2024"
   ]
  },
  "choice": {
   "name": "Meaningful choice",
   "lens": "differentiation",
   "desc": "Offer bounded choices in representation, example or product without lowering the core learning expectation.",
   "hits": [
    10
   ],
   "refs": [
    "cast2024"
   ]
  },
  "extension": {
   "name": "Extension by depth",
   "lens": "differentiation",
   "desc": "Ask for proof, comparison, counterexample, generalisation or constraint analysis rather than simply more questions.",
   "hits": [
    10
   ],
   "refs": [
    "dethits"
   ]
  },
  "preteach": {
   "name": "Pre-teach + vocabulary support",
   "lens": "differentiation",
   "desc": "Establish essential background, language and notation before the main task to strengthen access.",
   "hits": [
    10
   ],
   "refs": [
    "cast2024",
    "sweller2019"
   ]
  },
  "diagnostic": {
   "name": "Diagnostic probe",
   "lens": "assessment",
   "desc": "Use a small set of high-information questions to distinguish memory, concept, procedure and selection difficulties.",
   "hits": [],
   "refs": [
    "black1998",
    "burns2010"
   ]
  },
  "whiteboards": {
   "name": "Mini-whiteboards",
   "lens": "assessment",
   "desc": "Collect simultaneous visible responses to reveal error patterns and the distribution of understanding.",
   "hits": [],
   "refs": [
    "wiliam2011"
   ]
  },
  "hinge": {
   "name": "Hinge question",
   "lens": "assessment",
   "desc": "Before moving on, use one question whose options map to different misconceptions and determine the next teaching move.",
   "hits": [],
   "refs": [
    "wiliam2011"
   ]
  },
  "exit_ticket": {
   "name": "Exit ticket",
   "lens": "assessment",
   "desc": "Use one to three items to verify the goal and inform regrouping or reteaching in the next lesson.",
   "hits": [],
   "refs": [
    "wiliam2011",
    "black1998"
   ]
  },
  "transfer_probe": {
   "name": "Transfer probe",
   "lens": "assessment",
   "desc": "Change surface features and remove method cues to test whether the knowledge is still recognised and used.",
   "hits": [],
   "refs": [
    "barnett2002"
   ]
  },
  "rubric": {
   "name": "Process rubric",
   "lens": "assessment",
   "desc": "Evaluate representation, reasoning, strategy adjustment and checking, not only the final answer.",
   "hits": [],
   "refs": [
    "hattie2007"
   ]
  },
  "chunking": {
   "name": "Chunking + signalling",
   "lens": "scaffolding",
   "desc": "Reduce non-essential information and signal the current step or structure so working memory stays on the core relationship.",
   "hits": [],
   "refs": [
    "sweller2019",
    "cese2017"
   ]
  },
  "prompt_fade": {
   "name": "Prompt fading",
   "lens": "scaffolding",
   "desc": "Move deliberately from full modelling to completion tasks, cue cards and independent performance.",
   "hits": [],
   "refs": [
    "renkl2003",
    "kalyuga2003"
   ]
  },
  "reduce_load": {
   "name": "Reduce extraneous load",
   "lens": "scaffolding",
   "desc": "Remove decorative detail, split attention and unnecessary choices so limited working memory can focus on the new learning.",
   "hits": [],
   "refs": [
    "sweller2019",
    "cese2017"
   ]
  },
  "productive_struggle": {
   "name": "Productive struggle",
   "lens": "scaffolding",
   "desc": "Once prerequisite knowledge is present, reduce cues, permit short difficulty and provide recoverable checkpoints.",
   "hits": [],
   "refs": [
    "kapur2016"
   ]
  },
  "concrete_visual_symbolic": {
   "name": "Concrete–visual–symbolic",
   "lens": "representation",
   "desc": "Connect actions, images, language and symbols by explicitly mapping corresponding features.",
   "hits": [],
   "refs": [
    "ainsworth2006"
   ]
  },
  "examples_nonexamples": {
   "name": "Examples + non-examples",
   "lens": "representation",
   "desc": "Compare cases that do and do not meet a definition to reveal decisive features and conceptual boundaries.",
   "hits": [],
   "refs": [
    "alfieri2013",
    "gick1983"
   ]
  },
  "multiple_representations": {
   "name": "Multiple representations",
   "lens": "representation",
   "desc": "Translate among graphical, numerical, symbolic, verbal and contextual forms while naming what remains invariant.",
   "hits": [],
   "refs": [
    "ainsworth2006"
   ]
  },
  "dynamic_model": {
   "name": "Dynamic model / simulation",
   "lens": "representation",
   "desc": "Make a key variable manipulable and its effect visible, paired with prediction and explanation rather than passive viewing.",
   "hits": [],
   "refs": [
    "ainsworth2006"
   ]
  },
  "corrective": {
   "name": "Corrective feedback",
   "lens": "feedback",
   "desc": "Identify the specific gap promptly and provide a next action the learner can take immediately.",
   "hits": [
    8
   ],
   "refs": [
    "hattie2007"
   ]
  },
  "efficiency": {
   "name": "Efficiency feedback",
   "lens": "feedback",
   "desc": "After correctness, focus on step compression, clarity, speed and cognitive cost.",
   "hits": [
    8
   ],
   "refs": [
    "hattie2007",
    "binder1996"
   ]
  },
  "strategic": {
   "name": "Strategic feedback",
   "lens": "feedback",
   "desc": "Probe why a method applies, which alternatives exist and what structural evidence triggered the choice.",
   "hits": [
    8
   ],
   "refs": [
    "hattie2007",
    "rittlejohnson2007"
   ]
  },
  "reflective": {
   "name": "Reflective feedback",
   "lens": "feedback",
   "desc": "Prompt evaluation of the plan, turning points, evidence, failed attempts and future adjustments.",
   "hits": [
    8
   ],
   "refs": [
    "hattie2007",
    "eef2025meta"
   ]
  }
 },
 "responses": {
  "factual.acquisition": {
   "pedagogy": [
    "explicit_instruction"
   ],
   "hits": [
    "multiple_exposures",
    "goal_structure",
    "worked_examples"
   ],
   "practice": [
    "retrieval",
    "spacing"
   ],
   "differentiation": [
    "preteach"
   ],
   "assessment": [
    "diagnostic",
    "exit_ticket"
   ],
   "scaffolding": [
    "chunking",
    "reduce_load"
   ],
   "representation": [
    "examples_nonexamples"
   ],
   "feedback": [
    "corrective"
   ]
  },
  "factual.fluency": {
   "pedagogy": [
    "explicit_instruction"
   ],
   "hits": [
    "multiple_exposures"
   ],
   "practice": [
    "retrieval",
    "spacing",
    "deliberate"
   ],
   "differentiation": [
    "preteach",
    "readiness"
   ],
   "assessment": [
    "whiteboards"
   ],
   "scaffolding": [
    "prompt_fade"
   ],
   "representation": [
    "multiple_representations"
   ],
   "feedback": [
    "corrective",
    "efficiency"
   ]
  },
  "factual.generalisation": {
   "pedagogy": [
    "dialogic"
   ],
   "hits": [
    "multiple_exposures"
   ],
   "practice": [
    "variation",
    "retrieval",
    "spacing"
   ],
   "differentiation": [
    "preteach",
    "tiered"
   ],
   "assessment": [
    "transfer_probe"
   ],
   "scaffolding": [
    "prompt_fade"
   ],
   "representation": [
    "multiple_representations",
    "examples_nonexamples"
   ],
   "feedback": [
    "corrective",
    "strategic"
   ]
  },
  "factual.adaptation": {
   "pedagogy": [
    "problem_based"
   ],
   "hits": [
    "metacognitive",
    "multiple_exposures"
   ],
   "practice": [
    "open_problem",
    "retrieval",
    "spacing"
   ],
   "differentiation": [
    "extension",
    "choice"
   ],
   "assessment": [
    "rubric"
   ],
   "scaffolding": [
    "productive_struggle"
   ],
   "representation": [
    "multiple_representations"
   ],
   "feedback": [
    "strategic",
    "corrective",
    "reflective"
   ]
  },
  "conceptual.acquisition": {
   "pedagogy": [
    "dialogic",
    "explicit_instruction"
   ],
   "hits": [
    "questioning",
    "goal_structure",
    "worked_examples"
   ],
   "practice": [
    "variation"
   ],
   "differentiation": [
    "preteach"
   ],
   "assessment": [
    "diagnostic",
    "exit_ticket"
   ],
   "scaffolding": [
    "chunking",
    "reduce_load"
   ],
   "representation": [
    "examples_nonexamples",
    "concrete_visual_symbolic",
    "multiple_representations"
   ],
   "feedback": [
    "corrective"
   ]
  },
  "conceptual.fluency": {
   "pedagogy": [
    "dialogic"
   ],
   "hits": [
    "questioning",
    "multiple_exposures"
   ],
   "practice": [
    "retrieval",
    "spacing",
    "deliberate"
   ],
   "differentiation": [
    "readiness"
   ],
   "assessment": [
    "whiteboards"
   ],
   "scaffolding": [
    "prompt_fade"
   ],
   "representation": [
    "examples_nonexamples",
    "multiple_representations",
    "dynamic_model"
   ],
   "feedback": [
    "efficiency"
   ]
  },
  "conceptual.generalisation": {
   "pedagogy": [
    "dialogic"
   ],
   "hits": [
    "questioning",
    "collaborative"
   ],
   "practice": [
    "variation",
    "interleaving"
   ],
   "differentiation": [
    "tiered"
   ],
   "assessment": [
    "transfer_probe"
   ],
   "scaffolding": [
    "prompt_fade"
   ],
   "representation": [
    "multiple_representations",
    "dynamic_model",
    "examples_nonexamples"
   ],
   "feedback": [
    "strategic"
   ]
  },
  "conceptual.adaptation": {
   "pedagogy": [
    "guided_inquiry",
    "dialogic",
    "problem_based"
   ],
   "hits": [
    "questioning",
    "metacognitive",
    "collaborative"
   ],
   "practice": [
    "open_problem"
   ],
   "differentiation": [
    "extension",
    "choice"
   ],
   "assessment": [
    "rubric"
   ],
   "scaffolding": [
    "productive_struggle"
   ],
   "representation": [
    "examples_nonexamples",
    "multiple_representations",
    "dynamic_model"
   ],
   "feedback": [
    "reflective"
   ]
  },
  "procedural.acquisition": {
   "pedagogy": [
    "explicit_instruction"
   ],
   "hits": [
    "worked_examples",
    "goal_structure",
    "questioning"
   ],
   "practice": [
    "deliberate"
   ],
   "differentiation": [
    "preteach"
   ],
   "assessment": [
    "diagnostic",
    "exit_ticket"
   ],
   "scaffolding": [
    "chunking",
    "reduce_load",
    "prompt_fade"
   ],
   "representation": [
    "concrete_visual_symbolic"
   ],
   "feedback": [
    "corrective",
    "efficiency"
   ]
  },
  "procedural.fluency": {
   "pedagogy": [
    "explicit_instruction"
   ],
   "hits": [
    "worked_examples",
    "multiple_exposures"
   ],
   "practice": [
    "deliberate",
    "retrieval",
    "spacing"
   ],
   "differentiation": [
    "readiness"
   ],
   "assessment": [
    "whiteboards"
   ],
   "scaffolding": [
    "prompt_fade"
   ],
   "representation": [
    "examples_nonexamples"
   ],
   "feedback": [
    "efficiency"
   ]
  },
  "procedural.generalisation": {
   "pedagogy": [
    "explicit_instruction",
    "dialogic"
   ],
   "hits": [
    "worked_examples"
   ],
   "practice": [
    "variation",
    "interleaving",
    "deliberate"
   ],
   "differentiation": [
    "tiered"
   ],
   "assessment": [
    "transfer_probe"
   ],
   "scaffolding": [
    "prompt_fade"
   ],
   "representation": [
    "examples_nonexamples",
    "multiple_representations"
   ],
   "feedback": [
    "strategic",
    "efficiency"
   ]
  },
  "procedural.adaptation": {
   "pedagogy": [
    "problem_based",
    "explicit_instruction"
   ],
   "hits": [
    "metacognitive",
    "collaborative"
   ],
   "practice": [
    "open_problem",
    "deliberate"
   ],
   "differentiation": [
    "extension",
    "choice"
   ],
   "assessment": [
    "rubric"
   ],
   "scaffolding": [
    "prompt_fade",
    "productive_struggle"
   ],
   "representation": [
    "multiple_representations"
   ],
   "feedback": [
    "reflective",
    "strategic"
   ]
  },
  "conditional.acquisition": {
   "pedagogy": [
    "dialogic",
    "explicit_instruction"
   ],
   "hits": [
    "worked_examples",
    "goal_structure",
    "questioning"
   ],
   "practice": [
    "interleaving"
   ],
   "differentiation": [
    "readiness"
   ],
   "assessment": [
    "hinge",
    "transfer_probe",
    "exit_ticket"
   ],
   "scaffolding": [
    "chunking",
    "reduce_load"
   ],
   "representation": [
    "examples_nonexamples"
   ],
   "feedback": [
    "strategic",
    "corrective"
   ]
  },
  "conditional.fluency": {
   "pedagogy": [
    "dialogic"
   ],
   "hits": [
    "multiple_exposures"
   ],
   "practice": [
    "retrieval",
    "interleaving",
    "spacing"
   ],
   "differentiation": [
    "readiness"
   ],
   "assessment": [
    "hinge",
    "whiteboards",
    "transfer_probe"
   ],
   "scaffolding": [
    "prompt_fade"
   ],
   "representation": [
    "examples_nonexamples"
   ],
   "feedback": [
    "strategic",
    "efficiency"
   ]
  },
  "conditional.generalisation": {
   "pedagogy": [
    "dialogic"
   ],
   "hits": [
    "metacognitive",
    "collaborative"
   ],
   "practice": [
    "interleaving",
    "variation"
   ],
   "differentiation": [
    "tiered"
   ],
   "assessment": [
    "transfer_probe",
    "rubric",
    "hinge"
   ],
   "scaffolding": [
    "prompt_fade"
   ],
   "representation": [
    "examples_nonexamples",
    "multiple_representations"
   ],
   "feedback": [
    "strategic"
   ]
  },
  "conditional.adaptation": {
   "pedagogy": [
    "problem_based"
   ],
   "hits": [
    "metacognitive"
   ],
   "practice": [
    "open_problem",
    "interleaving"
   ],
   "differentiation": [
    "choice",
    "extension"
   ],
   "assessment": [
    "hinge",
    "transfer_probe",
    "rubric"
   ],
   "scaffolding": [
    "productive_struggle"
   ],
   "representation": [
    "examples_nonexamples"
   ],
   "feedback": [
    "strategic",
    "reflective"
   ]
  }
 }
});
