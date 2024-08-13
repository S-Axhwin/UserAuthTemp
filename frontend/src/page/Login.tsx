import baseUrl from "@/baseUrl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import axios from "axios";
import { useState } from "react"

const Login = () => {
  const [formData, setFormData] = useState({gmail: "", password: ""}) ;

  const handleInputs = (e:any) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value} as any);
  }

  const handleForm = async (e:any) => {
    e.preventDefault();
    const raw = await axios.post(`${baseUrl}/user/login`, {...formData}, {withCredentials: true});
    console.log(raw.data);
  }

  return (
    <div className="">
        <form className="" onSubmit={handleForm}>
            <Input
                placeholder="gmail"
                name="gmail"
                onChange={handleInputs}
                value={formData.gmail} />
            <Input
                placeholder="password"
                name="password"
                onChange={handleInputs}
                value={formData.password} />
            <Button type="submit">Submit</Button>
        </form>
    </div>
  )
}

export default Login
