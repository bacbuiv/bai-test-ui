import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { CartProvider } from 'react-use-cart';

import { DefaultLayout } from '~/layouts';
import { publicRoutes } from '~/routes';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <div className="App">
            <CartProvider>
                <ScrollToTop>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Layout =
                                route.layout === null
                                    ? Fragment
                                    : route.layout || DefaultLayout;
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </ScrollToTop>
            </CartProvider>
        </div>
    );
}
export default App;
