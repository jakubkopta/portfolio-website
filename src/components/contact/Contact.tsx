import {contactData, footerNavBarData, socialsData} from "./ContactData.tsx";
import SocialsItems from "./SocialsItems.tsx";
import ContactItems from "./ContactItems.tsx";
import FooterNavBar from "./FooterNavBar.tsx";

const Contact = () => {

    return (

        <div id="Contact">
            <div className="flex justify-center items-center gap-10 text-xl text-gray-600 font-bold bg-gray-600 border-t-2 border-b-2 border-gray-200 p-5">
                <div className="grid grid-cols-2 gap-x-5 gap-y-2 text-center md:flex md:flex-row md:gap-10">
                    {footerNavBarData.map((item, idx) => (
                        <FooterNavBar key={idx} name={item.name} link={item.link}/>
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-around items-center gap-10 p-20 relative lg:flex-row">
                <div className="bg-gray-600 absolute inset-0 z-[-1]"></div>
                <div className="flex flex-col items-center justify-between">
                    <p className="text-5xl text-gray-200 font-bold italic mb-10">
                        Get in Touch
                    </p>
                    <div>
                        <ol className="flex gap-5 relative">
                            {socialsData.map((item, idx) => (
                                <SocialsItems key={idx} link={item.link} icon={item.icon}/>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="flex flex-col gap-10 md:flex-row-reverse">
                    {contactData.map((item, idx) => (
                        <ContactItems key={idx} name={item.name} link={item.link} icon={item.icon}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;