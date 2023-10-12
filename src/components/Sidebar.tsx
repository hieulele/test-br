import { signOut, useSession } from "next-auth/react";
import IconButton from "./IconButton";
import { HomeIcon, ServerStackIcon, BuildingLibraryIcon, PlusCircleIcon, HeartIcon, RssIcon } from "@heroicons/react/20/solid";

const Divider = () => <hr className="border-t-[0.1] border-gray-900"></hr>

export default function Sidebar() {
    const {data: session} = useSession();

    return (
    <div className="scrollbar-hidden text-gray-500 px-5 pt-5 pb-36 text-xs lg:text-sm border-r border-gray-900 h-screen overflow-y-scroll sm:max-w-[12rem] lg:max-w-[15rem] hidden md:block">
        <div className="space-y-4">
            {session?.user && <button onClick = {() => signOut()}>{session.user.name} - LogOut</button>}

            <IconButton icon={HomeIcon} lable='Home'/>
            <IconButton icon={ServerStackIcon} lable='ServerStackIcon'/>
            <IconButton icon={BuildingLibraryIcon} lable='BuildingLibraryIcon'/>
            
            <Divider />

            <IconButton icon={PlusCircleIcon} lable='PlusCircleIcon'/>
            <IconButton icon={HeartIcon} lable='HeartIcon'/>
            <IconButton icon={RssIcon} lable='RssIcon'/>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        </div>
    </div>
    )
}