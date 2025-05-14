"use client";

import getRequest from "../app/utils/api/getRequest";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const [loading, setIsLoading] = useState(true);
    const [fetch, setFetch] = useState(false);
    const navigate = useRouter();

    useEffect(() => {

        const storedUser = localStorage.getItem("uilchilgee_user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            console.log('---------' + storedUser);

            getRequest({
                route: `/auth/user/${parsedUser._id}`, setValue: setUser, setIsLoading, errorFunction: () => {
                    localStorage.removeItem("uilchilgee_user");
                    // alert('error')
                    setUser(null);
                    // navigate.push('/login');
                }
            })
                .finally(() => setIsLoading(false));
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (fetch && user) {
            getRequest({ route: `/auth/user/${user._id}`, setValue: setUser, setIsLoading })
                .then((updatedUser) => {
                    if (updatedUser) {
                        localStorage.setItem("uilchilgee_user", JSON.stringify(updatedUser));
                        setUser(updatedUser);
                    }
                })
                .finally(() => setFetch(false));
        }
    }, [fetch]);

    // useEffect(() => {
    //     if (user) {
    //         localStorage.setItem("uilchilgee_user", JSON.stringify(user));
    //     }
    // }, [user]);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("uilchilgee_user", JSON.stringify(userData));
        console.log(JSON.stringify(userData));
    };

    const logout = () => {
        alert('logout');
        setUser(null);
        localStorage.removeItem("uilchilgee_user");
        // navigate.push('/login');
    };

    const updateUser = (updatedData) => {
        setUser((prevUser) => {
            const newUser = { ...prevUser, ...updatedData };
            localStorage.setItem("uilchilgee_user", JSON.stringify(newUser));
            return newUser;
        });
    };

    const fetchUpdateUser = () => {
        setFetch(true);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, updateUser, fetchUpdateUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}