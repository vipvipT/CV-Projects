const quiz = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["&lt;js&gt;",
                  "&lt;javascript&gt;",
                  "&lt;script&gt;",
                  "&lt;scripting&gt;"],
        answer: 2
    },

    {
        question: "Where is the correct place to insert a JavaScript?",
        options: ["The &lt;head&gt; section",
                  "Both the &lt;head&gt; and the &lt;body&gt; are correct",
                  "The &lt;body&gt; section"],
        answer: 1
    },

    {
        question: "What is the correct syntax for referring to an external script called " + '"xxx.js"' + "?",
        options: ["&lt;script href=" + '"xxx.js"' + "&gt;",
                  "&lt;script src=" + '"xxx.js"' + "&gt;",
                  "&lt;script name=" + '"xxx.js"' + "&gt;"],
        answer: 1
    },

    {
        question: "The external JavaScript file must contain the &ltscript&gt; tag.",
        options: ["True",
                  "False"],
        answer: 1
    },

    {
        question: "How do you write "+ '"Hello World"' +" in an alert box?",
        options: ["alert("+'"Hello World"' + ");",
                  "alertBox("+'"Hello World"' + ");",
                  "msgBox("+'"Hello World"' + ");",
                  "msg("+'"Hello World"' + ");"],
        answer: 0
    },

    {
        question: "How do you create a function in JavaScript?",
        options: ["function myFunction()",
                "function = myFunction()",
                 "function:myFunction()"],
        answer: 0
    },

    {
        question: "How do you call a function named " + '"myFunction"' + "?",
        options: ["call myFunction()",
                "call function myFunction()",
                "myFunction()"],
        answer: 2
    },

    {
        question: "How to write an IF statement in JavaScript?",
        options: [ "if i == 5 then",
                   "if (i == 5)",
                   "if i = 5 then",
                   "if i = 5"],
        answer: 1
    },

    {
        question: "How can you add a comment in a JavaScript?",
        options: ["&lt;!--This is a comment--&gt;",
                  "This is a comment",
                  "//This is a comment"],
        answer: 2
    },

    {
        question: "How to insert a comment that has more than one line?",
        options: ["&lt;!--This comment has </br> more than one line--&gt;",
                  "//This comment has </br> more than one line//",
                "/* This comment has </br> more than one line */"],
        answer: 2
    }
]
