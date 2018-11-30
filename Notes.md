Higher order component is a special component that is customiseable so that we can reuse code in our application

We create a base component - then we enhance it to make hugher order components in our app - we can reuse the base by making the base customiseable

A higherOrderComponent can add any additional functionality - eg authentication

In our example, even though we don't reuse our authentication code for our HOC, we can imagine a situation where multiple instances of the authentication is needed
    - For example, to limit access to more than one site

from git@github.com:Sukkrivaa/post-testing.git

steps to create a igher order component
    write the logic you want to reuse in a component
        In this case, this is the authentication logic
    Create the HOC file and add the HOC scaffold
    Move the reusable logic into the HOC
    Pass the props/config/behaviour to through the child component that we want to enhance

/tests should not work here because you didn't download the latest test suite


We are just using the code from HOC and are too lazy to change the file name


actions from action creators are sent to the middlewares which then forward the action to the reducer after manipulating the action in certain ways - that is the purpose of middlewares in redux - they always lie in the middle of the action and the reducer to manipulate the reducer

unit tests write next to the file we are testing
integration tests right next to the src file for testng

middleware stack - no limit to middleswares in nodeJS or redux - can stack them up - if we want to ignore something, we use the next() keyword - this means the middleware has to inspect the action

when we change the action via a middleware, we need to resend it through all the middleware so that the order of the middlewares do not matter

redux promise requires that you name your payload as payload and not as comments or anything else

when you have a bug use debugger to see the values of all your properties as the application runs - especially with middlewares

the url jsonschema.net is very useful for creating json schema. We would use json schema for middlewares, type validation, documentation for other programmers etc.


