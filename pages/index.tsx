import Head from "next/head"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import { useAuth } from '@clerk/nextjs';
import GuestLanding from "@/components/pagez/guestLanding"
import UserLanding from "@/components/pagez/UserLanding"
import Loading from "@/components/ui/Loading"


export default function IndexPage() {

  const { getToken, isLoaded, isSignedIn, userId } = useAuth();
  if (!isLoaded) {
    return <Loading />
  }

  return (
    <Layout>
      <Head>
        <title>Free Tree</title>
        <meta
          name="description"
          content="Never pay for linktree again"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isSignedIn ? <UserLanding /> : <GuestLanding />}

    </Layout>
  )
}
