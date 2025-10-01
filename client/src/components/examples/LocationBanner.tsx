import { LocationBanner } from "../LocationBanner";

export default function LocationBannerExample() {
  return (
    <div className="p-8 space-y-4">
      <LocationBanner isEligible={true} />
      <LocationBanner isEligible={false} />
    </div>
  );
}
