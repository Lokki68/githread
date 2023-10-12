import {getUserEdit} from "@/src/query/user.query";
import {ProfileForm} from "@/app/profile/edit/ProfilForm";
import {editProfile} from "@/app/profile/edit/edit-profile.action";
import {EditProfileModal} from "@/app/@modal/(.)profile/edit/EditProfileModal";

export default async function Page() {
  const user = await getUserEdit()
  return (
    <EditProfileModal user={user} editProfile={editProfile}/>
  );
}
