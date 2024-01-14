import { Envelope, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"


const Footer = () => {
  return (
    <div className="h-20 bg-slate-50 px-8 py-4 flex justify-around items-center gap-8 opacity-75">
      <div className="w-1/2">
        ₢ 2023 Copyright <span className="font-bold">Claudio Santos</span>
      </div>
      <div className="flex justify-end gap-8 w-1/2">
        <button><InstagramLogo /></button>
        <button><GithubLogo /></button>
        <button><LinkedinLogo /></button>
        <button><Envelope /></button>
      </div>
    </div>
  )};

  export default Footer ;