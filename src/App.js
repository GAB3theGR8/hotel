import "./App.css"
import Navbar from "./common/Navbar/Navbar"
import Home from "./components/pages/Home"
import About from "./components/About/About"
import Gallery from "./components/Gallery/Gallery"
import Destinations from "./common/Destinations/Home"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import SinglePage from "./SinglePage/SinglePage"
import Blog from "./components/Blog/Blog"
import BlogSingle from "./components/Blog/blog-single-page/BlogSingle"
import Testimonial from "./components/Testimonial/Testimonial"
import Footer from "./common/footer/Footer"
import Contact from "./components/Contact/Contact"
import Login from "./components/login/Login"
import Register from "./components/login/Register"


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/destinations' exact component={Destinations} />
          <Route path='/singlepage/:id' exact component={SinglePage} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/blogsingle/:id' exact component={BlogSingle} />
          <Route path='/testimonial' exact component={Testimonial} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/sign-in' exact component={Login} />
          <Route path='/register' exact component={Register} />
        </Switch>
        <Footer />
      </Router>

    </>
  )
}

export default App

