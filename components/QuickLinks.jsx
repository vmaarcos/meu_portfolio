"use client";
import Link from "next/link";
import GitHubRepoCount from "@/app/api/github/GitHubRepoCount";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";

export default function QuickLinks() {
  return (
    <ul className="space-y-2 animated-list">
      <li className="transition-opacity">
        <Link
          className="flex gap-3 items-center no-underline"
          href="https://github.com/vmaarcos"
          target="blank"
        >
          <FaGithub className="text-xl" />
          <div className="flex gap-1">
            <h1>
              <GitHubRepoCount username="v.maarcos" />
            </h1>
            <span> Repositorios</span>
          </div>
        </Link>
      </li>
      <li className="transition-opacity">
        <Link
          className="flex gap-3 items-center"
          href="https://www.linkedin.com/in/marcos-vinicios-02174b24b/"
          target="blank"
        >
          <FaLinkedin className="w-5 h-5" />
          <div>
            335
            <span> Conexão </span>
          </div>
        </Link>
      </li>
      <li className="transition-opacity">
        <Link
          className="flex gap-3 items-center"
          href="https://www.linkedin.com/in/marcos-vinicios-02174b24b/"
          target="blank"
        >
          <IoMdDocument className="w-5 h-5" />
          <div>
            <span> Meu Resumo </span>
          </div>
        </Link>
      </li>
    </ul>
  );
}
