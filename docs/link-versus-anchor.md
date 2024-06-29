# Link Versus Anchor Tags

Anchor tags (&lt;a&gt;) will cause a full page reload when being clicked.

Alternately:

Link tags (&lt;Link&gt;) will allow the app to go to a new route without reloading the page.

```html
<a href="/path">Reload the page when clicking this link</a>

<link to="/path">Do NOT reload the page when clicking this link</link>
```

Import `Link` from `react-router-dom`:
``` javascript
import { Link } from 'react-router-dom'
```

[Code diff](#TODO)