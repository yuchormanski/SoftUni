REGEX BASICS    	DESCRIPTION
^   	               The start of a string
$   	               The end of a string
.   	               Wildcard which matches any character, except newline (\n).
|   	               Matches a specific character or group of characters on either side (e.g. a|b corresponds to a or b)
\   	               Used to escape a special character
a   	               The character "a"
ab  	               The string "ab"

QUANTIFIERS	     DESCRIPTION
*	               Used to match 0 or more of the previous (e.g. xy*z could correspond to "xz", "xyz", "xyyz", etc.)
?	               Matches 0 or 1 of the previous
+	               Matches 1 or more of the previous
{5}	               Matches exactly 5
{5, 10}	          Matches everything between 5-10

CHARACTER CLASSES	DESCRIPTION
\s	               Matches a whitespace character
\S              	Matches a non-whitespace character
\w	               Matches a word character
\W	               Matches a non-word character
\d              	Matches one digit
\D              	Matches one non-digit
[\b]            	A backspace character
\c	               A control character

SPECIAL CHARACTERS	DESCRIPTION
\n              	Matches a newline
\t	               Matches a tab
\r	               Matches a carriage return
\ZZZ            	Matches octal character ZZZ
\xZZ            	Matches hex character ZZ
\0	               A null character
\v	               A vertical tab

GROUPS          	DESCRIPTION
(xyz)           	Grouping of characters
(?:xyz)	          Non-capturing group of characters
[xyz]	          Matches a range of characters (e.g. x or y or z)
[^xyz]          	Matches a character other than x or y or z
[a-q]	          Matches a character from within a specified range
[0-7]	          Matches a digit from within a specified range

STRING REPLACEMENTS	DESCRIPTION
$`	               Insert before matched string
$'	               Insert after matched string
$+                  Insert last matched
$&	               Insert entire match
$n	               Insert nth captured group

ASSERTIONS      	DESCRIPTION
(?=xyz)	          Positive lookahead
(?!xyz)             Negative lookahead
?!= or ?<!	     Negative lookbehind
\b	               Word Boundary (usually a position between /w and /W)
?#	               Comment


Regular Expressions
Basic Regular Expression Syntax
Regular expressions (regex's) are useful as a way to match inexact sequences of characters. They can be used in the `Find...' 
and `Replace...' search dialogs and are at the core of Color Syntax Highlighting patterns. To specify a regular expression in a 
search dialog, simply click on the `Regular Expression' radio button in the dialog.

A regex is a specification of a pattern to be matched in the searched text. This pattern consists of a sequence of tokens, 
each being able to match a single character or a sequence of characters in the text, or assert that a specific position within 
the text has been reached (the latter is called an anchor.) Tokens (also called atoms) can be modified by adding one of a 
number of special quantifier tokens immediately after the token. A quantifier token specifies how many 
times the previous token must be matched (see below.)

Tokens can be grouped together using one of a number of grouping constructs, the most common being plain parentheses. 
Tokens that are grouped in this way are also collectively considered to be a regex atom, since this new larger atom may 
also be modified by a quantifier.

A regex can also be organized into a list of alternatives by separating each alternative with pipe characters, `|'. 
This is called alternation. A match will be attempted for each alternative listed, in the order specified, until a 
match results or the list of alternatives is exhausted (see Alternation section below.)

The 'Any' Character
If a dot (`.') appears in a regex, it means to match any character exactly once. By default, dot will not match a 
newline character, but this behavior can be changed (see help topic Parenthetical Constructs, under the heading, Matching Newlines).

Character Classes
A character class, or range, matches exactly one character of text, but the candidates for matching are limited to 
those specified by the class. Classes come in two flavors as described below:

     [...]   Regular class, match only characters listed.
     [^...]  Negated class, match only characters NOT listed.
As with the dot token, by default negated character classes do not match newline, but can be made to do so.

The characters that are considered special within a class specification are different than the rest of regex syntax as follows. 
If the first character in a class is the `]' character (second character if the first character is `^') it is a literal 
character and part of the class character set. This also applies if the first or last character is `-'. Outside of these rules, 
two characters separated by `-' form a character range which includes all the characters between the two characters as well. 
For example, `[^f-j]' is the same as `[^fghij]' and means to match any character that is not `f', `g', `h', `i', or `j'.

Anchors
Anchors are assertions that you are at a very specific position within the search text. NEdit regular expressions 
support the following anchor tokens:

     ^    Beginning of line
     $    End of line
     <    Left word boundary
     >    Right word boundary
     \B   Not a word boundary
Note that the \B token ensures that neither the left nor the right character are delimiters, or that both left and right 
characters are delimiters. The left word anchor checks whether the previous character is a delimiter and the next character is not. 
The right word anchor works in a similar way.

Quantifiers
Quantifiers specify how many times the previous regular expression atom may be matched in the search text. 
Some quantifiers can produce a large performance penalty, and can in some instances completely lock up NEdit. 
To prevent this, avoid nested quantifiers, especially those of the maximal matching type (see below.)

The following quantifiers are maximal matching, or "greedy", in that they match as much text as possible.

     *   Match zero or more
     +   Match one  or more
     ?   Match zero or one
The following quantifiers are minimal matching, or "lazy", in that they match as little text as possible.

     *?   Match zero or more
     +?   Match one  or more
     ??   Match zero or one
One final quantifier is the counting quantifier, or brace quantifier. It takes the following basic form:

     {min,max}  Match from `min' to `max' times the
                previous regular expression atom.
If `min' is omitted, it is assumed to be zero. If `max' is omitted, it is assumed to be infinity. Whether specified or assumed, `min' 
must be less than or equal to `max'. Note that both `min' and `max' are limited to 65535. If both are omitted, then the construct is the 
same as `*'. Note that `{,}' and `{}' are both valid brace constructs. A single number appearing without a comma, e.g. `{3}' is short for 
the `{min,min}' construct, or to match exactly `min' number of times.
The quantifiers `{1}' and `{1,1}' are accepted by the syntax, but are optimized away since they mean to match exactly once, which is 
redundant information. Also, for efficiency, certain combinations of `min' and `max' are converted to either `*', `+', or `?' as follows:

     {} {,} {0,}    *
     {1,}           +
     {,1} {0,1}     ?
Note that {0} and {0,0} are meaningless and will generate an error message at regular expression compile time.
Brace quantifiers can also be "lazy". For example {2,5}? would try to match 2 times if possible, and will only match 3, 4, 
or 5 times if that is what is necessary to achieve an overall match.
Alternation
A series of alternative patterns to match can be specified by separating them with vertical pipes, `|'. An example of alternation 
would be `a|be|sea'. This will match `a', or `be', or `sea'. Each alternative can be an arbitrarily complex regular expression. 
The alternatives are attempted in the order specified. An empty alternative can be specified if desired, e.g. `a|b|'. 
Since an empty alternative can match nothingness (the empty string), this guarantees that the expression will match.
Comments
Comments are of the form `(?#<comment text>)' and can be inserted anywhere and have no effect on the execution of the regular expression. 
They can be handy for documenting very complex regular expressions. Note that a comment begins with `(?#' and ends at the first occurrence 
of an ending parenthesis, or the end of the regular expression... period. Comments do not recognize any escape sequences.
