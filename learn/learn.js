const STORAGE_KEYS = {
  completed: "markup-school.completed.v1",
  challenges: "markup-school.challenges.v1",
  bookmarks: "markup-school.bookmarks.v1",
  notes: "markup-school.notes.v1",
  quizzes: "markup-school.quizzes.v1",
  theme: "markup-school.theme.v1",
  current: "markup-school.current.v1",
};

const curriculum = [
  {
    name: "Start here",
    lessons: [
      {
        id: "lesson-01",
        title: "Meet HTML",
        kicker: "Chapter 01 · The big idea",
        mark: "</>",
        objective: "Understand what HTML does, how a browser reads a page, and where your first document fits in.",
        body: `
          <p>HTML stands for <strong>HyperText Markup Language</strong>. It is the language we use to describe the content and structure of a web page. A heading is a heading. A list is a list. A link tells you where you can go next.</p>
          <p>HTML isn't a programming language: it doesn't give the browser a list of instructions to calculate. Instead, it <em>marks up</em> content with meaning. The browser reads that meaning and turns it into the page you see.</p>
          <p>A website usually brings three ingredients together: HTML for structure, CSS for presentation, and JavaScript for behavior. You are learning the foundation—the part that still matters when a page is restyled, viewed on a phone, or read aloud by assistive technology.</p>
        `,
        code: `<!-- A tiny piece of HTML -->
<h1>Hello, curious world!</h1>
<p>I'm making my first web page.</p>
<a href="https://example.com">A link to somewhere new</a>`,
        hint: "Try reading the example out loud: each tag describes the job of the content inside it.",
        callout: "<strong>The browser is your audience.</strong> It takes your document, works out what each piece means, and presents it on a screen—or to another kind of device.",
        takeaway: "HTML gives content structure and meaning. Tags describe what something is, not how it should look.",
        quiz: {
          question: "What is HTML mainly responsible for?",
          options: [
            { label: "Describing the structure and meaning of page content", correct: true, feedback: "Exactly. HTML gives page content a meaningful structure." },
            { label: "Choosing every color and animation on a page", feedback: "That is mainly CSS's job. HTML describes the content and its structure." },
            { label: "Running calculations on a server", feedback: "That describes server-side programming. HTML marks up content for a browser." },
          ],
        },
      },
      {
        id: "lesson-02",
        title: "Your first document",
        kicker: "Chapter 02 · A page from scratch",
        mark: "<!>",
        objective: "Put together the small set of pieces every modern HTML document needs.",
        body: `
          <p>A complete HTML file has two big areas. The <code>&lt;head&gt;</code> holds information <em>about</em> the page; the <code>&lt;body&gt;</code> holds the things people can read and use. Both live inside the <code>&lt;html&gt;</code> element.</p>
          <p>The doctype is a short declaration that tells browsers to use modern, standards-based rendering. The document's language helps screen readers pronounce the words correctly and helps translation tools know what they are looking at.</p>
          <p>Try this: open a plain-text editor, save the snippet as <code>index.html</code>, and open the file in your browser. You have just made a web page.</p>
        `,
        code: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My very first page</title>
  </head>
  <body>
    <h1>Hello, web!</h1>
    <p>This little page belongs to me.</p>
  </body>
</html>`,
        hint: "Change the words inside <title> and <h1>. Save the file and see where each one appears.",
        callout: "<strong>Two useful head essentials:</strong> the character encoding handles text correctly, and the viewport setting helps a page fit a phone screen.",
        takeaway: "Start every page with a doctype, a language, a head with a title, and a body for visible content.",
        quiz: {
          question: "Where does the page title that appears on a browser tab belong?",
          options: [
            { label: "Inside <body>", feedback: "The body holds the page's visible content. The browser-tab title belongs in the head." },
            { label: "Inside <head>, using the <title> element", correct: true, feedback: "Right. The title describes the document and appears in the browser tab." },
            { label: "Inside the doctype declaration", feedback: "The doctype only tells the browser which rendering standard to use." },
          ],
        },
      },
      {
        id: "lesson-03",
        title: "Tags, elements & attributes",
        kicker: "Chapter 03 · Learn the grammar",
        mark: "<h>",
        objective: "Tell a tag from an element, read an attribute, and understand why nesting matters.",
        body: `
          <p>Most HTML elements have an <strong>opening tag</strong>, some content, and a <strong>closing tag</strong>. Together, those pieces make an element: <code>&lt;p&gt;A thought.&lt;/p&gt;</code>. The slash in the closing tag says, “this part ends here.”</p>
          <p>Tags can hold <strong>attributes</strong>—extra details written in the opening tag. An attribute has a name and a value: <code>href="https://example.com"</code> tells a link where to go.</p>
          <p>Elements fit inside other elements to build a hierarchy. Indenting each level makes that structure much easier to understand. Some elements, like <code>&lt;img&gt;</code>, don't wrap content and have no closing tag.</p>
        `,
        code: `<article>
  <h2>One little article</h2>
  <p>Read about <a href="https://example.com">something lovely</a>.</p>
  <img src="garden.jpg" alt="Daisies in a sunny garden">
</article>`,
        hint: "Indent nested content by two spaces. If an element opens, make sure it closes in the reverse order.",
        callout: "<strong>A helpful way to read a tag:</strong> <code>&lt;a href=\"...\"&gt;</code> says “this is a link” and also supplies the link's destination.",
        takeaway: "Tags mark boundaries, elements form the structure, and attributes add details to the opening tag.",
        quiz: {
          question: "Which part of <a href=\"/about\">About us</a> is an attribute?",
          options: [
            { label: "The word About", feedback: "That is the link's visible text, not an attribute." },
            { label: "href=\"/about\"", correct: true, feedback: "Correct. The href attribute provides the link's destination." },
            { label: "</a>", feedback: "That is the closing tag. Attributes appear inside the opening tag." },
          ],
        },
      },
    ],
  },
  {
    name: "Shape your story",
    lessons: [
      {
        id: "lesson-04",
        title: "Words with structure",
        kicker: "Chapter 04 · Make words make sense",
        mark: "Aa",
        objective: "Build a readable page with headings, paragraphs, emphasis, quotations, and the right heading order.",
        body: `
          <p>Headings are an outline for your page. Begin with a single, clear <code>&lt;h1&gt;</code> that describes the page; use <code>&lt;h2&gt;</code> for main sections and <code>&lt;h3&gt;</code> for a subsection within one of them.</p>
          <p>Choose a heading because of its place in the outline, not because of how large it looks. CSS can change the appearance later. Skipping straight from an <code>&lt;h1&gt;</code> to an <code>&lt;h4&gt;</code> creates a confusing outline for people using screen readers.</p>
          <p>Use <code>&lt;strong&gt;</code> when text is especially important and <code>&lt;em&gt;</code> when a spoken sentence would deserve emphasis. Add paragraphs for complete ideas, and quote someone with <code>&lt;blockquote&gt;</code> when their words deserve their own passage.</p>
        `,
        code: `<article>
  <h1>A little field guide to ferns</h1>
  <p>Ferns are <em>quietly remarkable</em> plants.</p>
  <h2>Where they like to grow</h2>
  <p>Many ferns prefer a shady, damp corner.</p>
  <blockquote>A fern unfurls its leaves like a tiny green scroll.</blockquote>
</article>`,
        hint: "Try to read only the headings on your page. Do they make a clear, useful outline?",
        callout: "<strong>Don't choose headings for their size.</strong> That is a styling choice; the heading level tells everyone where the section fits.",
        takeaway: "Give each page one clear main heading, then arrange section headings in a logical, unbroken order.",
        quiz: {
          question: "Why should you choose a heading level?",
          options: [
            { label: "For its place in the page outline", correct: true, feedback: "Exactly. Heading levels communicate a meaningful outline." },
            { label: "For the font size it gives you by default", feedback: "Default appearance varies. Choose a level for the document outline, then style it with CSS." },
            { label: "To make a sentence look more important to a search engine", feedback: "Heading structure helps people and tools understand a page, but levels aren't a search-engine styling trick." },
          ],
        },
      },
      {
        id: "lesson-05",
        title: "Lists that help",
        kicker: "Chapter 05 · Give ideas a little order",
        mark: "1·",
        objective: "Choose an ordered, unordered, or description list and nest its items cleanly.",
        body: `
          <p>If the order doesn't matter, use an unordered list: <code>&lt;ul&gt;</code> holds the list and each <code>&lt;li&gt;</code> is an item. It's a natural fit for ingredients, favorite places, or a few good ideas.</p>
          <p>When sequence matters—recipe steps, instructions, rankings—reach for <code>&lt;ol&gt;</code>. The browser can number the items for you, and it keeps the structure meaningful even if the styling changes.</p>
          <p>A <code>&lt;dl&gt;</code> groups terms with descriptions. It can describe a set of abbreviations, features, or names and meanings. Use the list that matches the actual relationship between the items.</p>
        `,
        code: `<h2>Weekend picnic basket</h2>
<ul>
  <li>Soft bread</li>
  <li>Peaches and cherries</li>
  <li>A little jar of honey</li>
</ul>

<h2>Make a cup of tea</h2>
<ol>
  <li>Warm the water.</li>
  <li>Steep the leaves for four minutes.</li>
  <li>Pour, breathe, enjoy.</li>
</ol>`,
        hint: "Try moving the second step to the top. With an ordered list, the numbered sequence still reads correctly.",
        callout: "<strong>Avoid using list tags just to get bullets or numbers.</strong> Use a list when the items really belong together as a group.",
        takeaway: "Choose <code>&lt;ul&gt;</code> when order doesn't matter and <code>&lt;ol&gt;</code> when it does.",
        quiz: {
          question: "Which list is the best fit for numbered instructions?",
          options: [
            { label: "<ul>, because it makes a group", feedback: "A <ul> groups items whose order doesn't matter. Instructions have a sequence." },
            { label: "<ol>, because the sequence matters", correct: true, feedback: "Yes. An ordered list communicates the meaningful step-by-step order." },
            { label: "<dl>, because each step needs a description", feedback: "A description list pairs terms and descriptions, not ordered steps." },
          ],
        },
      },
      {
        id: "lesson-06",
        title: "Links & the open web",
        kicker: "Chapter 06 · Make a connection",
        mark: "↗",
        objective: "Link useful words to another page, make a jump within a page, and use link text that makes sense.",
        body: `
          <p>Links are what make the web a web. The <code>&lt;a&gt;</code> element, short for “anchor,” makes a link; its <code>href</code> attribute gives a destination. Wrap meaningful words in the link—people often jump between links without reading everything around them.</p>
          <p>A URL starting with a slash points to another place on the same site. A URL starting with <code>#</code> jumps to an element with a matching <code>id</code>. A full URL, starting with a scheme like <code>https://</code>, points elsewhere on the web.</p>
          <p>Opening a new tab is rarely necessary. When you do use <code>target="_blank"</code>, add <code>rel="noopener"</code>. A link should be for navigating somewhere; use a button for doing something.</p>
        `,
        code: `<nav aria-label="On this page">
  <a href="#ingredients">Skip to ingredients</a>
</nav>

<p>Learn a little more about
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
    the HTML standard
  </a>.
</p>

<h2 id="ingredients">A very short ingredient list</h2>`,
        hint: "Imagine seeing only the links on this page. Could you tell where each one goes?",
        callout: "<strong>“Click here” isn't a very good signpost.</strong> A descriptive link like “read our shipping guide” sets a much clearer expectation.",
        takeaway: "Write links that make sense on their own, and reserve buttons for actions rather than navigation.",
        quiz: {
          question: "Which link text gives a reader the clearest clue?",
          options: [
            { label: "Click here", feedback: "This doesn't say where the link leads, especially out of context." },
            { label: "More", feedback: "This is short, but vague without the surrounding text." },
            { label: "Read our guide to choosing a houseplant", correct: true, feedback: "Exactly. Descriptive link text explains its destination and purpose." },
          ],
        },
      },
    ],
  },
  {
    name: "Bring in the details",
    lessons: [
      {
        id: "lesson-07",
        title: "Images with purpose",
        kicker: "Chapter 07 · Make every pixel count",
        mark: "◉",
        objective: "Add an image with a real source, write useful alt text, and understand when an image is decorative.",
        body: `
          <p>The <code>&lt;img&gt;</code> element adds an image. Give it a <code>src</code> that points to the image and an <code>alt</code> that conveys what it contributes. The alt text is there for people who can't see the image and for moments when an image doesn't load.</p>
          <p>Describe what a person needs from <em>this page</em>, not every detail you can see. If the image is purely decorative and the same meaning is already in nearby text, use an empty alt—<code>alt=""</code>. Don't leave the attribute out.</p>
          <p>Images need room to load gracefully. Include the image's real dimensions when you know them, and consider <code>loading="lazy"</code> for large images further down the page.</p>
        `,
        code: `<figure>
  <img
    src="garden-path.jpg"
    alt="A winding stone path through a fern garden"
    width="960"
    height="640"
    loading="lazy"
  >
  <figcaption>The path through the old fern garden.</figcaption>
</figure>

<!-- An image that adds no new information: -->
<img src="small-flourish.svg" alt="">`,
        hint: "Try hiding the image and reading its alt text. Would you still know the part of the story that matters?",
        callout: "<strong>Alt text is not an image caption.</strong> A caption is visible to everyone and can offer context; alt text is a brief text alternative.",
        takeaway: "Every informative image deserves useful alt text. Decorative images get an empty alt, never a missing one.",
        quiz: {
          question: "What should alt text do for an informative image?",
          options: [
            { label: "Describe the image's useful meaning in context", correct: true, feedback: "Correct. A good alternative carries the image's relevant meaning into text." },
            { label: "List every object that appears in the photograph", feedback: "A full inventory may be unnecessary. Include what someone needs to understand this page." },
            { label: "Repeat the file name so it can be found", feedback: "File names rarely make a useful text alternative. Describe the image's purpose instead." },
          ],
        },
      },
      {
        id: "lesson-08",
        title: "Tables for real data",
        kicker: "Chapter 08 · Let the rows tell a story",
        mark: "▦",
        objective: "Use a table to compare information, with row and column headings that assistive technology can understand.",
        body: `
          <p>A table is for information that belongs in a two-dimensional grid—things you want to compare by row and column. It isn't a shortcut for arranging the visual layout of an entire page.</p>
          <p>Start with <code>&lt;table&gt;</code>. Give the table a short <code>&lt;caption&gt;</code>. Place column or row labels in <code>&lt;th&gt;</code> cells and ordinary values in <code>&lt;td&gt;</code> cells. Add <code>scope="col"</code> or <code>scope="row"</code> so the relationship is clear.</p>
          <p>Even a small table is worth labeling well. A person using a screen reader should be able to tell what a cell means without guessing which heading goes with it.</p>
        `,
        code: `<table>
  <caption>Plants in the sunny window</caption>
  <thead>
    <tr>
      <th scope="col">Plant</th>
      <th scope="col">Water day</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Pilea</th>
      <td>Monday</td>
    </tr>
    <tr>
      <th scope="row">Little cactus</th>
      <td>Friday</td>
    </tr>
  </tbody>
</table>`,
        hint: "Follow a cell across its row, then up its column. Does its meaning stay clear?",
        callout: "<strong>If your information is a list rather than a grid, use a list.</strong> Save tables for genuine relationships between rows and columns.",
        takeaway: "Give real data tables a caption and correctly identified header cells so the relationships are clear.",
        quiz: {
          question: "When is an HTML table a good choice?",
          options: [
            { label: "When you need two columns to line up on a page", feedback: "That is a layout problem for CSS. Don't use a data table just to line things up." },
            { label: "When readers need to compare related information in rows and columns", correct: true, feedback: "Right. Tables express real row-and-column relationships in data." },
            { label: "Whenever a page has a long list of things", feedback: "A list is usually clearer for a collection without a two-dimensional relationship." },
          ],
        },
      },
      {
        id: "lesson-09",
        title: "Forms that invite people in",
        kicker: "Chapter 09 · Start a conversation",
        mark: "⌕",
        objective: "Create a usable form with explicit labels, the right input type, and a helpful submit button.",
        body: `
          <p>A form lets a person give information. Every control needs an understandable <code>&lt;label&gt;</code>. Connect it with the input's <code>id</code> and the label's matching <code>for</code> value; this gives the input a clear name and makes its label easy to tap.</p>
          <p>Choose a helpful input type. An <code>email</code> input gets a useful keyboard on phones; a <code>textarea</code> suits a longer message. Keep placeholder text as a hint—not the only label, since a placeholder disappears as people type.</p>
          <p>A form needs a submit button. The browser includes useful built-in checks, like verifying that a required email field looks like an email address. It makes the experience smoother, but a real website should also check important information on its server.</p>
        `,
        code: `<form action="/newsletter" method="post">
  <label for="email">Your email address</label>
  <input
    id="email"
    name="email"
    type="email"
    autocomplete="email"
    required
  >
  <button type="submit">Send me the field notes</button>
</form>`,
        hint: "Click the label, not the input. If the input gets focused, your label is properly connected.",
        callout: "<strong>A label is not a placeholder.</strong> Keep a real, visible label so people can remember what belongs in the field while they type.",
        takeaway: "Label every form control, use an input type that matches the answer, and make the main action obvious.",
        quiz: {
          question: "How do a label and its input get connected?",
          options: [
            { label: "Give the label's for and the input's id the same value", correct: true, feedback: "Yes. Matching for and id values create an explicit, accessible association." },
            { label: "Put a placeholder in the input", feedback: "A placeholder is a hint, not a label—and it doesn't connect the two elements." },
            { label: "Give both elements the same class name", feedback: "Classes are useful for CSS but do not programmatically label an input." },
          ],
        },
      },
    ],
  },
  {
    name: "Build for everyone",
    lessons: [
      {
        id: "lesson-10",
        title: "Semantic landmarks",
        kicker: "Chapter 10 · Give your page a map",
        mark: "⌖",
        objective: "Use the landmarks that help a person, a browser, and assistive technology make sense of a whole page.",
        body: `
          <p>Semantic elements tell you what a region <em>does</em>. An opening can be a <code>&lt;header&gt;</code>; a useful collection of links is a <code>&lt;nav&gt;</code>; the central, unique part of a page is <code>&lt;main&gt;</code>; and a concluding region is a <code>&lt;footer&gt;</code>.</p>
          <p>Use <code>&lt;article&gt;</code> for a piece that makes sense on its own—a post or a recipe. Use <code>&lt;section&gt;</code> for a themed group that usually deserves a heading. Neither is a fancy replacement for every generic box.</p>
          <p>These elements help a screen reader offer a map of a page, and they make your code easier for another person to understand. You get meaning and navigation without writing any extra code.</p>
        `,
        code: `<body>
  <header>
    <a href="/">The little seed library</a>
    <nav aria-label="Main navigation">
      <a href="/seeds">Seeds</a>
      <a href="/about">About</a>
    </nav>
  </header>
  <main>
    <article>
      <h1>A pocket-sized spring garden</h1>
      <p>One packet of seeds, one sunny windowsill.</p>
    </article>
  </main>
  <footer><p>Grown with care, together.</p></footer>
</body>`,
        hint: "Ask what each region is for. If you have an answer like “the main content,” there may be an element with that meaning.",
        callout: "<strong>Use one <code>&lt;main&gt;</code> for the primary content of a page.</strong> If you have several navigation regions, give each a helpful label.",
        takeaway: "Pick an element for its meaning: make the page easy to navigate and easy to understand.",
        quiz: {
          question: "Which element wraps the unique, central content of a page?",
          options: [
            { label: "<main>", correct: true, feedback: "That's it. The main element marks the primary, unique content." },
            { label: "<aside>", feedback: "An aside is content that's related to, but separate from, the main content." },
            { label: "<nav>", feedback: "A nav groups major navigation links. It isn't the page's main content." },
          ],
        },
      },
      {
        id: "lesson-11",
        title: "Accessibility, by design",
        kicker: "Chapter 11 · Make a bigger welcome",
        mark: "✳",
        objective: "Use thoughtful labels, keyboard-friendly native controls, and text alternatives to welcome more people.",
        body: `
          <p>Accessible HTML is the beginning of a more usable web. A person may be navigating without a mouse, using a screen reader, zooming text, or processing a busy page in their own way. A sound HTML foundation helps with all of these.</p>
          <p>Use a real <code>&lt;button&gt;</code> for an action and a real <code>&lt;a&gt;</code> for a destination. Both can receive keyboard focus by default. Write useful alternative text for informative images, connect form labels, and make sure headings form a sensible outline.</p>
          <p>Don't remove a visible focus indicator unless you replace it with an equally visible one. Native HTML elements come with useful behavior built in—it's worth using that instead of recreating it with a generic <code>&lt;div&gt;</code>.</p>
        `,
        code: `<button type="button" aria-expanded="false">
  Show growing tips
</button>

<img
  src="first-leaf.jpg"
  alt="The first new leaf on a young basil plant"
>

<a href="/accessible-gardening">
  Read the accessible gardening guide
</a>`,
        hint: "Put your mouse aside. Press Tab, Shift+Tab, Enter, and Space—can you find and use every control?",
        callout: "<strong>Semantic HTML is an accessibility tool.</strong> Native elements announce what they are and come with the keyboard behavior people expect.",
        takeaway: "Start with meaningful native HTML; add a clear name and a complete keyboard path to every control.",
        quiz: {
          question: "What is a reliable starting point for an accessible interactive control?",
          options: [
            { label: "A clickable <div> with no other behavior", feedback: "A generic div doesn't provide a button's keyboard or assistive technology behavior by default." },
            { label: "A native button, given a clear name", correct: true, feedback: "Correct. A button already has useful keyboard and interaction behavior built in." },
            { label: "An image with text printed inside it", feedback: "An image can't replace a keyboard-operable control with a meaningful accessible name." },
          ],
        },
      },
      {
        id: "lesson-12",
        title: "Audio & video",
        kicker: "Chapter 12 · Give media a thoughtful home",
        mark: "▷",
        objective: "Add native audio or video controls and make media usable even when it can't be seen or heard.",
        body: `
          <p>The <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> elements let browsers play media without an extra plug-in. Add <code>controls</code> so people can start, pause, adjust, or replay it on their own terms.</p>
          <p>Include a <code>&lt;source&gt;</code> for the media file. A useful message between the opening and closing tags becomes a fallback for older browsers. For video, provide synchronized captions with <code>&lt;track kind="captions"&gt;</code>; offer a transcript and a description when people need them.</p>
          <p>Think before autoplaying. Unexpected sound or movement can be startling, distracting, or difficult to stop. Let people choose when the story starts.</p>
        `,
        code: `<video controls width="640" poster="seedling.jpg">
  <source src="planting-a-seed.mp4" type="video/mp4">
  <track
    kind="captions"
    src="planting-a-seed.en.vtt"
    srclang="en"
    label="English captions"
  >
  Your browser cannot play this video.
</video>`,
        hint: "Imagine following the video with the sound off. What text would help you understand what happened?",
        callout: "<strong>Give people control.</strong> Captions, transcripts, descriptions, and visible playback controls make media more welcoming.",
        takeaway: "Use native controls and offer alternatives so everyone can follow the information in your media.",
        quiz: {
          question: "What can a <track kind=\"captions\"> element provide for a video?",
          options: [
            { label: "Synchronized text for its audio", correct: true, feedback: "Yes. A captions track can provide synchronized spoken dialogue and relevant sounds." },
            { label: "A smaller video file", feedback: "A track adds timed text; it does not compress the video." },
            { label: "A description of every element on the page", feedback: "Captions describe a media timeline, not the entire page." },
          ],
        },
      },
    ],
  },
  {
    name: "Make it your own",
    lessons: [
      {
        id: "lesson-13",
        title: "A little page polish",
        kicker: "Chapter 13 · Help the web find your page",
        mark: "⌑",
        objective: "Add useful document metadata, choose a descriptive title, and make your page easier to share and understand.",
        body: `
          <p>The <code>&lt;head&gt;</code> is where you put information that describes a document. Give the page its own short, recognizable <code>&lt;title&gt;</code>; browsers use it in tabs, bookmarks, and many search results.</p>
          <p>A <code>&lt;meta name="description"&gt;</code> can summarize the page for a result or preview. A <code>link rel="icon"</code> can point to the small symbol for a tab. An Open Graph title and description can give a shared link a friendlier preview in other applications.</p>
          <p>Metadata doesn't replace a useful page. Describe what a person will actually find, use a unique title for each page, and keep the document's declared language accurate.</p>
        `,
        code: `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Growing basil indoors — The little seed library</title>
  <meta
    name="description"
    content="A gentle, step-by-step guide to a happy windowsill basil plant."
  >
  <meta property="og:title" content="Grow basil with us">
  <meta property="og:description" content="A tiny garden for a sunny sill.">
</head>`,
        hint: "Imagine this page in a list of ten browser tabs. Could its title help someone find it again?",
        callout: "<strong>Write for the human preview.</strong> A kind, honest description helps a person decide whether your page is the one they're looking for.",
        takeaway: "Keep the title and description accurate, memorable, and specific to the page.",
        quiz: {
          question: "Which element sets the descriptive name of a browser tab?",
          options: [
            { label: "<meta name=\"description\">", feedback: "A description summarizes the page. A separate element names its browser tab." },
            { label: "<title>", correct: true, feedback: "Exactly. The title gives the document its browser-tab name." },
            { label: "<h1>", feedback: "The h1 is the visible main heading in the page, not its browser-tab title." },
          ],
        },
      },
      {
        id: "lesson-14",
        title: "Useful native features",
        kicker: "Chapter 14 · Let the browser help",
        mark: "⊕",
        objective: "Put HTML's built-in interactive elements to work instead of rebuilding them by hand.",
        body: `
          <p>HTML has thoughtful little features ready to use. The <code>&lt;details&gt;</code> element reveals extra information on demand, with an always-visible <code>&lt;summary&gt;</code> to explain what's inside. It works with a keyboard and without JavaScript.</p>
          <p>The <code>&lt;time&gt;</code> element can pair human-friendly words with a machine-readable date. The <code>&lt;progress&gt;</code> element can describe the progress of a task when you give it a useful accessible name.</p>
          <p>Use a native element when its behavior matches what you need. You inherit useful browser and assistive technology support instead of trying to imitate it yourself.</p>
        `,
        code: `<details>
  <summary>What is a seed library?</summary>
  <p>A community collection where neighbors share seeds,
     tips, and good things that grow.</p>
</details>

<p>Next gathering:
  <time datetime="2026-04-18">April 18</time>
</p>

<label for="packing">Packing the seed envelopes</label>
<progress id="packing" value="6" max="10">6 of 10</progress>`,
        hint: "Try opening the details element without a mouse. The browser already knows how to do it.",
        callout: "<strong>Prefer the platform when you can.</strong> A native feature often gives you keyboard behavior, state, and accessibility without a custom script.",
        takeaway: "Use built-in HTML elements when their meaning and behavior fit the problem.",
        quiz: {
          question: "Which element creates a built-in, expandable disclosure?",
          options: [
            { label: "<details>, with a <summary>", correct: true, feedback: "That's right. A details element expands and collapses around its summary." },
            { label: "<span>, with a style attribute", feedback: "A styled span doesn't create any disclosure behavior." },
            { label: "<time>, with a datetime value", feedback: "Time describes dates and times; it isn't an expandable disclosure." },
          ],
        },
      },
      {
        id: "lesson-15",
        title: "Make something real",
        kicker: "Chapter 15 · Your first little launch",
        mark: "✦",
        objective: "Bring the course together in a tiny semantic page—and use the live playground to make it yours.",
        body: `
          <p>Now let's bring the pieces together. A simple page can have a header, an introduction, an article, a list, a descriptive link, and a footer. Keep each piece true to its purpose and keep the document easy to read.</p>
          <p>Your finished page doesn't have to be grand. Tell us about a place you love, share a recipe, list favorite books, or write a note to your future self. A clear idea, carefully marked up, is a real contribution to the web.</p>
          <p>Try the playground below. Edit the HTML and use “Run preview” to see the browser respond. Your work stays in this tab; nothing is sent to a server. Afterward, make a new file, paste in your version, and save it as <code>index.html</code>.</p>
        `,
        code: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>A little note from my corner of the web</title>
  </head>
  <body>
    <header><p>A little corner of the internet</p></header>
    <main>
      <article>
        <h1>Small things I love</h1>
        <p>Window light, warm bread, and good stories.</p>
        <ul><li>Walks after the rain</li><li>Notes from friends</li></ul>
      </article>
    </main>
    <footer><p>Made with care, by me.</p></footer>
  </body>
</html>`,
        hint: "Change the heading, add a memory to the list, or write a note about the person making this page—you.",
        callout: "<strong>HTML is a beginning, not a gate.</strong> You don't need anyone's permission to share your ideas, learn another layer, and make a little corner of the web.",
        takeaway: "Use clear structure, meaningful words, and a little curiosity. Then make the next page.",
        playground: true,
        quiz: {
          question: "What's a good next step after finishing this course?",
          options: [
            { label: "Keep practicing by making a small page about something I care about", correct: true, feedback: "Absolutely. Small real projects are a lovely way to keep learning." },
            { label: "Memorize every HTML element before building anything", feedback: "You can look up details as you go. Building gives you useful questions to answer." },
            { label: "Use headings only because they look big", feedback: "Choose elements for their meaning; CSS can make them look however you imagine." },
          ],
        },
      },
    ],
  },
];

const practiceTasks = {
  "lesson-01": {
    task: "Write a heading, a paragraph, and a descriptive link about a place you love.",
    hint: "Ask yourself what each piece of content is. Choose one meaningful element for each answer.",
  },
  "lesson-02": {
    task: "Create a complete HTML document and give its tab and page heading different titles.",
    hint: "The <title> belongs in the head; the visible <h1> belongs in the body.",
  },
  "lesson-03": {
    task: "Wrap a short story in an article, add a heading, and link one phrase to a destination.",
    hint: "Check that every opening tag has a matching closing tag and that the link has an href.",
  },
  "lesson-04": {
    task: "Outline an article about a hobby using one h1 and at least two sensibly nested sections.",
    hint: "Read the headings by themselves. They should tell a small, well-organized story.",
  },
  "lesson-05": {
    task: "Write a five-ingredient unordered list and a three-step ordered list for a simple recipe.",
    hint: "The ingredient order is optional; the cooking order is not.",
  },
  "lesson-06": {
    task: "Add a link to another website, then add a second link that jumps to a section on your page.",
    hint: "Give the section a unique id and use that id after a # in the second link's href.",
  },
  "lesson-07": {
    task: "Add one informative photo with useful alt text and one decorative image with an empty alt.",
    hint: "For each image, ask what someone who cannot see it needs to know on this page.",
  },
  "lesson-08": {
    task: "Create a small comparison table with a caption, two column headings, and two data rows.",
    hint: "Use th for headers, td for ordinary data, and scope to identify each header's direction.",
  },
  "lesson-09": {
    task: "Build a friendly signup form with a visible, connected email label and a submit button.",
    hint: "Make the label's for and the input's id identical; set type=email and add a name.",
  },
  "lesson-10": {
    task: "Restructure a plain page with a header, labeled navigation, one main, an article, and a footer.",
    hint: "Give each region the element that matches its purpose; keep the page's unique content in main.",
  },
  "lesson-11": {
    task: "Use only your keyboard to navigate a page. Add any labels, alt text, or focus styles it needs.",
    hint: "Press Tab and Shift+Tab. Every control should be reachable and its purpose understandable.",
  },
  "lesson-12": {
    task: "Mark up a short video with native playback controls and an English captions track.",
    hint: "Describe the caption file's URL, spoken language, and readable label in the track element.",
  },
  "lesson-13": {
    task: "Write a unique title and useful search description for a page you might publish.",
    hint: "Describe what someone actually finds on your page; make the title distinct and recognizable.",
  },
  "lesson-14": {
    task: "Add an expandable details element with a useful summary and a machine-readable date.",
    hint: "Make sure the summary still makes sense if the reader never opens the disclosure.",
  },
  "lesson-15": {
    task: "Build and preview a tiny page with a heading, a story, a list, one semantic landmark, and a descriptive link.",
    hint: "Read the page outline and links aloud; the structure should make sense without any styling.",
  },
};

const referenceItems = [
  { name: "html", category: "elements", description: "The root element. Put the page language here so browsers and assistive technology know how to read your content.", example: '<html lang="en">...</html>' },
  { name: "head", category: "elements", description: "Holds document metadata, linked resources, and the page title. Most of it is not shown as page content.", example: "<head><title>Garden notes</title></head>" },
  { name: "body", category: "elements", description: "Holds the page content presented to someone visiting your document.", example: "<body><main><h1>Hello, web!</h1></main></body>" },
  { name: "title", category: "elements", description: "Sets the document's name in browser tabs, bookmarks, and often search results.", example: "<title>Field notes from the garden</title>" },
  { name: "meta", category: "elements", description: "Provides information about a document, such as its text encoding, viewport, or description.", example: '<meta name="description" content="A gentle guide to garden birds.">' },
  { name: "link", category: "elements", description: "Connects the document to a related resource, commonly a stylesheet or site icon.", example: '<link rel="stylesheet" href="styles.css">' },
  { name: "h1", category: "elements", description: "The primary heading for the page's main topic. Use heading levels to build a meaningful outline.", example: "<h1>A small guide to big trees</h1>" },
  { name: "h2–h6", category: "elements", description: "Headings for successively nested sections. Select a level for its place in the outline, not its default size.", example: "<h2>Find the right tree</h2>" },
  { name: "p", category: "elements", description: "A paragraph of related prose.", example: "<p>Small changes can help a young tree thrive.</p>" },
  { name: "strong", category: "elements", description: "Marks text with strong importance, seriousness, or urgency.", example: "<p><strong>Always check</strong> before you prune.</p>" },
  { name: "em", category: "elements", description: "Adds stress emphasis to a word or phrase without replacing meaningful structure.", example: "<p>Choose the <em>right</em> season.</p>" },
  { name: "blockquote", category: "elements", description: "A longer quotation from another source. Keep a short inline quote in q instead.", example: "<blockquote><p>Look closely at what grows.</p></blockquote>" },
  { name: "ul", category: "elements", description: "An unordered list for a group of items whose sequence is not significant.", example: "<ul><li>Soil</li><li>Water</li></ul>" },
  { name: "ol", category: "elements", description: "An ordered list for items where sequence or ranking matters.", example: "<ol><li>Prepare</li><li>Plant</li></ol>" },
  { name: "li", category: "elements", description: "One item in an ordered or unordered list.", example: "<ul><li>Marigold seeds</li></ul>" },
  { name: "dl", category: "elements", description: "A list of terms and their descriptions, such as a small glossary.", example: "<dl><dt>Perennial</dt><dd>A plant that returns.</dd></dl>" },
  { name: "a", category: "elements", description: "A hyperlink to a destination. Its words should explain where the link leads.", example: '<a href="/visit">Plan your visit</a>' },
  { name: "img", category: "elements", description: "Embeds an image. Give informative images useful alternative text; use an empty alt for purely decorative images.", example: '<img src="fern.jpg" alt="A new fern unfurling">' },
  { name: "figure + figcaption", category: "elements", description: "Groups self-contained media or illustrations with an optional caption.", example: "<figure><img src=\"orchid.jpg\" alt=\"A pink orchid\"><figcaption>Spring, at last.</figcaption></figure>" },
  { name: "nav", category: "elements", description: "A major group of navigation links. Give distinct navigation landmarks useful accessible labels.", example: '<nav aria-label="Main"><a href="/">Home</a></nav>' },
  { name: "main", category: "elements", description: "Marks the unique, central content of a page. In the usual page layout there is only one visible main.", example: "<main><h1>The coastal path</h1></main>" },
  { name: "header", category: "elements", description: "Introductory content for a page or for a nearby article or section.", example: "<header><a href=\"/\">The Field Journal</a></header>" },
  { name: "footer", category: "elements", description: "Concluding information for its nearest page, article, or section.", example: "<footer><p>Written with care.</p></footer>" },
  { name: "article", category: "elements", description: "A self-contained composition that could make sense on its own, such as a post or recipe.", example: "<article><h2>Growing basil</h2><p>Start in spring.</p></article>" },
  { name: "section", category: "elements", description: "A thematic section of a page, usually introduced by a heading.", example: "<section><h2>How to get here</h2><p>Take the woodland path.</p></section>" },
  { name: "aside", category: "elements", description: "Related but secondary content, such as a side note or a short glossary definition.", example: "<aside><h2>Good to know</h2><p>Bring water.</p></aside>" },
  { name: "div + span", category: "elements", description: "Generic block and inline containers. Use them when no more meaningful element fits.", example: "<div class=\"card\"><span>New</span> Field notes</div>" },
  { name: "br + hr", category: "elements", description: "A purposeful line break in text, or a thematic change of topic. Neither is a general-purpose spacer.", example: "<p>12 Meadow Lane<br>West Bay</p><hr>" },
  { name: "table", category: "elements", description: "A grid of genuinely related data. Do not use a table just to line up a page layout.", example: "<table><caption>Our harvest</caption>...</table>" },
  { name: "th + td", category: "elements", description: "A table's heading and data cells. Identify each heading with a matching row or column scope.", example: '<th scope="col">Plant</th><td>Rosemary</td>' },
  { name: "form", category: "elements", description: "Groups controls that collect information, with a clear label and helpful submit action for each form.", example: '<form action="/notes" method="post">...</form>' },
  { name: "label", category: "elements", description: "Gives a form control a visible, accessible name. Connect its for value to a control's id.", example: '<label for="email">Email address</label>' },
  { name: "input", category: "elements", description: "A form control. Choose a type and a name that fit the information being collected.", example: '<input id="email" name="email" type="email">' },
  { name: "textarea", category: "elements", description: "A form control for a longer piece of text. Connect it to a visible label.", example: '<label for="letter">Your note</label><textarea id="letter" name="letter"></textarea>' },
  { name: "button", category: "elements", description: "An interactive control. Use type=button for an in-page action and type=submit to send a form.", example: '<button type="button">Show more notes</button>' },
  { name: "select + option", category: "elements", description: "A native dropdown control and its choices. Give the select a clear, connected label.", example: '<select name="month"><option>April</option></select>' },
  { name: "fieldset + legend", category: "elements", description: "Groups related form controls and gives the group a shared, accessible label.", example: "<fieldset><legend>Choose a day</legend>...</fieldset>" },
  { name: "details + summary", category: "elements", description: "Creates a native disclosure that can open and close, including without JavaScript.", example: "<details><summary>Find out more</summary><p>Here are the details.</p></details>" },
  { name: "audio + video", category: "elements", description: "Embeds playable media. Include native controls and offer captions, transcripts, or descriptions where needed.", example: '<video controls src="coast.mp4"><track kind="captions" src="coast.en.vtt"></video>' },
  { name: "time", category: "elements", description: "Marks a date or time and optionally pairs readable words with a machine-readable datetime value.", example: '<time datetime="2026-04-18">April 18</time>' },
  { name: "progress", category: "elements", description: "Displays task progress. Give it a visible or programmatic name and a meaningful value and maximum.", example: '<label for="packing">Packing seeds</label><progress id="packing" value="6" max="10">6 of 10</progress>' },
  { name: "aria-label", category: "attributes", description: "Provides an accessible name when visible text cannot; prefer a visible, connected label whenever possible.", example: '<nav aria-label="Main navigation">...</nav>' },
  { name: "alt", category: "attributes", description: "Supplies an image's text alternative. Use an empty value when a decorative image adds no information.", example: '<img src="map.png" alt="A map of the island trails">' },
  { name: "class", category: "attributes", description: "A reusable name, usually for CSS or scripts. Multiple elements may share a class.", example: '<p class="quiet-note">A little note</p>' },
  { name: "contenteditable", category: "attributes", description: "Lets someone edit an element's contents in the browser. Use sparingly and provide clear feedback.", example: '<p contenteditable="true">Try editing this note.</p>' },
  { name: "datetime", category: "attributes", description: "Provides a machine-readable date or duration on a time element.", example: '<time datetime="2026-11-11">November 11</time>' },
  { name: "for + id", category: "attributes", description: "Connects a label to a form control: the label's for and the control's id must have exactly the same value.", example: '<label for="name">Name</label><input id="name" name="name">' },
  { name: "href", category: "attributes", description: "The destination of a hyperlink. A fragment such as #visit links to the element with that id.", example: '<a href="#visit">Find visiting hours</a>' },
  { name: "id", category: "attributes", description: "A unique identifier for one element in a document. Useful for label associations and same-page links.", example: '<section id="visit"><h2>Visit us</h2></section>' },
  { name: "lang", category: "attributes", description: "Declares the human language of a document or part of it so tools can handle words appropriately.", example: '<html lang="en">...</html>' },
  { name: "loading", category: "attributes", description: "Lets the browser defer offscreen images with loading=lazy; do not lazy-load the main hero image.", example: '<img src="forest.jpg" loading="lazy" alt="...">' },
  { name: "name", category: "attributes", description: "Names a form value so it can be identified when the form is submitted.", example: '<input id="email" name="email" type="email">' },
  { name: "required", category: "attributes", description: "Asks the browser to prevent form submission until a required control has a value.", example: '<input id="email" name="email" type="email" required>' },
  { name: "scope", category: "attributes", description: "Describes which row or column a table header applies to.", example: '<th scope="col">Water day</th>' },
  { name: "src + width + height", category: "attributes", description: "Identifies an image file and lets the browser reserve its intended dimensions.", example: '<img src="garden.jpg" width="960" height="640" alt="...">' },
  { name: "autocomplete", category: "attributes", description: "Helps a browser fill a familiar form value, such as autocomplete=email.", example: '<input type="email" autocomplete="email">' },
  { name: "placeholder", category: "attributes", description: "A brief example or hint inside an empty field. It does not replace a real label.", example: '<input type="search" placeholder="Try fern">' },
  { name: "disabled", category: "attributes", description: "Makes a control unavailable. Use it only when its unavailable state is clear to the person.", example: '<button type="button" disabled>Sending…</button>' },
  { name: "hidden", category: "attributes", description: "Indicates that content is not currently relevant and should be hidden from every presentation.", example: '<p hidden>Only relevant while editing.</p>' },
  { name: "autofocus", category: "attributes", description: "Moves focus on page load. Avoid unexpected focus changes on pages unless the task clearly requires them.", example: '<input autofocus> (use with care)' },
  { name: "Page landmarks", category: "patterns", description: "A header, named navigation, one main, and a footer give the page a useful, familiar outline.", example: "<header>...</header><nav aria-label=\"Main\">...</nav><main>...</main><footer>...</footer>" },
  { name: "Accessible form field", category: "patterns", description: "A visible, explicit label plus a suitable type, stable name, and required state makes a good start.", example: '<label for="email">Email</label><input id="email" name="email" type="email" required>' },
  { name: "Data table headers", category: "patterns", description: "Use a caption and scoped heading cells so people can understand what each value means.", example: '<table><caption>Dates</caption><tr><th scope="col">Event</th><td>Spring</td></tr></table>' },
  { name: "Meaningful image", category: "patterns", description: "Pair the real source and dimensions with a short, contextual description.", example: '<img src="path.jpg" width="800" height="500" alt="A stone path through cedar trees">' },
  { name: "Same-page link", category: "patterns", description: "Give a target a unique id, then use an href beginning with # to jump to it.", example: '<a href="#hours">Skip to opening hours</a><h2 id="hours">Opening hours</h2>' },
  { name: "semantic", category: "glossary", description: "Describes markup that communicates the purpose and meaning of content, not merely its appearance.", example: '<main>...</main> is more informative than <div class="big-box">...</div>' },
  { name: "element", category: "glossary", description: "The meaningful unit of HTML, usually an opening tag, its content, and a closing tag.", example: "<p>A paragraph element.</p>" },
  { name: "tag", category: "glossary", description: "The angle-bracketed markup that opens or closes an element.", example: "Opening tag: <p> · closing tag: </p>" },
  { name: "attribute", category: "glossary", description: "A named setting in an opening tag that adds information or configures an element.", example: '<a href="/about">About</a> has an href attribute.' },
  { name: "nesting", category: "glossary", description: "Placing one element inside another. Close nested elements in the reverse order they were opened.", example: "<p>Read the <strong>small print</strong>.</p>" },
  { name: "doctype", category: "glossary", description: "A document declaration that asks a browser to render using current standards mode.", example: "<!doctype html>" },
  { name: "alt text", category: "glossary", description: "The text alternative for an image, chosen to convey its relevant information in context.", example: '<img src="map.png" alt="Walking trail loops around the lake">' },
  { name: "accessible name", category: "glossary", description: "The name assistive technology uses for an interactive control. A clear visible label is usually best.", example: '<button type="button">Show map</button>' },
  { name: "landmark", category: "glossary", description: "An important region of a page, such as main or navigation, that helps people move around.", example: '<nav aria-label="On this page">...</nav>' },
  { name: "viewport", category: "glossary", description: "The area of a page visible in the browser window. A viewport meta tag helps adapt to phone screens.", example: '<meta name="viewport" content="width=device-width, initial-scale=1">' },
  { name: "DOM", category: "glossary", description: "The browser's structured, in-memory representation of a document and its relationships.", example: "<html> contains <head> and <body>." },
  { name: "progressive enhancement", category: "glossary", description: "Starting with useful content and reliable HTML, then adding optional styling and behavior.", example: "A useful link still works without a custom animation." },
];

const allLessons = curriculum
  .flatMap((module) =>
    module.lessons.map((lesson) => ({ ...lesson, module: module.name })),
  )
  .map((lesson, index) => ({ ...lesson, index }));
const lessonById = new Map(allLessons.map((lesson) => [lesson.id, lesson]));
const homeMarkup = document.querySelector("#lesson-content").innerHTML;
const mainContent = document.querySelector("#lesson-content");
const moduleList = document.querySelector("#module-list");
const sidebar = document.querySelector(".sidebar");
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const toastRegion = document.querySelector("#toast-region");
const completedLessons = loadCompletedLessons();
const completedChallenges = loadLessonSet(STORAGE_KEYS.challenges, "practice challenges");
const bookmarkedLessons = loadLessonSet(STORAGE_KEYS.bookmarks, "bookmarked lessons");
const lessonNotes = loadLessonNotes();
const quizRecords = loadQuizRecords();
let activeLessonId = "";
let toastTimer;
let dialogReturnFocus = null;

function loadCompletedLessons() {
  return loadLessonSet(STORAGE_KEYS.completed, "lesson progress");
}

function loadLessonSet(key, description) {
  try {
    const saved = JSON.parse(localStorage.getItem(key) || "[]");
    if (Array.isArray(saved)) {
      return new Set(saved.filter((id) => lessonById.has(id)));
    }
    return new Set();
  } catch (error) {
    console.error(`Could not read saved ${description}.`, error);
    return new Set();
  }
}

function loadLessonNotes() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.notes) || "{}");
    if (typeof saved === "object" && saved !== null && !Array.isArray(saved)) {
      return Object.fromEntries(
        Object.entries(saved).filter(([id, note]) =>
          lessonById.has(id) && typeof note === "string" && note.length <= 3000,
        ),
      );
    }
    return {};
  } catch (error) {
    console.error("Could not read your saved lesson notes.", error);
    return {};
  }
}

function loadQuizRecords() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.quizzes) || "{}");
    if (typeof saved !== "object" || saved === null || Array.isArray(saved)) {
      return {};
    }
    return Object.fromEntries(
      Object.entries(saved).filter(([id, record]) =>
        lessonById.has(id)
        && typeof record === "object"
        && record !== null
        && Number.isInteger(record.attempts)
        && record.attempts >= 0
        && Number.isInteger(record.correct)
        && record.correct >= 0
        && record.correct <= record.attempts,
      ),
    );
  } catch (error) {
    console.error("Could not read your saved quiz results.", error);
    return {};
  }
}

function saveValue(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.error("Could not save your course setting.", error);
    showToast("Your browser couldn't save this change. Check its storage settings.");
    return false;
  }
}

function escapeHTML(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function highlightHTML(source) {
  const escaped = escapeHTML(source);
  const tokenPattern = /(&lt;!--[\s\S]*?--&gt;|&lt;!doctype\b[\s\S]*?&gt;|&lt;\/?[a-z][\w-]*|\/?&gt;|[a-zA-Z_:][\w:.-]*(?==)|"(?:[^"]*)"|'(?:[^']*)')/gi;

  return escaped.replace(tokenPattern, (token) => {
    let tokenClass = "token-tag";
    if (token.startsWith("&lt;!--")) {
      tokenClass = "token-comment";
    } else if (token.toLowerCase().startsWith("&lt;!doctype")) {
      tokenClass = "token-doctype";
    } else if (/^["']/.test(token)) {
      tokenClass = "token-string";
    } else if (/^[a-z_:]/i.test(token)) {
      tokenClass = "token-attr";
    }
    return `<span class="${tokenClass}">${token}</span>`;
  });
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toastRegion.append(toast);
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.remove(), 2800);
}

function updateProgress() {
  const percent = Math.round((completedLessons.size / allLessons.length) * 100);
  const progressNumber = document.querySelector("#progress-number");
  const progressCopy = document.querySelector("#progress-copy");
  const progressTrack = document.querySelector("#progress-track");
  const progressFill = document.querySelector("#progress-fill");

  progressNumber.textContent = `${percent}%`;
  progressCopy.textContent = completedLessons.size === allLessons.length
    ? `Every chapter, explored. ${completedChallenges.size} practice challenges complete.`
    : completedLessons.size === 0
      ? `${completedChallenges.size} of ${allLessons.length} practice challenges tried.`
      : `${completedLessons.size} of ${allLessons.length} chapters · ${completedChallenges.size} challenges.`;
  progressTrack.setAttribute("aria-valuenow", String(percent));
  progressFill.style.width = `${percent}%`;

  document.querySelectorAll(".lesson-nav-item").forEach((item) => {
    const isDone = completedLessons.has(item.dataset.lessonId);
    item.classList.toggle("is-done", isDone);
    const isBookmarked = bookmarkedLessons.has(item.dataset.lessonId);
    item.classList.toggle("has-bookmark", isBookmarked);
    item.setAttribute("aria-label", isDone
      ? `${item.dataset.lessonTitle}, complete`
      : isBookmarked
        ? `${item.dataset.lessonTitle}, bookmarked`
        : item.dataset.lessonTitle);
  });
}

function renderNavigation(openModuleIndex = 0) {
  moduleList.innerHTML = curriculum.map((module, moduleIndex) => {
    const isOpen = moduleIndex === openModuleIndex
      || module.lessons.some((lesson) => lesson.id === activeLessonId);
    const lessons = module.lessons.map((lesson, lessonIndex) => `
      <button
        class="lesson-nav-item${lesson.id === activeLessonId ? " is-active" : ""}"
        type="button"
        data-lesson-id="${lesson.id}"
        data-lesson-title="${escapeHTML(lesson.title)}"
        aria-current="${lesson.id === activeLessonId ? "page" : "false"}"
      >
        <span>${String(moduleIndex * 3 + lessonIndex + 1).padStart(2, "0")}</span>
        <span>${escapeHTML(lesson.title)}</span>
        ${bookmarkedLessons.has(lesson.id) ? '<span class="nav-bookmark" aria-hidden="true">★</span>' : ""}
      </button>
    `).join("");

    return `
      <section class="module-group${isOpen ? " is-open" : ""}">
        <button
          class="module-toggle"
          type="button"
          aria-expanded="${isOpen}"
          aria-label="Toggle ${escapeHTML(module.name)} lessons"
        >
          <span class="module-number">${String(moduleIndex + 1).padStart(2, "0")}</span>
          <span class="module-title">${escapeHTML(module.name)}</span>
          <span class="module-count">${module.lessons.length}</span>
          <span class="module-chevron" aria-hidden="true">›</span>
        </button>
        ${isOpen ? `<div class="module-lessons">${lessons}</div>` : ""}
      </section>
    `;
  }).join("");
  updateProgress();
}

function getCodeMarkup(source) {
  const lineCount = source.split("\n").length;
  const lineNumbers = Array.from({ length: lineCount }, (_, index) =>
    `<span>${String(index + 1).padStart(2, "0")}</span>`,
  ).join("");

  return `
    <section class="code-card" aria-label="HTML code example">
      <div class="code-card-header">
        <span class="code-window-dots" aria-hidden="true"><span></span><span></span><span></span></span>
        <span class="code-filename">index.html · HTML</span>
        <button class="copy-code-button" type="button" aria-label="Copy example code">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="5.1" y="5.1" width="8.3" height="9.3" rx="1.5" stroke="currentColor"></rect>
            <path d="M10.8 5V3.5A1.5 1.5 0 0 0 9.3 2H3.5A1.5 1.5 0 0 0 2 3.5v5.8a1.5 1.5 0 0 0 1.5 1.5H5" stroke="currentColor"></path>
          </svg>
          <span>Copy</span>
        </button>
      </div>
      <div class="code-content">
        <div class="code-line-numbers" aria-hidden="true">${lineNumbers}</div>
        <pre class="code-source"><code>${highlightHTML(source)}</code></pre>
      </div>
    </section>
  `;
}

function renderQuiz(quiz, lessonId) {
  const record = quizRecords[lessonId] || { attempts: 0, correct: 0 };
  const historyLabel = record.attempts === 0
    ? "Not tried yet"
    : `${record.correct} of ${record.attempts} quiz answers correct`;
  return `
    <section class="quiz-card" aria-labelledby="quiz-question">
      <div class="quiz-heading"><span aria-hidden="true">✳</span> A QUICK CHECK <span class="quiz-history">${historyLabel}</span></div>
      <div class="quiz-content">
        <h3 class="quiz-question" id="quiz-question">${escapeHTML(quiz.question)}</h3>
        <div class="quiz-options">
          ${quiz.options.map((option, index) => `
            <button class="quiz-option" type="button" data-option-index="${index}">
              <span class="quiz-key">${String.fromCharCode(65 + index)}</span>
              <span class="quiz-option-text">${escapeHTML(option.label)}</span>
            </button>
          `).join("")}
        </div>
        <p class="quiz-feedback" aria-live="polite"></p>
        <button class="quiz-retry" type="button" hidden>Try this question again</button>
      </div>
    </section>
  `;
}

function renderChallenge(lesson) {
  const activity = practiceTasks[lesson.id];
  const isComplete = completedChallenges.has(lesson.id);
  return `
    <section class="practice-card" aria-labelledby="practice-title">
      <div class="practice-heading">
        <span class="practice-icon" aria-hidden="true">↗</span>
        <div>
          <span class="practice-label">TRY IT YOURSELF · ${String(lesson.index + 1).padStart(2, "0")} / 15</span>
          <h2 id="practice-title">A tiny practice challenge</h2>
        </div>
      </div>
      <p class="practice-prompt">${escapeHTML(activity.task)}</p>
      <details class="practice-hint">
        <summary>Need a nudge?</summary>
        <p>${escapeHTML(activity.hint)}</p>
      </details>
      <button
        class="practice-done${isComplete ? " is-complete" : ""}"
        type="button"
        aria-pressed="${isComplete}"
      >
        <span class="practice-check" aria-hidden="true">${isComplete ? "✓" : ""}</span>
        <span>${isComplete ? "Challenge tried — nicely done" : "I gave it a try"}</span>
      </button>
    </section>
  `;
}

function renderLessonNotes(lessonId) {
  const note = lessonNotes[lessonId] || "";
  const count = note.length;
  return `
    <details class="notes-card"${count ? " open" : ""}>
      <summary>
        <span class="notes-icon" aria-hidden="true">✎</span>
        <span><strong>YOUR FIELD NOTES</strong><small>Private notes saved on this device</small></span>
        <span class="notes-chevron" aria-hidden="true">›</span>
      </summary>
      <div class="notes-content">
        <label for="lesson-note">What would you like to remember about this chapter?</label>
        <textarea
          id="lesson-note"
          class="lesson-note"
          maxlength="3000"
          placeholder="Jot down a question, a useful example, or something you discovered…"
        >${escapeHTML(note)}</textarea>
        <div class="notes-footer">
          <span class="notes-count" aria-live="polite">${count} / 3000</span>
          <span class="notes-status">These notes stay in this browser.</span>
          <div class="notes-actions">
            <button class="notes-clear" type="button"${count ? "" : " disabled"}>Clear</button>
            <button class="notes-save" type="button">Save notes</button>
          </div>
        </div>
      </div>
    </details>
  `;
}

function renderPlayground(lesson) {
  if (!lesson.playground) {
    return "";
  }
  return `
    <section class="playground-card" aria-label="HTML live playground">
      <div class="playground-header">
        <div>
          <strong>Your little live playground</strong>
          <p>Change the HTML, then see what a browser makes of it.</p>
        </div>
        <button class="playground-run" type="button">Run preview ↗</button>
      </div>
      <div class="playground-grid">
        <div class="playground-editor-wrap">
          <div class="playground-pane-heading"><span>YOUR HTML</span><span>EDIT AWAY</span></div>
          <textarea class="playground-editor" aria-label="Edit HTML for the live preview" spellcheck="false">${escapeHTML(lesson.code)}</textarea>
        </div>
        <div class="playground-output-wrap">
          <div class="playground-pane-heading"><span>LIVE PREVIEW</span><span>LOCAL ONLY</span></div>
          <iframe
            class="playground-preview"
            title="Preview of your HTML"
            sandbox
            srcdoc="<!doctype html><html lang='en'><meta charset='utf-8'><body style='font:16px/1.6 system-ui,sans-serif;padding:18px;color:#24342b'><h1>Small things I love</h1><p>Window light, warm bread, and good stories.</p><ul><li>Walks after the rain</li><li>Notes from friends</li></ul></body></html>"
          ></iframe>
        </div>
      </div>
    </section>
  `;
}

function renderLesson(lessonId, shouldScroll = true) {
  const lesson = lessonById.get(lessonId);
  if (!lesson) {
    showToast("That lesson isn't available. Choose a chapter from the course menu.");
    return;
  }

  activeLessonId = lessonId;
  saveValue(STORAGE_KEYS.current, lessonId);
  history.replaceState(null, "", `#${lessonId}`);

  const completed = completedLessons.has(lessonId);
  const isBookmarked = bookmarkedLessons.has(lessonId);
  const previous = allLessons[lesson.index - 1];
  const next = allLessons[lesson.index + 1];

  mainContent.innerHTML = `
    <article class="lesson-page">
      <nav class="lesson-breadcrumb" aria-label="Breadcrumb">
        <button class="breadcrumb-home" type="button">ALL CHAPTERS</button>
        <span aria-hidden="true">/</span>
        <span>${escapeHTML(lesson.module.toUpperCase())}</span>
        <span aria-hidden="true">/</span>
        <span>${String(lesson.index + 1).padStart(2, "0")}</span>
      </nav>
      <header class="lesson-headline">
        <div>
          <span class="lesson-kicker">${escapeHTML(lesson.kicker)}</span>
          <h1 class="lesson-title">${escapeHTML(lesson.title)}</h1>
          <p class="lesson-objective">${escapeHTML(lesson.objective)}</p>
        </div>
        <div class="lesson-tools">
          <span class="lesson-mark" aria-hidden="true">${escapeHTML(lesson.mark)}</span>
          <button
            class="bookmark-toggle${isBookmarked ? " is-bookmarked" : ""}"
            type="button"
            aria-pressed="${isBookmarked}"
            aria-label="${isBookmarked ? "Remove bookmark from" : "Bookmark"} ${escapeHTML(lesson.title)}"
            title="${isBookmarked ? "Remove bookmark" : "Save for later"}"
          >${isBookmarked ? "★" : "☆"}</button>
        </div>
      </header>
      <div class="lesson-body">
        <div class="lesson-prose">${lesson.body}</div>
        <aside class="lesson-callout">
          <span class="callout-mark" aria-hidden="true">✳</span>
          <p>${lesson.callout}</p>
        </aside>
        ${getCodeMarkup(lesson.code)}
        <p class="code-hint">${escapeHTML(lesson.hint)}</p>
        ${renderPlayground(lesson)}
        ${renderChallenge(lesson)}
        <section class="takeaway-card">
          <span class="takeaway-label"><span aria-hidden="true">✓</span> KEEP THIS IN YOUR POCKET</span>
          <p>${lesson.takeaway}</p>
        </section>
        ${renderQuiz(lesson.quiz, lesson.id)}
        ${renderLessonNotes(lesson.id)}
        <div class="lesson-end">
          <button class="mark-complete${completed ? " is-complete" : ""}" type="button" aria-pressed="${completed}">
            <span class="mark-complete-check" aria-hidden="true">${completed ? "✓" : ""}</span>
            <span>${completed ? "Chapter complete" : "Mark chapter complete"}</span>
          </button>
          <div class="lesson-pagination">
            <button class="previous-lesson" type="button" ${previous ? "" : "disabled"}>
              ← Previous
            </button>
            <button class="next-lesson" type="button" ${next ? "" : "disabled"}>
              ${next ? "Next chapter →" : "Course complete ✦"}
            </button>
          </div>
        </div>
      </div>
    </article>
  `;

  renderNavigation(lesson.index < 3 ? 0 : Math.floor(lesson.index / 3));
  document.title = `${lesson.title} · B7r Web Studio`;
  document.querySelectorAll(".lesson-nav-item").forEach((item) => {
    const isActive = item.dataset.lessonId === lesson.id;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-current", isActive ? "page" : "false");
  });

  closeMobileMenu();
  if (shouldScroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function goHome(shouldScroll = true) {
  activeLessonId = "";
  mainContent.innerHTML = homeMarkup;
  history.replaceState(null, "", location.pathname + location.search);
  document.title = "B7r Web Studio — Learn HTML by making the web";
  renderNavigation(0);
  closeMobileMenu();
  if (shouldScroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function closeMobileMenu() {
  sidebar.classList.remove("is-visible");
  mobileMenuToggle.setAttribute("aria-expanded", "false");
  mobileMenuToggle.setAttribute("aria-label", "Open course navigation");
}

function openSearch() {
  closeDialog();
  dialogReturnFocus = document.activeElement;

  const overlay = document.createElement("div");
  overlay.className = "search-overlay";
  overlay.innerHTML = `
    <section class="search-dialog" role="dialog" aria-modal="true" aria-label="Search lessons">
      <div class="search-input-wrap">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10.8" cy="10.8" r="6.3"></circle><path d="m15.4 15.4 4.2 4.2"></path>
        </svg>
        <input class="search-input" type="search" aria-label="Search course lessons" placeholder="Find a lesson, element, or idea…" autocomplete="off">
        <span class="search-escape">ESC</span>
      </div>
      <div class="search-results" role="listbox" aria-label="Matching lessons"></div>
    </section>
  `;
  document.body.append(overlay);

  const input = overlay.querySelector(".search-input");
  const results = overlay.querySelector(".search-results");
  const renderResults = () => {
    const query = input.value.trim().toLowerCase();
    const matches = allLessons.filter((lesson) =>
      `${lesson.title} ${lesson.module} ${lesson.kicker} ${lesson.objective}`.toLowerCase().includes(query),
    ).slice(0, 8);

    results.innerHTML = matches.length > 0
      ? matches.map((lesson) => `
        <button class="search-result" type="button" role="option" data-lesson-id="${lesson.id}">
          <span class="search-result-number">${String(lesson.index + 1).padStart(2, "0")}</span>
          <span><strong>${escapeHTML(lesson.title)}</strong><small>${escapeHTML(lesson.module)} · ${escapeHTML(lesson.kicker.split(" · ")[1])}</small></span>
          <span aria-hidden="true">↗</span>
        </button>
      `).join("")
      : `<p class="search-empty">No lessons match that yet. Try “images”, “forms”, or “links”.</p>`;
  };

  input.addEventListener("input", renderResults);
  renderResults();
  input.focus();

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeDialog();
      return;
    }
    const result = event.target.closest("[data-lesson-id]");
    if (result) {
      closeDialog();
      renderLesson(result.dataset.lessonId);
    }
  });
}

function closeDialog() {
  document.querySelector(".search-overlay")?.remove();
  if (dialogReturnFocus instanceof HTMLElement && dialogReturnFocus.isConnected) {
    dialogReturnFocus.focus();
  }
  dialogReturnFocus = null;
}

function openToolbox(initialCategory = "elements") {
  closeDialog();
  dialogReturnFocus = document.activeElement;

  const categories = [
    ["elements", "Elements"],
    ["attributes", "Attributes"],
    ["patterns", "Patterns"],
    ["glossary", "Glossary"],
    ["lessons", "Chapters"],
    ["saved", `Saved (${bookmarkedLessons.size})`],
  ];
  const overlay = document.createElement("div");
  overlay.className = "search-overlay";
  overlay.innerHTML = `
    <section class="search-dialog toolbox-dialog" role="dialog" aria-modal="true" aria-labelledby="toolbox-title">
      <header class="toolbox-heading">
        <div><span class="eyebrow">YOUR POCKET REFERENCE</span><h2 id="toolbox-title">HTML field guide</h2></div>
        <button class="toolbox-close icon-button" type="button" aria-label="Close HTML field guide">×</button>
      </header>
      <div class="search-input-wrap">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10.8" cy="10.8" r="6.3"></circle><path d="m15.4 15.4 4.2 4.2"></path>
        </svg>
        <input class="search-input toolbox-search" type="search" aria-label="Search HTML elements, references, and course chapters" placeholder="Search HTML, chapters, and ideas…" autocomplete="off">
        <span class="search-escape">ESC</span>
      </div>
      <div class="toolbox-tabs" role="tablist" aria-label="Reference categories">
        ${categories.map(([id, label]) => `
          <button class="toolbox-tab${id === initialCategory ? " is-active" : ""}" type="button" role="tab" data-category="${id}" aria-selected="${id === initialCategory}">
            ${escapeHTML(label)}
          </button>
        `).join("")}
      </div>
      <p class="toolbox-count" aria-live="polite"></p>
      <div class="reference-results" role="list"></div>
      <footer class="toolbox-footer"><span>Click Copy to copy a sample. Your notes and bookmarks stay on this device.</span><kbd>?</kbd> OPEN FIELD GUIDE</footer>
    </section>
  `;
  document.body.append(overlay);

  const input = overlay.querySelector(".toolbox-search");
  const results = overlay.querySelector(".reference-results");
  const count = overlay.querySelector(".toolbox-count");
  let category = initialCategory;

  const renderResults = () => {
    const query = input.value.trim().toLowerCase();
    const lessonEntries = allLessons.map((lesson) => ({
      id: lesson.id,
      name: lesson.title,
      category,
      description: `${lesson.module} · ${lesson.kicker}`,
      example: lesson.objective,
    }));
    const items = category === "saved"
      ? lessonEntries.filter((lesson) => bookmarkedLessons.has(lesson.id))
      : category === "lessons"
        ? lessonEntries
        : referenceItems.filter((item) => item.category === category);
    const matches = items.filter((item) =>
      `${item.name} ${item.description} ${item.example}`.toLowerCase().includes(query),
    );

    count.textContent = category === "saved"
      ? `${matches.length} bookmarked ${matches.length === 1 ? "chapter" : "chapters"}`
      : category === "lessons"
        ? `${matches.length} course ${matches.length === 1 ? "chapter" : "chapters"}`
        : `${matches.length} ${category === "glossary" ? "terms" : category} to explore`;
    results.innerHTML = matches.length > 0
      ? matches.map((item) => `
        <article class="reference-card" role="listitem">
          <div class="reference-card-heading">
            <h3>${escapeHTML(item.name)}</h3>
            <span class="reference-category">${category === "saved" ? "SAVED CHAPTER" : category === "lessons" ? "COURSE CHAPTER" : category.toUpperCase()}</span>
          </div>
          <p>${escapeHTML(item.description)}</p>
          <pre class="reference-example"><code>${escapeHTML(item.example)}</code></pre>
          <div class="reference-actions">
            ${category === "saved" || category === "lessons"
              ? `<button class="reference-open-saved" type="button" data-open-saved="${escapeHTML(item.id)}">Open chapter →</button>`
              : `<button class="reference-copy" type="button" data-copy-reference="${escapeHTML(item.name)}"><span>Copy example</span></button>`
            }
          </div>
        </article>
      `).join("")
      : `<p class="search-empty">${category === "saved" ? "No saved chapters yet. Bookmark a chapter and find it here." : category === "lessons" ? "No chapters match that search. Try another word or browse the curriculum." : "No matches in this section. Try another word or choose a different category."}</p>`;
  };

  input.addEventListener("input", renderResults);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay || event.target.closest(".toolbox-close")) {
      closeDialog();
      return;
    }
    const tab = event.target.closest(".toolbox-tab");
    if (tab) {
      category = tab.dataset.category;
      overlay.querySelectorAll(".toolbox-tab").forEach((item) => {
        const selected = item === tab;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-selected", String(selected));
      });
      input.value = "";
      renderResults();
      return;
    }
    const copyButton = event.target.closest("[data-copy-reference]");
    if (copyButton) {
      const item = referenceItems.find((reference) => reference.name === copyButton.dataset.copyReference);
      if (item) {
        copyCode(copyButton, item.example);
      }
      return;
    }
    const savedButton = event.target.closest("[data-open-saved]");
    if (savedButton) {
      const lessonId = savedButton.dataset.openSaved;
      closeDialog();
      renderLesson(lessonId);
    }
  });

  overlay.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDialog();
    }
  });
  renderResults();
  input.focus();
}

async function copyCode(button, source) {
  try {
    await navigator.clipboard.writeText(source);
  } catch (error) {
    const fallback = document.createElement("textarea");
    fallback.value = source;
    fallback.setAttribute("readonly", "");
    fallback.style.position = "fixed";
    fallback.style.opacity = "0";
    document.body.append(fallback);
    fallback.select();
    const copied = document.execCommand("copy");
    fallback.remove();
    if (!copied) {
      console.error("Could not copy the lesson example.", error);
      showToast("Copy isn't available here. Select the code and copy it instead.");
      return;
    }
  }

  button.classList.add("is-copied");
  button.querySelector("span").textContent = "Copied!";
  button.setAttribute("aria-label", "Example code copied");
  window.setTimeout(() => {
    button.classList.remove("is-copied");
    button.querySelector("span").textContent = "Copy";
    button.setAttribute("aria-label", "Copy example code");
  }, 1600);
}

function runPlayground() {
  const editor = document.querySelector(".playground-editor");
  const preview = document.querySelector(".playground-preview");
  if (!editor || !preview) {
    return;
  }
  preview.srcdoc = `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><body style="font:16px/1.6 system-ui,sans-serif;padding:18px;color:#24342b">${editor.value}</body></html>`;
  showToast("Preview updated. Your HTML stays in this tab.");
}

function handleMainClick(event) {
  const target = event.target;
  const lessonAction = target.closest("[data-open-lesson]");
  if (lessonAction) {
    renderLesson(lessonAction.dataset.openLesson);
    return;
  }
  if (target.closest("#begin-button")) {
    event.preventDefault();
    const savedLesson = localStorage.getItem(STORAGE_KEYS.current);
    renderLesson(lessonById.has(savedLesson) ? savedLesson : allLessons[0].id);
    return;
  }
  if (target.closest(".breadcrumb-home")) {
    goHome();
    return;
  }
  if (target.closest(".bookmark-toggle")) {
    const button = target.closest(".bookmark-toggle");
    const isSaved = bookmarkedLessons.has(activeLessonId);
    if (isSaved) {
      bookmarkedLessons.delete(activeLessonId);
    } else {
      bookmarkedLessons.add(activeLessonId);
    }
    saveValue(STORAGE_KEYS.bookmarks, JSON.stringify([...bookmarkedLessons]));
    button.classList.toggle("is-bookmarked", !isSaved);
    button.setAttribute("aria-pressed", String(!isSaved));
    button.setAttribute(
      "aria-label",
      `${isSaved ? "Bookmark" : "Remove bookmark from"} ${lessonById.get(activeLessonId).title}`,
    );
    button.title = isSaved ? "Save for later" : "Remove bookmark";
    button.textContent = isSaved ? "☆" : "★";
    renderNavigation(Math.floor(lessonById.get(activeLessonId).index / 3));
    showToast(isSaved ? "Removed from saved chapters." : "Saved for later. Find it in the HTML field guide.");
    return;
  }
  if (target.closest(".practice-done")) {
    const button = target.closest(".practice-done");
    const isComplete = completedChallenges.has(activeLessonId);
    if (isComplete) {
      completedChallenges.delete(activeLessonId);
    } else {
      completedChallenges.add(activeLessonId);
    }
    saveValue(STORAGE_KEYS.challenges, JSON.stringify([...completedChallenges]));
    button.classList.toggle("is-complete", !isComplete);
    button.setAttribute("aria-pressed", String(!isComplete));
    button.querySelector("span:last-child").textContent = isComplete
      ? "I gave it a try"
      : "Challenge tried — nicely done";
    button.querySelector(".practice-check").textContent = isComplete ? "" : "✓";
    updateProgress();
    showToast(isComplete ? "Practice challenge reset." : "Practice challenge saved. Nicely done!");
    return;
  }
  if (target.closest(".notes-save")) {
    const noteField = mainContent.querySelector(".lesson-note");
    const note = noteField?.value ?? "";
    if (note.length > 3000) {
      showToast("Keep a field note to 3,000 characters or fewer.");
      return;
    }
    const updatedNotes = { ...lessonNotes };
    if (note.trim()) {
      updatedNotes[activeLessonId] = note;
    } else {
      delete updatedNotes[activeLessonId];
    }
    if (saveValue(STORAGE_KEYS.notes, JSON.stringify(updatedNotes))) {
      lessonNotes[activeLessonId] = note.trim() ? note : "";
      target.closest(".notes-card").querySelector(".notes-status").textContent = "Saved on this device just now.";
      target.closest(".notes-card").querySelector(".notes-clear").disabled = !note;
      showToast("Field notes saved in this browser.");
    }
    return;
  }
  if (target.closest(".notes-clear")) {
    const noteField = mainContent.querySelector(".lesson-note");
    noteField.value = "";
    noteField.dispatchEvent(new Event("input", { bubbles: true }));
    target.closest(".notes-card").querySelector(".notes-save").click();
    return;
  }
  if (target.closest(".quiz-retry")) {
    const lesson = lessonById.get(activeLessonId);
    target.closest(".quiz-card").outerHTML = renderQuiz(lesson.quiz, lesson.id);
    mainContent.querySelector(".quiz-option")?.focus();
    return;
  }
  if (target.closest(".copy-code-button")) {
    const lesson = lessonById.get(activeLessonId);
    if (lesson) {
      copyCode(target.closest(".copy-code-button"), lesson.code);
    }
    return;
  }
  if (target.closest(".mark-complete")) {
    const button = target.closest(".mark-complete");
    if (completedLessons.has(activeLessonId)) {
      completedLessons.delete(activeLessonId);
    } else {
      completedLessons.add(activeLessonId);
      showToast("Chapter saved to your progress. Lovely work!");
    }
    saveValue(STORAGE_KEYS.completed, JSON.stringify([...completedLessons]));
    const isComplete = completedLessons.has(activeLessonId);
    button.classList.toggle("is-complete", isComplete);
    button.setAttribute("aria-pressed", String(isComplete));
    button.querySelector(".mark-complete-check").textContent = isComplete ? "✓" : "";
    button.querySelector("span:last-child").textContent = isComplete
      ? "Chapter complete"
      : "Mark chapter complete";
    updateProgress();
    return;
  }
  if (target.closest(".previous-lesson")) {
    const currentLesson = lessonById.get(activeLessonId);
    if (currentLesson && currentLesson.index > 0) {
      renderLesson(allLessons[currentLesson.index - 1].id);
    }
    return;
  }
  if (target.closest(".next-lesson")) {
    const currentLesson = lessonById.get(activeLessonId);
    if (currentLesson && currentLesson.index < allLessons.length - 1) {
      renderLesson(allLessons[currentLesson.index + 1].id);
    }
    return;
  }
  if (target.closest(".playground-run")) {
    runPlayground();
    return;
  }
  const optionButton = target.closest(".quiz-option");
  if (optionButton) {
    answerQuiz(optionButton);
  }
}

function answerQuiz(selectedButton) {
  const lesson = lessonById.get(activeLessonId);
  const optionIndex = Number(selectedButton.dataset.optionIndex);
  const answer = lesson?.quiz.options[optionIndex];
  const options = [...document.querySelectorAll(".quiz-option")];
  const feedback = document.querySelector(".quiz-feedback");
  if (!answer || !feedback) {
    return;
  }

  const correctIndex = lesson.quiz.options.findIndex((option) => option.correct);
  const record = quizRecords[lesson.id] || { attempts: 0, correct: 0 };
  record.attempts += 1;
  if (answer.correct) {
    record.correct += 1;
  }
  quizRecords[lesson.id] = record;
  saveValue(STORAGE_KEYS.quizzes, JSON.stringify(quizRecords));
  options.forEach((option, index) => {
    option.disabled = true;
    if (index === correctIndex) {
      option.classList.add("is-correct");
    }
    if (option === selectedButton && !answer.correct) {
      option.classList.add("is-incorrect");
    }
  });
  feedback.textContent = answer.feedback;
  feedback.classList.add(answer.correct ? "is-correct" : "is-incorrect");
  document.querySelector(".quiz-history").textContent =
    `${record.correct} of ${record.attempts} quiz answers correct`;
  document.querySelector(".quiz-retry").hidden = false;
}

function handleNavigationClick(event) {
  const lessonButton = event.target.closest(".lesson-nav-item");
  if (lessonButton) {
    renderLesson(lessonButton.dataset.lessonId);
    return;
  }

  const moduleButton = event.target.closest(".module-toggle");
  if (moduleButton) {
    const group = moduleButton.closest(".module-group");
    const wasOpen = group.classList.contains("is-open");
    const moduleIndex = [...moduleList.children].indexOf(group);
    renderNavigation(wasOpen ? -1 : moduleIndex);
  }
}

function initializeTheme() {
  const storedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  if (storedTheme === "dark") {
    document.documentElement.dataset.theme = "dark";
  }
  document.querySelector(".theme-toggle").setAttribute(
    "aria-label",
    storedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme",
  );
}

function initialize() {
  initializeTheme();
  renderNavigation(0);

  moduleList.addEventListener("click", handleNavigationClick);
  mainContent.addEventListener("click", handleMainClick);
  mainContent.addEventListener("input", (event) => {
    if (event.target.matches(".lesson-note")) {
      const card = event.target.closest(".notes-card");
      card.querySelector(".notes-count").textContent = `${event.target.value.length} / 3000`;
      card.querySelector(".notes-clear").disabled = event.target.value.length === 0;
      card.querySelector(".notes-status").textContent = "Unsaved note — choose Save notes to keep it.";
    }
  });
  document.querySelector(".theme-toggle").addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme !== "dark";
    if (isDark) {
      document.documentElement.dataset.theme = "dark";
    } else {
      delete document.documentElement.dataset.theme;
    }
    saveValue(STORAGE_KEYS.theme, isDark ? "dark" : "light");
    document.querySelector(".theme-toggle").setAttribute(
      "aria-label",
      isDark ? "Switch to light theme" : "Switch to dark theme",
    );
  });
  document.querySelector(".topbar .brand").addEventListener("click", (event) => {
    event.preventDefault();
    goHome();
  });
  document.querySelector(".search-open").addEventListener("click", openSearch);
  document.querySelector(".toolbox-open").addEventListener("click", () => openToolbox());
  document.querySelector(".topbar-cta").addEventListener("click", (event) => {
    event.preventDefault();
    renderLesson("lesson-15");
  });
  document.querySelector(".reset-progress").addEventListener("click", () => {
    if (completedLessons.size === 0 && completedChallenges.size === 0) {
      showToast("Your progress is already a blank canvas.");
      return;
    }
    completedLessons.clear();
    completedChallenges.clear();
    saveValue(STORAGE_KEYS.completed, "[]");
    saveValue(STORAGE_KEYS.challenges, "[]");
    renderNavigation(0);
    const completionButton = mainContent.querySelector(".mark-complete");
    if (completionButton) {
      completionButton.classList.remove("is-complete");
      completionButton.setAttribute("aria-pressed", "false");
      completionButton.querySelector(".mark-complete-check").textContent = "";
      completionButton.querySelector("span:last-child").textContent = "Mark chapter complete";
    }
    const challengeButton = mainContent.querySelector(".practice-done");
    if (challengeButton) {
      challengeButton.classList.remove("is-complete");
      challengeButton.setAttribute("aria-pressed", "false");
      challengeButton.querySelector(".practice-check").textContent = "";
      challengeButton.querySelector("span:last-child").textContent = "I gave it a try";
    }
    showToast("Chapter and challenge progress cleared. Notes and bookmarks are safe.");
  });
  mobileMenuToggle.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("is-visible");
    mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
    mobileMenuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close course navigation" : "Open course navigation",
    );
  });
  document.addEventListener("keydown", (event) => {
    const activeElement = document.activeElement;
    const isEditing = activeElement instanceof HTMLElement
      && (activeElement.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(activeElement.tagName));
    const dialog = document.querySelector(".search-overlay [role='dialog']");
    if (event.key === "Tab" && dialog) {
      const focusable = [...dialog.querySelectorAll(
        'button:not(:disabled):not([hidden]), input:not(:disabled), textarea:not(:disabled), [href], [tabindex]:not([tabindex="-1"])',
      )].filter((element) => element.offsetParent !== null);
      if (focusable.length > 0) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
      return;
    }
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openSearch();
      return;
    }
    if (!isEditing && !event.ctrlKey && !event.metaKey && !event.altKey && event.key === "?") {
      event.preventDefault();
      openToolbox();
      return;
    }
    if (!isEditing && !dialog && activeLessonId && event.key === "]") {
      const lesson = lessonById.get(activeLessonId);
      if (lesson.index < allLessons.length - 1) {
        renderLesson(allLessons[lesson.index + 1].id);
      }
      return;
    }
    if (!isEditing && !dialog && activeLessonId && event.key === "[") {
      const lesson = lessonById.get(activeLessonId);
      if (lesson.index > 0) {
        renderLesson(allLessons[lesson.index - 1].id);
      }
      return;
    }
    if (event.key === "Escape") {
      closeDialog();
      closeMobileMenu();
    }
  });

  const initialLesson = location.hash.slice(1);
  if (lessonById.has(initialLesson)) {
    renderLesson(initialLesson, false);
  } else {
    const savedLesson = localStorage.getItem(STORAGE_KEYS.current);
    if (savedLesson && lessonById.has(savedLesson)) {
      document.querySelector(".begin-button")?.setAttribute("href", `#${savedLesson}`);
      document.querySelector(".begin-button")?.addEventListener("click", (event) => {
        event.preventDefault();
        renderLesson(savedLesson);
      });
    }
  }
}

initialize();