import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { faker } from "@faker-js/faker";
import Image from "next/image";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
      company:faker.company.companyName(),
      id: faker.datatype.uuid(),
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions?.map((profile, index) => (
        <div key={index} className="flex items-center justify-between mt-3">
          <Image
            className="rounded-full border p-[2px]"
            src={profile.avatar}
            width={40}
            height={40}
            alt=""
          />

          <div className="flex-1 ml-4 mr-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company}
            </h3>
          </div>

          <button className="text-blue-400 font-bold ">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
