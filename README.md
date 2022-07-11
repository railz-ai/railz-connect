<p>
  <a href="https://railz.ai/" rel="noopener" target="_blank"><img width="200" src="./assets/images/railz-logo.svg" alt="Railz logo"></a>
</p>

<h1>Railz Connect</h1>

<p>
  <a href="https://github.com/railz-ai/railz-connect/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@railzai/railz-connect" alt="Software License"/></a>
  <a href="https://www.npmjs.com/package/@railzai/railz-connect"><img src="https://img.shields.io/npm/v/@railzai/railz-connect/latest.svg" alt="Latest Package on NPM"/></a>
</p>

Railz Connect™ is a plug-and-play widget that provides a secure, elegant authentication flow for each integration that Railz supports. Railz Connect™ makes it secure and easy for business customers to connect their financial data to Railz.
</br>
</br>
<img src="./assets/images/railz-connect.png" alt="Railz Connect preview" width="500px" />
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

Refer to the [Official Railz Connect docs](https://docs.railz.ai/docs/railz-connect-overview)
for more detailed description.

## Examples

Multiple examples are provided in [CodeSandbox](https://codesandbox.io/examples/package/@railzai/railz-connect).

Examples are also available in this repo.

## How to use
The previous version of Railz Connect was hosted in our CDN as a script, that method is still supported
however you can now follow that same method using npm.

This is the preferred approach for integrating with Railz Connect.

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
