import React from "react";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";

const platforms = [
  {
    name: "LeetCode",
    icon: <SiLeetcode className="text-yellow-500 text-6xl mb-4" />,
    username: "ParthParmar_06",
    problemsSolved: 563,
    contestRating: 1676,
    rank: "",
    profile: "https://leetcode.com/u/ParthParmar_06/",
  },
  {
    name: "Codeforces",
    icon: <SiCodeforces className="text-blue-700 text-6xl mb-4" />,
    username: "24BCE527",
    problemsSolved: 82,
    contestRating: 896,
    rank: "Newbie",
    profile: "https://codeforces.com/profile/24BCE527",
  },
  {
    name: "GeeksforGeeks",
    icon: <SiGeeksforgeeks className="text-green-600 text-6xl mb-4" />,
    username: "parthbparmar2001",
    problemsSolved: 287,
    codingScore: 915,
    rank: "",
    profile: "https://www.geeksforgeeks.org/user/parthbparmar2001/",
  },
];

const DSA = () => (
  <section
    className="relative py-16 px-4 min-h-screen flex flex-col items-center justify-center"
    style={{
      background: "linear-gradient(120deg, #e0e7ff 0%, #f0fdfa 100%)",
    }}
  >
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 animate-pulse pointer-events-none" />
    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-10 animate-pulse pointer-events-none" />

    <div className="relative z-10 w-full max-w-5xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">DSA Profiles</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {platforms.map((platform, idx) => (
          <div
            key={idx}
            className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl flex flex-col items-center justify-between p-10 min-h-[480px] hover:shadow-blue-200 transition"
          >
            {platform.icon}
            <h3 className="text-2xl font-bold text-blue-700 mb-2">{platform.name}</h3>
            <div className="text-gray-600 mb-2">Username: <span className="font-semibold">{platform.username}</span></div>
            <div className="flex flex-col gap-2 text-lg text-gray-700 mb-4 w-full">
              <div>
                <span className="font-semibold">Problems Solved:</span> {platform.problemsSolved}
              </div>
              {platform.contestRating && (
                <div>
                  <span className="font-semibold">Contest Rating:</span> {platform.contestRating}
                </div>
              )}
              {platform.codingScore && (
                <div>
                  <span className="font-semibold">Coding Score:</span> {platform.codingScore}
                </div>
              )}
              <div>
                <span className="font-semibold">Rank:</span> {platform.rank}
              </div>
            </div>
            <a
              href={platform.profile}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DSA;