import Index from './pages/Index';
import ShopGrid from './pages/ShopGrid';
import ViewProduct from './pages/ViewProduct';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import BlogDetails from './pages/BlogDetails';
import Blog from './pages/Blog';

function NoMatch(){
    return(<h1>404 Not Found</h1>)
}



export default function App(){

    return(

        <Router>

            <Switch>
                    <Route path={"/"} exact component={Index} />
                    <Route path={"/blogs"} exact  component={Blog} />
                    <Route path={"/blog/:id"} exact component={GetBlogId} />
                    <Route path={"/cart"} exact component={Cart} />
                    <Route path="/check-out" exact component={Checkout}/>
                    <Route path={"/books"}  exact component={ShopGrid} />
                    <Route path={"/book/:id"} exact component={GetBookId} />
                    <Route path="*"exact component={NoMatch} />
                        
                    
            </Switch>
        </Router>
    );
}

function GetBookId(){
    let {id} = useParams();

    return <ViewProduct id={id} ></ViewProduct>
}

function GetBlogId(){
    let {id} = useParams();

    return <BlogDetails id={id} />
}
