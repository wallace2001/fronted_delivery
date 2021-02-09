import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { SidebarLink } from '../../components/SubMenu';

export const SubMenu = ({ item, index }) => {
    const [subnav, setSubnav] = useState(false);
    const router = useRouter();

    const showSubnav = (e) => { 
        
        setSubnav(!subnav);
    }

    const nextPage = (e) => {
        e.preventDefault();
        const id = e.target.id;
        setSubnav(item.subNav && showSubnav);
        router.push(`${id}`);

      }
    return (
        <>
        <SidebarLink to={item.path} onClick={nextPage} id={item.path}>
            <SidebarLink.first>
                {item.icon}
                <SidebarLink.Label onClick={nextPage} id={item.path}>{item.title}</SidebarLink.Label>
            </SidebarLink.first>
        </SidebarLink>
        {subnav && item.subNav.map((item, index) => {
            return(
                <SidebarLink.DropDownLink to={item.path} id={item.path} key={index} onClick={nextPage}>
                    <SidebarLink.first>
                        {item.icon}
                        <SidebarLink.Label1 onClick={nextPage} id={item.path}>{item.title}</SidebarLink.Label1>
                    </SidebarLink.first>
                </SidebarLink.DropDownLink>
            );
        })}
        </>
    )
}
