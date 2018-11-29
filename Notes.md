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