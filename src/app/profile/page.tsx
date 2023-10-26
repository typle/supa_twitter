"use client";
import { AuthLayout, UserProfile, UserTweetLayout } from "~/components";
import { useQuery } from "@tanstack/react-query";
import AXIOSC from "~/services/AXIOSC";
import Link from "next/link";
import React from "react";

const Profile = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get", "auth", "profile", "user"],
    queryFn: async () => {
      const res = await AXIOSC.get("/auth/profile");
      return res.data;
    },
  });
  return (
    <AuthLayout>
      <main className="w-full md:border-x-[0.5px] border-gray-600">
        <div className="w-full min-h-screen">
          <UserProfile user={data?.user} isLoading={isLoading} />
          <div className=" px-2 md:px-5 w-full flex gap-3 flex-wrap my-3">
            <Link
              href={"/profile/following"}
              className="w-fit hover:underline flex text-gray-400 text-sm justify-center items-center gap-x-2"
            >
              {!isLoading && data?.user?.followings + " following"}
            </Link>
            <Link
              href={"/profile/followers"}
              className="w-fit hover:underline flex text-gray-400 text-sm justify-center items-center gap-x-2"
            >
              {!isLoading && data?.user?.followers + " follower"}
            </Link>
          </div>
          <UserTweetLayout id={data?.user?.id} user={data?.user} />
        </div>
      </main>
    </AuthLayout>
  );
};

export default Profile;
