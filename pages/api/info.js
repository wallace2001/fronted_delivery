import { FaHamburger, FaCandyCane, FaHome } from 'react-icons/fa';
import { BiFoodMenu, BiMoney, BiPhone } from 'react-icons/bi';
import { AiOutlineStar, AiOutlineTeam } from 'react-icons/ai';

export const SidebarData = [
    {
        title: 'HOME',
        path: '/',
        icon: <FaHome />
    },
    
    {
        title: 'CARDÁPIO',
        icon: <BiFoodMenu />,
        subNav:[{

            title: "HAMBURGUERS",
            path: '/burguer',
            icon: <FaHamburger color="#fff" />
        },

        {
            title: "SOBREMESA",
            path: '/dessert',
            icon: <FaCandyCane color="#fff" />
        }
        ]
    },

    {
        title: 'PROMOÇÃO',
        path: '/promo',
        icon: <BiMoney />
    },

    {
        title: 'CONTATO',
        path: '/contact',
        icon: <BiPhone />
    },

    {
        title: 'AVALIAÇÃO',
        path: '/evaluation',
        icon: <AiOutlineStar />
    },

    {
        title: 'SOBRE',
        path: '/about',
        icon: <AiOutlineTeam />
    },

];