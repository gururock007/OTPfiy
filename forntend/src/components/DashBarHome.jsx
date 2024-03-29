import { useContext, useEffect } from "react";

import useAxiosPrivate from "../hooks/useAxiosPrivate";
import UserContext from "../context/UserProvider";

const GET_INFO = '/get_info';

const DashBarHome = () => {

  const { userInfo, setUserInfo} = useContext(UserContext)

  const getInfo = async () => {
    try{
      const response = await axiosPrivate.get(GET_INFO)
      setUserInfo({
        userAPI : response?.data?.api_key,
        email : response?.data?.email,
        template : response?.data?.template
      })
  }catch(error){console.log(error)}
  }
  const axiosPrivate = useAxiosPrivate();
  useEffect (() => {getInfo()},[])

  return (
    <div>
      <div className=" text-white text-center">
        <div className=" grid grid-cols-2 py-10">
            <div className=" col-span-2 md:col-span-1">
                <div className=" text-base py-10">
                  Api Key : {userInfo.userAPI}
                </div>
                <div className=" py-10">
                  <div className=" font-bold text-lg ">
                  Check you setup
                  </div>
                  <div className=" text-sm font-thin">
                  Send your self a mail to check your account set up click to sent your self a mail 
                  </div>
                </div>
                <button onClick={() => (getInfo())} className=" p-4 text-xl border w-2/3 rounded-full">Check your setup</button>
            </div>
            <div className=" col-span-2 md:col-span-1 ">
                <div className=" flex flex-col align-middle justify-center text-center mx-auto">
                  <div className="pt-10 pb-5 text-2xl mx-auto">
                    Your Template {userInfo.template}
                  </div>
                  <div className=" font-thin text-sm pb-5 w-3/4 mx-auto">
                    this is your current default template change the template by moving to template tab in template tab in sidebar
                  </div>
                  <div className="p-5 rounded-3 mx-auto">
                    <img src="/Images/mail1.png" alt="" className=" rounded-3xl" />
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DashBarHome
