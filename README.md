# Aranja front-end interview challenge

## Project brief

You are making the top section of a typical marketing website's home page. There is a top navigation and a slider that are very visually coupled.
The website has a max-width of 1440px and centers horizontally on larger than 1440px viewports.
The provided data is similar to how a JSON API would respond.

### Data and assets

Data can be found in `src/data.json`
Logo can be found in `public/logo.svg`
Font files can be found in `public/fonts/*`
Theme has been specified in `src/theme.js`

[https://www.figma.com/file/JZW7cMo3GKXblQTMlsvTp2/Werk-UI-Kit?node-id=264%3A1194](Desktop design in Figma)
[https://www.figma.com/file/JZW7cMo3GKXblQTMlsvTp2/Werk-UI-Kit?node-id=264%3A1218](Mobile design in Figma)

### Desktop view

Press `ctrl+g` in Figma to visualize the 14 column grid.

[image here]

#### Navigation

All menu items link to `"/"`.
Navigation relies on the dark background: Ensure that adding or removing menu items, or shrinking/enlarging the viewport, won't result in losing readability or design features.

#### Slider

For large viewports (`>=1024px`) the slider is interactive. Every 6 seconds a new slide appears. The slides loop around.
The horizontal line above the paragraph doubles as a progress indicator.
Clicking the indicator dots (on the right side) changes slides to the chosen index.
The indicator text (on the left side) reflects the current slide.
Each slide's text animates in/out. Feel free to implement that as you desire.

Keep accessibility in front of your mind, e.g. make sure the slider has keyboard support and think about how screen readers might read the slider.

### Mobile view

[image here]

#### Navigation

The menu call-to-action shouldn't do anything.

#### Slider

For small viewports (`<1024px`) the slider is static and only displays the first slide.

### Tech stack

For the sake of time this project doesn't require TypeScript.
This project includes the following libraries:
**CSS in JS**: [https://github.com/styled-components/styled-components](styled-components)
**Animation**: [https://github.com/framer/motion](Framer Motion)

Feel free to switch them out for something you're more comfortable with, e.g. `yarn add gsap` or `yarn add react-spring` instead of `framer-motion`.

Feel free to take whatever approach to CSS as you wish. Whether that's `CSS Grid Layout`/`Flexbox`. `JS variables`/`CSS custom properties`. `CSS keyframes`/`className toggling`. The world is your oyster.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
