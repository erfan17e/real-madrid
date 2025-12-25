import { LuPhoneCall } from "react-icons/lu";
import { CgMail } from "react-icons/cg";
import { MdOutlineLocationOn } from "react-icons/md";

const FooterContactInfo = () => {
    return (
        <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-400">CONTACT US</h4>
            <div className="space-y-4">
                <div className="flex items-start">
                    <MdOutlineLocationOn className="size-6 mr-2.5 text-yellow-500" />
                    <span className="text-gray-400">
                        Avenida Concha Espina 1,<br />
                        28036 Madrid, Spain
                    </span>
                </div>
                <div className="flex items-center">
                    <LuPhoneCall className="size-5 mr-2.5 text-yellow-500" />
                    <span className="text-gray-400">+34 913 98 44 00</span>
                </div>
                <div className="flex items-center">
                    <CgMail className="size-6 mr-2.5 text-yellow-500" />
                    <span className="text-gray-400">info@realmadrid.com</span>
                </div>
            </div>
        </div>
    )
}

export default FooterContactInfo;