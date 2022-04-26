//contexto de autenticação (props, functions para alterar a propriedade)
import { createContext, useState } from 'react';
import Router from 'next/router';
import firebase from '../lib/firebase';

const AuthContext = createContext();

//AuthProvider recebe toda a página
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    //Loading enquanto for acessado o provedor de autenticação
    const [loading, setLoading] = useState(true);

    const signin = () => {
        try {
            setLoading(true);
            return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then((response) => {
                setUser(response.user);
                Router.push('/dashboard');
            });
        } finally {
            setLoading(false);
        }
    }
    const signout = () => {
        try {
            Router.push('/');

            return firebase
            .auth()
            .signOut()
            .then(() => setUser(false));
        } finally {
            setLoading(false);
        }
    }

    return <AuthContext.Provider value={{
        user,
        loading,
        signin,
        signout
    }}>{children}</AuthContext.Provider>
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;