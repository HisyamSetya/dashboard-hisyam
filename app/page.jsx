"use client";
import getUserAccess from "@/actions/getUserAccess";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

export default function SignIn() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const userSession = session?.user?.email;
  // const expireSession = session?.expires;
  const isAuthenticated = !!userSession;
  // const isAuthenticated = true;

  //todo: create rewrite the url to /dashboard
  // if (isAuthenticated) return router.prefetch("/");
  // if (isAuthenticated) return router.replace("/dashboard");
  // const { user, expires } = session;

  // const { auth } = NextAuth(authConfig);

  // const session = await auth();
  // const isAuthenticated = !!session?.user;
  // const isAuthenticated = isAuthenticate;
  // console.log("🚀 ~ SignIn ~ session:", userSession);

  async function handleFormSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const response = await getUserAccess(formData);

      // console.log("respone get user: " + response);

      if (!!response.error) {
        router.push("/");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className="flex w-full h-screen justify-center items-center">
        {isAuthenticated ? (
          <p className="text-2xl">Loading...</p>
        ) : (
          <div className=" w-1/4 h-1/2">
            <form onSubmit={handleFormSubmit}>
              <Card>
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                </CardHeader>
                <CardContent>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="mb-5"
                  />
                  <Label htmlFor="password">Password</Label>
                  <Input
                    name="password"
                    type="password"
                    id="password"
                    placeholder="password"
                    className="mb-5"
                  />
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </CardContent>
              </Card>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
