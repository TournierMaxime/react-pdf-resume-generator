import { JOB_FR, JOB_EN } from "@/helpers/constants"

export type ProfileProps = {
  fr: Profile[]
  en: Profile[]
}

export type Profile = {
  name: string
  occupation: string
  website: string
  email: string
  phone: string
  location: string
  situation: string
}

const Profile: ProfileProps = {
  fr: [
    {
      name: "Maxime Tournier",
      occupation: JOB_FR,
      website: "tourniermaxime",
      email: "tourniermaxime15@gmail.com",
      phone: "(514) 718-3739",
      location: "Anjou, QC",
      situation: "Résident Permanent",
    },
  ],
  en: [
    {
      name: "Maxime Tournier",
      occupation: JOB_EN,
      website: "tourniermaxime",
      email: "tourniermaxime15@gmail.com",
      phone: "(514) 718-3739",
      location: "Anjou, QC",
      situation: "Permanent resident",
    },
  ],
}

export default Profile

// Photo by <a href="https://unsplash.com/@podpros?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">PodPros</a> on <a href="https://unsplash.com/s/photos/profile-picture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
