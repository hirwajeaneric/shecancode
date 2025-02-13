"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import ReusableSection from '../../ReusableSection';
import parse from 'html-react-parser';

export default function AdmissionPolicyInformationSection({ AdmissionPolicyPageData }) {
    const pathname = usePathname();
    return (
        <ReusableSection>
            <div className='flex w-full flex-wrap justify-between'>
                <div className="flex-1 w-full md:w-[65%] md:pr-8 text-black">
                    {AdmissionPolicyPageData?.description &&
                        <h2 className={"text-2xl md:text-4xl font-bold text-[#317ACC] text-left"}>
                            {AdmissionPolicyPageData?.description}
                        </h2>
                    }
                    {AdmissionPolicyPageData?.content && <section class="section">
                        {parse(AdmissionPolicyPageData?.content)}
                    </section>}
                </div>

                {/* Side bar  */}
                <div className="w-full md:w-[30%] flex flex-col gap-4 justify-start">
                    <h3 className={"text-2xl md:text-3xl font-bold text-[#317ACC] text-left px-3 md:px-0"}>Table of content</h3>
                    <ul className="list-inside mb-6 font text-base md:text-xl text-black">
                        <li className={`mb-2 ${pathname === "/privacy-policy" ? "text-[#317ACC]" : ""}`}>
                            <Link href="/privacy-policy">1. Privacy policy</Link>
                        </li>
                        <li className={`mb-2 ${pathname === "/admission-policy" ? "text-[#317ACC]" : ""}`}>
                            <Link href="/admission-policy">2. Admission Policy</Link>
                        </li>
                        {/* <li className={`mb-2 ${pathname === "/students-expectations" ? "text-[#317ACC]" : ""}`}>
                            <Link href="/students-expectations">3. SheCanCode Learners expectations</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </ReusableSection>
    )
}
