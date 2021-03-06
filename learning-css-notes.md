#### float
* float pushes an element to the sides of a page with text wrapped around it. you can create entire page or a smaller area by using float. if size of a floated element changes, text around it will re-flow to accommodate the changes.
* If this parent element contained nothing but floated elements, the height of it would literally collapse to nothing. This where `clear` methods come in. If the parent element has a fixed height, then the problem goes away too.
  * Hidden overflow - pretty solid method. The main disadvantage is if you set a height on the parent element, any overflow will be...well, hidden. I found this when creating a menu with floated list items - the submenus would not appear. e.g.
  ```css
  .element {
      overflow: hidden;
  }
  ```
  * Clearing element - rather than a line break, I would use a div with height: 0; clear: both; since it won't create a gap below. This is a more solid method, the only disadvantage being an extra element in the markup.
  ```css
  .clearfix {
      height: 0px;
      clear: both;
  }
  ```
  Then add an empty div after float elements



### Positions
* absolute, place an element exactly where you want to place it.
  * absolute position is actually set relative to the element's parent. if no parent available then relatively place to the page itself.
* relative, the element is relative to itself. (**from where the element would be placed, if u don't apply relative positioning**).
* fixed. Fixed to the viewpoint, or the window page.
* static. This is default. Just follows normal flow.

### unit
* `px`
* `em`
* `rem`
* `%`
* `pt`

### `inline`, `inline-block`, `block`
* `inline`: element placed inline it's parent, it doesn't break the flow. *It can't have width and height*. That said, inline element can't have vertical effect (e.g. `padding-top`, `padding-bottom`), yet it can have horizontal effect. (e.g. `padding-left` or `padding-right` or `margin-left` or `margin-right`).
* `inline-block`: it is similar to inline, but it can have height. Think it as an inline _block_, that blocks don't break the flow.
* `block`, breaks the normal flow, just takes the entire the line. (e.g. `div`, `p`).

### Box model
Think the element as a box, e.g. a `div`. Technically, height, width, padding and border are part of box model and margin is related to it. *margin* does not affect box size. `width=width + padding-left + padding-right + border-left + border-right`.
* speaking `boarder`. Look at this code:
```css
  * {
    box-sizing: border-box;
  }
```
It tells the browser what the sizing properties (width and height) should include.

### Overflow
* Overflow property deals with the content if content size exceeds the allocated size for the content. You can make extra content visible, hidden, scroll or auto (viewport default behavior).
* `overflow: hidden` create a new block formatting context. Using this can clear floating height problem.

### `visibility` vs `display`
* `visibility: hidden`. Element is not visible, but takes the space. When page loads, it doesn't get downloaded into the browser??
* `display: none` downloads the element (e.g. an image). It does not take the space, and causes the HTML DOM re-flow.

does this trigger a HTTP request? (yes)
```HTML
<img src="mypic.jpg" style="visibility: hidden" alt="My photo">
```
what about this? (yes)
```HTML
<div style="display: none;">
   <img src="mypic.jpg" alt="My photo">
</div>
```

### Optimize selector
* If I order selectors in terms of render speed it would be like id, class, tag, siblings, child, descendant, universal, attribute, pseudo.
* Speed of ID and class is very close.
* Make your selector readable.
* Avoid redundant selectors.

### Specificity
It is a process of determining which css rule will be applied to an element. it actually determines which rules will take precedence. Inline style usually wins then ID then class value (or pseudo-class or attribute selector), universal selector (*) has no specificity.


### Media queries
