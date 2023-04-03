import {useRouter} from "next/router";
import {useUser} from "@auth0/nextjs-auth0";
import styled from "styled-components";
import {NavItems} from "../styles/NavStyles";

//reactIcons
import {BiUser} from "react-icons/bi";

export default function User({active}) {
    const route = useRouter();
    const {user, error, isLoading} = useUser();
    // Redirect to login page if user is not authenticated
    if (!user) {
        return (
            <NavItems onClick={() => route.push(`/api/auth/login`)}>
                <BiUser className="profile"/>
            </NavItems>
        );
    }
    // Show user profile
    return (
        <Profile onClick={() => route.push(`/profile`)}>
            <img src={user.picture} alt={user.name}/>
            {!active && <h3>{user.name}</h3>}
        </Profile>
    );
}

const Profile = styled.div`
  padding: 0;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  img {
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
  }

  h3 {
    padding: 0;
    margin: 0;
    line-height: 1.5rem;
  }
`;
