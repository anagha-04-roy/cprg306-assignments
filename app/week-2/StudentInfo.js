import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Name: Anagha Roy</p>
      <p>
        GitHub Repository:{" "}
        <Link href="https://github.com/anagha-04-roy/cprg306-assignments">
          https://github.com/anagha-04-roy/cprg306-assignments
        </Link>
      </p>
    </div>
  );
}
