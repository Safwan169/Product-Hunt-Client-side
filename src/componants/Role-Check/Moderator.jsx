import Contex from "../Authentication/Contex";
import alUser from "../Fatching-data/alUser";


const Moderator = ({children}) => {
    const [user2,,]=alUser()
    const {user}=Contex()

    const user3=user2?.filter(d=>d.email==user.email)
    // console.log(user3[0].status)
    if (user3[0]?.status=='Moderator') {
        // console.log("bg")
      return  children
        
    }
};

export default Moderator;