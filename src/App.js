import React, { useState, useEffect } from "react";
import { marked } from "marked";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const defaultMarkdown = `# Welcome to My Markdown Previewer!

## This is a sub-heading

[This is a link](https://www.freecodecamp.org)

Inline code: \`<div></div>\`

Code block:
\`\`\`
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

- List item 1
- List item 2
- List item 3

> This is a blockquote

**Bolded text**

![Image](https://via.placeholder.com/150)`;

function App() {
  const [text, setText] = useState(defaultMarkdown);

  useEffect(() => {
    marked.setOptions({
      breaks: true,
    });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Markdown Previewer</h1>
      <div className="row">
        <div className="col-md-6">
          <h5>Editor</h5>
          <textarea
            id="editor"
            className="form-control"
            rows="10"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <h5>Preview</h5>
          <div
            id="preview"
            className="border p-3 bg-light"
            dangerouslySetInnerHTML={{ __html: marked(text) }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
