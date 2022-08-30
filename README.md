## Leasup Icons based on React Feather Icons

### Usage

```javascript
import React from 'react';
import { Camera } from 'react-feather';

const App = () => {
  return <Camera />;
};

export default App;
```

Icons can be configured with inline props:

```javascript
<Camera color="red" size={48} />
```

### Add a new icon to the library

To do so, you just need to add your icons as an SVG format looking like so:

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
</svg>
```

To be consistent with the rest of the library, it is better if we have square icons of 24x24 pixels.

Once you have added all your icons in the `./icons` folder at the root of this repository, you can simply execute the command `npm install && npm run all`.

:warning: The command above will compile, build, commit, increment the version and push to the repository automatically !

Finally, you can go back to the frontend project and run a simple `npm update leasup-icons`.
