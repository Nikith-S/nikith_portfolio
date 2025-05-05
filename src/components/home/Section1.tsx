import React from "react";
import Image from "next/image";
import Nikith from "../../../public/images/Nikith.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import { FlipWords } from "@/components/common/FlipWords";
import socialLinks from "@/data/socialLinks";
import TalkButton from "./ui/TalkButton";

const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center relative overflow-hidden rounded-md"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-8 pt-16 z-20 items-center justify-center">
        <Column classNames="w-full items-center justify-center">
          {/* Hero Section */}
          <div className="inline-flex items-center">
            <p className="text-2xl/normal sm:text-3xl/normal md:text-5xl/normal lg:text-6xl/normal xl:text-7xl/normal dark:text-[var(--textColor)] text-[var(--textColor)] font-bold text-center">
              Hi there, I am
            </p>
            <FlipWords
              words={["Nikith S", "Software Developer"]}
              className="text-2xl/normal sm:text-3xl/normal md:text-5xl/normal lg:text-6xl/normal xl:text-7xl/normal dark:text-[var(--primaryColor)] text-[var(--primaryColor)] font-bold text-center"
            />
          </div>
          <p className="text-sm/normal md:text-base/normal dark:text-[var(--textColorLight)] text-[var(--textColorLight)]">
            Full Stack Developer 💻 SDE 🛠️ Open Source 🌍
          </p>

          {/* About Me Section */}
          <h2
            className="text-5xl font-bold text-center mb-4 dark:text-[var(--textColor)] text-[var(--textColor)]"
            style={{ marginTop: 69 }}
          >
            About Me
          </h2>
          <div className="mt-2 lg:mt-4 w-full max-w-5xl flex flex-col-reverse md:flex-row items-center gap-8 p-6 mx-auto">
            <div className="flex-1 text-center md:text-left">
              <p className="text-xl/normal dark:text-[var(--textColorLight)] text-[var(--textColorLight)]">
                I am a highly motivated Computer Science professional with a
                strong foundation in software development, cloud computing, and
                DevOps practices. With a keen interest in full-stack web
                development and automation, I am dedicated to improving system
                efficiency and reliability. My ability to adapt and learn new
                technologies allows me to continuously enhance my skills and
                contribute to impactful solutions in the tech industry.
              </p>
            </div>
            <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-[var(--primaryColor)]">
              <Image
                src={Nikith}
                alt="Nikith S"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Talk Button */}
          <div className="gap-4 mt-12 lg:mt-16 flex flex-col md:flex-row">
            <TalkButton />
          </div>
        </Column>

        {/* Social Links */}
        <div className="mt-12 lg:mt-16 w-full flex flex-col items-center">
          <p className="text-base/6 font-medium">Follow me here</p>
          <Row classNames="mt-2 gap-2">
            {socialLinks
              .slice(0, 5)
              .filter((link) => link.url)
              .map((link, index) => (
                <Link
                  key={`social-link-${index}`}
                  href={link.url}
                  target="_blank"
                  className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
                  aria-label={`${link.name}`}
                >
                  <span className="text-base/6 text-[var(--whiteColor)]">
                    {typeof link.icon === "string" ? null : (
                      <FontAwesomeIcon icon={link.icon} />
                    )}
                  </span>
                </Link>
              ))}
          </Row>
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;
