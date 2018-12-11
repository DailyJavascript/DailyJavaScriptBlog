---
title: "What is strict mode and should you enable it when writing JavaScript?"
date: 2018-11-20T00:16:19-05:00
draft: false
---

A few of our users at {{< url >}} have emailed me asking if they should enable strict mode when writing the solution to the daily javascript coding challenges. I decided to write a post to clarify to all our users what strict mode is and if there is any benefits to enabling it when writing their coding solutions.

## TL;DR
>**JavaScript lets you declare 'strict mode' in your JavaScript files to remove some of the flexibility innate in the JavaScript language prior to ES5. It's not required for solving the coding challenges and no company is going to think poorly of you if you neglect to include it in your solutions when you are given a coding challenge or whiteboard problem during a technical interview.**

With that out of the way, let's dive into what strict mode is and how we would enable it.

Strict Mode was a feature introduced in ES5.  When you enable it, the JavaScript runtime prevents certain code that's considered bad practice from being executed and throws exceptions instead of silently failing.

So why is this good?

JavaScript is designed to be easy for developers to write and execute code.  Compared to say Haskell or Java, JavaScript developers do not have to worry about compiling their code or writing types.  So if you're a novice JavaScript developer, you could get a program set up and working pretty fast.  This speed though has some drawbacks in that some of the code written can contain bugs that affect the program much later on as the complexity of the program increases.  With strict mode enabled, some classification of bugs are caught much earlier and can be fixed by the developer before it affects the program.  Three common beginner JavaScript developer bugs restricted with strict mode:
<ol>
<li>Strict mode makes it impossible to accidentally create global variables

```
function notStrictModeEnabled() {
  x = 17
};

notStrictModeEnabled() //no errors
```

```
function strictModeEnabled() {
  'use strict'
  x = 17
};

strictModeEnabled() //errors
```
</li>
<li>Strict mode makes assignments which would otherwise silently fail to throw an exception.

```
function notStrictModeEnabled() {
  Infinity = 17
};

notStrictModeEnabled() //no errors
```

```
function strictModeEnabled() {
  'use strict'
  Infinity = 17
};

strictModeEnabled() //errors
```
</li>
<li>Strict mode requires that function parameter names be unique.

```
function notUniqueParamsInFunction(a, a, c) {
  'use strict';
  return a + a + c; // errors
}
```
</li>
</ol>
There are many more restrictions that strict mode introduces that you can read about in the official standards on page 235: [ECMA Language Specification](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf) or you can check out [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) Strict Mode article for a more readable experience

Cool! So how do I enable this in my code?

There are four ways to enable 'strict mode':
<ol>
<li>You include it at the top of your file or script tag.

```
 'use strict';

 //...rest of your file
```

or

```
 <script>
 `use strict`
 // ...rest of your code
 </script>
```
</li>
<li>You can include it at the top of your function declaration or function expression.

```
 function strictModeEnabledFunctionDeclaration(){
   'use strict';
   //...rest of your code;
 }

 var strictModeEnabledFunctionExpression = function() {
   'use strict';
   //...rest of your code;
 }
```
</li>
<li>Your code is automatically in strict mode if you export it as a module.

```
function strictModule() {
    // because this is a module, I'm strict by default
}

export default strictModule;
```
</li>
<li>Use babel.  In Babel 6, transformations for ES6 modules ran on whatever files it was told to process, never taking into account if the file actually had ES6 imports/exports in them.  This had the effect of inserting "use strict" at the top of all modules that were processed by Babel.  In Babel 7, you would have to enable this behavior by using transform-strict-mode plugin.
</li>
</ol>

There are other benefits to using strict mode that I didn't mention in this post that you can read about more in the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) Strict Mode article mentioned above.   These include code optimization by the JavaScript engine in browsers, more secure JavaScript code and restricting namespaces for future JavaScript features.  Some big companies currently using strict mode in production include Facebook and Google.

>**If you found this article interesting or would love to become a better programmer, consider signing up for free at {{< url >}} to get daily javascript challenges, code snippets and articles.**

{{< refcode >}}