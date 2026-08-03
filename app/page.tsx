import { Benefits } from "@/components/Benefits";
import { CTAForm } from "@/components/CTAForm";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Process } from "@/components/Process";
import { IntroLoader } from "@/components/IntroLoader";
import { ScrollNavigator } from "@/components/ScrollNavigator";

export default function Home() { return <><Header /><IntroLoader><main className="px-3 pt-16 sm:px-6 sm:pt-24"><Hero /><Problem /><Benefits /><Process /><CTAForm /><ScrollNavigator /></main></IntroLoader></>; }
