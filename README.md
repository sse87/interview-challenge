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

[Desktop design in Figma](https://www.figma.com/file/h3XWe6bnNy9CDSf6bY4rGG/Werk-Aranja-interview-challenge?node-id=1%3A33)\
[Mobile design in Figma](https://www.figma.com/file/h3XWe6bnNy9CDSf6bY4rGG/Werk-Aranja-interview-challenge?node-id=1%3A48)

### Desktop view

Press `ctrl+g` in Figma to visualize the 14 column grid.

![Desktop view](https://user-images.githubusercontent.com/8494120/103651391-6def1200-4f59-11eb-8d85-0c55c863ab0b.png)

#### Navigation

All menu items link to `"/"`.
Navigation relies on the dark background: Ensure that adding or removing menu items, or shrinking/enlarging the viewport, won't result in losing readability or design features.

#### Slider

For large viewports (`>=1024px`) the slider is interactive. Every 6 seconds a new slide appears. The slides loop around.\
The horizontal line above the paragraph doubles as a progress indicator.\
Clicking the indicator dots (on the right side) changes slides to the chosen index.\
The indicator text (on the left side) reflects the current slide.\
Each slide's text animates in/out. Feel free to implement that as you desire.

Keep accessibility in front of your mind, e.g. make sure the slider has keyboard support and think about how screen readers might read the slider.

### Mobile view

![Mobile view](https://user-images.githubusercontent.com/8494120/103651670-e05ff200-4f59-11eb-9406-0f7ddadd0c3c.png)

#### Navigation

The menu call-to-action shouldn't do anything.

#### Slider

For small viewports (`<1024px`) the slider is static and only displays the first slide.

### Tech stack

For the sake of time this project doesn't require TypeScript.\
This project includes the following libraries:\
**CSS in JS**: [styled-components](https://github.com/styled-components/styled-components)\
**Animation**: [Framer Motion](https://github.com/framer/motion)

Feel free to switch them out for something you're more comfortable with, e.g. `yarn add gsap` or `yarn add react-spring` instead of `framer-motion`.

Feel free to take whatever approach to CSS as you wish. Whether that's `CSS Grid Layout`/`Flexbox`. `JS variables`/`CSS custom properties`. `CSS keyframes`/`className toggling`. The world is your oyster.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
