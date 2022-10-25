import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Person(){
    const router = useRouter();
    const id = router.query.id;

    const [user, setUser] = useState();
    const [message, setMessage] = useState("");

    async function onLoad(){
        let userJWT = localStorage.getItem("userKey")
        let {data} = await axios.post(`/api/auth/${id}`, {userJWT})
        setMessage(data.status)
    }

    useEffect(() => {
        onLoad();
    }, [])

    return(
        <section className="profile">
            <small><Link href={`/`}><a>Home Page</a></Link></small>
            <br />
            <h1>{id}</h1>
            <code>{message}</code>
        </section>
    )
}
