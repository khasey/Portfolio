import React from 'react'
import { Highlight, themes } from "prism-react-renderer"

const codeBlock = `
const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
}
`

function CodePreview() {
  return (
    <Highlight
    theme={themes.vsDark}
    code={codeBlock}
    language="tsx"
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre style={{backgroundColor:'#191919', borderRadius:'20px'}}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line })}>
            {/* <span>{i + 1}</span> */}
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
  )
}

export default CodePreview
