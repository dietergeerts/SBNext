// Using the sassdoc parser as a loader would be great, as then the user
// will be more in control, and it will be more explicit, showing what's
// going on exactly.
//
// Pro of this is that only the required files will be loaded, though
// the need for a separate scss file with all @imports...., unless we find
// a way that Storybook can do this by wacthing everything....

import React from 'react';
import myDocs from '!sassdoc-loader!./button.scss';

export default () => <div><button class="button">button</button><br/><pre>{myDocs}</pre></div>;
