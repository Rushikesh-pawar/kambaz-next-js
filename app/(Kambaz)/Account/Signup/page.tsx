"use client";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser, User } from "../reducer";
import { useRouter } from "next/navigation";
import { FormControl, Button } from "react-bootstrap";

export default function Signup() {
  const [credentials, setCredentials] = useState({ username: "", password: "", passwordVerify: "", firstName: "", lastName: "", email: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const signup = async () => {
    setError(null);
    if (!credentials.username || !credentials.password) {
      setError("Username and password required");
      return;
    }
    if (credentials.password !== credentials.passwordVerify) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/users/signup', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: credentials.username, password: credentials.password, firstName: credentials.firstName, lastName: credentials.lastName, email: credentials.email }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setError(body.message || 'Signup failed');
        setLoading(false);
        return;
      }
      const user: User = await res.json();
      dispatch(setCurrentUser(user));
      router.push('/Dashboard?tab=courses');
    } catch (err) {
      console.error('[Signup] fetch error', err);
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="wd-signup-screen" style={{ maxWidth: 420 }}>
      <h3>Sign up</h3>
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

      <FormControl
        size="lg"
        placeholder="verify password"
        type="password"
        className="mb-3"
        value={credentials.passwordVerify}
        onChange={(e) => setCredentials({ ...credentials, passwordVerify: e.target.value })}
      />

      <FormControl
        size="lg"
        placeholder="first name"
        className="mb-3"
        value={credentials.firstName}
        onChange={(e) => setCredentials({ ...credentials, firstName: e.target.value })}
      />

      <FormControl
        size="lg"
        placeholder="last name"
        className="mb-3"
        value={credentials.lastName}
        onChange={(e) => setCredentials({ ...credentials, lastName: e.target.value })}
      />

      <FormControl
        size="lg"
        placeholder="email"
        type="email"
        className="mb-3"
        value={credentials.email}
        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
      />

      <Button onClick={signup} className="w-100 mb-2" disabled={loading} size="lg">
        {loading ? 'Signing up...' : 'Sign up'}
      </Button>
      {error && <div className="text-danger mb-2">{error}</div>}
      <div className="text-center mt-2">
        <Link href="/Account/Signin">Sign in</Link>
      </div>
    </div>
  );
}