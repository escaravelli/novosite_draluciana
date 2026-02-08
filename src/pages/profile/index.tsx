import { ProfileHero } from "@/components/profile/profile-hero";
import { ProfileHeader } from "@/components/profile/profile-header";
import { ProfileIntro } from "@/components/profile/profile-intro";
import { ProfileAchievements } from "@/components/profile/profile-achievements";
import { ProfilePublications } from "@/components/profile/profile-publications";
import { ProfileLectures } from "@/components/profile/profile-lectures";

export function ProfilePage() {
  return (
    <>
      <ProfileHero />
      <section className="py-12 md:py-24 bg-gradient-to-b from-white to-[#fff5f8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ProfileHeader />
          <ProfileIntro />
          <ProfileAchievements />
          <ProfilePublications />
          <ProfileLectures />
        </div>
      </section>
    </>
  );
}