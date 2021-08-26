import { Route } from 'react-router-dom';

const Home = () => {
    return (<section>
        <h1>The Welcome Page1</h1>
        <Route path="/welcome/new-user">
            <p>Welcome, new user!</p>
        </Route>
    </section>)
};

export default Home;