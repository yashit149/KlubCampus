import PopularTags from "./PopularTags";
import Link from "next/link";
import Recommendation from "./Recommendation";
import Search from "./Search";
import Image from "next/image";

const RightBar = () => {
  return (
    <div className="pt-3 flex flex-col gap-4 sticky top-0 h-max ">
      <PopularTags />
      <Recommendation />
      <div className="text-sm text-Muted_text flex flex-wrap gap-2">
        <Link href="/">Terms of service</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Cookie Policy</Link>
        <Link href="/">Accessibility</Link>
        <Link href="/">Ads Info</Link>
        <Link href="/">Terms of service</Link>
        <span>2025 Klub Campus</span>
      </div>
    </div>
  );
};

export default RightBar;
