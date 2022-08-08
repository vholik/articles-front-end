import { NextPage } from "next";
import { useGetPostQuery } from "../redux/postsApi";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Post() {
  const router = useRouter();
  const { pid } = router.query;
  const { data = {}, isLoading } = useGetPostQuery(pid);
  if (isLoading) return <h1>Loading</h1>;
  return (
    <div>
      <h2>Views: {data.viewsCount}</h2>
      <h1>{data.title}</h1>
      {data.tags.map((tag: string, i: number) => (
        <div key={i}>{tag}</div>
      ))}
      <p>{data.text}</p>
    </div>
  );
}
