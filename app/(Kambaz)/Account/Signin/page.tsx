"use client";
import Link from "next/link";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser, User } from "../reducer";
import { useRouter } from "next/navigation";
import { FormControl, Button } from "react-bootstrap";

export default function Signin() {
   const [credentials, setCredentials] = useState({ username: "", password: "" });
   const [error, setError] = useState<string | null>(null);
   const [loading, setLoading] = useState(false);
   const dispatch = useDispatch();
   const router = useRouter();

   const signin = async () => {
      setError(null);
      setLoading(true);
      try {
         console.log("[Signin] sending request", { username: credentials.username });
         const res = await fetch('/api/users/signin', {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
         });
         console.log('[Signin] response status', res.status);
         if (!res.ok) {
            const body = await res.json().catch(() => ({}));
            setError(body.message || 'Signin failed');
            setLoading(false);
            return;
         }
         const user: User = await res.json();
         console.log('[Signin] success user', user?.username);
         dispatch(setCurrentUser(user));
         router.push('/Dashboard?tab=courses');
      } catch (err) {
         console.error('[Signin] fetch error', err);
         setError('Network error');
      } finally {
         setLoading(false);
      }
   };

   return (
      <div id="wd-signin-screen" style={{ maxWidth: 420 }}>
         <h3>Sign in</h3>
         <FormControl
            size="lg"
            placeholder="username"
            className="mb-3"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
         />
         <FormControl
            size="lg"
            placeholder="password"
            type="password"
            className="mb-3"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
         />
         <Button id="wd-signin-btn" onClick={signin} disabled={loading} className="w-100 mb-2" size="lg">
            {loading ? 'Signing in...' : 'Sign in'}
         </Button>
         {error && <div className="text-danger mb-2">{error}</div>}
         <div className="text-center mt-2">
            <Link id="wd-signup-link" href="/Account/Signup">
               Sign up
            </Link>
         </div>
      </div>
   );
}