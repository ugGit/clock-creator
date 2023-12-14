# TODOs

- [x] Start implementing a proper navigation to make some impressions. Might require some additional imports: https://tailwindui.com/components/application-ui/navigation/navbars
- [ ] Keep an eye on code coverage: https://app.codecov.io/gh/ugGit/clock-creator
- [x] Fix the compilation error: ⨯ The requested resource "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" has type "image/svg+xml" but dangerouslyAllowSVG is disabled
- [x] Refactor components to follow react naming convention (PascalCase) for file names
- [ ] Implement the analog clock: https://github.com/WebDevSimplified/JavaScript-Clock
  - [x] Fix the seconds hand disappearing at 12, 3, 6 and 9
  - [x] Use react refs for the hands
  - [ ] Allow changing the font for the clock
    - [ ] Add a font picker (https://www.npmjs.com/package/font-picker-react)
    - [ ] Add a font size picker
    - [ ] Refactor code to display numbers not using rotation and center point, but calculate the different positions. This is necessary for other alignments like square etc. (using trigonometry, but be carfeul with exact positioning because of different offsets etc.)
    - [x] Add roman letters as option
      - [x] Refactor code to automatically generate the numbers. Must be different when using roman letters (use 'x' and 'i' characters appropriately)
      - [x] Toggle rotation of symbolds around the clock (or always 0deg rotation)
    - [ ] Add no letters as option (only dots or any other symbol)
  - [ ] Allow choosing different forms of the clock
  - [ ] Allow adding a background image to the clock
    - [ ] Add a background color picker
    - [ ] Add a background image picker
    - [ ] Convert the background images to greyscale images with transparency
  - [ ] Allow choosing different pairs of hands
    - [ ] Add a hand picker
    - [ ] Add a hand size picker
    - [ ] Add a hand color picker
    - [ ] Add a hand shape picker (for the tip of the hand)
  - [ ] Select hands (hour, minute, second) to be shown
  - [ ] Add tests:
    - [x] Test the clock hands
    - [ ] Test the clock face (different forms)
    - [ ] Test the clock

# Current Tutorial Bookmarks:

- [ ] Continue React Tutorial: https://react.dev/learn/state-a-components-memory
- [ ] Continue the NEXT.JS tutorial: https://nextjs.org/learn-pages-router/basics/data-fetching
- [ ] Start using React Storybook for isolated component development: https://storybook.js.org/tutorials/intro-to-storybook/react/en/composite-component/
- [ ] Start Looking at tailwindcss
