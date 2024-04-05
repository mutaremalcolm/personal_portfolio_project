import { Button } from "../components/ui/button";
import Link from "next/link";

const Cta = () => {
    return (
        <section className="py-24 bg-tertiary dark:bg-secondary/40">
            <div>
                <div className="flex flex-col items-center">
                    <h4 className="h4 max-w-xl text-center mb-8">

                        For any projects or oppotunities  – reach out to me at any time.
                         I am always ready and eager for any new challenges, 
                         I'll make sure to respond as promptly as possible!
                    </h4>
                    <Link href="/contact">
                        <Button>Contact me</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Cta