import * as React from 'react';

const Layout = () => {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8"/>
      <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <title>Document</title>
    </head>
    <body>
    <div id="app"></div>
    <script src="./bundle.js"/>
    </body>
    </html>
  )
}

export default Layout