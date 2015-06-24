var slides = [

  {
    feature: true,
    content: "<h1>Crash Course: JavaScript</h1>"
  },
  {
    p: [
      "<h2>My name is <span class='blue'>Kyle Hill</span>.</h2>",
      "<h2>I am an instructor at <span class='blue'>The Iron Yard</span> here in Washington DC.</h2>",
      "<h2>I teach the <span class='blue'>front-end engineering</span> intensive course.</h2>"
    ]
  },
  {
    title: "What is Front-End Engineering?",
    p: [
      "Back-end engineering is the science of facilitating communication between systems with precision and efficiency.",
      "<span class='blue'>Front-end engineering is the science of creating, optimizing, and perfecting an interface between a human being and a computer.</span>",
      "We choose to practice this science in the context of a web page."
    ]
  },
  {
    title: "Separation of Responsibilities",
    content: "There are only three languages understood by every web browser when it retrieves and renders a web page. Each is responsible for a different facet of the user's perception.",
    ul: [ 
      "<strong>HTML</strong>: Content",
      "<strong>CSS</strong>: Presentation",
      "<span class='blue'><strong>JavaScript</strong>: Interaction</span>",
    ]
  },
  {
    title: "Understanding the Pieces",
    p: [
      "HTML and CSS are not programming languages - they're coding formats.",
      "<span class='blue'>JavaScript is a programming language</span>, and just as powerful as Ruby or Java or C++ or any other back-end language."
    ]
  },
  {
    feature: true,
    content: "<h1>Learning to program is hard.</h1>"
  },
  {
    title: "Why is programming hard?",
    ul: [
      "<strong>Syntax</strong>: Writing precise, parsable commands",
      "<strong>Abstraction</strong>: Understanding and implementing 'simple' things with complexity",
      "<strong>Genericization</strong>: Making code reusable with varying inputs",
      "<strong>Problem decomposition</strong>: Building the mental models that enable translation of business logic and fuzzy concepts into smaller, programmable parts",
      "<strong>Algorithmic efficiency</strong>: Optimizing instruction execution for speed"
    ]
  },
  {
    title: "Benefits of JavaScript",
    ul: [
      "Simple, readable syntax and data structures",
      "Easy to experiment with",
      "No programming environment setup",
      "Surprisingly modern type system with first-class functions",
      "Ubiquity and popularity"
    ]
  },
  {
    title: "JavaScript's hilariously terrible reputation",
    ul: [
      "JS was created by one guy, over nine days, in 1995",
      "<span class='blue'>JavaScript: The Good Parts</span> is a very small book",
      "JS \"uses\" semicolons but it's more efficient if you don't write them yourself",
      "The standards body that administers JavaScript no longer legally exists",
      "I've had to use the word \"truthiness\" in serious professional conversation more times that I can count"
    ]
  },
  {
    title: "Variables",
    p: [
      "Programming is fundamentally about the manipulation of <span class='blue'>variables</span>. A variable is a named container in memory that holds a value.",
      "Use the keyword <span class='blue'>var</span> to \"declare\" new variables.",
      "Use <span class='blue'>=</span> to assign the value on the right to the variable on the left.",
      "(Most) variable names are meaningless, except for the meaning you give to it.",
    ]
  },
  {
    title: "Variables",
    content: "All variables are <span class='blue'>mutable</span>; they can be changed at any time to any type of value.",
    code: [
      "var myNumber = 42",
      "var yourNumber = 17",
      "myNumber = 100"
    ]
  },
  {
    title: "Basic Types",
    content: "JavaScript has six <span class='blue'>types</span> of variables. Three of them are straightforward:",
    ul: [
      "<strong>Numbers</strong>: Positive and negative, integers and decimals",
      "<strong>Strings</strong>: Collections of characters",
      "<strong>Booleans</strong>: <span class='blue'>true</span> or <span class='blue'>false</span>"
    ]
  },
  {
    title: "Basic Types",
    code: [
      "var someNumber = 5",
      "var someString = \"Hello, world!\"",
      "var emojisIsStringsToo =  \"🔥🔥🔥\"",
      "var isJavaScriptRelatedToJava = false"
    ]
  },
  {
    title: "Expressions",
    p: [
      "<span class='blue'>Expressions</span> are simple procedures done to variables and/or values.",
      "The values in any underlying variables are not changed.",
      "Expressions are commonly used to calculate values to assign to variables."
    ]
  },
  {
    title: "Expressions",
    code: [
      "var stringConcatenation = \"Java\" + \"Script\"",
      "var funkyMath = (2 / ((13 * 17) - 5)) + 821",
      "var a = 10",
      "var b = 25",
      "var c = (a + b)"
    ]
  },
  {
    title: "Comparisons",
    p: [
      "To compare two values, use <span class='blue'>===</span> for equality.",
      "Use <span class='blue'>!==</span> for absolute inequality.",
      "Use <span class='blue'>&gt;</span>, <span class='blue'>&gt;=</span>, <span class='blue'>&lt;=</span>, or <span class='blue'>&lt;</span> for comparative inequality.",
      "The result of any comparison expression will be either <span class='blue'>true</span> or <span class='blue'>false</span>.",
    ]
  },
  {
    title: "Code Blocks",
    p: [
      "<span class='blue'>Code blocks</span> are sections of code that may be skipped, or may be executed multiple times.",
      "Code blocks are surrounded by curly braces -- <span class='blue'>{ }</span>.",
      "All code blocks have preconditions, which determine whether or not to execute the code inside of it (and how many times)."
    ]
  },
  {
    title: "Code Blocks: <em>if</em>/<em>else</em>",
    code: [
      "var someVariable = \"someValue\"",
      "if (someVariable === \"someValue\") {",
      "  // do some stuff",
      "}",
      "else {",
      "  // do something else",
      "}"
    ]
  },
  {
    title: "Code Blocks: <em>while</em>",
    code: [
      "var kylesAge = 31",
      "while (kylesAge > 0) {",
      "  console.log('kyle is old')",
      "  kylesAge = kylesAge - 1",
      "}"
    ]
  },
  {
    title: "Functions",
    p: [
      "<em>Functions</em> are specific blocks of code that are defined so that they can be execute at an arbitrary, later time.",
      "Functions should be generic and reusable.",
      "Function definitions can be stored to variables, and executed later.",
    ]
  },
  {
    title: "Functions",
    code: [
      "var sayHello = function() {",
      "  console.log(\"Hello!\")",
      "}",
      "",
      "sayHello()"
    ]
  },
  {
    title: "Functions",
    p: [
      "<em>Developing a proper and complete understanding of functions is the most important part of learning programming.</em>",
      "(Conveniently, it's also one of the hardest parts.)"
    ]
  },
  {
    title: "Functions: Parameters",
    p: [
      "Functions can accept one or more <em>parameters</em>, which are passed in to the function at the time of its execution.",
      "All functions should be written so as to operate correctly, given <em>any</em> parameter(s).",
    ]
  },
  {
    title: "Functions: Parameters",
    code: [
      "var sayHello = function(name) {",
      "  console.log(\"Hello,\" + name + \"!\")",
      "}",
      "",
      "sayHello(\"Kyle\")",
      "sayHello(\"Su\")",
    ]
  },
  {
    title: "Functions: Returning Values",
    p: [
      "Functions can <em>return</em> a single value, which can be stored to a variable or used by something else.",
      "A function that encounters a return statement <em>immediately</em> halts execution and returns that value, going no further."
    ]
  },
  {
    title: "Functions: Returning Values",
    code: [
      "var doubleUnderTen = function(num) {",
      "  if (num < 10) {",
      "    return (num * 2)",
      "  }",
      "  return num",
      "}",
      "",
      "doubleUnderTen(5)",
      "doubleUnderTen(14)",
    ]
  },
  {
    title: "Advanced Topics",
    ul: [
      "Complex variable types: <em>arrays</em> and <em>objects</em>",
      "Iterating over complex values",
      "Interaction with the HTML",
      "Classes and object-oriented programming",
      "<em>node.js</em>"
    ]
  },
  {
    title: "Final Thoughts",
    content: "Still want to learn to code?",
    ul: [
      "Be timorous",
      "Be joyful",
      "Be explorative"
    ]
  },
  {
    feature: true,
    content: "<h2><em>Thanks!</em></h2>@kylehill on Twitter/GitHub/Gmail"
  },
  {
    feature: true,
    intentionally_left_blank: "oh yeah"
  }
]