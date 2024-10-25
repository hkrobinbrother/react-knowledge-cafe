import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4  border-b-2 mx-w-7xl ml-28 mr-28'>
            <h1 className='text-6xl font-bold '>Knowledge cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;