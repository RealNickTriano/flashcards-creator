import { useSession, signIn, signOut } from "next-auth/react";

const LoginBtn = () => {
    const { data: session } = useSession();

    if (session) {
        return (
            <button onClick={() => signOut()}>Sign Out</button>
        )
    } else {
        return (
            <button onClick={() => signIn()}>Sign in</button>
        )
    }
}

export default LoginBtn