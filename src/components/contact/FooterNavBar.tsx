interface Props {
    name: string;
    link: string;
}

const FooterNavBar = ({name, link}: Props) => {

    return (
        <a href={link} className="text-gray-200 relative group">
            {name}
            <span className="h-[3px] w-[0%] bg-gray-200 rounded-xl absolute inset-x-0 bottom-0 group-hover:w-[100%] duration-300"></span>
        </a>
    )
}

export default FooterNavBar;