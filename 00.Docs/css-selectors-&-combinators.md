# Adjacent sibling combinator

    The adjacent sibling combinator (+) separates two selectors and matches the second element only if it immediately follows the first element, and both are children of the same parent element.

    former_element + target_element { style properties }

# General sibling combinator

    The general sibling combinator (~) separates two selectors and matches all iterations of the second element, that are following the first element (though not necessarily immediately), and are children of the same parent element.

    former_element ~ target_element { style properties }

# Child combinator

    The child combinator (>) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the direct children of elements matched by the first.

    selector1 > selector2 { /* style properties */ }

# First child combinator (respectively last child)

    The first child CSS (:first-child) is a selector in CSS. It matches only the first element immediately inside the other element. It is defined as a structural pseudo-class.
    It is defined as a structural pseudo-class in the CSS Selectors Level 3 spec

    element:first-child { style properties }

# First of type combinator

    The :first-of-type selector in CSS allows you to target the first occurrence of an element within its container. It is defined in the CSS Selectors Level 3 spec as a “structural pseudo-class”, meaning it is used to style content based on its relationship with parent and sibling content.

    element:first-of-type { style properties }

# nth child combinator

    The :nth-child() CSS pseudo-class matches elements based on the indexes of the elements in the child list of their parents. In other words, the :nth-child() selector selects child elements according to their position among all the sibling elements within a parent element.

    element:nth-child()
