import { About, Contact, Home, Projects } from "@/app/components";
import { EMAIL_CREDENTIALS } from "../utils/credentials";

export default function Index() {
  return (
    <main className="w-full max-w-[1440px] mx-auto">
      <Home />
      <About />
      <Projects />
      <Contact {...EMAIL_CREDENTIALS} />
    </main>
  );
}
