## [Simple Pagination React App ](https://simple-pagination-react.netlify.app/)
![Simple react project ](https://i.ibb.co/2dhSDgS/screencapture-simple-pagination-react-netlify-app-2021-09-29-04-21-00.png "San Juan Mountains")

<br>

> #### এই প্রজেক্ট এ কি কি ব্যবহার করা  হয়েছে ? 
1. Axious Api  ব্যবহার করা হয়েছে 
1. React Route  ব্যবহার করা  হয়েছে 
1. Loading Spinner   ব্যবহার করা  হয়েছে 
1. pagination  ব্যবহার করে  প্রজেক্ট করা হয়েছে 
<br>

> ## Code  এর Details 
<br>

## প্রথমে React App  ক্রিটে করতে হবে।  
###  command  হলো -

```
npx create-react-app my-app
cd my-app
npm start
```

### আমরা Axious ,Bootstrap, FontAwesome, React Route    ব্যবহার করবো।  তাই এগুলো  install  করতে  হবে। 

##  Command Line : 
```javascript
// axious  install 
npm install axios

// react route instal l 
npm install react-router-dom


// react bootstrap install 
npm install react-bootstrap@next bootstrap@5.1.1

// React fontAwesome install 
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome

```

 ###  আমরা বিভিন্ন React এ আলাদা  আলাদা ভাবে  React Componet ব্যবহার করবো তাই আমাদের rsc  ফোল্ডার এ Components  নাম  ফোল্ডার  বানাতে হবে CSS Module  ব্যবহার করা হবে।  কারণ CSS Module CSS এর   Scope   তৈরী করে।  ফলে সিস এর  কোনো Problem  হয় না 
 ### [What is CSS Module in React](https://youtu.be/qgapiFsm_Ok)
 <br>

 > #### src ফোল্ডার এর ভিতরে  হেডার নাম ফোল্ডার ক্রিটে করতে হবে 
<br>

> ## React Router
<br>
 
> React Router  কি জন্য ব্যবহার করা হয়? <br>

ReactJS Router প্রধানত সিঙ্গেল পেজ ওয়েব অ্যাপ্লিকেশন ডেভেলপ করার জন্য ব্যবহৃত হয়। ReactJS Router অ্যাপ্লিকেশনটিতে একাধিক Root  Defined করতে ব্যবহৃত হয়। যখন কোনো ব্যবহারকারী ব্রাউজারে একটি নির্দিষ্ট URL  টাইপ করে, এবং যদি এই URL Path  রাউটার ফাইলের ভেতরের কোনো 'Root' এর সাথে মিলে যায়, ব্যবহারকারীকে সেই নির্দিষ্ট রুটে redirected  করা হবে।

> কিভাবে ReactJS Router ব্যবহার করবেন ? <br>
1. প্রথম আমাদের React Router  ইনস্টল করে  নিতে হবে
2. React Router  এর এলিমেন্ট গুলো Import  করে নিতে হবে 
<br>

```javascript
// Reacxt router install 
npm install react-router-dom
```
```javascript
// React router dom  থেকে Import  করতে হবে 
 react-router-dom 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
```
> ### BrowserRouter  এর কাজ কি ? 
BrowserRouter  এর কাজ হল  
Router  এর মাধ্যমে ui  এর সাথে সম্পর্ক সথাপন করা।   ব্রাউসার Route   বিভিন্ন কম্পোনেন্ট এর   সাথে সম্পর্ক স্থাপন করে।  এর  ফলে আমাদের প্রতিটা লিংক ক্লিক করার মাদ্ধমে আলাদা আলাদা ui  ইন্টারফেস  দেখায় ।  Browser Router কে রাউটার হিসেবে প্রকাশ করে কাজ করা হয় । <Router> এর ভিতরে বা রাউটার এর Value  হিসেবে  Component  দিতে হবে।   আমরা যদি আলাদা পেজ এ Header   বা Menu  বানাতে চাই তাহলে আমাদের <Router>  Method  এর ভিতরে দিতে  হবে তা না হলে কাজ করবে না । 


     BrowserRouter as Router
     
> ### কেন  React Router  এ  Switch  ব্যবহার করা  হয় ?  <br>

যে <Router >  বা <Redirect >  এর  Path এর সাথে মিল থাকবে শুধু সেই Component  Redirect  করে দেওয়ার জন্য Swtich   ব্যবহার করা হয়। 

<br>

> ### কেন  React Router  এ  Link ba Navlink   ব্যবহার করা  হয় ?  <br>

Link বা NavLink এর কাজ   একই। তবে দুইটার মাঝে সামান্য  ভিন্নতা আছে । Link বা NavLink  HTMl  এর `<a>` ট্যাগ এর  মতো কাজ  করে। এক Router  থেকে অন্য Router  এ  নেওয়ার জন্য  Link  বা NavLink  ব্যবহার করব। Link  বা NavLink   এ to="path"  দেওয়া হয়।  যেন Router   এর মাধ্যমে অন্য Component  এ Redirect  করতে   পারে।   Link  বা NavLink   এর মাঝে মূল পার্থক্য হলো Navlink Custom ভাবে Deisgn  বা কাজ করা যায়।   কিন্তু লিংক এ তা করা  যায় না 
যেমন : ক্লাস বা একটিভ ক্লাস সেট করা।  পাশাপাশি CSS  বা একটিভ CSS  ব্যবহার করা যায়।  কিন্তু লিংক এ  করা যায় না 
URL  এর সাথে location.pathname  মিল থাকে তখন শুদু কাজ করার  জন্য exact  কীওয়ার্ড টি দিতে  হয়।  তা না হলে প্রব্লেম হয়
```javascript 
<NavLink exact to="/profile">
  Profile
</NavLink>
```

> ## Router  এ ব্যবহার  করা কোড 
>
>> ### App.js 
<br>


```javascript
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

```

> ## Router  এ ব্যবহার  করা কোড 
>
>> ### Header.js 
<br>

```javascript
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <div className={classes.menu}>
      <div className="container">
        <div className={classes.menuWrapper}>
          <div className={classes.logo}>
            <NavLink style={{ textDecoration: "none" }} to="/">
              {" "}
              <h4>Github </h4>
            </NavLink>
          </div>
          <div className={classes.searchInput}>
            <input type="text" placeholder="Search  user " />
            <button type="submit"> <FontAwesomeIcon icon={faSearch} /></button>
          </div>
          <div className="menuNav">
            <ul>
              <li>
                <NavLink
                  exact
                  activeClassName={classes.activeLink}
                  className={classes.link}
                  to="/"
                >
                  Home
                </NavLink>{" "}
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName={classes.activeLink}
                  className={classes.link}
                  to="/about"
                >
                  About{" "}
                </NavLink>{" "}
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName={classes.activeLink}
                  className={classes.link}
                  to="/contact"
                >
                  Contact{" "}
                </NavLink>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
```


> ## API  থেকে ডাটা  নিয়ে আসা এবং pagination  তৈরী করা 

### GithubUserControl,Users, SingleUser, Pagination নামে  Component  folder  এবং তারপর ভিতরে CSS এন্ড JS file করতে হবে

> #### এই প্রজেক্ট এ Hook  দিয়ে কাজ করা তাই  হোল এর UseState এবং UseEffect  Hook  কে Import  করে নিতে হবে 
<br>

```javascript 
import React, { useEffect, useState } from 'react';
```

### API   থেকে Data নয় আসতে ও pagination   করতে ৪ টি useState  লাগবে।  সেগুলো হলো - 

```javascript
    // ইউসার এর   সব ডাটা আনতে 
    const [posts, setPosts] = useState([]);

  //লোডিং স্পিনার ব্যবহার করতে 
    const [loading, setLoading] = useState(false);

    // বর্তমান এ পেজ আনতে  
    const [currentPage, setCurrentPage] = useState(1);

    // একটি পেজ এ  কয়টি  দেখানো হবে  
    const [postsPerPage] = useState(10);
```


API   ব্যবহার করে ডাটা আনতে  UseEffect  মেথড ব্যবহার করা হয়

```javascript 
    useEffect(() => {

      // একটি ফাঙ্কশন এর মাঝে  Axious  দিয়ে  ডাটা আনা 
        const fetchUse = async () => {

          // লোডিং  স্পিনার এর ব্যবহার করার এবং তা লোড এর আগে  পর্যন্ত সত্য থাকবে 
            setLoading(true);

            // axios দিয়ে ডাটা আনতে 
            const res = await axios.get('https://api.github.com/users');

            // Posts  এ ডাটা সঞ্চয় করে রাখতে 
            setPosts(res.data);

            // লোডিং  স্পিনার এর ব্যবহার বন্ধ করে দেওয়া 
            setLoading(false);
        }

        //fetchUse  Function কল করা 
        fetchUse();

    }, []  //  Skipping Effects বন্ধ করা );


```

> ### Pagination  এর Current  পেজ এবং   Current  Poss  গুলো দেখানোর জন্য   প্রোগ্র্যাম 
<br>

```javascript
    // Get current posts

    // ইনডেক্স অনুযায়ী  কতগুলো পোস্ট দেখানোর বাকি আছে 
    const indexOfLastPost = currentPage * postsPerPage;

    // কত গুলো  ফার্স্ট এ দেখানো হচ্ছে 
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    // এই মুহূর্তে কত গুলো পোস্ট দেখানো হবে 
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
```
<br>
যে  পেজ এর Pagination  এ ক্লিক করা হবে সেই ডাটা গুলো দেখানোর জন্য ফাঙ্কশন 

```javascript
    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
    };
```

###  কম্পোনেন্ট এ ডাটা গুলো  ভ্যালু হিসেবে পাঠিয়ে দেওয়া 

```javascript
  <Users currentUser={currentPosts} loading={loading} />
  <Pagination postPerpage={postsPerPage} totalUser={posts.length} paginate={paginate} />
```
> ### Pagination  এর Current  পেজ এবং   Current  Poss  গুলো দেখানোর জন্য   প্রোগ্র্যাম
>>  ### GithubUserControl.js 
<br>

```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Users from '../Users/Users';
import Pagination from '../Pagination/Pagination';

const GithubUserControl = () => {

    // get github user states 
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    // search data states
    const [searchUsers, setSearchUsers] = useState([]);

    useEffect(() => {
        const fetchUse = async () => {
            setLoading(true);
            const res = await axios.get('https://api.github.com/users');
            setPosts(res.data);
            setLoading(false);
        }
        fetchUse();
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);



    

    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
    };

    return (
        <div className="cuserArea  py-5">
            <div className="container">
                
                <Users currentUser={currentPosts} loading={loading}></Users>
                <Pagination postPerpage={postsPerPage} totalUser={posts.length} paginate={paginate} />
            </div>
        </div>
    );
};

export default GithubUserControl; 

```

> ### Pagination  এর Current  পেজ এবং   Current  Poss  গুলো দেখানোর জন্য   প্রোগ্র্যাম
>>  ### Pagination.js 

```javascript 
import React from 'react';
import classes from './Pagination.module.css'

const Pagination = ({ postPerpage, totalUser, paginate  }) => { // destructor props

    // custom pagination array 
    const pageNumbers = [];

    কয় টি pagination কত   এর সংখ্যা হবে তা  ক্যাল্কুয়েশন করে  বের করে এরে তে পুশ   করে ডাটা রাখা 
    for (let i = 1; i <= Math.ceil(totalUser / postPerpage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div  className={classes.pagintaionArea}> 
          <ul className={classes.pagination}>
          
        { 
          // ম্যাপ মেথড এর মাধ্যমে paginion  এর নম্বর বা ভ্যালু দেখানো          
          pageNumbers.map(number => (            
            <li key={number} className='page-item' onClick={() => paginate(number)}> {number}
            
            </li>
        ))}
      </ul>
    </div>

       
    );
};

export default Pagination;

```

> ### Pagination  এর Current  পেজ এবং   Current  Poss  গুলো দেখানোর জন্য   প্রোগ্র্যাম
>>  ### Users.js 
```javascript 

import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import SingleUser from '../SingleUser/SingleUser'
import classes from './User.module.css'
const Users = ({ laoding, currentUser }) => {
  // destructor props data 

  // loadin state check 
    if (laoding) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }
  // single user component data 
    const singleData = currentUser.map((user,ind) => <SingleUser key={ind}  user={user}></SingleUser>)

    return (
        <div className={classes.userArea}>
            <div className="row">
                {singleData}
            </div>

        </div>
    );
};

export default Users;
```

> ### Pagination  এর Current  পেজ এবং   Current  Poss  গুলো দেখানোর জন্য   প্রোগ্র্যাম
>>  ### Users.js 

```javascript
import React from 'react';
import classes from './SingleUser.module.css'

const SingleUser = ({user}) => {

  // destucture props 
  const { avatar_url,login,type
} = user;

return (
        <div className="col-xl-3 col-sm-6 ">
        <div className="mb-5 shadow-lg py-5 px-4  text-center">
        <div className="bg-white rounded   "><img src={avatar_url} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
            <h5 className="mb-2"> {login}</h5><h5 className="small text-uppercase text-muted  ">Type : {type}</h5>            
        </div>
        <a href="#"  className="btn btn-danger  mt-3">Profile Link </a>
        </div>        
    </div>

    );
};

export default SingleUser; 

```
