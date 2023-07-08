import React from "react";
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";
import Image from "next/image";

// Browser...
const signin = ({ providers }) => {
  return (
      <>
      <Header />
    <div className="flex flex-col items-center justify-center min-h-screen -mt-24 text-center">

        <Image src="https://links.papareact.com/ocw" alt="" width={512} height={308} />

        <p className="font-xs italic">
            This is not a REAL app, it is built for educational purposes only
        </p>

        <div className="mt-12">
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                <button className="bg-blue-500 rounded-lg text-white p-1 pl-2 pr-2 transition hover:scale-110 ease-in" onClick={() => SignIntoProvider(provider.id)}>
                    Sign in with {provider.name}
                </button>
                </div>
            ))}
      </div>
    </div>
    </>
  );
};

// Server side render
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signin;
