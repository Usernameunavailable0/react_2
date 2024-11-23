function Menu(props) {
    const {Menuinfo}= props;
    const {Text,Link}=Menuinfo;
    return ( 
        <a href={Link} class="text-gray-300 hover:text-white font-bold">{Text}</a>
     );
}

export default Menu;