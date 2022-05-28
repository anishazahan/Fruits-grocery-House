import React from 'react'
import BlogBanner from './BlogBanner'

const Blog = () => {
  return (
    <div>
      <BlogBanner></BlogBanner>
      <div className="w-50 mx-auto mb-5">
        <h2 className='text-center mt-5'>Difference Between JavaScript & NodeJS</h2>
        <table class="table table-bordered text-center my-3 mb-5">
  <thead>
    <tr>
      
      <th scope="col">Javascript</th>
      <th scope="col">Node.js</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>JavaScript Is A Programming Language</td>
      <td>NodeJS is a javascript runtime</td>
     
    </tr>
    <tr>
     
      <td>Javascript runs only in web browser</td>
      <td>NodeJS takes javascript out of the browser to run in server and other machines</td>
     
    </tr>
   
    <tr>
     
      <td>JavaScript Is Used For Form Validation, Interactive Behaviors in web pages</td>
      <td>NodeJS is used for write server-side code in javascript, creating backend for websites.</td>
     
    </tr>
    <tr>
     
      <td>Almost Every Browser has javascript engine to run javascript code into the browser. chrome's v8 engine and firefox's spidermonkey are the most popular javascript engine</td>
      <td>NodeJS runs with the chrome's v8 engine. it doesnt work in any engine</td>
     
    </tr>
   
  </tbody>
</table>

    <h2 className='mb-5'>When should you use NodeJS and when should you use Mongodb</h2>
    <p><strong>Node.js:</strong>NodeJS is a javascript runtime which runs javascript codes outside of the browser. At First JavaScript Was only able to run in the browser. Nodejs made it possible to run it outside of the browser. We can now write javascript for backend development by the help of nodejs. Thats Why It is called a runtime and it is not a programming language. We Should Use nodejs when we want to develope backend for a website or app.</p>
    <p><strong>MongoDB:</strong>MongoDB is a database. It is a nosql database. It gives us chance to efficiently store documents in a database and to perform operations like data updates, delete, add, read or search. If a application need to store data in a simple and efficient way then we can use mongodb. this is the use case of mongodb.</p>
    <h2 className='text-center mt-5'>Differences between sql and nosql databases</h2>
        <table class="table table-bordered text-center my-3 mb-5">
  <thead>
    <tr>
      
      <th scope="col">Sql</th>
      <th scope="col">NoSql</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>JavaScript Is A Programming Language</td>
      <td>	NodeJS is a javascript runtime</td>
     
    </tr>
    <tr>
     
      <td>JavaScript Is Used For Form Validation, Interactive Behaviors in web pages</td>
      <td>NodeJS is used for write server-side code in javascript, creating backend for websites.</td>
     
    </tr>
   
    <tr>
     
      <td>Almost Every Browser has javascript engine to run javascript code into the browser. chrome's v8 engine and firefox's spidermonkey are the most popular javascript engine</td>
      <td>NodeJS runs with the chrome's v8 engine. it doesnt work in any engine</td>
     
    </tr>
   
   
  </tbody>
</table>
<h2>What is the purpose of JWT and how does it work</h2>
<p>The Purpose Of jwt is to identify wether the user accessing a website data is someone who is authorized. If a user isnt authorized then it will be a great disaster for a website if he found any valuable data. jwt add extra layer to user authentication. so that only valid user can have the access to read and write data. jwt stand for json web token. when a user login jwt generate a token which is sent to client. the token is then stored in local storage or browser cookies. the token has 3 part. Header , payload and signature. Header store the algorithm which is used to decode the token. payload is the data that is stored in the token. Finally the signature which is how the server verifies the token.</p>

      </div>
    </div>
  )
}

export default Blog