import Link from "next/link";

export default function Home(){
    return(
        <main>
            <h1>CPRG 306: Web Development 2 - Assignments</h1>
            <p>
                This site contains the assignments for CPRG 306 course.
            </p>

            <Link href = "/week-2">Go to Week 2 Assignments</Link>
        </main>
    );
}