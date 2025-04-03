"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "./button";

const users: Record<string, { username: string; password: string }> = {
    admin: { username: "admin", password: "admin" },
    user: { username: "user", password: "user123" }
};

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (users[username] && users[username].password === password) {
            router.push(`/card`); // Navigate to user-specific home
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                    <Image
                        fill={true}
                        alt=""
                        src="/login_edit.jpg"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </aside>

                {/* Login Form */}
                <main className="flex items-center justify-center px-8 py-12 sm:px-12 lg:col-span-7 lg:px-16 xl:col-span-6">
                    <div className="max-w-xl lg:max-w-3xl">
                        <h1 className="text-3xl text-gray-900 sm:text-4xl">
                            eBiz Cards
                        </h1>
                        <p className="mt-4 text-gray-500">
                            Sign in to access your business cards.
                        </p>

                        <div className="mt-8 grid grid-cols-6 gap-6">
                            {/* Username Input */}
                            <div className="col-span-6">
                                <label htmlFor="PSID" className="block text-sm font-medium text-gray-700">
                                    PSID
                                </label>
                                <input
                                    type="text"
                                    id="PSID"
                                    name="PSID"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 text-lg shadow-sm transition-all duration-300 
                  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                                    placeholder="Enter your PSID"
                                />
                            </div>

                            {/* Password Input */}
                            <div className="col-span-6">
                                <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="Password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 text-lg shadow-sm transition-all duration-300 
                  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                                    placeholder="Enter your password"
                                />
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="col-span-6">
                                    <p className="text-sm text-red-500">{error}</p>
                                </div>
                            )}

                            {/* Login Button */}
                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <Button onClick={handleLogin} text="Login" />

                                {/* <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Don't have an account?{" "}
                  <a href="#" className="text-blue-600 underline">
                    Sign up
                  </a>.
                </p> */}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}