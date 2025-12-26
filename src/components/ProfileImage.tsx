// ═══════════════════════════════════════════════════════════════════════════
// ✏️ PROFILE IMAGE COMPONENT
// To change your profile image, simply update the import below
// ═══════════════════════════════════════════════════════════════════════════

import profileImage from "@/assets/profile-image.png";

interface ProfileImageProps {
  className?: string;
}

const ProfileImage = ({ className = "w-full h-full" }: ProfileImageProps) => {
  return (
    <img
      src={profileImage}
      alt="Profile"
      className={`${className} object-cover rounded-full`}
    />
  );
};

export default ProfileImage;
