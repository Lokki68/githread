import {getUserEdit} from "@/src/query/user.query";
import {ProfileForm} from "@/app/profile/edit/ProfilForm";
import {editProfile} from "@/app/profile/edit/edit-profile.action";

export default async function Page() {
  const user = await getUserEdit()
  return (
    <div className='h-full container flex items-center'>
      <div className='bg-card border rounded-md border-border p-4 flex-1'>
        <ProfileForm
          onSubmit={editProfile}
          user={user}
        />
      </div>
    </div>
  );
}
