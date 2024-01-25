import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {PrivateRoutes, PublicRoutes} from "../router/routes";
import {Context} from "../App";
import {observer} from "mobx-react-lite";


const AppRouter = observer(() => {
    const {user} = useContext(Context)
    return (
        user.isAuth
            ?
            <Routes>
                {PrivateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.element/>}
                        key={route.path}

                    />
                )}
                <Route path="*" element={<Navigate to="/list"/>}/>

            </Routes>
            :
            <Routes>
                {PublicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.element/>}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Navigate to="/login"/>}/>
            </Routes>
    );
})

export default AppRouter;