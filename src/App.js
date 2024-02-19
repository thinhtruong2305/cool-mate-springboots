import Fragment from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, adminRoutes } from '~/routes';
import { AdminRoute } from '~/routes/AdminRoute/AdminRoute';
import ClientLayout from '~/layouts/ClientLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLayout from './layouts/AdminLayout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = ClientLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

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
                    {adminRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = AdminLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <AdminRoute>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </AdminRoute>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
