import { useEffect, useState } from "react";
import { CardContainer, CardImage, Content, LinksContainer } from "./styles"
import { getUserData } from "../../services/api";
import { Building, GithubLogo, SignOut, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";


interface UserData {
  avatar_url: string;
  name: string;
  html_url: string;
  login: string;
  location: string;
  followers: number;
  bio: string;
  // Add other properties if needed
}

export const Card = () => {

  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    getUserData().then((data) => setUserData(data))
  }, [])

  return (
    <CardContainer>
      <CardImage src={userData?.avatar_url} alt="Avatar" />
      <Content>
        <div>
          <h1>{userData?.name}</h1>
          {userData?.html_url && (
            <Link to={userData.html_url} target="_blank">
              <span>
                GITHUB
              </span>
              <SignOut weight="fill" />
            </Link>
          )}
        </div>
        <div>
          <p>{userData?.bio}</p>
        </div>
        <LinksContainer>
          <div>
            <GithubLogo weight="fill" />
            <span>
              {userData?.login}
            </span>
          </div>
          <div>
            <Building weight="fill" />
            <span>
              {userData?.location}
            </span>
          </div>
          <div>
            <User weight="fill" />
            <span>
              {userData?.followers}
              seguidores
            </span>
          </div>
        </LinksContainer>
      </Content>
    </CardContainer>

  )
}