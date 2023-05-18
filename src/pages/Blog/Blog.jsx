


const Blog = () => {


   return (
      < >


         <div className='px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex flex-col gap-5'>
            <div>
               <h1 className='font-bold text-xl'> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
               <p><span className='font-bold'>ANS:</span> Access Token: An access token is a credential that is issued to a client (such as a mobile app or a web browser) by an authentication server (usually as part of an OAuth 2.0 or OpenID Connect protocol). The access token represents the client's authorization to access specific resources or perform certain actions on behalf of the authenticated user. It is typically a short-lived token with a limited lifespan, often ranging from a few minutes to several hours.</p>
               <p>
                  Refresh Token: A refresh token is a long-lived credential that is also issued by the authentication server alongside the access token. Its purpose is to obtain a new access token when the current one expires without requiring the user to reauthenticate. Unlike access tokens, refresh tokens are not sent with every API request. Instead, they are securely stored by the client and used to request a new access token when needed
               </p>
               <p>
                  The workflow involving access tokens and refresh tokens typically follows these steps:
               </p>
               <p>
                  1.Authentication: The client  initiates the authentication process by sending the user's credentials to the authentication server. The server verifies the credentials and, if valid, generates an access token and a refresh token.
               </p>
               <p>
                  2. Access Token Usage: The client includes the access token in the authorization header or another designated location  when making requests to access protected resources. The server validates the access token to ensure it is not expired, has a valid digital signature, and grants the required permissions to access the requested resource.
               </p>
               <p>
                  3.Access Token Expiration: Access tokens have a limited lifespan, after which they become invalid. This expiration time is typically included in the token itself or provided by the server's response. If the access token expires, the client needs to obtain a new one to continue accessing protected resources.
               </p>
               <p>
                  4.Refresh Token Usage: When the access token expires, the client can send the refresh token to the authentication server in a secure manner (e.g., through a protected backend endpoint). The server verifies the refresh token's validity and, if valid, issues a new access token without requiring the user to reauthenticate.
               </p>
               <p>
                  5. Token Storage: Both the access token and the refresh token need to be securely stored on the client-side. Here are some common practices:
               </p>
               <p>
                  Access Token: Since the access token is short-lived and needs to be sent with each request, it is typically stored in memory or a short-term storage mechanism like a session variable or local storage. This allows easy access for inclusion in API requests.
               </p>
               <p>
                  Refresh Token: Refresh tokens are more sensitive and have a longer lifespan. They should be stored securely to prevent unauthorized access. Common practices include storing refresh tokens in encrypted form within a secure storage mechanism such as secure HTTP-only cookies or device-specific secure storage (e.g., Keychain in iOS or Keystore in Android). Storing refresh tokens securely helps mitigate the risk of token theft or misuse.
               </p>
            </div>

            <div>
               <h1 className='font-bold text-xl'> 2. Compare SQL and NoSQL databases</h1>
               <p><span className='font-bold'>ANS:</span>(1) Data Model:</p>
               <ul>
                  <li>SQL: Follows a structured, tabular data model with fixed schemas.</li>
                  <li>NoSQL: Offers flexibility with various data models like key-value, document, columnar, or graph databases.</li>
               </ul>
               <p>(2) Schema:</p>
               <ul>
                  <li> SQL: Follows a structured, tabular data model with fixed schemas.</li>
                  <li>NoSQL: Schema-less or flexible schemas allow for dynamic and evolving data structures.</li>
               </ul>
               <p>(3) Query Language:</p>
               <ul>
                  <li>SQL: Follows a structured, tabular data model with fixed schemas.</li>
                  <li>NoSQL: Databases may have their own query languages, APIs, or interfaces specific to their data model.</li>
               </ul>
               <p>(4) Scalability:</p>
               <ul>
                  <li>SQL: Primarily vertically scalable, requiring hardware upgrades for increased capacity.</li>
                  <li>NoSQL: Designed for horizontal scalability, allowing for distributed data across multiple servers.</li>
               </ul>
               <p>(5) Data Consistency:</p>
               <ul>
                  <li>SQL: Emphasizes strong consistency and supports ACID properties (Atomicity, Consistency, Isolation, Durability).</li>
                  <li>NoSQL: Prioritizes scalability and may offer eventual consistency or other relaxed consistency models.</li>
               </ul>

            </div>

            <div>
               <h1 className='font-bold text-xl'> 3.What is express js? What is Nest JS (google it)?s</h1>
               <p><span className='font-bold'>ANS:</span> Express.js is a fast and minimalist web application framework for Node.js that simplifies the process of building web applications and APIs by providing a set of features for handling HTTP requests, routing, middleware integration, and managing application-level functionalities. </p>

               <p>Nest.js is a progressive and versatile framework for building efficient, scalable, and maintainable server-side applications using TypeScript. It leverages the power of Node.js and combines elements of object-oriented programming, functional programming, and reactive programming to provide a robust and extensible platform for building server-side applications. Nest.js encourages modular architecture, dependency injection, and a clear separation of concerns, making it suitable for a wide range of applications, including APIs, microservices, and real-time applications.</p>

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