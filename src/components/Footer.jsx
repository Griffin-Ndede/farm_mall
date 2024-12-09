import AnchorLink from "react-anchor-link-smooth-scroll"
import { FaFacebook } from "react-icons/fa"
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6"

function Footer() {
  return (
    <>
        <section className=" h-1/4">
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center -mx-5 -my-2">
                    <div className="px-5 py-2">
                        <AnchorLink href="#home" className="text-base leading-6  hover:text-custom-green">
                            About
                        </AnchorLink>
                    </div>
                    <div className="px-5 py-2">
                        <AnchorLink href="#calculator" className="text-base leading-6  hover:text-custom-green">
                            Calculator
                        </AnchorLink>
                    </div>
                    {/* <div className="px-5 py-2">
                        <a href="#" className="text-base leading-6  hover:text-custom-green">
                            Team
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#" className="text-base leading-6  hover:text-custom-green">
                            Pricing
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#" className="text-base leading-6  hover:text-custom-green">
                            Contact
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#" className="text-base leading-6  hover:text-custom-green">
                            Terms
                        </a>
                    </div> */}
                </div>
                <div className="flex justify-center mt-8 space-x-6">
    <a href="#">
        <FaFacebook className="text-3xl hover:text-custom-green"/>
    </a>
    <a href="#">
        <FaSquareInstagram className="text-3xl hover:text-custom-green"/>
    </a>
    <a href="#">
       <FaXTwitter className="text-3xl hover:text-custom-green"/>
    </a>
</div>
<p className="mt-8 text-sm font-light leading-6 text-center ">
    © 2024 FarmMall, Inc. All rights reserved.
</p>

            </div>
        </section>
    </>
  )
}

export default Footer
