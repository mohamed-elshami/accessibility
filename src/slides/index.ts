import type { ComponentType } from "react";
import { Slide0Cover } from "./Slide0Cover.tsx";
import { Slide10Rules } from "./Slide10Rules.tsx";
import { Slide11Impact } from "./Slide11Impact.tsx";
import { Slide12TryThis } from "./Slide12TryThis.tsx";
import { Slide13Takeaway } from "./Slide13Takeaway.tsx";
import { Slide14Closing } from "./Slide14Closing.tsx";
import { Slide1Title } from "./Slide1Title.tsx";
import { Slide2Question } from "./Slide2Question.tsx";
import { Slide3Insight } from "./Slide3Insight.tsx";
import { Slide4Definition } from "./Slide4Definition.tsx";
import { Slide5Examples } from "./Slide5Examples.tsx";
import { Slide6WhyItMatters } from "./Slide6WhyItMatters.tsx";
import { Slide7Types } from "./Slide7Types.tsx";
import { Slide8BadVsGood } from "./Slide8BadVsGood.tsx";
import { Slide9Problems } from "./Slide9Problems.tsx";

export type SlideDefinition = {
  id: string;
  title: string;
  Component: ComponentType;
};

export const slides: SlideDefinition[] = [
  {
    id: "cover",
    title: "Accessibility",
    Component: Slide0Cover,
  },
  {
    id: "title",
    title: "Accessibility: Making the World Easier for Everyone",
    Component: Slide1Title,
  },
  {
    id: "opening-question",
    title: "Have You Ever Felt Something Simple Was Hard to Use?",
    Component: Slide2Question,
  },
  {
    id: "what-is-a11y",
    title: "What Does Accessibility Mean?",
    Component: Slide3Insight,
  },
  {
    id: "more-than-disability",
    title: "Accessibility Helps More People Than You Think",
    Component: Slide4Definition,
  },
  {
    id: "subtitles-example",
    title: "A Small Feature, A Big Impact",
    Component: Slide5Examples,
  },
  {
    id: "daily-life",
    title: "Accessibility Is All Around Us",
    Component: Slide6WhyItMatters,
  },
  {
    id: "why-matters",
    title: "Why Is Accessibility Important?",
    Component: Slide7Types,
  },
  {
    id: "better-experience",
    title: "Good Accessibility Creates Better Experiences",
    Component: Slide8BadVsGood,
  },
  {
    id: "common-mistakes",
    title: "Common Mistakes to Avoid",
    Component: Slide9Problems,
  },
  {
    id: "content",
    title: "Make Content Easier to Understand",
    Component: Slide10Rules,
  },
  {
    id: "physical-spaces",
    title: "Accessibility in Places and Environments",
    Component: Slide11Impact,
  },
  {
    id: "technology",
    title: "Accessibility in Apps, Websites, and Digital Tools",
    Component: Slide12TryThis,
  },
  {
    id: "how-to-start",
    title: "Small Steps Make a Big Difference",
    Component: Slide13Takeaway,
  },
  {
    id: "closing",
    title: "Accessibility Is Not a Luxury",
    Component: Slide14Closing,
  },
];
