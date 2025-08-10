ADMIN DASBBOARD WITH HTML AND CSS

DESCRIPTION:

In this experiment, I designed a basic admin dashboard layout using only HTML and CSS. The dashboard includes a header, a sidebar with navigation links, a main content area, and a footer. I also implemented a dark mode feature without using any JavaScript.
The dark mode is activated by checking a checkbox input element. When the checkbox is selected, the theme switches to dark colors. This effect is achieved entirely using CSS variables and the :checked selector.

TEST CASES AND  FUNCTIONAL REQUIREMENTS:
DARK MODE CHECKBOX:
A checkbox is provided to switch between light and dark themes. When the box is checked, the entire layout changes to a dark theme. When unchecked, it stays in light mode. This works by using a sibling selector to override the default CSS variable values.

SIDEBAR NAVIGATION:
The sidebar contains links like Home, Users, and Settings. These are structured using an unordered list. I ensured that the text is clearly visible in both light and dark themes by modifying the HTML structure slightly (adding spans inside the anchor tags). The CSS remains unchanged.

MAIN CONTENT AREA:
This section shows a welcome message. I used heading tags for structure and wrapped it inside a scrollable container to handle overflow. This part also adapts correctly to light and dark themes.

FOOTER:
The footer is placed at the bottom using CSS Grid and spans the full width of the layout. The footer background color changes according to the theme and contains a simple copyright message.

RESPONSIVE GRID LAYOUT:
The overall layout is created using CSS Grid with three rows (header, main, footer) and two columns (sidebar and content). It is fully responsive and fills the full height of the viewport.

CSS STYLING AND VARIABLES:
I used CSS variables to define color themes. In the :root, I defined light mode colors, and inside a selector that targets #theme-switch:checked, I redefined them for dark mode. This approach makes it easy to switch themes without touching each element individually.
The header and footer share the same background color in both light and dark modes to keep the design consistent. In light mode, both are light green. In dark mode, they turn into a darker shade for better visibility.

LEARNING OUTCOMES :
Through this experiment, I learned how to:
1.Structure a clean and responsive layout using HTML and CSS Grid.
2.Use CSS variables for managing themes.
3.Implement dark mode functionality using just a checkbox and CSS, without any JavaScript.
4.Organize HTML in a way that supports visual changes without needing to touch the styles.
5.Apply consistent color schemes across header, footer, and sidebar sections.