import baseUrl from "@/baseUrl"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios"
import { useEffect, useState } from "react"

const Profile = () => {
  const [data, setdata] = useState({gmail: "expamle", password: "expamle"} as any);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    (async() => {
        const raw = await axios.get(`${baseUrl}/user/viewprofile`, {withCredentials:true});
        const {gmail, password} = raw.data.userData;

        setdata({gmail, password});
    })()
  }, [update])
  return (
    <div>
        <Input value={data.gmail} disabled/>
        <Input value={data.password} disabled/>
        <Button onClick={() => setUpdate(!update)}>Refresh</Button>
    </div>
  )
}

export default Profile
