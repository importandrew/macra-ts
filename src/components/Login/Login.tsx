import {Card, CardBody, CardHeader, Divider, Input, Spacer, Button, Link, Spinner} from '@nextui-org/react';
import {useQuery} from '@tanstack/react-query';
import {useState} from "react";
import {EyeIcon} from "./EyeOpen";
import {EyeClosedIcon} from "./EyeClosed";
import Header from "../../components/Header/Header"

interface loginData {
  email: string,
  password: string
}

const usePostLogin = (formData: loginData) => {
  const props = useQuery({
    queryKey: ['login'],
    enabled: false,
    queryFn: async () => {
        const url = '/login'
        const response = await fetch(import.meta.env.VITE_API_ADDR + url, 
          {
            method: "POST",
            body: JSON.stringify(formData),
          })
        if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText} while processing URL ${url}`)
        }
        return response.json()
    },
  })

  return props
}

export default function LoginPage() {
  const [formData, setFormData] = useState({email: "", password: ""});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };


  const { isPending, isError, data, error, refetch } = usePostLogin(formData)

  if (isPending) {
      return (
      <div className="flex flex-col h-screen w-screen my-auto justify-center items-center">
          <Spinner label="Loading..." size="lg" />
      </div>
  )}

  if (isError) {
      return <span>Error: {error.message}</span>
  }

  if (data.hasOwnProperty("errorText")) {
      return <span>Error: {data.errorText}</span>
  }
  
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex flex-col h-screen w-screen my-auto">
      <Header />
      <div className="flex flex-col max-w-screen h-screen text-2xl text-center justify-center items-center mx-5">
        <Card fullWidth className="mx-5">
          <CardHeader className="flex justify-center bg-gray-300">Login</CardHeader>
          <Divider />
          <CardBody>
            <form>
              <Input type="email" label="Email" id="email" defaultValue={formData.email} variant="bordered" onChange={handleChange} />
              <Spacer />
              <Input label="Password" variant="bordered" id="password" defaultValue={formData.password} onChange={handleChange} endContent={
                <button className="focus:outline-none" type="button" 
                  onClick={toggleVisibility}>
                    {isVisible ? (
                      <EyeClosedIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                </button>
                } type={isVisible ? "text" : "password"}
                />
              <Spacer />
              <div className="flex justify-center">
                <Button as={Link} color="primary" variant="solid" className="w-2/4" onPress={() => {}}>
                  Sign In
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
