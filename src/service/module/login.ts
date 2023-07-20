import qbRequset from "..";

export default function login(username: string, password: string) {
  qbRequset.post({
    url: "/login",
    data: {
      username,
      password,
    }
  })
}

