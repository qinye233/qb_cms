const maskEmail = (data: string) => {
  if(!data.includes("@")) return "邮件格式有误！"
  const tempArr = data.split("@")
  const lastInfo = tempArr[1].split(".")
  const maskData = tempArr[0].slice(0, 3) + handleStrMask(tempArr[1]) + "@"
                      + handleStrMask(lastInfo[0])  + "." +  lastInfo[1]
  return maskData
}

const  handleStrMask = (str: string) => {
  const maskStrArr = []
  for(let i = 0; i < str.length; i++) {
    maskStrArr.push("*")
  }
  return maskStrArr.join("")
}


export default maskEmail
