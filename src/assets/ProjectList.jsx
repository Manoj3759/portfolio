import Proj1 from './pic/Proj1.PNG'
import Proj2 from './pic/Proj2.jpg'
import Proj3 from './pic/Proj3.PNG'
import Proj4 from './pic/Proj4.PNG'
import Proj5 from './pic/Proj5.PNG'
import Proj6 from './pic/Proj6.PNG'

export const ProjectList = [
  {
    name: "Portfolio Website",
    image: Proj1,
    url:""    ,
    skills: "React,CSS,ant Design",
    explain:"The Home component returns JSX code, which defines the layout and content of the component. The component is composed of two main sections, an about section and a skills section. In the about section, the component displays a brief introduction about the author, their desire to showcase their skills and creativity through their portfolio, and a list of links to their Skype, Github, and LinkedIn profiles.In addition, the component uses the custom Typer component to display a typewriter animation effect for a list of skills. This effect is achieved by rendering the Typer component inside an h4 tag.The skills section contains an ordered list (ol) of three items (li), each item representing a skill category. The first item represents front-end skills, the second item represents back-end skills, and the third item represents programming languages. Each item displays a heading (h2) and a list of skills (span) that the author possesses in that particular category.The component exports the Home component as the default export, which can be imported and used in other parts of the application. Overall, this component serves as the main landing page for the author's portfolio website and showcases their skills and abilities."
  },
  {
    name: "Netflix Clone",
    image: Proj2,
    url:""      ,
    skills: "React,ant Design,CSS",
    explain:""
  },
  {
    name: "Rock Paper Scissors Game",
    image: Proj3,
    url:"https://github.com/Manoj3759/manoj/tree/main/game"      ,
    skills: "JavaScript,HTML,CSS",
    explain:"This code is for a simple Rock-Paper-Scissors game.It starts by getting references to the HTML elements for the computer and user choices, as well as the result element and all the buttons on the page. It also initializes variables for the user choice, computer choice, and result. The forEach loop adds an event listener to each button on the page. When a button is clicked, the function inside the event listener runs.Inside the function, the user's choice is set to the id of the clicked button, and that value is displayed in the HTML.The generatecomputerchoice() function generates a random number between 1 and 3, and depending on the value of the random number, assigns rock, paper, or scissors to the cchoice variable. The computer's choice is also displayed in the HTML.The result1() function compares the user's choice with the computer's choice and determines the result of the game. If it's a tie, the result is set to its a draw! and the result element is given the class draw. If the user wins, the result is set to you win and the result element is given the class win. If the computer wins, the result is set to you lose and the result element is given the class lose. The result is then displayed in the HTML. Overall, this code creates a functional Rock-Paper-Scissors game that can be played by clicking buttons on a webpage."
  },
  {
    name: "CRUD operations",
    image: Proj4,
    url:"https://github.com/Manoj3759/manoj/tree/main/CURD"      ,
    skills: "React,CSS",
    explain:"This code is written in React, a JavaScript library for building user interfaces. It consists of three components: Create, Read, and Update.The Create component is used to create a new post. It contains a form with two input fields: course and author. It also has a button to submit the form. When the button is clicked, the handleClick function is called. This function sends a POST request to the server to create a new post with the data entered in the form.The Read component is used to display all the posts. It contains a state variable data that holds an array of posts. When the component is mounted, the useEffect hook is used to fetch the data from the server using a GET request. The fetched data is then stored in the data state variable. The component then renders all the posts in a card format, each with its own delete and update button.The Update component is used to update an existing post. It contains a form with two input fields: coursename and authorname. It also has a button to submit the form. When the component is mounted, the useEffect hook is used to fetch the data of the post to be updated from the server using a GET request. The fetched data is then used to populate the input fields. When the update button is clicked, the updatePosts function is called. This function sends a PUT request to the server to update the post with the new data entered in the form.All three components use the useState hook to manage their state. They also use the axiosInstance module to make HTTP requests to the server. Additionally, the Read component uses the Link component from the react-router-dom library to navigate to the Update component.Overall, this code demonstrates the use of React hooks and the axiosInstance module to perform CRUD (Create, Read, Update, Delete) operations on data stored on a server."
  },
  {
    name: "To-Do List",
    image: Proj5,
    url:"https://github.com/Manoj3759/manoj/tree/main/List-Ts"      ,
    skills: "Typescript,HTML,JavaScript,CSS",
    explain:"The code provided is written in TypeScript, which is a strongly-typed superset of JavaScript. TypeScript offers additional features such as type annotations, interfaces, and enums that enhance code quality, readability, and maintainability.In this code, you can see type annotations used in function parameters, such as (e: SubmitEvent): void, which means that e is expected to be an object of type SubmitEvent. Additionally, type annotations are used when defining variables, such as const input = document.getElementById(newItem) as HTMLInputElement, where the as HTMLInputElement type assertion is used to tell TypeScript that document.getElementById(newItem) will be an input element.Furthermore, the use of void indicates that a function does not return anything. For instance, in const initApp = (): void => {...}, initApp is defined as a function that does not return anything.TypeScript also allows the use of interfaces that define the shape of objects. In this code, you can see the use of the Listitem interface in const newItem = new Listitem(itemId.toString(), newEntryText). The Listitem interface is likely defined in a separate file and imported to this module.Overall, TypeScript provides additional features that enhance code quality and maintainability. In this code, you can see the use of type annotations, type assertions, and interfaces to help catch errors and improve code readability."
  },
  {
    name: "Task-Manager",
    image: Proj6,
    url:"https://github.com/Manoj3759/manoj/tree/main/taskmanager-exp"      ,
    skills: "Express Js,Node JS,JavaScript,CSS",
    explain:"This code is an example of a Node.js application using the Express framework for creating a task manager. Let's go through the code and explain its functionality.The code starts by importing the necessary modules and files. The express module is imported to create the Express application. The taskRouter file is imported to handle the routes related to tasks. The mongoose module is imported to connect and interact with the MongoDB database. The engine object from express-handlebars is imported for rendering views. The method-override module is imported to override HTTP methods.Next, an instance of the Express application is created with const app = express(). The port variable is set to 5000, which is the port the server will listen on.The db function is defined as an asynchronous function that connects to the MongoDB database using mongoose.connect. The function is immediately invoked db() to establish the database connection. A console log statement is included to indicate that the connection was successful.The code then configures the Express application. It sets up the template engine by calling app.engine and specifying handlebars as the engine. It sets the view engine to handlebars using app.set. This means that views will be rendered using the Handlebars template engine with the .handlebars extension.Several inbuilt middleWares are added to the application using app.use. The express.static middleware is used to serve static files from the public directory. The express.urlencoded middleware is used to parse URL-encoded form data. The methodOverride middleware is used to override the HTTP method with the value specified in the _method query parameter. This allows using other HTTP methods like PUT and DELETE in HTML forms.The next middleware app.use(/task-manager, taskRouter) mounts the taskRouter to the /task-manager path. It means that all routes defined in taskRouter will be accessed through /task-manager URLFinally, the server is started by calling app.listen and providing the port variable. If there are any errors, they are logged to the console. Otherwise, a success message is logged.In summary, this code sets up an Express application for a task manager, establishes a connection to a MongoDB database, configures the template engine, adds necessary middleWares, and starts the server."
  },
];