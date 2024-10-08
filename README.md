<p>
  <a href="https://railz.ai/" rel="noopener" target="_blank"><img width="200" src="./assets/images/fis-logo.png" alt="FIS logo"></a>
</p>
FIS® Accounting Data as a Service™ is the solution that makes sense of your business customers' financial data.

<h1>Accounting Data as a Service Connect™</h1>

<p>
  <a href="https://github.com/railz-ai/railz-connect/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@railzai/railz-connect" alt="Software License"/></a>
  <a href="https://www.npmjs.com/package/@railzai/railz-connect"><img src="https://img.shields.io/npm/v/@railzai/railz-connect/latest.svg" alt="Latest Package on NPM"/></a>
</p>


Accounting Data as a Service Connect™ is a plug-and-play widget that provides a secure, elegant authentication flow for each integration that Accounting Data as a Service™ supports. Accounting Data as a Service Connect™ makes it secure and easy for business customers to connect their financial data to Accounting Data as a Service™.
</br>
</br>
<img src="./assets/images/03-FIS-Connect.png" alt="Accounting Data as a Service™ Connect preview" width="500px" />
</br>

### Install

With `npm`:

```
npm install --save @railzai/railz-connect
```

With `yarn`

```
yarn add @railzai/railz-connect
```

## Documentation

Refer to the [Official Accounting Data as a Service™ docs](https://docs.railz.ai/docs/railz-connect-overview)
for more detailed description.

## Examples

Multiple examples are provided in [CodeSandbox](https://codesandbox.io/examples/package/@railzai/railz-connect).

Examples are also available in this repo.

## Upgrading or changing Accounting Data as a Service™ version

Change the version in the `package.json` to the desired version or upgrade to latest connect version with:

```
yarn add @railzai/railz-connect
```

```
  "dependencies": {
    "@railzai/railz-connect": "~1.1.1",
  },
```
Install & start the app.
```
cd /[your-installation-dir]
yarn install
```

If you need to troubleshoot the upgrade, you can try deleting the `node_modules` in the root directory & reinstall the packages.

```
cd /[your-installation-dir]
rm -rf node_modules
yarn install
```

## How to use
The previous version of Accounting Data as a Service Connect™ was hosted in our CDN as a script, that method is no longer supported
however you can now follow that same method using npm.

This is the preferred approach for integrating with Accounting Data as a Service Connect™.

### Using HTML Reference
#### Angular

##### app.component.ts
```ts
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import RailzConnect from '@railzai/railz-connect';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
    @ViewChild('railzConnect', { static: false }) railzConnect: ElementRef;

    ngAfterViewInit(): void {
        const widget = new RailzConnect();
        widget.mount({
            parentElement: this.railzConnect.nativeElement,
            widgetId: '<Your Widget Id>',
        });
    }
}
```
##### app.component.html
```html
<div id='railz-connect' #railzConnect></div>
```


#### React
```tsx
import RailzConnect from '@railzai/railz-connect';
import {useEffect, useRef} from "react";

function App() {
  const ref = useRef();

  useEffect(() => {
    const widget = new RailzConnect();
    widget.mount({
      parentElement: ref.current,
      widgetId: '<Your Widget Id>'
    });
  },[])
  return (
    <div id='railz-connect' ref={ref}></div>
  );
}

export default App;

```

#### Vue
```html
<script>
  import RailzConnect from "@railzai/railz-connect";
  const widget = new RailzConnect();
  widget.mount({
      parentElement: document.getElementById('railz-connect'),
      widgetId: '<Your Widget Id>'
  });
</script>

<template>
  <main>
    <template>
      <div id="railz-connect"></div>
    </template>
  </main>
</template>


```
