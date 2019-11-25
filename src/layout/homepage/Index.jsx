import React, { useState, useEffect } from 'react';

// external dependencies
//
import SyntaxHighlighter from 'react-syntax-highlighter';
import { hybrid } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Homepage = (props) => {
  const codeString = `
import React, { useState, useEffect } from 'react';

// website component
const Website = (props) => {
  return (
    <div className="website">
      <Header />
      <Body />
      <Footer />
      </div>
  );
}

export default Website;
	`;

  // string
  const [string, setString] = useState(codeString);
  const [stringSplit, setStringSplit] = useState(0);
  const [loop, setLoop] = useState();

  useEffect(() => {
    let interval = null;
    let timeout = null;

    if (stringSplit <= string.length + 1) {
      interval = setInterval(() => {
        setStringSplit(stringSplit + 1);
        setString(codeString.substring(0, stringSplit + 1));
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setStringSplit(0);
        setString('');
      }, 5000);
    }

    return () => {
      clearInterval(interval);
      clearInterval(timeout);
    };
  }, [stringSplit]);

  return (
    <div className="homepage">
      <div className="homepage__headline">
        <div className="homepage__headline-text">
          <h1>Custom web solutions tailored to your needs</h1>
        </div>
        <div className="homepage__headline-code">
          <SyntaxHighlighter language="javascript" style={hybrid}>
            {string}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
