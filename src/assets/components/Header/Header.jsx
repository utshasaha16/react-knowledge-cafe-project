import profile from '../../images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between w-11/12 mx-auto items-center p-4 border-b-2'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />           
        </div>
    );
};

export default Header;