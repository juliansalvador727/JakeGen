import { $typst } from "@myriaddreamin/typst.ts";
import React, { useState, useEffect } from "react";

function TestTypst() {
  const typstCode = `
    #set page(width: 8.5in, height: 11in)
    # Hello, Typst in React!
  `;

  const [svgString, setSvgString] = React.useState(null);

  React.useEffect(() => {
    async function render() {
      const result = await $typst.svg({ mainContent: typstCode });
      // result is probably an SVG string or something you can embed
      setSvgString(result);
    }
    render();
  }, []);

  return (
    <div>
      {svgString ? (
        <div dangerouslySetInnerHTML={{ __html: svgString }} />
      ) : (
        <p>Loading typst render...</p>
      )}
    </div>
  );
}

export default TestTypst;
