import Link from "next/link"

const WillBeDeleted = () => {
    const links = [
        '/', '/treatments/effe/blog', '/treatments/hair-transplant', '/dashboard', '/test', '/auth/login', '/treatments/hair-transplant/adem-and-havva-medical-center?id=0'
    ]
  return (
    <div className="space-y-2 flex flex-col">
        {links.map(link => <Link className="text-black text-center" href={link}>{link}</Link>)}
    </div>
  )
}

export default WillBeDeleted