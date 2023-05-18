


const Blog = () => {


   return (
      < >


         <div className='px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex flex-col gap-5'>
            <div>
               <h1 className='font-bold text-xl'> 1. Differences between uncontrolled and controlled components</h1>
               <p><span className='font-bold'>ANS:</span> In the context of React, controlled and uncontrolled components refer to the way data is managed within the components.</p>
               <p>
                  Controlled components are React components that have their data managed by the parent component through props. The parent component passes down the value and state of the component as props and also provides functions to handle changes to the data. This allows the parent component to have full control over the component's data and behavior. For example, a controlled input component in React would have its value and onChange event handler managed by the parent component.
               </p>
               <p>
                  Uncontrolled components, on the other hand, manage their own state internally and do not rely on the parent component to manage their data. In uncontrolled components, the data is managed by the component itself using the component's internal state. For example, an uncontrolled input component would manage its own value and update the state based on user input.
               </p>
            </div>

            <div>
               <h1 className='font-bold text-xl'> 2. How to validate React props using PropTypes?</h1>
               <p><span className='font-bold'>ANS:</span> In React, PropTypes is a package that provides a way to validate the props passed to a component. It is useful in ensuring that the component receives the correct type of data and in providing developers with a way to debug and catch errors during development. Here is an example of how to validate React props using PropTypes:</p>
               <ul>
                  <li>1.Install the PropTypes package.</li>
                  <li>2.Import PropTypes into we component.</li>
                  <li>3.Define the PropTypes for we component by adding a propTypes property to we component.</li>
                  <li>4.Use the props in we component.</li>
               </ul>
               <p>By using PropTypes, we can ensure that the props passed to our component are of the correct type, catch errors during development, and make our code more robust.</p>
            </div>

            <div>
               <h1 className='font-bold text-xl'> 3.Difference between nodejs and express js</h1>
               <p><span className='font-bold'>ANS:</span> Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript code on the server-side. It provides an environment for building scalable and high-performance network applications. Node.js is widely used for developing server-side applications and tools, such as web servers, APIs, command-line tools, and desktop applications. </p>

               <p>Express.js, on the other hand, is a web framework built on top of Node.js that provides a set of features and tools for building web applications and APIs. Express.js simplifies the process of building web applications by providing a set of routing and middleware features that help handle HTTP requests and responses. It also provides features for handling errors, parsing request bodies, serving static files, and more.</p>

            </div>
            <div>
               <h1 className='font-bold text-xl'> 4. What is a custom hook, and why will we create a custom hook?</h1>
               <p><span className='font-bold'>ANS:</span> A custom hook in React is a JavaScript function that allows you to extract component logic into reusable functions. Custom hooks enable you to share logic between components without having to repeat code, making it easier to maintain and test your application.</p>
               <p>
                  We can create a custom hook when to find ourself writing the same code or using the same pattern across multiple components. By creating a custom hook, WE can extract the shared logic into a reusable function that can be imported into different components. This can help to reduce the amount of code we need to write and make we codebase more modular and easier to maintain.
               </p>
            </div>
         </div>

      </>
   )



};

export default Blog;